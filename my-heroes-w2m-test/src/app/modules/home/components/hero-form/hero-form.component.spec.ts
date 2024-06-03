import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroFormComponent } from './hero-form.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComicCompany, HeroFormControls} from '../../models/models';

describe('HeroFormComponent', () => {
  let component: HeroFormComponent;
  let fixture: ComponentFixture<HeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroFormComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFormComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup<HeroFormControls>({
      name: new FormControl(''),
      creation_year: new FormControl(0),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
      company: new FormControl(null),
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
