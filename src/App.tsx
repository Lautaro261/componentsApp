import '../gesture-handler';
import React from 'react';
/*import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';*/
import {Navigator} from './presentation/navigator/Navigator';
import { ThemeProvider} from './presentation/context/ThemeContext';

/* const AppNavigation = ({children}: PropsWithChildren) => {
  const {isDark} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
}; */

/* const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
}; */

export const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};
