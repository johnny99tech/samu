import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeçalhoComponent } from './cabeçalho/cabeçalho.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeçalhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
