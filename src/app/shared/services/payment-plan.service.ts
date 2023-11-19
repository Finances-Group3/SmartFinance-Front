import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {HttpClient} from "@angular/common/http";
import {PaymentPlan} from "../models/paymentPlan";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PaymentPlanService extends DataService<PaymentPlan> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://smart-finance-api.onrender.com/payment_plans';
  }

  getPaymentPlansByUserId(userId: string): Observable<PaymentPlan[]> {
    return this.http.get<PaymentPlan[]>(`${this.basePath}/user/${userId}`);
  }
  getPaymentPlan(id: string): Observable<any> {
    return this.http.get<any>(`${this.basePath}/${id}`);
  }

}
