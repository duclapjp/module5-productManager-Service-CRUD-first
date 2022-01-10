
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('googleMap', { static: true })
  googleMapRef: ElementRef | undefined;

  // Will contain the reference of rendered map instance
  // @ts-ignore
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {

    // @ts-ignore

    // @ts-ignore
    const mapOptions: google.maps.MapOptions = {
      // Centered to Hyderabad, India
      center: new google.maps.LatLng(21.0356157, 105.768227),
      zoom: 15,
    };

    // @ts-ignore
    this.map = new google.maps.Map(this.googleMapRef.nativeElement, mapOptions);
  }

}

