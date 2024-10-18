import { CommonModule } from '@angular/common';
import { Component,Input  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,RouterLinkWithHref, RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() status: boolean = false;
// Recibe el estado desde el componente padre osea el appcomponet
//que controla la aplcacion
//Rol: Componente hijo.
//Responsabilidades:
//Muestra el menú lateral de la aplicación.
//Recibe el estado de visibilidad (status) desde el componente padre mediante @Input().
//Cambia su apariencia (visible/oculto) según el estado recibido.


}
