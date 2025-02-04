import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton
                    className='mb-2'
                    onPress={() => router.push('/tabs/(stack)/products')}
                >Producs</CustomButton>

                <CustomButton
                    className='mb-2'
                    color='secondary'
                    // variant='text-only'
                    onPress={() => router.push('/tabs/profile')}
                >Profile</CustomButton>

                <CustomButton
                    className='mb-2'
                    color='tertiary'
                    // variant='text-only'
                    onPress={() => router.push('/tabs/settings')}
                >Ajustes</CustomButton>



                <Link href='/tabs/products' asChild>
                    <CustomButton 
                    className='mb-2' 
                    variant='text-only'
                    color='primary'
                >Producs</CustomButton>
                </Link>
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