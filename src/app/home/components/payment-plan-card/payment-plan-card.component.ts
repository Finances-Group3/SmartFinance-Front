import { Component, OnInit } from '@angular/core';
import { PaymentPlanService } from "../../../shared/services/payment-plan.service";
import { BanksService } from "../../../shared/services/banks.service";
import { Bank } from "../../../shared/models/bank";
import { PaymentPlan } from "../../../shared/models/paymentPlan";

@Component({
  selector: 'app-payment-plan-card',
  templateUrl: './payment-plan-card.component.html',
  styleUrls: ['./payment-plan-card.component.css']
})
export class PaymentPlanCardComponent /*implements OnInit*/ {
  /*
  paymentPlans: PaymentPlan[] = [];
  banks: Bank[] = [];

  constructor(
    private paymentPlansService: PaymentPlanService,
    private banksService: BanksService) {
  }

  ngOnInit() {
    this.loadPaymentPlans();
    this.loadBanks();
  }

  loadPaymentPlans() {
    this.paymentPlansService.getAll().subscribe({
      next: (data) => {
        //this.paymentPlans = data;
      },
      error: (error) => {
        console.error('There was an error loading the payment plans', error);
      }
    });
  }

  loadBanks() {
    this.banksService.getAll().subscribe({
      next: (data) => {
        //this.banks = data;
      },
      error: (error) => {
        console.error('There was an error loading the banks', error);
      }
    });
  }

  getBankDetails(bankId: number): Bank | undefined {
    return this.banks.find(bank => bank.id === bankId);
  }

  getBankUrl(bankId: number): string | undefined {
    const bank = this.getBankDetails(bankId);
    return bank?.imageUrl;
  }*/
}
