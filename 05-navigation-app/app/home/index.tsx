import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/CustomButton'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <Link href='/products' asChild>
                    <CustomButton color='primary'>Producs</CustomButton>
                </Link>
                <CustomButton
                    onPress={() => router.push('/products')}
                >Producs</CustomButton>

                <CustomButton
                    variant='text-only'
                    onPress={() => router.push('/products')}
                >Producs</CustomButton>

                {/* <Text>Home</Text>
            <Link className='mb-5' href='/products'>
                Products{' '}
            </Link> 
            <Link className='mb-5' href='/profile'>
                Perfil{' '}
            </Link> 
            <Link className='mb-5' href='/settings'>
                Ajustes{' '}
            </Link>  */}
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen