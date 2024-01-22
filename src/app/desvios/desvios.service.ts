import { Injectable } from '@angular/core';
import { Desvio } from '../model/desvio';

@Injectable({
  providedIn: 'root',
})
export class DesviosService {
  desvios: Desvio[] = [];


}
