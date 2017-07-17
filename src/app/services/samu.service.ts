import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
/*
  getPorUFMunicipiosAtendidosPorEstado(uf : number): Dados[]{
    //receber parametro da uf e retornar os dados da UF
    let numero: number;
    numero = 0;
    let anos: number;
    anos = 0;
    for(let entrada of )
    {
      if(entrada.uf_id == id)
      {
        numero += entrada.valor;
        anos++;
      }
    }

    return Dados;
  }

*/

  //metodo para media por municipios
  getMediaMunicipios(id: number): number{
    let numero: number;
    numero = 0;
    let anos: number;
    anos = 0;
    for(let entrada of VALORES)
    {
      if(entrada.uf_id == id)
      {
        numero += entrada.valor;
        anos++;
      }
    }
    return Math.round(numero/anos);
  }

  getMunicipiosPorAno(id: number): Dados[]{
    let valores: Dados[] = [];
    let i: number;
    i = 0;
    for(let entrada of VALORES)
    {
      if(entrada.uf_id == id)
      {
        valores[i] = entrada;
        i++;
      }
    }
    return valores;
  }
}
