import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SwitchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SwitchScreen</Text>
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
