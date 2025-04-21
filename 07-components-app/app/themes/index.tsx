import { useState } from 'react';
import { useColorScheme } from "nativewind";

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';

const ThemesScreen = () => {

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme} = useThemeChangerContext()
  
  // const { colorScheme, setColorScheme } = useColorScheme()

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  })

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : ' light')
    toggleTheme()
    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  }

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme()
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value
    })
  }
  
  return (
    <ThemedView>
      <ThemedCard className='mt-5'>
        <ThemedSwitch 
          text='Dark Mode'
          className='mb-5'
          value= {darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch 
          text='System Mode'
          className='mb-5'
          value= {darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
