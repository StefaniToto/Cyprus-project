import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { circle, divIcon, latLng, marker, tileLayer } from 'leaflet';
import "leaflet.animatedmarker/src/AnimatedMarker";
import { LoadProjectsAction } from '../../store/actions/project.action';
import { AppState } from '../../models/app-state.model';
import { Store } from '@ngrx/store';
import { AutoUnsubscribe } from 'take-while-alive';
import { SocketService } from '../../services/socket/socket.service';
import { PopupService } from '../../services/popup/popup.service';

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
  dataLoop: any;
  playing: boolean = false;
  interval: any;
  map = L.map;
  polylinePoints: any = [];
  stateData: { features: any; };



  constructor(
    public http: HttpClient,
    private store$: Store<AppState>,
    private socketService: SocketService,
    private popupService: PopupService
  ) { }

  ngOnInit() {
    this.socketService.setupSocketConnection();
    this.store$.dispatch(new LoadProjectsAction(""));
    this.store$.select('projectState').subscribe((state => {
      if (state.features.length != 0) {
        this.stateData = state
        console.log('state here not empty', state.features)
        this.moveMarker(state.features)
        this.makeCapitalCircleMarkers(state.features)

      }
    }))
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
    this.onMapReady(this.map)
  }


  play() {
    this.playing = true;
    this.animatedMarker.start();
  }

  stop() {
    this.animatedMarker.stop();
    this.playing = false;
    this.layers = [];
    clearInterval(this.interval);
  }


  onMapReady(map: L.Map) { 
      L.geoJSON(this.stateData).addTo(map);
  }

  moveMarker(res) {
    for (const c of res.features[2].geometry.coordinates[0]) {
      const lat = c[0];
      const lon = c[1];
      const marker = L.circleMarker([lon, lat], {
        radius: 20
      }).addTo(this.map);
      this.polylinePoints.push([lon, lat])
    }

    const line = L.polyline(this.polylinePoints,
      {
        color: "green",
        weight: 15
      }
    ).addTo(this.map);
    this.animatedMarker = L.animatedMarker(line.getLatLngs(), {
      autoStart: false,
      icon
    });
    this.map.addLayer(this.animatedMarker);
    const group = new L.featureGroup([this.animatedMarker]);
    this.map.fitBounds(group.getBounds());
  }


  makeCapitalCircleMarkers(res): void {
    for (const c of res.features[2].geometry.coordinates[0]) {
      const lat = c[0];
      const lon = c[1];
      const circle = L.circleMarker([lon, lat]).addTo(this.map);
      circle.bindPopup(this.popupService.makeCapitalPopup(c));
      circle.addTo(this.map);
    };
  }




}

