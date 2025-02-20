// src/app/services/temperaturas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RootObject } from '../interfaces/temperatura';



@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  // Método para obtener todas las autonomías (solo objeto source)


  // Método adicional para obtener todos los datos
  getAllData(): Observable<RootObject> {
    return this.http.get<RootObject>('assets/temperaturas.json');
  }
}