import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComicCompany } from '../../models/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filterForm = new FormGroup({
    name: new FormControl<string | null>(null),
    type: new FormControl<ComicCompany | null>(null),
  });
}
