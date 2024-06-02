import { SupheroeCardComponent } from './superheroe-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SuperheroesService } from '../../services/superheroes.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';

describe('SupheroeCardComponent', () => {
  let component: SupheroeCardComponent;
  let fixture: ComponentFixture<SupheroeCardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  const apiServiceMock = {
    deleteHero: () => of({}),
  };

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    await TestBed.configureTestingModule({
      declarations: [SupheroeCardComponent],
      imports: [ToastrModule.forRoot()],
      providers: [
        {
          provide: SuperheroesService,
          useValue: apiServiceMock,
        },
        {
          provide: MatDialog,
          useValue: mockDialog,
        },
        { provide: Router, useValue: routerSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupheroeCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call editHero and navigate to edit route', () => {
    const heroId = 1;
    component.editHero(heroId);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/edit', heroId]);
  });

  it('removeHero', () => {
    const id = 1;
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    const dialogRefResult = of(true);
    dialogRefSpy.afterClosed.and.returnValue(dialogRefResult);
    mockDialog.open.and.returnValue(dialogRefSpy);
    spyOn(component.removed, 'emit');

    component.removeHero(id);
  });
});
