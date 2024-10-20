import { Routes } from '@angular/router';
import { EstudianteComponent } from './dashboard/estudiante/estudiante.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard-routing.module').then(m => m.DashboardRoutingModule) },
  { path: 'estudiante', component: EstudianteComponent },
  { path: '**', redirectTo: 'login' }

];

