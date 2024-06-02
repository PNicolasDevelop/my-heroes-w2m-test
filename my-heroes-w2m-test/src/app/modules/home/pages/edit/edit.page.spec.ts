import { EditPageComponent } from './edit.page';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async, of } from 'rxjs';
import { SuperheroesService } from '../../services/superheroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

describe('EditPage', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;
  let mockActivatedRoute: any;
  let mockToastrService: jasmine.SpyObj<ToastrService>;
  const apiServiceMock = {
    updateHero: () => of({}),
    getHeroById: () =>
      of({
        id: 1,
        name: 'Superman',
        creation_year: 1938,
        imageUrl: 'superman.jpg',
        description: 'Man of Steel',
        company: 'DC',
      }),
  };
  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    mockToastrService = jasmine.createSpyObj('ToastrService', [
      'error',
      'success',
    ]);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (param: string) => '1', // Mock ActivatedRoute to return a hero ID
        },
      },
    };
    await TestBed.configureTestingModule({
      declarations: [EditPageComponent],
      imports: [],
      providers: [
        {
          provide: SuperheroesService,
          useValue: apiServiceMock,
        },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ToastrService, useValue: mockToastrService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('editHero', () => {
    component.editHero();
    expect(component).toBeTruthy();
  });
});
