import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme/globalTheme';

interface Props{
    styles?: StyleProp<ViewStyle>;
}

export const Separator = ({styles}:Props) => {
  return (
    <View style={baseStyles.viewContainer}>
        <View style={[baseStyles.viewSeparator, styles]}/>
    </View>
  );
};

const baseStyles = StyleSheet.create({
    viewContainer: {
        backgroundColor: colors.cardBackground,
    },
    viewSeparator:{
        alignSelf: 'center',
        width: '80%',
        height: 1,
        backgroundColor: colors.text,
        opacity: 0.1,
        marginVertical: 8,
    },
});
