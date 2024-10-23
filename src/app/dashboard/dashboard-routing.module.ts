import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from '../dashboard/inicio/inicio.component';
import { NotasComponent } from '../dashboard/notas/notas.component';
import { EstudianteComponent } from '../dashboard/estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CrearProfesorComponent } from './profesor/crear-profesor/crear-profesor.component';

const routes: Routes = [

  {
    path: '', component: DashboardComponent,

    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Redirección automática
      { path: 'inicio', component: InicioComponent },
      {path:'educador',component:ProfesorComponent},
      { path: 'crear-educador', component: CrearProfesorComponent },
      { path: 'notas', component: NotasComponent },
      { path: 'estudiante', component: EstudianteComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
