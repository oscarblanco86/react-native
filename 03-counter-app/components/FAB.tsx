import { Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Props {
  label: string;

  position?: 'left' | 'right';
  
  // Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label, 
  onPress, 
  onLongPress,
  position = 'right',
}:Props) {  
  return (
   <Pressable
      style = {({ pressed }) => [
        styles.floatinButton, 
        position === 'left' ? styles.positionLeft : styles.positionRight,
        pressed ? { opacity: 0.5 } : { opacity: 1 },
      ]}
      onLongPress={onLongPress} 
      onPress={onPress}
    >
      <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
  </Pressable>
  )
}

const styles = StyleSheet.create({
  floatinButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:4 },
    shadowOpacity: 0.3,
    elevation: 3,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  }
})