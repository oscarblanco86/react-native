import { View, Text, Pressable, Platform } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-gesture-handler'
import ThemedText from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    text?: string
    value: boolean;
    className?: string
    onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android'

const ThemedSwitch = ({
    text,
    value,
    className,
    onValueChange
}: Props) => {

    const switchActiveColor = useThemeColor({}, 'primary')

    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChange(!value)}
        >
            {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
            <Switch
                value={value}
                onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColor : ''}
                // ios_backgroundColor={value ? 'green': 'red'}
                trackColor={{false: 'red'}}
            />
        </Pressable>
    )
}

export default ThemedSwitch