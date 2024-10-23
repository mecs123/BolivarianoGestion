import { Component } from '@angular/core';
import { NavbarComponent } from "../dashboard/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MatToolbarModule
  ],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
