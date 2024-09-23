import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Alertscreen = () => {
  return (
    <View style={styles.container}>
      <Text>Alertscreen</Text>
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
