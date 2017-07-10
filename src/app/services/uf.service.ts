import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
  //metodo da uf
  getUF(id: number): UF{
    //varrer construtor p/ achar o 22-> piaui
    if(id == {{id}} ){
      //erro
      return uf;
    }
  }
}
