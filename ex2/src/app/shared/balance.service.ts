import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {delay} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  replenish(phone: string, price: number):Observable<string> {

    return Observable.create((observer) => {

      if ( Math.random() >= 0.5 ) {
        throw new Error('Error!');
      } else {
        observer.next('success');
        observer.complete();
      }

    }).pipe(
      delay(700) // fake load
    );
  }

}
