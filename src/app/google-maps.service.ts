import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GoogleMap } from '@capacitor/google-maps';

const apiKey = 'AIzaSyDoip3tI9lGgV8dpsZM6R6ZhS3r31JpfN4';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private map: GoogleMap | null = null;

  constructor() {}

  async createMap(ref: HTMLElement): Promise<void> {
    this.map = await GoogleMap.create({
      id: 'my-map',
      element: ref,
      apiKey: apiKey,
      config: {
        center: {
          lat: -25.764569305854913,
          lng: 28.27879723187273,
        },
        zoom: 15,
      },
      forceCreate: true
    });

    // Add a marker to the map
    this.map.addMarker({
      title: "Core Consultants",
      coordinate: {
        lat: -25.764569305854913,
        lng: 28.27879723187273,
      }
    });

    this.map.setOnMarkerClickListener((marker) => {
      Browser.open({url: `https://www.google.com/maps/place/Core+Consultants+Inc/@-25.7646817,28.2762038,17z/data=!3m1!4b1!4m6!3m5!1s0x1e956117f9621055:0xbeca9e5a35b60aa1!8m2!3d-25.7646817!4d28.2787787!16s%2Fg%2F11tx7kjwx7?entry=ttu&query_place_id=ChIJlWY1ajv8eR4RY31pH5TXRiQ`});
    });
  }
}
