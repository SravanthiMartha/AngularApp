import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {loginRoutes} from './login/login.routing';
import {dashboardRoutes} from './dashboard/dashboard.routing';
export const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    ...loginRoutes,
    ...dashboardRoutes
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
  