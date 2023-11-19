import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentPlanService } from '../../../shared/services/payment-plan.service';
import { BanksService } from '../../../shared/services/banks.service';
import { Bank } from '../../../shared/models/bank';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-payment-plan',
  templateUrl: './new-payment-plan.component.html',
  styleUrls: ['./new-payment-plan.component.css']
})
export class NewPaymentPlanComponent implements OnInit{
  paymentPlanForm: FormGroup;
  banks: Bank[] = [];
  private TEAValue: number | null = null;
  private TNAValue: number | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private paymentPlanService: PaymentPlanService,
    private bankService: BanksService,
    private router: Router
  ) {
    this.paymentPlanForm = this.formBuilder.group({
      id:['1'],
      name: ['', Validators.required],
      vehicle_price: [null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
      initial_fee_percent: [null, [Validators.required, Validators.pattern(/^\d+\.?\d*$/)]],
      currency: ['', Validators.required],
      anual_payment_periods: [null, [Validators.required, Validators.pattern(/^[3-7]+$/)]],
      payment_frequency: ['', Validators.required],
      parcial_grace_periods: [0],
      total_grace_periods: [null, Validators.required],
      TEA: [{value: null, disabled: true}, Validators.required],
      TNA: [{value: '', disabled: true}, Validators.required],
      bank_id: [null, Validators.required],
      user_id: [null],
      funding_amount: [2],
      total_periods: [0],
      changed_TE: [1],
      fixed_fee: [1],
      desgravamen_percent_by_freq: [1],
      vehicle_insurance_amount:[1],
      physical_account_statement: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.loadBanks();
    this.paymentPlanForm.get('bank_id')?.valueChanges.subscribe(value => {
      if (value) {
        this.updateInterestRateSelection(parseInt(value));
      } else {
        this.updateInterestRateSelection(4);
      }
    });
  }


  setDefaultBank() {
    const bankControl = this.paymentPlanForm.get('bank_id');
    if (bankControl?.value === null || bankControl?.value === '') {
      bankControl?.setValue(4);
      this.updateInterestRateSelection(4); // El banco con id 4 permite edición manual
    }
  }

  updateInterestRateSelection(bankId: number) {
    const bank = this.banks.find(b => b.id === bankId);
    const TEAControl = this.paymentPlanForm.get('TEA');
    const TNAControl = this.paymentPlanForm.get('TNA');

    if (TEAControl && TNAControl) {
      TEAControl.enable({ emitEvent: false });
      TNAControl.enable({ emitEvent: false });

      if (bank) {
        if (bank.id !== 4) {
          if (bank.TEA && bank.TEA !== 0) {
            TEAControl.setValue(bank.TEA*100);
            TNAControl.setValue('TEA');
          } else if (bank.TNA && bank.TNA !== 0) {
            TEAControl.setValue(bank.TNA*100);
            TNAControl.setValue('TNA');
          }
          TEAControl.disable();
          TNAControl.disable();
        }
      } else {
        TEAControl.setValue(null);
        TNAControl.setValue(null);
      }
    } else {
      console.error('Control de formulario no encontrado');
    }
  }




  loadBanks() {
    this.bankService.getAlls().subscribe(
      (data) => {
        this.banks = data;
        this.setDefaultBank();
      },
      (error) => {
        console.error('Error loading banks', error);
      }
    );
  }


  resetForm(): void {
    this.paymentPlanForm.reset();
  }
  onRateTypeChange(selectedRateType: string): void {
    const rateValue = this.paymentPlanForm.get('TEA')?.value;

    if (selectedRateType === 'TEA' && rateValue) {
      this.TEAValue = parseFloat(rateValue) / 100;
      this.TNAValue = null;
    } else if (selectedRateType === 'TNA' && rateValue) {
      this.TNAValue = parseFloat(rateValue) / 100;
      this.TEAValue = null;
    }
  }

  submitPaymentPlan(): void {
    if (this.paymentPlanForm.valid) {
      const formValue = this.prepareForSubmission(this.paymentPlanForm.value);
      formValue.bank_id = this.paymentPlanForm.get('bank_id')?.value;

      console.log('Form values to be submitted:', formValue);

      this.paymentPlanService.create(formValue).subscribe(
        response => {
          console.log('Payment plan created successfully', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Error creating payment plan', error);
        }
      );
    }
  }


  prepareForSubmission(formValue: any): any {
    const initialFeePercent = parseInt(formValue.initial_fee_percent, 10) || 0;
    const userId = localStorage.getItem('user_id');
    const submissionValue = {
      ...formValue,
      initial_fee_percent: initialFeePercent/100,
      user_id: userId,
      bank_id: formValue.bank_id || 4,
      payment_frequency: this.mapFrequencyToEnum(formValue.payment_frequency),
      physical_account_statement: formValue.physical_account_statement === 'Sí' ? true : false,
      TEA: this.TEAValue,
      TNA: this.TNAValue
    };
    Object.keys(submissionValue).forEach(key => {
      if (submissionValue[key] == null) {
        delete submissionValue[key];
      }
    });

    return submissionValue;
  }

  mapFrequencyToEnum(frequency: string): number {
    const frequencyMap: { [key: string]: number } = {
      Mensual: 1,
      Bimestral: 2,
      Trimestral: 3,
      Cuatrimestral: 4,
      Semestral: 6,
      Anual: 12
    };
    return frequencyMap[frequency] || 0;
  }


}
