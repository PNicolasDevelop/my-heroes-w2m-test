import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';
import { FilterHeroes, Hero } from '../../models/models';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  listHeroes!: Hero[];
  constructor(
    private api: SuperheroesService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  observable: Observable<void | Hero[]> = of(void 0);
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.observable = this.api.getHeroes().pipe(
      tap(list => {
        if (list !== undefined) {
          this.listHeroes = list;
        }
      }),
      catchError(() => {
        this.toastrService.error('Error al obtener los datos');
        return of(void 0);
      })
    );
  }

  filterData(data: FilterHeroes) {
    this.observable = this.api.filterHeroes(data).pipe(
      tap(list => {
        if (list !== undefined) {
          this.listHeroes = list;
        }
      }),
      catchError(() => {
        this.toastrService.error('Error al obtener los datos');
        return of(void 0);
      })
    );
  }

  filterList(id: number) {
    this.listHeroes = this.listHeroes.filter((hero: Hero) => hero.id !== id);
  }

  navigateToCreate() {
    this.router.navigate(['create']);
  }
}
