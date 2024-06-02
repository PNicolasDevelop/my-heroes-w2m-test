import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-create-edit-hero-container',
  templateUrl: './create-edit-hero-container.component.html',
  styleUrls: ['./create-edit-hero-container.component.scss'],
})
export class CreateEditHeroContainerComponent {
  @Input({ required: true }) title!: string;
  @ContentChild('actions') actions!: TemplateRef<never>;
  @ContentChild('form') form!: TemplateRef<never>;
  @ContentChild('buttons') buttons!: TemplateRef<never>;
}
