import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComicCompany } from '../../models/models';
import { Router } from '@angular/router';
import { SuperheroesService } from '../../services/superheroes.service';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePageComponent {
  heroForm = new FormGroup({
    name: new FormControl<string | undefined>(undefined, Validators.required),
    creation_year: new FormControl<number | undefined>(
      undefined,
      Validators.required
    ),
    imageUrl: new FormControl<string | undefined>(
      undefined,
      Validators.required
    ),
    description: new FormControl<string | undefined>(
      undefined,
      Validators.required
    ),
    company: new FormControl<ComicCompany | undefined>(
      undefined,
      Validators.required
    ),
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
