import {Redirect, useLocalSearchParams} from 'expo-router'
import { View, Text } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store';

const ProductsScreen = () => {
    const {id} = useLocalSearchParams();
    // const params = useLocalSearchParams();
    // console.log(params);
    const product = products.find(p => p.id == id)
    if (!product) {
        return <Redirect href='/'/>
    }
  return (
    <View className='px-5 mt-10 p-10'>
      <Text className='font-ubuntu-bold text-4xl p-5'>{product.title}</Text>
      <Text className='p-5'>{product.description}</Text>
      <Text className='text-2xl text-center p-5'>{product.price}</Text>
    </View>
  )
}

export default ProductsScreen