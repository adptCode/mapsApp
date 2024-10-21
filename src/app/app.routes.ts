import { Routes } from '@angular/router';
import { MapsLayoutComponent } from './maps/layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './maps/pages/full-screen-page/full-screen-page.component';
import { ZoomPageComponent } from './maps/pages/zoom-page/zoom-page.component';
import { MarkersPageComponent } from './maps/pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './maps/pages/properties-page/properties-page.component';

export const routes: Routes = [
  {
    path: 'maps',
    component: MapsLayoutComponent,
    children: [
      //{ path: '', component: MapsLayoutComponent },
      { path: 'fullscreen', component: FullScreenPageComponent },
      { path: 'zoom-range', component: ZoomPageComponent },
      { path: 'markers', component: MarkersPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  },
  {
    path: '**',
    redirectTo: 'maps'
  }
];
