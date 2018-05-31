import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`error operation '${operation}'`);
      console.error(error);

      return of(result as T);
    };
  }
}
