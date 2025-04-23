import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { createContext, useContext, PropsWithChildren, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';


interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;

    toggleTheme: () => void;
    setSystemTheme: () => void;
}

//Custom hook para accede al themechanger
export const useThemeChangerContext = () => {
    const themechanger = useContext(ThemeChangerContext)
    return themechanger
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType)

// provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
    const { colorScheme, setColorScheme } = useColorScheme()

    const [isDarkMode, setIsDarkMode] = useState(colorScheme == 'dark')   
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true)

    const currentTheme = (isSystemThemeEnabled) 
    ? colorScheme 
        : (isDarkMode) 
            ? 'dark' : 'ligh'
    const backgroundColor = isDarkMode 
        ? Colors.dark.background
        : Colors.light.background
    useEffect(() => {
        AsyncStorage.getItem('selecteTheme').then( (theme) => {
            if (!theme) return
            setIsDarkMode(theme == 'dark')
            setIsSystemThemeEnabled(theme == 'system')
            setColorScheme(theme as 'light' | 'dark' | 'system')
        })
    }, [])

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemeEnabled,
                    bgColor: backgroundColor
                    toggleTheme: async () => {
                        setIsDarkMode(!isDarkMode)
                        setColorScheme(
                            isDarkMode ? 'light' : 'dark'
                        )
                        setIsSystemThemeEnabled(false)

                        // Guardar en Storage
                        await AsyncStorage.setItem('selectedTheme', isDarkMode ? 'light' : 'dark')
                    },
                    setSystemTheme: async () => {
                        setIsSystemThemeEnabled(true)
                        setColorScheme('system')
                        await AsyncStorage.setItem('selectedTheme', 'system')

                    }
                }}
            >
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}