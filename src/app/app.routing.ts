import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {loginRoutes} from './login/login.routing';
export const routes: Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    ...loginRoutes,
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
  