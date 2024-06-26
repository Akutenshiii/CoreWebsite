import { Component, ElementRef, ViewChild } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GoogleMap } from '@capacitor/google-maps';

const apiKey = 'AIzaSyDoip3tI9lGgV8dpsZM6R6ZhS3r31JpfN4';

@Component({
  selector: 'app-ContactUs',
  templateUrl: 'ContactUs.page.html',
  styleUrls: ['ContactUs.page.scss']
})

export class ContactUsPage {
  @ViewChild('CoreConsultMap')
  set CoreConsultMap(ref: ElementRef<HTMLElement>) {
      this.createMap(ref.nativeElement);
  }

  constructor() {}

  async createMap(ref: HTMLElement) {    
    const map = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: ref, // reference to the capacitor-google-map element
      apiKey: apiKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map,
          lat: -25.764569305854913,
          lng: 28.27879723187273,
        },
        zoom: 15, // The initial zoom level to be rendered by the map
      },
      forceCreate: true
    });

    // Add a marker to the map
    map.addMarker({
      title:"Core Consultants",
      coordinate: {
        lat: -25.764569305854913,
        lng: 28.27879723187273,
      }
    });

    map.setOnMarkerClickListener((marker) => {
      Browser.open({url: `https://www.google.com/maps/place/Core+Consultants+Inc/@-25.7646817,28.2762038,17z/data=!3m1!4b1!4m6!3m5!1s0x1e956117f9621055:0xbeca9e5a35b60aa1!8m2!3d-25.7646817!4d28.2787787!16s%2Fg%2F11tx7kjwx7?entry=ttu&query_place_id=ChIJlWY1ajv8eR4RY31pH5TXRiQ`})
    })
  }
}
