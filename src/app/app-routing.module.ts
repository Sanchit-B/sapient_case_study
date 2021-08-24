import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerseComponent } from './e-commerse/e-commerse.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';

const routes: Routes = [
  {
    path: 'floating-banner', component: FloatingBannerComponent
  },
  {
    path: 'e-commerse', component: ECommerseComponent
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'counter-service',
    loadChildren: () => import('./counter-service/counter-service.module').then(m => m.CounterServiceModule)
  },
  {
    path: 'dynamic-data',
    loadChildren: () => import('./dynamic-data/dynamic-data.module').then(m => m.DynamicDataModule)
  },
  {
    path: '', pathMatch: "full", redirectTo: 'floating-banner'
  },
  {
    path: '**', pathMatch: "full", redirectTo: 'floating-banner'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
