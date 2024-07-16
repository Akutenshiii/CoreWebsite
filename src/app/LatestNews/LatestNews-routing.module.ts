import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestNewsPage } from './LatestNews.page';

const routes: Routes = [
  {
    path: '',
    component: LatestNewsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LatestNewsPageRoutingModule {}
