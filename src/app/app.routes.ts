import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { TermsOfServiceComponent } from './home/termsofuse/terms-of-service.component';
export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 /* {
    path: 'demo',
    component: DemoComponent
  },*/
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren:  () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: '**',
    redirectTo: 'home/one'
  }
];

