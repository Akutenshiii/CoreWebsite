import { register } from 'swiper/element/bundle';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMapsService } from './google-maps.service';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('MainMap') 
  set MainMap(ref: ElementRef<HTMLElement>) {
    if (ref) {
      this.googleMapsService.createMap(ref.nativeElement);
    }
  }

  constructor(private googleMapsService: GoogleMapsService) {}
}
