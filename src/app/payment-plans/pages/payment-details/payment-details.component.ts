import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PaymentPlanDetailsService } from '../../../shared/services/payment-details.service';
import {PaymentPlanService} from "../../../shared/services/payment-plan.service";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'nro_cuota',
    'saldo_inicial',
    'interes',
    'cuota_fija',
    'amortizacion',
    'pago_seguro_desgravamen',
    'pago_seguro_vehicular',
    'portes',
    'saldo_final',
    'flujo'
  ];
  dataSource = new MatTableDataSource();

  constructor(
    private route: ActivatedRoute,
    private paymentPlanDetailsService: PaymentPlanDetailsService,
    private paymentPlanService : PaymentPlanService,
  ) {}

  plan: any = [];

  ngOnInit() {
    const paymentPlanId = this.route.snapshot.paramMap.get('id');
    if (paymentPlanId) {
      this.paymentPlanDetailsService.getPaymentDetails(paymentPlanId).subscribe(
        (details) => {
          this.dataSource.data = details;
        },
        (error) => {
          console.error('Error al obtener los detalles del plan de pago', error);
        }
      );

      this.paymentPlanService.getPaymentPlan(paymentPlanId).subscribe(data => {
        this.plan = data;
      });
    }




  }


}
