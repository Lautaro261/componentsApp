import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirplaneIcon } from '../../icons/Icons';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <AirplaneIcon/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

