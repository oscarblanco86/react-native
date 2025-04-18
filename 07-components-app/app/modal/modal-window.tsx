import { View, Text, Platform } from 'react-native'
import React from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'
import { StatusBar } from 'expo-status-bar'
import ThemedButton from '@/presentation/shared/ThemedButton'
import { router } from 'expo-router'

const ModalScreen = () => {
  return (
    <ThemedView 
        className='justify-center items-center flex-1' 
        bgColor='gray'
    >
      <ThemedText
        className='my-4'
      >Aqui esta el modal</ThemedText>
      <ThemedButton 
        className='mx-4'
        onPress={() => router.push('/modal/modal-window-2')}
    >Otro Modal</ThemedButton>
        <ThemedButton
        className='mx-4 my-4'
        onPress={() => router.dismiss()}
      >Cerrar Modal</ThemedButton>
      <StatusBar 
        style={Platform.OS === 'ios' ? 'light': 'auto'}
      />
    </ThemedView>
  )
}

export default ModalScreen