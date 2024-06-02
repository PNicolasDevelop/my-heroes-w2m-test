import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComicCompany } from '../../models/models';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() filterData = new EventEmitter();
  filterForm = new FormGroup({
    name: new FormControl<string | null>(null),
  });

  constructor() {
    this.filterForm.valueChanges
      .pipe(takeUntilDestroyed(), debounceTime(500))
      .subscribe(newValue => {
        this.filterData.emit(newValue);
      });
  }
}
