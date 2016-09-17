import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterActions } from './actions/counter-actions';


@Component({
  selector: 'app-root',
  providers: [ CounterActions ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TWIN TOWERS';

  counter$: Observable<{}>;

  constructor(
    private store: Store<any>,
    private actions: CounterActions
  ) {
    this.counter$ = store.select('counter');
  }
}
