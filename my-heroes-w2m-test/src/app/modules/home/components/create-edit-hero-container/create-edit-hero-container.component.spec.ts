import { CreateEditHeroContainerComponent } from './create-edit-hero-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'rxjs';

describe('CreateEditHeroContainerComponent', () => {
  let component: CreateEditHeroContainerComponent;
  let fixture: ComponentFixture<CreateEditHeroContainerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEditHeroContainerComponent],
      imports: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditHeroContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
