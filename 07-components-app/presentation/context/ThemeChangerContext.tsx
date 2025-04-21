import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { createContext, useContext, PropsWithChildren, useState } from "react";

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

    const currentTheme = (isSystemThemeEnabled) ? colorScheme : (isDarkMode) ? 'dark' : 'ligh'

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <ThemeChangerContext.Provider
                value={{
                    currentTheme: currentTheme ?? 'light',
                    isSystemTheme: isSystemThemeEnabled,
                    toggleTheme: async () => {
                        setIsDarkMode(!isDarkMode)
                        setColorScheme(
                            isDarkMode ? 'light' : 'dark'
                        )
                        setIsSystemThemeEnabled(false)
                    },
                    setSystemTheme: async () => {
                        setIsSystemThemeEnabled(true)
                        setColorScheme('system')
                    }
                }}
            >
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}