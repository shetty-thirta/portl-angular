import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortlDashboardComponent } from './portl-dashboard/portl-dashboard.component';
import { PortlUserProfileComponent } from './portl-user-profile/portl-user-profile.component';
import { PortlLoginComponent } from './portl-login/portl-login.component';

;

export const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'portl-login', component: PortlLoginComponent },
  { path: 'portl-dashboard', component: PortlDashboardComponent},
  { path:'portl-profile', component: PortlUserProfileComponent}
];
