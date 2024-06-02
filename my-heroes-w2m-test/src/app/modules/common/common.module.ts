import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const COMPONENTS = [LoaderComponent];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [],
  exports: [COMPONENTS],
})
export class CommonAppModule {}
