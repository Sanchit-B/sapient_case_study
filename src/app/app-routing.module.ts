import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerseComponent } from './e-commerse/e-commerse.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';

const routes: Routes = [
  {
    path: 'floating-banner',
    canActivate: [AuthGuard],
    component: FloatingBannerComponent
  },

  {
    path: 'e-commerse', component: ECommerseComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'operators',
    loadChildren: () => import('../app/operators/operators.module').then(m => m.OperatorsModule)
  },
  {
    path: 'counter',
    canDeactivate: [CanDeactivateGuard],
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
    path: 'dynamic-component',
    loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule)
  },
  {
    path: '', pathMatch: "full", redirectTo: 'dashboard'
  },
  {
    path: '**', pathMatch: "full", redirectTo: 'floating-banner'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
