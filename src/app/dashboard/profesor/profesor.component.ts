import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,RouterLinkWithHref, RouterLinkActive
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent implements OnInit {

  miFormulario: FormGroup;
  constructor(private fb: FormBuilder){
    // Inicializa el formulario reactivo con validaciones
    this.miFormulario= this.fb.group({
      nombre:['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }
  ngOnInit(): void {

  }

  esCampoInvalido(campo: string): boolean {
    const control = this.miFormulario.get(campo);
    // Verifica si control no es null/undefined y luego valida las propiedades
    /*
    /!! (doble negación): Esto convierte el valor a booleano de forma segura.
    Si control es null o undefined, se asegura de que el resultado sea false.
    Si existe, convierte el valor de la expresión en true o false de manera explícita.
    */

    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  obtenerErrorCorreo() {
    const control = this.miFormulario.get('correo');
    if(control?.errors?.['required']){
      return 'El correo es obligatorio.';
    }else if (control?.errors?.['email']) {
      return 'Por favor, ingresa un correo válido.';
    }
    return '';
  }
  onSubmit() {
    if(this.miFormulario.valid){
      Swal.fire({
        title: 'Éxito!',
        text: 'Profesor creado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      console.log('Formulario valido',this.miFormulario.valid);
    }else{
      console.log('Formulario invalido');
      this.miFormulario.markAllAsTouched();
    }
  }

}
