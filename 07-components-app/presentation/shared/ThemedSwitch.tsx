import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-gesture-handler'
import ThemedText from './ThemedText';

interface Props {
    text?: string
    value: boolean;
    className?: string
    onValueChange: (value: boolean) => void
}

const ThemedSwitch = ({
    text,
    value,
    className,
    onValueChange
}:Props) => {
  return (
    <Pressable
        className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
    >
        {
            text && (<ThemedText type='h2'>{text}</ThemedText>)
        }
    <Switch value={value} onValueChange={onValueChange}/>
    </Pressable>
  )
}

export default ThemedSwitch