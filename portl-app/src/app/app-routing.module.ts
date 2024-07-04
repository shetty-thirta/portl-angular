import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortlDashboardComponent } from './portl-dashboard/portl-dashboard.component';
import { PortlUserProfileComponent } from './portl-user-profile/portl-user-profile.component';
import { AppComponent } from './app.component';
import { PortlLoginComponent } from './portl-login/portl-login.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'portl-login', component: PortlLoginComponent },
  { path: 'portl-dashboard', component: PortlDashboardComponent },
  { path:'portl-profile', component: PortlUserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[PortlDashboardComponent, PortlUserProfileComponent]

})
export class AppRoutingModule { }