import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComicCompany } from '../../models/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filterData = new EventEmitter();
  filterForm = new FormGroup({
    name: new FormControl<string | null>(null),
    type: new FormControl<ComicCompany | null>(null),
    creation: new FormControl<number | null>(null),
  });
  comicCompanies = Object.keys(ComicCompany).map(key => ({
    key,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore no problem
    value: ComicCompany[key],
  }));

  search() {
    this.filterData.emit(this.filterForm.getRawValue());
  }

  resetFilter() {
    this.filterForm.reset();
    this.filterData.emit(this.filterForm.getRawValue());
  }
}
