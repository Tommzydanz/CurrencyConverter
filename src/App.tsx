import React from 'react';
import { ConverterScreen } from './screen/ConverterScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {

  return (
  <SafeAreaProvider>
    <ConverterScreen />
  </SafeAreaProvider>
  );
}

export default App;
