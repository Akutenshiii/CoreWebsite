import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicePage } from './OurService.page';

const routes: Routes = [
  {
    path: '',
    component: OurServicePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServicePageRoutingModule {}
