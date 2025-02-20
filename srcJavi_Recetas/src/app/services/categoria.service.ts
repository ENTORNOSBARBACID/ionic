import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/ICategorias';
import { RecetaRootObject } from '../interfaces/IRecetas';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(public http: HttpClient, private router: Router) { }

  // Método getAutonomias que retorna solo el objeto 'source' de cada autonomía
  public getCategorias(): Observable<RootObject> {
   return this.http.get<RootObject>('assets/data/categorias.json');
 }

 public getRecetas(): Observable<RecetaRootObject>{
  return this.http.get<RecetaRootObject>('assets/data/recetas.json');
 }
}
