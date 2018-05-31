import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {Operator} from "../interfaces/operator";
import {HttpClient} from "@angular/common/http";
import {ErrorHandlerService} from "./error-handler.service";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  constructor(
    private http: HttpClient,
    private errorHandleService: ErrorHandlerService
  ) {}

  operatorsUrl = 'api/operators';

  get operators(): Observable<Operator[]> {
    return this.http.get<Operator[]>(this.operatorsUrl)
      .pipe(
        catchError(this.errorHandleService.handleError('get operators', null))
      );
  }

  getOperatorForBalance(id: number): Observable<Operator> {
    return this.http.get<Operator>(`${this.operatorsUrl}/${id}`)
      .pipe(
        catchError(this.errorHandleService.handleError('get operator for balance', null))
      );
  }


}
