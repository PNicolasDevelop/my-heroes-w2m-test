import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [
        ReactiveFormsModule,
        MatExpansionModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce form value changes by 500 milliseconds', done => {
    spyOn(component.filterData, 'emit');
    const input = fixture.debugElement.query(By.css('input'));

    input.nativeElement.value = 'Test';
    input.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    setTimeout(() => {
      expect(component.filterData.emit).toHaveBeenCalledWith({ name: 'Test' });
      done();
    }, 600);
  });
});
