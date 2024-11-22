import { ExchangeRate, ConversionResult } from '../types/currency';

export const EXCHANGE_RATES: ExchangeRate[] = [
  { code: 'NGN', rate: 1548.50, flag: '🇳🇬', name: 'Nigerian Naira' },
  { code: 'USD', rate: 1, flag: '🇺🇸', name: 'US Dollar' },
  { code: 'EUR', rate: 0.91, flag: '🇪🇺', name: 'Euro' },
  { code: 'GBP', rate: 0.79, flag: '🇬🇧', name: 'British Pound' },
  { code: 'JPY', rate: 148.42, flag: '🇯🇵', name: 'Japanese Yen' },
  { code: 'CAD', rate: 1.35, flag: '🇨🇦', name: 'Canadian Dollar' },
];

export const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string
): ConversionResult => {
  const fromRate = EXCHANGE_RATES.find(rate => rate.code === fromCurrency)?.rate || 1;
  const toRate = EXCHANGE_RATES.find(rate => rate.code === toCurrency)?.rate || 1;

  const convertedAmount = (amount / fromRate) * toRate;

  return {
    fromAmount: amount,
    toAmount: Number(convertedAmount.toFixed(2)),
    fromCurrency,
    toCurrency,
  };
};

// Format number with comma separators
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-NG', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};
