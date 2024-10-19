import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainComponent } from "./main/main.component";

import { ReactiveFormsModule } from '@angular/forms';
import { ProfesorComponent } from './profesor/profesor.component';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    MainComponent,
    ReactiveFormsModule,
    ProfesorComponent,
    FooterComponent,
    NavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BolivarianoGestion';




  status: boolean = false; // Inicialmente el sidebar es visible

  clickEvent(): void {
    this.status = !this.status; // Cambia el estado del sidebar
  }
}
