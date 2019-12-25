import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { HistoryComponent } from './history/history.component';
// import { JenkinComponent } from '../jenkin/jenkin.component';
import { History2Component } from '../history2/history2.component';
import { History3Component } from '../history3/history3.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'test', component: HistoryComponent },
    //  { path:'jenkin' , component: JenkinComponent },
      { path:'test1' , component: History2Component },
      { path:'test2' , component: History3Component }
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
