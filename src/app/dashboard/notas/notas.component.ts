import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [
    RouterLink,RouterLinkWithHref, RouterLinkActive
  ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {

}
