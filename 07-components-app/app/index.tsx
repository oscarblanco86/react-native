import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import ThemedView from '@/presentation/shared/ThemedView'
import MenuItem from '@/presentation/menu/MenuItem'


const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map((route, index) => (
          // <Link href={route.name.split('/')[0] as Href}>{route.title}</Link>
          <MenuItem
            key={route.title}
            icon={route.icon}
            name={route.name}
            title={route.title}
            isFirst={index == 0}
            isLast={index == animationMenuRoutes.length - 1}
          />
        ))
      }
      <View className='my-5'/>
      {
        uiMenuRoutes.map((route, index) => (
          // <Link href={route.name.split('/')[0] as Href}>{route.title}</Link>
          <MenuItem
            key={route.title}
            icon={route.icon}
            name={route.name}
            title={route.title}
            isFirst={index == 0}
            isLast={index == uiMenuRoutes.length - 1}
          />
        ))
      }
      <View className='my-5'/>
      {
        menuRoutes.map((route, index) => (
          // <Link href={route.name.split('/')[0] as Href}>{route.title}</Link>
          <MenuItem
            key={route.title}
            icon={route.icon}
            name={route.name}
            title={route.title}
            isFirst={index == 0}
            isLast={index == menuRoutes.length - 1}
          />
        ))
      }

      {/* <Text>ComponentsApp</Text>
      <Link href="./animation-101">Hola Mundo</Link> */}
    </ThemedView>
  )
}

export default ComponentsApp