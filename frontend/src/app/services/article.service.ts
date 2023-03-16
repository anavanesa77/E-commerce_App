import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  endPoint = "http://localhost:8080/api/article";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getArticles() {
    // VANESA, esta sería una de las maneras en las que se podría controlar el acceso asecciones de la web
    // const token = localStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    // return this.httpClient.get(this.endPoint, { headers: headers } );

    //Finalmente me decanté por crear una utilidad (contenida en Utils) la cual gestionará el token

    return this.httpClient.get(this.endPoint);
  }

  getArticle(id: any): Observable<any> {
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }

  getCollection(collection: any): Observable<any> {
    return this.httpClient.get(`${this.endPoint}/${collection}`);
  }

  createArticles(article, blob) {
    let formData = new FormData();
    formData.append("name", article.name);
    formData.append("price", article.price);
    formData.append("collection", article.collection);
    formData.append("size", article.size);
    formData.append("colour", article.colour);
    formData.append("amount", article.amount);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  updateArticle(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.endPoint}/${id}`, data);
  }
  deleteArticle(id: any): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.endPoint);
  }
}
