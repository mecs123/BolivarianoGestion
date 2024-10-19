import { Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { MainComponent } from './main/main.component';
import { NotasComponent } from './notas/notas.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudianteComponent } from './estudiante/estudiante.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'docente', component:DocenteComponent},
  { path: 'estudiante', component:EstudianteComponent}

];

