import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () => import('../Home/Home.module').then(m => m.HomePageModule)
      },
      {
        path: 'AboutUs',
        loadChildren: () => import('../AboutUs/AboutUs.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'OurTeam',
        loadChildren: () => import('../OurTeam/OurTeam.module').then(m => m.OurTeamPageModule)
      },
      {
        path: 'OurService',
        loadChildren: () => import('../OurService/OurService.module').then(m => m.OurServicePageModule)
      },
      {
        path: 'ContactUs',
        loadChildren: () => import('../ContactUs/ContactUs.module').then(m => m.ContactUsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
