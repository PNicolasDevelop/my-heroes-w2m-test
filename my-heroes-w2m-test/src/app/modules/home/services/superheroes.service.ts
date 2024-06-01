import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilterHeroes, Hero } from '../models/models';
/* istanbul ignore file */
@Injectable()
export class SuperheroesService {
  private apiUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  filterHeroes(filters: FilterHeroes) {
    let params = new HttpParams();
    if (filters.name) params = params.append('name', filters.name);
    if (filters.type) params = params.append('company', filters.type);
    if (filters.creation)
      params = params.append('creation_year', filters.creation);

    return this.http.get<Hero[]>(`${this.apiUrl}`, { params });
  }

  addHero(hero: Hero): Observable<any> {
    return this.http.post(this.apiUrl, hero);
  }

  updateHero(id: number, hero: Hero): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
