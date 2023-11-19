
export interface PaymentPlan{
  id: number,
  name: string,
  vehicle_price: number,
  initial_fee_percent: number,
  currency: string,
  anual_payment_periods: number,
  payment_frequency: string,
  parcial_grace_periods: number,
  total_grace_periods: number,
  TEA: number,
  TNA: number,
  bank_id: number,
  user_id: number,
  funding_amount: number,
  total_periods: number,
  changed_TE: number,
  fixed_fee: number,
  desgravamen_percent_by_freq: number,
  vehicle_insurance_amount: number,
  physical_account_statement: boolean
}
