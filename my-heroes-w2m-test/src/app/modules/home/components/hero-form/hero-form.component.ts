import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComicCompany, HeroFormControls } from '../../models/models';

@Component({
  selector: 'app-hero-formulary',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  @Input() form!: FormGroup<HeroFormControls>;
  protected readonly ComicCompany = ComicCompany;
}
