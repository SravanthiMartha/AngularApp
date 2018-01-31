import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes, {useHash: true});