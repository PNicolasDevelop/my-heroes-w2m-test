import { ListPageComponent } from './list-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicCompany, Hero } from '../../models/models';
import { SuperheroesService } from '../../services/superheroes.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  //Mocks
  const listHero: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      creation_year: 1938,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      best_powers: ['Flight', 'Superhuman strength', 'Heat vision'],
      creator: 'Jerry Siegel and Joe Shuster',
      archenemy: 'Lex Luthor',
      description:
        'Superman, also known as the Man of Steel, is a symbol of hope and justice. He possesses incredible powers, including flight, super strength, and heat vision, making him one of the most powerful beings on Earth.',
      company: ComicCompany.DC,
    },
    {
      id: 2,
      name: 'Batman',
      creation_year: 1939,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      best_powers: [
        'Superior intelligence',
        'Master martial artist',
        'Advanced technology',
      ],
      creator: 'Bob Kane and Bill Finger',
      archenemy: 'Joker',
      description:
        'Batman, the Dark Knight, is a vigilante who fights crime in Gotham City. Despite lacking superpowers, he relies on his intellect, combat skills, and high-tech gadgets to combat evil and protect his city.',
      company: ComicCompany.DC,
    },
    {
      id: 3,
      name: 'Spider-Man',
      creation_year: 1962,
      imageUrl:
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/spider-man-1876543.jpg?tf=3840x',
      best_powers: ['Spider sense', 'Superhuman agility', 'Web-slinging'],
      creator: 'Stan Lee and Steve Ditko',
      archenemy: 'Green Goblin',
      description:
        'Spider-Man, also known as Peter Parker, gained his powers after being bitten by a radioactive spider. With his spider-like abilities, he swings through the streets of New York, fighting crime and saving innocent lives.',
      company: ComicCompany.DC,
    },
  ];

  const apiServiceMock = {
    getHeroes: () => of(listHero),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [],
      providers: [
        {
          provide: SuperheroesService,
          useValue: apiServiceMock,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
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
});
