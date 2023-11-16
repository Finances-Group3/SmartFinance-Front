import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {Bank} from "../models/bank";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BanksService extends DataService<Bank> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://smart-finance-api.zeabur.app/banks';
  }

}
