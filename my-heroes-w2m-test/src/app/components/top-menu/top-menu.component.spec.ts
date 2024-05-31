import { TopMenuComponent } from './top-menu.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopMenuComponent],
      imports: [],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
