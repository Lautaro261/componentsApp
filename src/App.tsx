import '../gesture-handler';
import React, { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';
import { ThemeProvider } from './presentation/context/ThemeContext';


const AppState = ({children}:PropsWithChildren)=>{

  return(
    <NavigationContainer>

    <ThemeProvider>
      {children}
    </ThemeProvider>
    </NavigationContainer>
  );
};

export const App = () => {
  return (
   /*  <NavigationContainer> */
    <AppState>
      <Navigator/>
    </AppState>
    /* </NavigationContainer> */
  );
};



