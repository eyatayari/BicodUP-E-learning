import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: 'admin', 
  component: DashboardComponent,
  //canActivate:[AdminGuard],
children:[{
  path:'profile',
  component: ProfileComponent,
},{
  path:'',
  component: WelcomeComponent,
},

]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
