import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '' , loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'test' , loadChildren: './dashboard/dashboard.module#DashboardModule'},
// { path:'jenkin' , loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path:'test1' , loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  { path:'test2' , loadChildren:'./dashboard/dashboard.module#DashboardModule'}

  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
