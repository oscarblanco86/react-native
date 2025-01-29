import { View, Text, SafeAreaView } from 'react-native'
import {Link, Redirect} from 'expo-router'
import React from 'react'

const App = () => {
  return <Redirect href='/(stack)/home' />
  // for windows branch
  
  // return (
  //   <SafeAreaView>
  //       <View className='mt-10'>
  //           <Text className='text-3xl font-bold text-primary font-ubuntu-bold'>Hola Alicia</Text>
  //           <Text className='text-2xl font-bold text-secondary-100 font-ubuntu-medium'>Hola Alicia</Text>
  //           <Text className='text-1xl font-bold text-secondary-200 font-ubuntu-light'>Hola Alicia</Text>
  //           <Text className='font-bold text-blue-500 font-ubuntu-regular'>Hola Alicia</Text>
  //           <Link href='/products'>Products</Link>
            
  //       </View>

  //   </SafeAreaView>
  // )
}

export default App