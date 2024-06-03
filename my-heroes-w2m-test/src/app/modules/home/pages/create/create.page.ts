import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComicCompany, HeroFormControls } from '../../models/models';
import { Router } from '@angular/router';
import { SuperheroesService } from '../../services/superheroes.service';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePageComponent {
  heroForm: FormGroup<HeroFormControls> = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    creation_year: new FormControl<number | null>(null, Validators.required),
    imageUrl: new FormControl<string | null>(null, Validators.required),
    description: new FormControl<string | null>(null, Validators.required),
    company: new FormControl<ComicCompany | null>(null, Validators.required),
  });
  constructor(
    private router: Router,
    private api: SuperheroesService
  ) {}

  saveHero() {
    this.api
      .addHero({
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
          this.navegateToList();
        } else {
          console.log('error'); // SACAR ERROR
        }
      });
  }

  navegateToList() {
    this.router.navigate(['/list']);
  }
}
