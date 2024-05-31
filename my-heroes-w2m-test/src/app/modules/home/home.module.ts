import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list/list-page.component';
import { CreatePage } from './pages/create/create.page';
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

const PAGES = [ListPageComponent, CreatePage];
const COMPONENTS = [SupheroeCardComponent, FilterComponent];
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
        component: CreatePage,
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
  ],
  providers: [SuperheroesService],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
