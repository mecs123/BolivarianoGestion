import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
status!: boolean;
clickEvent() {
throw new Error('Method not implemented.');
}

}
