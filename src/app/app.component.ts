import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';//info das ufs
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';//info dos dados
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SamuService,UFService]
})
export class AppComponent implements OnInit {
    title = 'Piauí';
    id = 22;
    ufs : UF[];
    dados_da_samu : Dados[];
    media : number;
    samu: Dados[];
    uf: UF;


    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        //mostrar uf
        this.uf = this.ufService.getUF(this.id);
    }
}
