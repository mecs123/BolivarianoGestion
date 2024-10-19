import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
     MatIconModule,
     MatCardModule,
     FormsModule,
     MatSelectModule,
     MatSlideToggleModule,
     MatDividerModule,
     MatButtonModule

    ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {


  estudiante = {
    identificacion: '',
    nombre: '',
    curso: '',
    estado: false
  };

  cursos: string[] = ['Angular', 'React', 'Java', 'Python']; // Puedes personalizar esta lista

  guardarEstudiante(){
        // Aquí puedes manejar el guardado del estudiante
        console.log('Estudiante guardado:', this.estudiante);
  }
  consultarEstudiante() {


  }

}
