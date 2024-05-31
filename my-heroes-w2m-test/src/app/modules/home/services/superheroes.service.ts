import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/models';
/* istanbul ignore file */
@Injectable()
export class SuperheroesService {
  private apiUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  addHero(hero: Hero): Observable<any> {
    return this.http.post(this.apiUrl, hero);
  }

  updateHero(id: number, hero: Hero): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, hero);
  }
}
