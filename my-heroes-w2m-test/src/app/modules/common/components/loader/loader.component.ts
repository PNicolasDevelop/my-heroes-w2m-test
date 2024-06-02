import {
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

enum Status {
  FIRSTLOAD = 'firstload',
  ERROR = 'error',
  OKAY = 'okay',
}

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnChanges, OnDestroy {
  private _subscription?: Subscription;
  status = Status.FIRSTLOAD;
  loading = true;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() observable?: Observable<any>;
  @ContentChild('content') content!: TemplateRef<never>;
  @ContentChild('error') error?: TemplateRef<never>;

  ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['observable']) {
      return;
    }

    const change = changes['observable'];

    // insignificant change, current and previous observable are the same
    if (change.previousValue === change.currentValue) {
      return;
    }

    // observable is different, unsubscribe from the previous if needed
    this._subscription?.unsubscribe();

    // no new observable means no subscription to perform, display content
    if (change.previousValue && !change.currentValue) {
      setTimeout(() => {
        // TODO: remove, only for demo purposes
        this.loading = false;
        this.status = Status.OKAY;
        return;
      }, 1000);
    }

    this.loading = true;

    this._subscription = changes['observable'].currentValue.subscribe(
      () => {
        setTimeout(() => {
          // TODO: remove, only for demo purposes
          this.status = Status.OKAY;
          this.loading = false;
        }, 1000);
      },
      () => {
        setTimeout(() => {
          // TODO: remove, only for demo purposes
          this.status = Status.ERROR;
          this.loading = false;
        }, 1000);
      }
    );
  }

  protected readonly Status = Status;
}
