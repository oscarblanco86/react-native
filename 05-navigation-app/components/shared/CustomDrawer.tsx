import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
        {...props}
        // scrollEnabled={false}
        >
            <View className='flex justify-center items-center mc-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
                <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
                    <Text className='text-primary ubuntu-regular text-3xl'>OB</Text>

                </View>
            </View>

            {/* Draweritems */}

            <DrawerItemList {...props} />
   
        </DrawerContentScrollView>
    )
}

export default CustomDrawer