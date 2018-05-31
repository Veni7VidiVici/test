import { Component, OnInit } from '@angular/core';
import {OperatorsService} from "../shared/operators.service";
import { Operator } from '../interfaces/operator';

@Component({
  selector: 'operators',
  templateUrl: './operators.component.html'
})
export class OperatorsComponent implements OnInit {

  constructor(
    private operatorsService: OperatorsService
  ) {}

  ngOnInit() {
    this.getOperators();
  }

  operators: Operator[];

  getOperators() {
    this.operatorsService.operators
      .subscribe((operators: Operator[]) => {
        this.operators = operators;
      })
  }

}
