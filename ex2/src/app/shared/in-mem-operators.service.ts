import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Operator} from "../interfaces/operator";

@Injectable()
export class InMemOperatorsService implements InMemoryDbService {

  createDb() {
    let operators = [
      new Operator('МТС', 1),
      new Operator('Билайн', 2),
      new Operator('Мегафон', 3)
    ];
    return {operators};
  }
}
