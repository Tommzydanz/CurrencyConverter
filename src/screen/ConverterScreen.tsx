import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { CurrencyInput } from '../components/CurrencyInput';
import { convertCurrency, EXCHANGE_RATES, formatNumber } from '../utils/currency';
import { ConversionResult } from '../types/currency';

export const ConverterScreen: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('NGN');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [result, setResult] = useState<ConversionResult | null>(null);

  const handleConvert = useCallback(() => {
    if (!amount) {
      return;
    }

    const conversion = convertCurrency(
      parseFloat(amount),
      fromCurrency,
      toCurrency
    );
    setResult(conversion);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Currency Converter</Text>

        <View style={styles.card}>
          <CurrencyInput
            amount={amount}
            currency={fromCurrency}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            label="From"
            currencies={EXCHANGE_RATES}
          />

          <CurrencyInput
            amount={result?.toAmount.toString() || ''}
            currency={toCurrency}
            onAmountChange={() => {}}
            onCurrencyChange={setToCurrency}
            label="To"
            currencies={EXCHANGE_RATES}
            editable={false}
          />

          <TouchableOpacity
            style={[styles.button, !amount && styles.buttonDisabled]}
            onPress={handleConvert}
            disabled={!amount}
          >
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>

          {result && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>
                {formatNumber(result.fromAmount)} {result.fromCurrency} =
              </Text>
              <Text style={styles.resultValue}>
                {formatNumber(result.toAmount)} {result.toCurrency}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1a1a1a',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#666',
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#1a1a1a',
  },
});
