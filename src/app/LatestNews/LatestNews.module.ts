import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LatestNewsPage } from './LatestNews.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LatestNewsPageRoutingModule } from './LatestNews-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LatestNewsPageRoutingModule
  ],
  declarations: [LatestNewsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LatestNewsPageModule {}
