import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {

    const {setTheme, currentTheme, colors} = useContext(ThemeContext);




  return (
    <CustomView margin>
        <Title text={`Cambiar tema ${currentTheme}`} safe/>

        <Button
        text="Ligth"
        onPress={()=>setTheme('light')}
        />

        <View style={styles.separatorView}/>

        <Button
        text="Dark"
        onPress={()=>setTheme('dark')}
        />

        <View style={styles.separatorView}/>

        <Text style={{color: colors.text}}>
            {JSON.stringify(colors, null, 2)}
        </Text>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorView:{
    height:10,
  },
});
