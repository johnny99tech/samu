import { Component, OnInit } from '@angular/core';

import {UF} from '../types/uf';

import {UFService} from '../services/uf.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
  providers: [UFService]
})
export class ResumoComponent implements OnInit {

  uf : UF;

  constructor(private ufService: UFService) { }

  ngOnInit() {
    this.uf = this.ufService.getUF(22)
  }

}
