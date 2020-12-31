import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { circle, divIcon, latLng, marker, tileLayer } from 'leaflet';
import { MarkerService } from '../../services/markers/marker.service';
import "leaflet.animatedmarker/src/AnimatedMarker";
import { LoadProjectsAction } from '../../store/actions/project.action';
import { AppState } from '../../models/app-state.model';
import { Store } from '@ngrx/store';
import { AutoUnsubscribe } from 'take-while-alive';
import { SocketService } from '../../services/socket/socket.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

@AutoUnsubscribe()
export class GuideComponent implements AfterViewInit, OnInit {
  animatedMarker;

  redCircleIcon = divIcon({
    className: 'center',
    html: '<div class="plot"><img src="https://cdn.jsdelivr.net/gh/terra819/animated-meetup-map@master/src/assets/redcircle.png" height="50" width="50"></div>',
  });

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 7,
    center: latLng(33.38055, 35.18597)
  };
  json: any;
  layers = [];
  meetups: any;
  playing = false;
  interval: any;
  playerDate = new Date('4/3/2019');
  map = L.map;
  polylinePoints: any = [];



  constructor(
    public http: HttpClient,
    private markerService: MarkerService,
    private store$: Store<AppState>,
    private socketService: SocketService
    ) { }

  ngOnInit() {
 this.socketService.setupSocketConnection();
    this.store$.dispatch(new LoadProjectsAction(""));
    this.store$.select('projectState').subscribe((state => {
      if(state.features.length != 0){
            
         console.log('state here not empty', state.features)     
         this.moveMarker(state.features)
      }
 
      //

  
    }
    )
    )
  }

  ngAfterViewInit(): void {

    this.map = L.map("map").setView([33.38055, 35.18597], 8);


    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    },
    ).addTo(this.map);

    // this.markerService.moveMarker(this.map)

    this.onMapReady(this.map)




  }



  play() {
    this.playing = true;
    console.log('started')

    this.animatedMarker.start();

    // this.options.layers.push(marker([33.38055, 35.18597], { icon: this.redCircleIcon }));


  }

  stop() {
    this.playing = false;
    this.layers = [];
    clearInterval(this.interval);
    this.playerDate = new Date('4/3/2019');
  }

  plot() {
    for (let meetup of this.meetups['features'][0]['geometry']['coordinates']) {
      const date1 = new Date(meetup.date);
      meetup.map((x) => {
        console.log('mmmmmmmmmm', x)
        this.layers.push(marker([x[0], x[1]], { icon: this.redCircleIcon }));
      })



    }
    this.playerDate = new Date(
      this.playerDate.getFullYear(),
      this.playerDate.getMonth(),
      this.playerDate.getDate() + 1);
  }

  onMapReady(map: L.Map) {
    // this.map = map;

    this.http.get("../../../../assets/dataGeo.json").subscribe((json: any) => {
      console.log('jsonnn', json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });

    // this.markerService.moveMarker(map);

    // L.geoJSON(json).addTo(map);
    // L.marker([33.38055, 35.18597], this.markerIcon).addTo(map);
    // Create three markers and set their icons to cssIcon
    // L.marker([33.38055, 35.18597], this.animatedCircleIcon).addTo(map);



  }

  moveMarker(res) {

  
      for (const c of res.features[2].geometry.coordinates[0]) {
        const lat = c[0];
        const lon = c[1];
        // this.i = this.i + 1
     //  console.log('mareksrs ', c)
        const marker = L.circleMarker([lon, lat], {
          radius: 50
        }).addTo(this.map);

        this.polylinePoints.push([lon, lat])

      }

      const line = L.polyline(this.polylinePoints,

        {
          color: "green",
          weight: 50
        }
      ).addTo(this.map);


      console.log('polylinePoints', this.polylinePoints)
      this.animatedMarker = L.animatedMarker(line.getLatLngs(), {
        autoStart: false,
        icon
      });
      this.map.addLayer(this.animatedMarker);

      const group = new L.featureGroup([this.animatedMarker]);

      this.map.fitBounds(group.getBounds());
    //  this.animatedMarker.start();
  



  }




}

