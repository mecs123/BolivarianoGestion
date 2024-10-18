import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule, // Asegúrate de que sea un módulo válido
    ReactiveFormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

//Rol: Componente hijo.
//Responsabilidades:
//Contiene el botón "Toggle Menu" que el usuario puede presionar para alternar la visibilidad
// del sidebar.
//Emite un evento utilizando @Output() cuando se hace clic en el botón,
//informando al componente padre que debe cambiar el estado del sidebar.

  @Output() toggle = new EventEmitter<void>(); // Evento que se emitirá al hacer clic

  clickEvent(): void {
    this.toggle.emit(); // Emitir el evento
  }
}
