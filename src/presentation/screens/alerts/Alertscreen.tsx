/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/globalTheme';
import { Button } from '../../components/ui/Button';
import { View, Alert } from 'react-native';
//import prompt from 'react-native-prompt-android';
import { ShowPrompt } from '../../../config/adapters/Prompt.adapter';

export const Alertscreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

/*      const ShowPrompt = () =>{

      //Codigo nativo de react native
       Alert.prompt(
        '¿Cual es tu correo electronico?',
        'mensaje de la alerta. loremdefsddfsa',
        (value:string)=> console.log(value),
        'secure-text',
        'Soy el valor por defecto',
        'number-pad'
      );

      prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder',
        }
    );


  };  */
const onShowPrompt = ()=>{
  ShowPrompt({
    title: 'Titulo',
    subTitle:'subtitulo de la alerta test.',
    buttons: [
      {text: 'OK', onPress: ()=>{}},
    ],
    placeHolder:'placeholder',
  });
};

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas"/>

      <Button text="Alerta - 2 botones" onPress={createTwoButtonAlert}/>

        <View style={{height: 10}}/>

      <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert}/>

      <View style={{height: 10}}/>

      <Button text="Prompt - Input" onPress={onShowPrompt}/>

      <View style={{height: 10}}/>

    </CustomView>
  );
};

