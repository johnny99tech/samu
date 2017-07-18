import { Component, OnInit } from '@angular/core';

import {UF} from '../types/uf';
import {Dados} from '../types/samu';//info dos dados
import {SamuService} from '../services/samu.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css'],
  providers: [SamuService, Dados]
})
export class DetalheComponent implements OnInit {

  uf : UF;
  //dados : Dados[];
  samu : Dados[];

  constructor(private samuService: SamuService) { }

  ngOnInit() {
    this.samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
    //.getAllMunicipiosAtendidosPorEstado();
    //this.dados = this.ufService.getMunicipiosPorAno(22);
    //this.samu = this.samuService.getMunicipiosPorAno(22);
  }
}
