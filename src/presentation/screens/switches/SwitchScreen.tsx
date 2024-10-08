/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
//import { Switch } from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';
//import { Button } from '../../components/ui/Button';

export const SwitchScreen = () => {
  //const [isEnabled, setIsEnabled] = useState(false);
  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="¿Está activo?"
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="¿Tiene hambre?"
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="¿Encendido?"
        />
      </Card>

      {/*       <Card>
         lo que encierra el Card lo toma como children(hijo)
      <Text>SwitchScreen</Text>
      <Button text="Click me" onPress={()=>{}}/>
      </Card> */}
    </CustomView>
  );
};
