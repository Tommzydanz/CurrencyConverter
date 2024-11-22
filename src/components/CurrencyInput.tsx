import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ExchangeRate } from '../types/currency';

interface CurrencyInputProps {
  amount: string;
  currency: string;
  onAmountChange: (amount: string) => void;
  onCurrencyChange: (currency: string) => void;
  label: string;
  currencies: ExchangeRate[];
  editable?: boolean;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  label,
  currencies,
  editable = true,
}) => {
  // const selectedCurrency = currencies.find(curr => curr.code === currency);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.currencySymbol}>
          {currency === 'NGN' ? '₦' : currency === 'USD' ? '$' : currency}
        </Text>
        <TextInput
          style={[styles.input, !editable && styles.readOnlyInput]}
          keyboardType="numeric"
          value={amount}
          onChangeText={onAmountChange}
          placeholder="0.00"
          editable={editable}
        />
      </View>
      <Picker
        selectedValue={currency}
        onValueChange={onCurrencyChange}
        style={styles.picker}
        enabled={editable}
      >
        {currencies.map((curr) => (
          <Picker.Item
            key={curr.code}
            label={`${curr.flag} ${curr.code} - ${curr.name}`}
            value={curr.code}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  currencySymbol: {
    fontSize: 18,
    marginRight: 5,
    color: '#333',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 18,
  },
  readOnlyInput: {
    backgroundColor: '#f5f5f5',
    color: '#666',
  },
  picker: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});
