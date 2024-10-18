import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesorComponent } from './profesor/profesor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    SidebarComponent,
    MainComponent,
    MenuComponent,
    ReactiveFormsModule,
    ProfesorComponent
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
