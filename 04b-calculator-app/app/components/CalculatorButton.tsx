import { Text, Pressable } from 'react-native';

import * as Haptics from 'expo-haptics';

import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';

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
    })}
    onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
    }}
    >
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