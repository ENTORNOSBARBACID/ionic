import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilibro } from '../interfaz/ilibro';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  constructor(private http: HttpClient) {}

  getLibros(): Observable<Ilibro[]> {
    return this.http.get<Ilibro[]>('../../assets/data/Libros.json');
  }
}
