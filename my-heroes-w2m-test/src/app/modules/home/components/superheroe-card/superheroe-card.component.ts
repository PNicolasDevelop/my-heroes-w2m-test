import { Component, Input } from '@angular/core';
import { Hero } from '../../models/models';

@Component({
  selector: 'app-supheroe-card',
  templateUrl: './superheroe-card.component.html',
  styleUrls: ['./superheroe-card.component.scss'],
})
export class SupheroeCardComponent {
  @Input({ required: true }) hero!: Hero;
}
