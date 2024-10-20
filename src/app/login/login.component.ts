
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports:
  [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',

})
export class LoginComponent {

  //Declaracion de variables
  loading:boolean=false;
  //Variables para Angular Material
  private _snackBar = inject(MatSnackBar);
  durationInSeconds = 5;
  //Variables de navegacion
  private router = inject(Router); // Inyecta el Router

  //Formularios reactivos
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      user:['',Validators.required],
      password:['',Validators.required],
    })

  }

  //ingresa a la aplicacion
  ingresar(){
    const user = this.form.value.user
    const pass = this.form.value.password
    console.log(user)
    console.log(pass)


    if(user=='123' && pass=="123"){
      //Redirecciona al dasboard
    this.fakeTimeOutLoading()
    this.form.reset(); // Corrige esto

    }else{
      //Muestra mensaje de error

      this.error()
      this.form.reset(); // Corrige esto
    }
  }

  //error
  error(){
    this._snackBar.open('Usuario o Contraseña no son correctos','X',{
      duration: this.durationInSeconds * 1000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  fakeTimeOutLoading(){
    this.loading=true;
    console.log(this.loading)
    setTimeout(()=>{
      //Redirecciona al home logeado
      this.router.navigate(['dashboard'])

       this.loading=false;
    },1000)

  }

}
