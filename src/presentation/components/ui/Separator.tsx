import React, {useContext} from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  styles?: StyleProp<ViewStyle>;
}

export const Separator = ({styles}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View
        style={[
          baseStyles.viewSeparator,
          {
            backgroundColor: colors.text,
          },
          styles,
        ]}
      />
    </View>
  );
};

const baseStyles = StyleSheet.create({
  viewSeparator: {
    alignSelf: 'center',
    width: '80%',
    height: 1,
    opacity: 0.1,
    marginVertical: 8,
  },
});
