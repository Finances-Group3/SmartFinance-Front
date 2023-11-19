import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from "./data-service.service";
import {PaymentDetails} from "../models/paymentDetails";

@Injectable({
  providedIn: 'root'
})
export class PaymentPlanDetailsService extends DataService<PaymentDetails>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath ='https://smart-finance-api.onrender.com';}

  getPaymentDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.basePath}/payment_plans/${id}/payment_details`);
  }
}
