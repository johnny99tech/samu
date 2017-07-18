import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ResumoComponent } from './resumo/resumo.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { UnidadesComponent } from './unidades/unidades.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { TodosDadosComponent } from './todos-dados/todos-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    //CabecalhoComponent,
    ResumoComponent,
    UnidadesComponent,
    DetalheComponent,
    TodosDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
