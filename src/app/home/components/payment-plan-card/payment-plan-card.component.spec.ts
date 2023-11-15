import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPlanCardComponent } from './payment-plan-card.component';

describe('PaymentPlanCardComponent', () => {
  let component: PaymentPlanCardComponent;
  let fixture: ComponentFixture<PaymentPlanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPlanCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
