/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { globalStyles } from '../../../config/theme/globalTheme';


export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name:'',
        email:'',
        phone:'',
    });
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

    <ScrollView>
    <CustomView margin>
        <Title text="Inputs" safe/>

        <Card>
            <TextInput
            style={globalStyles.input}
            placeholder="Nombre completo"
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={(value)=>setForm({...form, name : value})}
            />

            <TextInput
            style={globalStyles.input}
            placeholder="Email"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(value)=>setForm({...form, email : value})}
            />

<TextInput
            style={globalStyles.input}
            placeholder="Telefono"
            keyboardType="phone-pad"
            onChangeText={(value)=>setForm({...form, phone : value})}
            />
        </Card>

        <View style={{height:10}}/>

        <Card>
            <Text>{JSON.stringify(form,null,2)}</Text>
        </Card>
    </CustomView>

    <View style={{height:20}}/>
    </ScrollView>
    </KeyboardAvoidingView>

  );
};


