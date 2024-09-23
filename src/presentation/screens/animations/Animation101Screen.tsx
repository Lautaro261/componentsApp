/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../../../config/theme/globalTheme';

export const Animation101Screen = () => {
  return (
    <View style={styles.constainer}>
        <View
        style={[
            styles.purpleBox,
        ]}
        />

        <Pressable
        onPress={()=>console.log('fadeIn')}
        style={{marginTop:10}}
        >
            <Text>FadeIn</Text>
        </Pressable>

        <Pressable
        onPress={()=>console.log('fadeOut')}
        style={{marginTop:10}}
        >
            <Text>FadeOut</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    purpleBox:{
        backgroundColor: colors.primary,
        width: 150,
        height:150,
    },
});

