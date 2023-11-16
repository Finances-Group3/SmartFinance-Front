import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './authentication/pages/log-in/log-in.component';
import { RegisterComponent } from './authentication/pages/register/register.component';
import { DashboardComponent } from "./home/pages/dashboard/dashboard.component";
import { BanksInfoComponent } from "./shared/pages/banks-info/banks-info.component";
import { NewPaymentPlanComponent } from "./payment-plans/pages/new-payment-plan/new-payment-plan.component";

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'info-banks', component: BanksInfoComponent },
  { path: 'new-plan', component: NewPaymentPlanComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
