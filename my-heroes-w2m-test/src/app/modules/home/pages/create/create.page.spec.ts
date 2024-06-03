import { CreatePageComponent } from './create.page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async, of } from 'rxjs';
import { QuestionModalComponent } from '../../components/modals/question/question.modal';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

describe('CreatePage', () => {
  let component: CreatePageComponent;
  let fixture: ComponentFixture<CreatePageComponent>;
  let mockToastrService: jasmine.SpyObj<ToastrService>;
  const apiServiceMock = {
    addHero: () => of({}),
  };
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    mockToastrService = jasmine.createSpyObj('ToastrService', [
      'error',
      'success',
    ]);
    await TestBed.configureTestingModule({
      declarations: [CreatePageComponent],
      imports: [],
      providers: [
        {
          provide: SuperheroesService,
          useValue: apiServiceMock,
        },
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: mockToastrService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageComponent);
    component = fixture.componentInstance;
  });

  it('should create page', () => {
    expect(component).toBeTruthy();
  });

  it('saveHero', () => {
    component.saveHero();
    expect(component).toBeTruthy();
  });
});
