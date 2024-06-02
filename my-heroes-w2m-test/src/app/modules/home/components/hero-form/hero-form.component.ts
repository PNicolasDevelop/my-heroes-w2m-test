import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComicCompany } from '../../models/models';

@Component({
  selector: 'app-hero-formulary',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  @Input() form!: FormGroup;
  comicCompanies = Object.keys(ComicCompany).map(key => ({
    key,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore no problem
    value: ComicCompany[key],
  }));
}
