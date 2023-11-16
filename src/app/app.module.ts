import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './authentication/pages/log-in/log-in.component';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { NavbarComponent } from './shared/pages/navbar/navbar.component';


//Angular Material Design
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';



import { DashboardComponent } from './home/pages/dashboard/dashboard.component';
import { PaymentPlanCardComponent } from './home/components/payment-plan-card/payment-plan-card.component';
import { BanksInfoComponent } from './shared/pages/banks-info/banks-info.component';
import { NewPaymentPlanComponent } from './payment-plans/pages/new-payment-plan/new-payment-plan.component';
import { PaymentDetailsComponent } from './payment-plans/pages/payment-details/payment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    PaymentPlanCardComponent,
    BanksInfoComponent,
    NewPaymentPlanComponent,
    PaymentDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
