import { Component, OnInit } from '@angular/core';
import {PaymentPlanService} from "../../../shared/services/payment-plan.service";
import {BanksService} from "../../../shared/services/banks.service";

@Component({
  selector: 'app-payment-plan-card',
  templateUrl: './payment-plan-card.component.html',
  styleUrls: ['./payment-plan-card.component.css']
})
export class PaymentPlanCardComponent{

  constructor(
    private paymentPlanService : PaymentPlanService,
    private banksService: BanksService
  ) {}

  banks: any =  [];
  plans: any = [];

  ngOnInit() {
    this.loadUserPaymentPlans();

    this.banksService.getAll().subscribe(data => {
      this.banks = data;
    });
  }

  loadUserPaymentPlans(): void {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      this.paymentPlanService.getPaymentPlansByUserId(userId).subscribe({
        next: (plans) => {
          this.plans = plans;
        },
        error: (err) => {
          console.error('Error al obtener los planes de pago:', err);
        }
      });
    } else {
      console.error('No se encontró el ID del usuario.');
    }
  }

  getBank(bank_id: any){
    return this.banks.find((bank: any) => bank.id == bank_id);
  }

}
