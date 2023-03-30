import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { append, remove, reset, text } from '../appender.actions';

@Component({
  selector: 'app-my-appender',
  templateUrl: './my-appender.component.html',
})
export class MyAppenderComponent {
  write$: Observable<string>;

  constructor(private store: Store<{ write: string }>) {
    this.write$ = store.select('write');
  }

  append() {
    this.store.dispatch(append());
  }

  remove() {
    this.store.dispatch(remove());
  }

  reset() {
    this.store.dispatch(reset());
  }

  text() {
    this.store.dispatch(text());
  }
}
