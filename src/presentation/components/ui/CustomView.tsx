import React, { ReactNode } from 'react';
import { View, StyleProp, ViewStyle} from 'react-native';
import { globalStyles } from '../../../config/theme/globalTheme';

interface Props{
    style?: StyleProp<ViewStyle>;
    children?: ReactNode; //Es otra forma de tener la prop 'children', podes ver la otra forma en Card
}

export const CustomView = ({style, children}:Props) => {
  return (
    <View style={[globalStyles.mainContainer, style]}>
        {children}

    </View>
  );
};


