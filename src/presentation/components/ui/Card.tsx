/* eslint-disable react-native/no-inline-styles */
import React, { PropsWithChildren } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/globalTheme';

interface Props extends PropsWithChildren{ //Es otra forma de tener la prop 'children', podes ver la otra forma en CustomView
    style?: StyleProp<ViewStyle>,
}

export const Card = ({style, children}:Props) => {
  return (
    <View style={[
        {
            backgroundColor: colors.cardBackground,
            borderRadius:10,
            padding:10,
        },
        style,
    ]}>
      {children}
    </View>
  );
};

