import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';
import { FilterHeroes, Hero } from '../../models/models';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  listHeroes!: Hero[];
  constructor(private api: SuperheroesService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api
      .getHeroes()
      .pipe(
        map(data => ({ success: true, data: data, error: null })),
        catchError(error => {
          return of({
            success: false,
            data: undefined,
            error: JSON.parse(error.response),
          });
        })
      )
      .subscribe(val => {
        if (val.success) {
          this.listHeroes = val.data ?? [];
        }
      });
  }

  filterData(data: FilterHeroes) {
    this.api
      .filterHeroes(data)
      .pipe(
        map(data => ({ success: true, data: data, error: null })),
        catchError(error => {
          return of({
            success: false,
            data: undefined,
            error: JSON.parse(error.response),
          });
        })
      )
      .subscribe(val => {
        if (val.success) {
          this.listHeroes = val.data ?? [];
        }
      });
  }

  filterList(id: number) {
    this.listHeroes = this.listHeroes.filter((hero: Hero) => hero.id !== id);
  }
}
