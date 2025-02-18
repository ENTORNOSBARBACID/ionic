import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/interfaz/icategoria';
import { RootObjectDos } from 'src/app/interfaz/icomida';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {

  constructor(private http:HttpClient) { }

  getCategorias():Observable<RootObject>{
    return this.http.get<RootObject>("/assets/data/categorias.json");
  }

  getComida():Observable<RootObjectDos>{
    return this.http.get<RootObjectDos>("/assets/data/recetas.json");
  }
}
