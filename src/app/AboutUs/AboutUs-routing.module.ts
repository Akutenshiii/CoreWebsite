import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPage } from './AboutUs.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsPageRoutingModule {}
