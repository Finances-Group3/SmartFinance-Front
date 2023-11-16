import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {Bank} from "../models/bank";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class PaymentPlanService extends DataService<Bank> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://smart-finance-api.zeabur.app/payment_plans';
  }
}
