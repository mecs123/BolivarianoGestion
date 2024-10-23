import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';
import { apiServer } from './apiServices';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private ApiUrl:string = apiServer.serverUrl;
  private URL = 'assets/data/menu.json';
  public http = inject(HttpClient);

  getMenu():Observable<Menu[]> {
    return this.http.get<Menu[]>('./././')
  }
}
