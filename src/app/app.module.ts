import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter-reducer';
import { Counter } from './components/counter-component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Counter
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer}),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
