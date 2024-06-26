import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OurServicePage } from './OurService.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OurServicePageRoutingModule } from './OurService-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OurServicePageRoutingModule
  ],
  declarations: [OurServicePage]
})
export class OurServicePageModule {}
