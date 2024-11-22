export interface ExchangeRate {
  code: string;
  rate: number;
  flag: string;
  name: string;
}

export interface ConversionResult {
  fromAmount: number;
  toAmount: number;
  fromCurrency: string;
  toCurrency: string;
}
