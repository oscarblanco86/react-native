import { Platform, View } from 'react-native'

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'

import { globalStyles } from '@/styles/global-styles';

import * as NavigationBar from 'expo-navigation-bar';

const isAndroid = Platform.os === 'android';

if (isAndroid) NavigationBar.setBackgroundColorAsync('black');

const RootLayout = () => {
  const [loaded] = useFonts ({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })
  
  if (!loaded) null

  return (
    <View style={globalStyles.background}>
      {/* <Text >Header</Text> */}
      <Slot />
      {/* <Text>Footer</Text> */}
      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout;