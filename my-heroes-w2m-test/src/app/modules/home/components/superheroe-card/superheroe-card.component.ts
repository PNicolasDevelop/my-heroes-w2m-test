import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero, QuestionModalConfigData } from '../../models/models';
import { SuperheroesService } from '../../services/superheroes.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionModalComponent } from '../modals/question/question.modal';
import { catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supheroe-card',
  templateUrl: './superheroe-card.component.html',
  styleUrls: ['./superheroe-card.component.scss'],
})
export class SupheroeCardComponent {
  constructor(
    private api: SuperheroesService,
    private dialog: MatDialog,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  @Input({ required: true }) hero!: Hero;
  @Output() removed = new EventEmitter<number>();
  removeHero(id: number) {
    const dataModal: QuestionModalConfigData = {
      title: '¿Desea eliminar el superhéroe?',
    };
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      width: '300px',
      data: dataModal,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.api
          .deleteHero(id)
          .pipe(
            map(data => ({ success: true, data: data, error: null })),
            catchError(error => {
              return of({
                success: false,
                data: undefined,
                error: JSON.parse(error.response),
              });
            })
          )
          .subscribe(val => {
            if (val.success) {
              this.removed.emit(id);
            } else {
              this.toastrService.error('Error al eliminar el superhéroe');
            }
          });
      }
    });
  }

  editHero(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
