import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list/list-page.component';
import { CreatePageComponent } from './pages/create/create.page';
import { SupheroeCardComponent } from './components/superheroe-card/superheroe-card.component';
import { QuestionModalComponent } from './components/modals/question/question.modal';
import { SuperheroesService } from './services/superheroes.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { FilterComponent } from './components/filter/filter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateEditHeroContainerComponent } from './components/create-edit-hero-container/create-edit-hero-container.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { EditPageComponent } from './pages/edit/edit.page';
import { CommonAppModule } from '../common/common.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const PAGES = [ListPageComponent, CreatePageComponent, EditPageComponent];
const COMPONENTS = [
  SupheroeCardComponent,
  FilterComponent,
  CreateEditHeroContainerComponent,
  HeroFormComponent,
];
const MODALS = [QuestionModalComponent];

@NgModule({
  declarations: [PAGES, COMPONENTS, MODALS],
  imports: [
    RouterModule.forChild([
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: 'create',
        component: CreatePageComponent,
      },
      {
        path: 'edit/:id',
        component: EditPageComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ]),
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatGridListModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    CommonAppModule,
    ToastrModule,
  ],
  providers: [SuperheroesService],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
