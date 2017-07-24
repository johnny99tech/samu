import { Component, OnInit } from '@angular/core';

import {UF} from '../types/uf';

import {UFService} from '../services/uf.service';

import {SamuService} from '../services/samu.service';

import { VALORES } from '../services/mock-samu_municipios_atendidos_por_estado';
import { Dados } from '../types/samu';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
  //providers: [UFService, SamuService, VALORES, Dados]
  providers: [UFService, SamuService]
})
export class ResumoComponent implements OnInit {
  id = 22;
  uf : UF;
  media : number;

  //constructor(private ufService: UFService, private samuService: SamuService) { }
  constructor(private ufService: UFService, private samuService: SamuService)
  { }

  ngOnInit() {
    this.uf = this.ufService.getUF(22);
    this.media = this.samuService.getMediaMunicipios(this.id);
    //this.media = this.media..getMediaMunicipios(this.id);
    //this.media = this.samuService.getMediaMunicipios(this.id);
  }
}
