import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperatorsComponent} from "./operators/operators.component";
import {BalanceComponent} from "./balance/balance.component";

import {OperatorForBalanceResolverService} from './shared/operator-for-balance-resolver.service';

const routes: Routes = [
  {path: 'app', component: OperatorsComponent },
  {
    path: 'balance/:id',
    component: BalanceComponent,
    resolve: {
      operator: OperatorForBalanceResolverService
    }
  },
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: '**', redirectTo: 'app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes/*, { enableTracing: true }*/)],
  exports: [RouterModule],
  providers: [OperatorForBalanceResolverService]
})
export class AppRoutingModule { }
