import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButtons';
import { ROUTES } from '../../utils';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    return (
        <View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            height: '100%',
            paddingHorizontal: 20,
        }}
        >
        <CustomTextInput
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
            textStyle={{ color: 'black', marginBottom: 4 }}
            TextInputStyle={{
                width: '100%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 16,
            }}
        />

        <CustomTextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textStyle={{ color: 'black', marginBottom: 4 }}
            TextInputStyle={{
                width: '100%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: 'gray',
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginBottom: 24,
            }}
        />

        <View style={{ width: '100%', gap: 12 }}>
            <Button
                title="Go To Home"
                onPress={() => navigation.navigate(ROUTES.HOME)}
                color="#F48FB1"
            />
            <Button
                title="Go To Profile"
                onPress={() => navigation.navigate(ROUTES.PROFILE)}
                color="#F48FB1"
            />
            <CustomButton
                label="Home"
                mainStyle={{
                    marginTop: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10,
                    backgroundColor: '#F48FB1',
                }}
                route={ROUTES.HOME}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                <Text style={{ color: 'gray' }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
                    <Text style={{ color: '#F48FB1', fontWeight: '600' }}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    );
}