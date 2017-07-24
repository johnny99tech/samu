import { Component, OnInit } from '@angular/core';

import {UF} from '../types/uf';
import {Dados} from '../types/samu';//info dos dados
import {SamuService} from '../services/samu.service';

import {VALORES} from '../services/mock-samu_municipios_atendidos_por_estado';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css'],
  providers: [SamuService]
})
export class DadosComponent implements OnInit {

  uf : UF;
  //dados : Dados[];
  samu : Dados[];
//  valores : SamuService;

  constructor(private samuService: SamuService) { }

  ngOnInit() {
    //pegar valores de VALORES

  }

}
