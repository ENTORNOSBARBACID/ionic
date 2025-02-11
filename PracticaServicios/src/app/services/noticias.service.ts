import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/INoticias';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getNoticias(): Observable<RootObject> {
    return this.http.get<RootObject>(
      'https://newsapi.org/v2/top-headlines?category=general&apiKey=3741e291464d48a8bb9b767000567611&country=us'
    );
  }
}
