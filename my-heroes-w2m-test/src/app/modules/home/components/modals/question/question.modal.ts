import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionModalConfigData } from '../../../models/models';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question.modal.html',
  styleUrls: ['./question.modal.scss'],
})
export class QuestionModalComponent {
  constructor(
    public dialogRef: MatDialogRef<QuestionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuestionModalConfigData
  ) {}

  close() {
    this.dialogRef.close();
  }
}
