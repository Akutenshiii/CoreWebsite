import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamPage } from './OurTeam.page';

const routes: Routes = [
  {
    path: '',
    component: OurTeamPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurTeamPageRoutingModule {}
