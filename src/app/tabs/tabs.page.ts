import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  spin = false;

  constructor() {
    setTimeout(() => {
      this.spin = true;
      setTimeout(() => {
        this.spin = false; // Remove the class after the animation completes if desired
      }, 1000); // Duration of the animation in milliseconds
    }, 0);
  }
}
