import React, { ReactNode, useContext } from 'react';
import { View, StyleProp, ViewStyle} from 'react-native';
import { globalStyles } from '../../../config/theme/globalTheme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props{
    style?: StyleProp<ViewStyle>;
    children?: ReactNode; //Es otra forma de tener la prop 'children', podes ver la otra forma en Card
    margin?: boolean;
  }

export const CustomView = ({style,margin = false ,children}:Props) => {

  const {colors} = useContext(ThemeContext);


  return (
    <View style={[
      globalStyles.mainContainer,
      margin ? globalStyles.globalMargin : null,
      {backgroundColor: colors.background},
      style,
      ]}>
        {children}

    </View>
  );
};


