import { Routes } from '@angular/router';
import { ProfesorComponent } from './profesor/profesor.component';
import { MainComponent } from './main/main.component';
import { NotasComponent } from './notas/notas.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'notas', component: NotasComponent }

];

