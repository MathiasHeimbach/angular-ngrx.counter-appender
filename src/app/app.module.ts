import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { appenderReducer } from './appender.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MyAppenderComponent } from './my-appender/my-appender.component';

@NgModule({
  declarations: [AppComponent, MyCounterComponent, MyAppenderComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ write: appenderReducer,  count: counterReducer  }),
    // StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
