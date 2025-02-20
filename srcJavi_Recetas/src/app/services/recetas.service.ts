import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/ICategorias';
import { RecetaRootObject } from '../interfaces/IRecetas';


@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(public http: HttpClient, private router: Router) { }


 public getRecetas(): Observable<RecetaRootObject>{
  return this.http.get<RecetaRootObject>('assets/data/recetas.json');
 }
}