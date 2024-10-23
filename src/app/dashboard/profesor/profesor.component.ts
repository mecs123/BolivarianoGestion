import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Educador } from '../../interfaces/educador';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { ProfesorService } from '../../services/profesor.service';
import { InicioComponent } from "../inicio/inicio.component";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink, RouterLinkWithHref, RouterLinkActive,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatPaginator,
    InicioComponent,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent implements OnInit {

  listEducador: Educador []=[];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['position', 'nombre', 'correo', 'estado', 'acciones'];

   //Para paginar
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  ngOnInit(): void {
    this.cargarEducadores();
  }

  docenteService = inject(ProfesorService)

  eliminarDocente(index: number){
    this.docenteService.elminarEducador(index);
    this.cargarEducadores();

  }






  cargarEducadores(){
    this.listEducador = this.docenteService.getEducador();
    if(this.listEducador.length <=0){
      this.showNodata();
    }
    this.dataSource = new MatTableDataSource(this.listEducador);

  }

  showNodata(){
    Swal.fire({
      title: 'No hay educadores',
      text: 'La lista de educadores está vacía.',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  }


  //Para paginar
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
