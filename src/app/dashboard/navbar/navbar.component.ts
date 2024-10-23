import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../interfaces/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  public menuService = inject(MenuService)


  ngOnInit(): void {
    this.cargarMenu();

  }

  cargarMenu(){
    this.menuService.getMenu().subscribe(
      data =>{
        console.log(data)
      }
    )
  }



}
