import { convertCurrency, formatNumber } from '../utils/currency';

describe('currency', () => {
    it('should correctly convert NGN to USD', () => {
      const result = convertCurrency(1548.50, 'NGN', 'USD');
      expect(result.toAmount).toBe(1.00);
    });

    it('should correctly convert USD to NGN', () => {
      const result = convertCurrency(1, 'USD', 'NGN');
      expect(result.toAmount).toBe(1548.50);
    });

    it('should format numbers correctly for Nigerian locale', () => {
      expect(formatNumber(1548.50)).toBe('1,548.50');
      expect(formatNumber(1000000.00)).toBe('1,000,000.00');
    });
  });


  // npm test -- -t "should correctly convert 100 USD to NGN"