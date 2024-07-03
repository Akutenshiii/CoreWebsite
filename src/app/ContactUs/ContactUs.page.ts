import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'app/google-maps.service';

@Component({
  selector: 'app-ContactUs',
  templateUrl: './ContactUs.page.html',
  styleUrls: ['./ContactUs.page.scss']
})
export class ContactUsPage {
  @ViewChild('CoreConsultMap') 
  set CoreConsultMap(ref: ElementRef<HTMLElement>) {
    if (ref) {
      this.googleMapsService.createMap(ref.nativeElement);
    }
  }

  constructor(private googleMapsService: GoogleMapsService) {}
}