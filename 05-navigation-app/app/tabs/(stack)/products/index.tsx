import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '@/store/products.store'
import {Link} from 'expo-router'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList 
        data={products}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
          <View>
            <Text className='text-3xl text-center font-ubuntu-bold'>{item.title}</Text>
            <Text>{item.description}</Text>
            <View className='flex flex-row justify-between mt-2'>
              <Text className='font-ubuntu-bold'>{item.price}</Text>
              <Link href={`tabs/(stack)/products/${item.id}`} className='text-primary'>Ver detalles</Link>
            </View>

          </View>

        )
        }
      />
    </View>
  )
}

export default ProductsScreen