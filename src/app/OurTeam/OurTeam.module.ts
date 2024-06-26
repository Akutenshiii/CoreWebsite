import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OurTeamPage } from './OurTeam.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OurTeamPageRoutingModule } from './OurTeam-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OurTeamPageRoutingModule
  ],
  declarations: [OurTeamPage]
})
export class OurTeamPageModule {}
