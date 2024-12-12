import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRwdGNvZGUiLCJhIjoiY20yajNyM2wxMDFoaDJqc2I4dG5keXAzaCJ9.qIRLrPbj_pGnE0QzjbwkUw';

@Component({
  selector: 'app-zoom-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: mapboxgl.Map;

  ngAfterViewInit(): void {

    if ( !this.divMap ) throw new Error('The divMap element is not found');

    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListeners();
  }

  mapListeners() {
     if ( !this.map ) throw new Error('The map is not found');

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });
  }
}

