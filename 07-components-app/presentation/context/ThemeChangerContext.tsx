import { 
    createContext, 
    useContext, 
    PropsWithChildren, 
    useState, 
    useEffect 
} from "react";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';


interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;

    bgColor: string;

    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType)

//Custom hook para accede al themechanger
export const useThemeChangerContext = () => {
    const themechanger = useContext(ThemeChangerContext)
    return themechanger
}

// provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
    const { colorScheme, setColorScheme } = useColorScheme()

    const [isDarkMode, setIsDarkMode] = useState(colorScheme == 'dark')   
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true)

    const currentTheme = isSystemThemeEnabled
    ? colorScheme 
        : isDarkMode
            ? 'dark' : 'light'
    const backgroundColor = isDarkMode 
        ? Colors.dark.background
        : Colors.light.background
    useEffect(() => {
        AsyncStorage.getItem('selectedTheme').then((theme) => {
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
                    bgColor: backgroundColor,
                    toggleTheme: async () => {
                        setIsDarkMode(!isDarkMode)
                        setColorScheme(
                            isDarkMode ? 'light' : 'dark'
                        )
                        setIsSystemThemeEnabled(false)

                        // Guardar en Storage
                        await AsyncStorage.setItem(
                            'selectedTheme', 
                            isDarkMode ? 'light' : 'dark'
                        )
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