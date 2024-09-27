/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/globalTheme';
import { Appearance, AppState, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
    //const colorScheme = useColorScheme();
    const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
    const isDark = currentTheme === 'dark'; // true o false
    const colors = isDark ? darkColors : lightColors;

    //Primera forma de controlar el modo claro y oscuro. Consulto el colorScheme
/*     useEffect(()=>{
      if(colorScheme === 'dark'){
        setCurrentTheme('dark');
      }else{
        setCurrentTheme('light');
      }
    },[colorScheme]); */


     //Segunda forma de controlar el modo claro y oscuro.
     //Consulto por suscripcion si esta activa o en segundo plano la app
     //Esta segunda forma, tiene como ventaja que podes saber cuando el usuario
     // esta en la app. Sirve para otras logicas como chats, verlo en linea, etc.

    useEffect(() => {
      const subscription = AppState.addEventListener('change', nextAppState => {
        const colorScheme = Appearance.getColorScheme();
        setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
      });

      return () => {
        subscription.remove();
      };
    }, []);


  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };



  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isDark: isDark,
        colors: colors,
        setTheme: setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
      </NavigationContainer>
  );
};
