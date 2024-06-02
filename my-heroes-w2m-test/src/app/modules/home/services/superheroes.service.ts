import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { FilterHeroes, Hero, HeroWrite } from '../models/models';
/* istanbul ignore file */
@Injectable()
export class SuperheroesService {
  private apiUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`);
  }
  filterHeroes(filters: FilterHeroes) {
    return this.http.get<Hero[]>(
      `${this.apiUrl}?name_like=${filters.name ?? ''}`
    );
  }

  addHero(hero: HeroWrite): Observable<any> {
    // return this.http.post(this.apiUrl, hero);
    return this.getHeroes().pipe(
      map(superheroes => {
        const maxId = superheroes.reduce(
          (max, hero) => (hero.id > max ? hero.id : max),
          0
        );
        hero.id = maxId + 1;
        return hero;
      }),
      switchMap(newSuperhero => this.http.post<any>(this.apiUrl, newSuperhero))
    );
  }

  updateHero(id: number, hero: HeroWrite): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
