import { DashboardComponent } from 'app/Dashboard-Form/dashboard.component';
import { LoginComponent } from 'app/Login-Form/login.component';

export const ContactRoutes = [
  { path: 'dashboard', component: DashboardComponent }
  ,{ path: '', component: LoginComponent }
];