import { Component, OnInit } from '@angular/core';

import {UF} from '../types/uf';
import {Dados} from '../types/samu';//info dos dados
import {SamuService} from '../services/samu.service';

import {DadoNome} from '../types/newmodel';
import {ModeloNovoService} from '../services/new-model.services';


@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css'],
  providers: [SamuService, Dados, DadoNome, ModeloNovoService]
})
export class DetalheComponent implements OnInit {
  //uf : UF;
  //dados : Dados[];
  //samu : Dados[];
  tdsdados : DadoNome[] = [];

  constructor(private serviceDados: ModeloNovoService) { }

  ngOnInit() {
    this.tdsdados = this.serviceDados.mesclardados();
  }

}
