import { AppConfig } from './../config/app.config';
import { Component, computed, Inject, inject, model, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import Swal from 'sweetalert2';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-docente',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: 'AppConfig', useValue: AppConfig }  // Proveedor para AppConfig
  ],
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatTabsModule,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
    // Propiedad para controlar la expansión de los panels
    panelOpenState: boolean[] = [false, false, false]; // Inicializa en false para cada panel


  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentCurso = model('');  // Para manejo del input actual
  readonly currentMateria = model('');  // Para manejo del input actual
  readonly cursos = signal<string[]>([]);  // Declarar la señal para cursos
  readonly materias = signal<string[]>([]);  // Declarar la señal para materias
  readonly allCursos: string[] = AppConfig.cursos;  // Inicializar allCursos con los valores de AppConfig
  readonly allMaterias: string[] = AppConfig.materias;  // Inicializar allMaterias con los valores de AppConfig

  constructor(@Inject('AppConfig') private appConfig: any) {}

  ngOnInit(): void {
    this.cursos.set([]);
    this.materias.set([]); // Inicializa las materias al cargar el componente

    // Obtener los cursos desde AppConfig y establecerlos en la señal
    const appCursos = this.appConfig.cursos;
    if (appCursos && appCursos.length > 0) {
      this.cursos.set([appCursos[0]]);  // Iniciar con el primer curso
    }

    // Obtener las materias desde AppConfig y establecerlas en la señal
    const appMaterias = this.appConfig.materias;
    if (appMaterias && appMaterias.length > 0) {
      this.materias.set([]); // Inicializa como un array vacío
    }
  }

  // Filtrar cursos
  readonly filteredCursos = computed(() => {
    const currentCursoValue = this.currentCurso().toLowerCase();
    return currentCursoValue
      ? this.allCursos.filter(curso => curso.toLowerCase().includes(currentCursoValue))
      : this.allCursos.slice();
  });

  // Filtrar materias
  readonly filteredMaterias = computed(() => {
    const currentMateriaValue = this.currentMateria().toLowerCase();
    return currentMateriaValue
      ? this.allMaterias.filter(materia => materia.toLowerCase().includes(currentMateriaValue)) // Cambié allCursos a allMaterias
      : this.allMaterias.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  // Agregar un curso a la lista
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.cursos.update(cursos => [...cursos, value]);  // Añadir nuevo curso
    }
    this.currentCurso.set('');  // Limpiar el input
  }

  // Eliminar un curso de la lista
  remove(curso: string): void {
    this.cursos.update(cursos => {
      const index = cursos.indexOf(curso);
      if (index >= 0) {
        cursos.splice(index, 1);  // Quitar el curso
        this.announcer.announce(`Removed ${curso}`);  // Notificar la eliminación
      }
      return [...cursos];  // Retornar una nueva copia de la lista
    });
  }

  // Seleccionar un curso del autocomplete
  selected(event: MatAutocompleteSelectedEvent): void {
    this.cursos.update(cursos => [...cursos, event.option.viewValue]);
    this.currentCurso.set('');  // Limpiar el input después de seleccionar
    event.option.deselect();
  }

  // Agregar una materia a la lista
  addMateria(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.materias.update(materias => [...materias, value]);  // Añadir nueva materia
    }
    this.currentMateria.set('');  // Limpiar el input
  }

  // Eliminar una materia de la lista
  removeMateria(materia: string): void {
    this.materias.update(materias => {
      const index = materias.indexOf(materia); // Cambié cursos a materias
      if (index >= 0) {
        materias.splice(index, 1);  // Quitar la materia
        this.announcer.announce(`Removed ${materia}`);  // Notificar la eliminación
      }
      return [...materias];  // Retornar una nueva copia de la lista
    });
  }

  // Seleccionar una materia del autocomplete
  selectedMateria(event: MatAutocompleteSelectedEvent): void {
    this.materias.update(materias => [...materias, event.option.viewValue]); // Cambié curso a materias
    this.currentMateria.set('');  // Limpiar el input después de seleccionar
    event.option.deselect();
  }


  ///Guarda la informacion
  guardar() {

    Swal.fire({
      title: 'Éxito!',
      text: 'Docente guardado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

  }


  // Manejo de pasos en el componente
  step = signal(0);

  setStep(index: number) {
    this.step.set(index);
  }

  nextStep() {
    this.step.update(i => i + 1);
  }

  prevStep() {
    this.step.update(i => i - 1);
  }

  // Limpiar cursos y materias en OnDestroy
  ngOnDestroy() {
    this.cursos.set([]);  // Reiniciar la lista de cursos
    this.materias.set([]); // Reiniciar la lista de materias
  }
}
