import { Component } from '@angular/core';
import { NavbarComponent } from "../dashboard/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
