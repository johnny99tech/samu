import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ResumoComponent} from '../resumo/resumo.component';
import {UnidadesComponent} from '../unidades/unidades.component';
import {DetalheComponent} from '../detalhe/detalhe.component'
//import {DetalheComponent} from '../detalhe/detalhe.component'

 //estrutura de rotas com seus caminhos
const routes : Routes = [
  {path: '', redirectTo: '/uf', pathMatch: 'full'},
  {path: 'uf', component: UnidadesComponent},
  {path: 'resumo', component: ResumoComponent},
  {path: 'detalhe', component: DetalheComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
