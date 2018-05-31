import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import {OperatorsService} from "./operators.service";

import {Observable} from "rxjs";
import {Operator} from "../interfaces/operator";
import {map} from "rxjs/operators";

@Injectable()
export class OperatorForBalanceResolverService implements Resolve<Operator> {

  constructor(
    private operatorsService: OperatorsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Operator> {
    let operatorId = +route.paramMap.get('id');

    return this.operatorsService.getOperatorForBalance(operatorId)
      .pipe(
        map((operator: Operator) => {
          if (operator) {
            return operator;
          } else {
            this.router.navigate(['/app']);
            return null;
          }
        })
      );
  }

}
