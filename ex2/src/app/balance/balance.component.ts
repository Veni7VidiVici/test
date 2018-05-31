import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Operator} from "../interfaces/operator";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BalanceService} from "../shared/balance.service";
import {finalize} from "rxjs/internal/operators";


@Component({
  selector: 'balance',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private balanceService: BalanceService,
    private router: Router
  ) { }

  operator: Operator;
  sending = false;

  error: string;
  success: string;

  formBalance: FormGroup;

  phoneMask = ['+','7','(', /\d/, /\d/, /\d/, ')', ' ',
    /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  ngOnInit() {
    this.subscribeData();
    this.createForm();
  }

  subscribeData() {
    this.route.data
      .subscribe(({operator}: {operator: Operator}) => {
        this.operator = operator;
      });
  }

  createForm() {
    this.formBalance = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^(\+7\(\d{3}\) \d{3}-\d{4})$/)]],
      price: ['', [Validators.required,Validators.pattern(/^([1-9][0-9]{0,2}|1000)$/)]]
    })
  }

  submitForm({value: {phone, price}}: {value: {phone: string, price: string}}) {

    this.sending = true;
    this.success = this.error = '';

    this.balanceService.replenish(phone, +price)
      .pipe(
        finalize(() => this.sending = false)
      )
      .subscribe(_ => {
        this.success = 'Успешно выполнено';
        this.router.navigate(['/app']);
      },
      error => {
        this.error = error.message;
      });
  }

}
