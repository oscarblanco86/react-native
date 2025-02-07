import { Tabs } from 'expo-router'
import {FontAwesome} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: 'green',
      // tabBarShowLabel: false,
      // tabBarStyle: {
      //   backgroundColor: 'black',
      // },
      // tabBarActiveBackgroundColor: 'red',
      // headerShown: false
     }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          headerShown: false,
          tabBarIcon: ({ color }) => 
            <Ionicons size={28} name="person-add-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => 
            <Ionicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => 
            <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout