import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-create-edit-hero-container',
  templateUrl: './create-edit-hero-container.component.html',
  styleUrls: ['./create-edit-hero-container.component.scss'],
})
export class CreateEditHeroContainerComponent {
  @ContentChild('form') form!: TemplateRef<never>;
  @ContentChild('form') buttons!: TemplateRef<never>;
}
