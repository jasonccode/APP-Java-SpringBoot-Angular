import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { CardModel } from '../models/CardModel';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  URL_API: string = environment.API_CARD;
  constructor(private httpClient: HttpClient) {}

  getCards(): Observable<CardModel[]> {
    return this.httpClient
      .get<CardModel[]>(this.URL_API + '/list')
      .pipe(map((res) => res));
  }

  saveCard(request: any): Observable<any> {
    return this.httpClient
      .post<any>(this.URL_API + '/save', request)
      .pipe(map((resp) => resp));
  }

  updateCard(request: any): Observable<any> {
    return this.httpClient
      .post<any>(this.URL_API + '/update', request)
      .pipe(map((resp) => resp));
  }

  deleteCard(id: number): Observable<any> {
    return this.httpClient
      .get<any>(this.URL_API + '/delete/' + id)
      .pipe(map((resp) => resp));
  }
}
