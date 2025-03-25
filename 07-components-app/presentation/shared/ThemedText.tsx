import { View, Text, TextProps } from 'react-native'
import React from 'react'

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

interface Props extends TextProps {
    className?: string
    type?: TextType
}
/*
 font-normal
 text-3xl
 text-xl

 font-bold
 font-normal
*/

const ThemedText = ({ className, type, ...rest }:Props) => {
  return (
    <View>
        {/* className='mt-10 text-3xl text-light-primary dark:text-dark-primary' */}
      <Text 
      className={[
        'text-light-text dark:text-dark-text',
        type == 'normal' ? 'font-normal' : undefined,
        type == 'h1' ? 'text-3xl' : undefined,
        type == 'h2' ? 'text-xl' : undefined,
        type == 'semi-bold' ? 'font-semibold' : undefined,
        type == 'link' ? 'font-normal underline' : undefined,
        className
      ].join(' ')}
      {...rest}/>
    </View>
  )
}

export default ThemedText