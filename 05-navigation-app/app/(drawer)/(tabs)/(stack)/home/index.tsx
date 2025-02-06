import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    const onToggleDrawer = () => {
            navigation.dispatch(DrawerActions.toggleDrawer)
        }
    
    return (
        <SafeAreaView>
            <View className='px-10 mt-5'>
                <CustomButton
                    className='mb-2'
                    onPress={() => router.push('/products')}
                >Producs</CustomButton>

                <CustomButton
                    className='mb-2'
                    color='secondary'
                    // variant='text-only'
                    onPress={() => router.push('/profile')}
                >Profile</CustomButton>

                <CustomButton
                    className='mb-2'
                    color='tertiary'
                    // variant='text-only'
                    onPress={() => router.push('/settings')}
                >Ajustes</CustomButton>



                <Link href='/products' asChild>
                    <CustomButton 
                    className='mb-2' 
                    variant='text-only'
                    color='primary'
                >Producs</CustomButton>
                </Link>

                <CustomButton
                    onPress={onToggleDrawer}
                >Abrir menú</CustomButton>
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