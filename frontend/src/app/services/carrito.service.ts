import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {


  endPoint = "http://localhost:8080/api/carrito";
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getCarritos() {
    return this.httpClient.get(this.endPoint);
  }

  getCarrito(id: any): Observable<any> {
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }

  createCarrito(article, blob) {
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

  deleteCarrito(id: any): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}/${id}`);

  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.endPoint);
  }

//  findByCollection(collection: any): Observable<Carrito[]> {
//    return this.httpClient.get<Carrito[]>(`${this.endPoint}?title=${collection}`);
//  }

}


