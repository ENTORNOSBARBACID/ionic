import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/INoticias';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  lNoticias: Article[]=[];
  categories : string[] =['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  categoria:string="";
  
  constructor(private http:HttpClient, private snoticias:NoticiasService) {
    this.getNews();
  }
  ngOnInit(): void {
    console.log(this.snoticias.getNoticias());
    this.snoticias.getNoticias().subscribe(
     datos=>{datos.articles.forEach(a=>{this.lNoticias.push(a)})}
    )
  }
  getNews() {
    const apiKey = '026d825ed05f40f68c723cfff5cb2972';
    const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us&category=${this.categoria}`;
    
    this.http.get(url).subscribe((response: any) => {
      this.lNoticias = response.articles;
    });
  }

  changeCategory() {
    this.getNews(); // Llamar de nuevo a la API cuando cambie la categoría
  }
}
