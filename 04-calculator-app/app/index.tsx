import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from './components/ThemeText'
import CalculatorButton from './components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ padding: 30, marginBottom: 20 }}>
        <ThemeText variant='h1'>50 x 5000000</ThemeText >
        <ThemeText variant='h2'>250</ThemeText>
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="C"
          blackText
          color={Colors.lighGray}
          onPress={() => console.log("C")} />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lighGray}
          onPress={() => console.log("+/-")} />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lighGray}
          onPress={() => console.log("del")} />
        <CalculatorButton
          label="/"
          color={Colors.orange}
          onPress={() => console.log("/")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="7"
          color={Colors.darkGray}
          onPress={() => console.log("7")} />
        <CalculatorButton
          label="8"
          color={Colors.darkGray}
          onPress={() => console.log("8")} />
        <CalculatorButton
          label="9"
          color={Colors.darkGray}
          onPress={() => console.log("9")} />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => console.log("x")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="4"
          color={Colors.darkGray}
          onPress={() => console.log("4")} />
        <CalculatorButton
          label="5"
          color={Colors.darkGray}
          onPress={() => console.log("5")} />
        <CalculatorButton
          label="6"
          color={Colors.darkGray}
          onPress={() => console.log("6")} />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => console.log("-")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="1"
          color={Colors.darkGray}
          onPress={() => console.log("1")} />
        <CalculatorButton
          label="2"
          color={Colors.darkGray}
          onPress={() => console.log("2")} />
        <CalculatorButton
          label="3"
          color={Colors.darkGray}
          onPress={() => console.log("3")} />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => console.log("+")} />
      </View>
      <View style={globalStyles.row}>
        {/* boton 1 */}
        <CalculatorButton
          label="0"
          largBtn
          color={Colors.darkGray}
          onPress={() => console.log("C")} />
        <CalculatorButton
          label="."
          color={Colors.darkGray}
          onPress={() => console.log("+/-")} />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => console.log("=")} />
      </View>
    </View>
  )
}

export default CalculatorApp