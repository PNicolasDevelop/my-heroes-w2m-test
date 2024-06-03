import { ListPageComponent } from './list-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicCompany, Hero } from '../../models/models';
import { SuperheroesService } from '../../services/superheroes.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockToastrService: jasmine.SpyObj<ToastrService>;
  //Mocks
  const listHero: Hero[] = [
    {
      id: 4,
      name: 'wonder woman',
      description:
        'Wonder Woman, an Amazonian warrior princess, embodies truth, compassion, and strength. With her divine powers and Lasso of Truth, she fights for peace and justice in a world of gods and monsters. sdfsdf',
      creation_year: 1945,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      company: ComicCompany.Marvel,
    },
    {
      id: 6,
      name: 'iron man',
      creation_year: 1963,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      description:
        'Iron Man, also known as Tony Stark, is a billionaire genius who fights crime using his high-tech armored suit. With his intellect and resources, he defends the world from technological threats.',
      company: ComicCompany.Marvel,
    },
    {
      id: 7,
      name: 'hulk',
      creation_year: 1962,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      description:
        'The Hulk, a gamma-powered behemoth, is a force of nature fueled by rage. Despite his immense strength, he struggles with inner turmoil, constantly battling to control the monster within.',
      company: ComicCompany.Marvel,
    },
  ];

  const listHeroFiltered: Hero[] = [
    {
      id: 4,
      name: 'wonder woman',
      description:
        'Wonder Woman, an Amazonian warrior princess, embodies truth, compassion, and strength. With her divine powers and Lasso of Truth, she fights for peace and justice in a world of gods and monsters. sdfsdf',
      creation_year: 1945,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      company: ComicCompany.Marvel,
    },
  ];

  const apiServiceMock = {
    getHeroes: () => of(listHero),
    filterHeroes: () => of(listHeroFiltered),
  };

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    mockToastrService = jasmine.createSpyObj('ToastrService', [
      'error',
      'success',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [],
      providers: [
        {
          provide: SuperheroesService,
          useValue: apiServiceMock,
        },
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: mockToastrService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getData', () => {
    component.getData();
    expect(component).toBeTruthy();
  });

  it('filterData', () => {
    component.filterData({ name: 'wo' });
    expect(component).toBeTruthy();
  });

  it('filterList', () => {
    component.listHeroes = listHero;
    component.filterList(4);
    expect(component.listHeroes).toHaveSize(2);
  });

  it('navigateToCreate', () => {
    component.navigateToCreate();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['create']);
  });
});
