import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComicCompany, Hero, HeroFormControls } from '../../models/models';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroesService } from '../../services/superheroes.service';
import { catchError, map, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPageComponent implements OnInit {
  heroForm: FormGroup<HeroFormControls> = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    creation_year: new FormControl<number | null>(null, Validators.required),
    imageUrl: new FormControl<string | null>(null, Validators.required),
    description: new FormControl<string | null>(null, Validators.required),
    company: new FormControl<ComicCompany | null>(null, Validators.required),
  });
  heroId!: number;
  hero!: Hero;
  constructor(
    private router: Router,
    private api: SuperheroesService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.heroId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') ?? ''
    );

    this.api
      .getHeroById(this.heroId)
      .pipe(
        map(data => ({ success: true, data: data, error: null })),
        catchError(error => {
          return of({
            success: false,
            data: null,
            error: JSON.parse(error.response),
          });
        })
      )
      .subscribe(val => {
        if (val.success) {
          if (val.data) this.setValue(val.data);
        } else {
          this.toastrService.error('Error al obtener los datos del superhéroe');
          this.heroForm.disable();
        }
      });
  }

  navegateToList() {
    this.router.navigate(['/list']);
  }

  editHero() {
    this.api
      .updateHero(this.heroId, {
        id: this.heroId,
        description: this.heroForm.controls.description.value ?? '',
        creation_year: this.heroForm.controls.creation_year.value ?? 0,
        imageUrl: this.heroForm.controls.imageUrl.value ?? '',
        name: this.heroForm.controls.name.value ?? '',
        company: this.heroForm.controls.company.value ?? ComicCompany.DC,
      })
      .pipe(
        map(data => ({ success: true, data: data, error: null })),
        catchError(error => {
          return of({
            success: false,
            data: null,
            error: JSON.parse(error.response),
          });
        })
      )
      .subscribe(val => {
        if (val.success) {
          this.toastrService.success('SuperHeroe editado con éxito');
          this.navegateToList();
        } else {
          this.toastrService.error('Error al editar el superhéroe');
        }
      });
  }

  private setValue(data: Hero) {
    this.heroForm.patchValue(data);
  }
}
