import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsPage } from './ContactUs.page';

const routes: Routes = [
  {
    path: '',
    component: ContactUsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsPageRoutingModule {}
