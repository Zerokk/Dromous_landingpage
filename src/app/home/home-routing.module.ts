import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOneComponent } from './versions/home-one/home-one.component';
import { HomeTwoComponent } from './versions/home-two/home-two.component';
import { HomeThreeComponent } from './versions/home-three/home-three.component';
import { TermsOfServiceComponent } from './termsofuse/terms-of-service.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: HomeOneComponent
  },
  {
    path: 'tos',
    component: TermsOfServiceComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
