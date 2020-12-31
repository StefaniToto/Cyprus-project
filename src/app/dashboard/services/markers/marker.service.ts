import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { auditTime, delay, delayWhen, retryWhen, skip, takeUntil, tap, timeInterval } from 'rxjs/operators';
import * as L from '../../../../../node_modules/leaflet';
import { takeWhileAlive } from "take-while-alive";
import 'rxjs/Rx';
import { PopupService } from '../popup/popup.service';
import "leaflet.animatedmarker/src/AnimatedMarker";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const markerIcon = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    // specify the path here
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarkerService {



  capitals: string = '/assets/dataGeo.json';
  animatedMarker;
  line: any;
  polylinePoints: any = [];
  // private ngUnsubscribe = new Subject();
  constructor(private http: HttpClient,

    private popupService: PopupService) { }
  i = 1;

  makeCapitalMarkers(map: L.map): void {

    let httpGet$ = this.http.get(this.capitals);

    httpGet$.pipe(
      // skip(3)
    ).map((res: any) => {
      console.log('mareksrs ', res)
      for (const c of res.features[2].geometry.coordinates[0]) {


        const lat = c[0];
        const lon = c[1];
        this.i = this.i + 1
        console.log('mareksrs ', this.i)
        const marker = L.marker([lon, lat]).addTo(map);
        // return marker;

      }

    })
      .subscribe(result => console.log('rrrrrrrrrrrrrrrrr', result));

  }



  makeCapitalCircleMarkers(map: L.map): void {
    this.http.get(this.capitals).subscribe((res: any) => {

      // Find the maximum population to scale the radii by.
      const maxVal = Math.max(...res.features.map(x => x.properties.population), 0);

      for (const c of res.features[2].geometry.coordinates[0]) {

        console.log('makeCapitalCircleMarkers ', c)
        const lat = c[0];
        const lon = c[1];
        // const circle = L.circleMarker([lon, lat], {
        //   radius: MarkerService.ScaledRadius(c, 20)
        // }); //.addTo(map); <-- removed this
        const circle = L.circleMarker([lon, lat]).addTo(map);
        circle.bindPopup(this.popupService.makeCapitalPopup(c));

        circle.addTo(map);
      }
    });
  }

  static ScaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }



  moveMarker(map: L.map) {

    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features[2].geometry.coordinates[0]) {
        const lat = c[0];
        const lon = c[1];
        this.i = this.i + 1
        // console.log('mareksrs ', this.i)
        const marker = L.circleMarker([lon, lat], {
          radius: 20
        }).addTo(map);

        this.polylinePoints.push([lon, lat])

      }

      const line = L.polyline(this.polylinePoints,

        {
          color: "green",
          weight: 10
        }
      ).addTo(map);


      console.log('polylinePoints', this.polylinePoints)
      this.animatedMarker = L.animatedMarker(line.getLatLngs(), {
        autoStart: false,
        icon
      });
      map.addLayer(this.animatedMarker);

      const group = new L.featureGroup([this.animatedMarker]);

      map.fitBounds(group.getBounds());
      this.animatedMarker.start();

    });




  }



}
