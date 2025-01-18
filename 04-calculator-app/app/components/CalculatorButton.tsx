import { Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';

interface Props {
    label: string;
    color?: string;
    blackText?: boolean;
    largBtn?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    blackText = false,
    largBtn = false,
    onPress
}:Props) => {
  return (
    <Pressable style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: largBtn ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
    })}>
        <Text 
            style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black': 'white'
            }
        }>{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton