import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from 'src/app/interface/ilugar';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  constructor(private http: HttpClient) {}
  getlugar(): Observable<RootObject> {
    return this.http.get<RootObject>('/assets/data/temperaturas.json');
  }
}
