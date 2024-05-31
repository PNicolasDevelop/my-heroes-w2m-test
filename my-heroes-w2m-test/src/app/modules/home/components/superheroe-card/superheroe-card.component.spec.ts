import { SupheroeCardComponent } from './superheroe-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SupheroeCardComponent', () => {
  let component: SupheroeCardComponent;
  let fixture: ComponentFixture<SupheroeCardComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupheroeCardComponent],
      imports: [],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupheroeCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
