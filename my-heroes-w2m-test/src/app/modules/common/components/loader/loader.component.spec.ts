import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader.component';
import { of, throwError } from 'rxjs';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    component.ngOnChanges({});
    component.ngOnChanges({
      observable: {
        previousValue: null,
        currentValue: of(true),
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    component.ngOnChanges({
      observable: {
        previousValue: null,
        currentValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    component.ngOnChanges({
      observable: {
        previousValue: of(true),
        currentValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    });
    component.ngOnChanges({
      observable: {
        previousValue: null,
        currentValue: throwError(() => new Error('test')),
        firstChange: true,
        isFirstChange: () => true,
      },
    });

    expect(component).toBeTruthy();
  });
});
