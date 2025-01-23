import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from './components/ThemeText'
import CalculatorButton from './components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/Calculator'

const CalculatorApp = () => {
  const {
    formula,
    buildNumber,
    clearNumber,
    deleteNumber,
    toggleSign
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ padding: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>{formula}</ThemeText >
        <ThemeText variant='h2'>250</ThemeText>
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lighGray}
          onPress={() => clearNumber()} />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lighGray}
          onPress={() => toggleSign()} />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lighGray}
          onPress={() => deleteNumber()} 
          />
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={() => buildNumber("/")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => buildNumber("7")} />
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => buildNumber("8")} />
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => buildNumber("9")} />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => buildNumber("x")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => buildNumber("4")} />
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => buildNumber("5")} />
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => buildNumber("6")} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => buildNumber("-")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => buildNumber("1")} />
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => buildNumber("2")} />
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => buildNumber("3")} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => buildNumber("+")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="0"
          largBtn
          color={Colors.darkGray}
          onPress={() => buildNumber("0")} />
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => buildNumber(".")} />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => buildNumber("=")} />
      </View>
    </View>
  )
}

export default CalculatorApp