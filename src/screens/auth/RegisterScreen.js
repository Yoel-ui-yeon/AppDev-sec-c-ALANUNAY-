import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButtons';
import { ROUTES } from '../../utils';

const inputStyle = {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 16,
};
const labelStyle = { color: 'black', marginBottom: 4 };

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const handleRegister = () => {
        // Basic validation: require non-empty and matching passwords
        if (!username.trim() || !password.trim()) return;
        if (password !== confirmPassword) return;
        navigation.navigate(ROUTES.HOME);
    };

    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                paddingHorizontal: 20,
            }}
        >
            <CustomTextInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                textStyle={labelStyle}
                TextInputStyle={{ ...inputStyle }}
            />

            <CustomTextInput
                label="Username"
                placeholder="Choose a username"
                value={username}
                onChangeText={setUsername}
                textStyle={labelStyle}
                TextInputStyle={{ ...inputStyle }}
            />

            <CustomTextInput
                label="Password"
                placeholder="Choose a password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                textStyle={labelStyle}
                TextInputStyle={{ ...inputStyle }}
            />

            <CustomTextInput
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                textStyle={labelStyle}
                TextInputStyle={{ ...inputStyle, marginBottom: 24 }}
            />

            <View style={{ width: '100%', gap: 12 }}>
                <CustomButton
                    label="Register"
                    mainStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 12,
                        backgroundColor: '#F48FB1',
                        borderRadius: 20,
                    }}
                    onPress={handleRegister}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                    <Text style={{ color: 'gray' }}>Already have an account? </Text>
                    <Pressable onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                        <Text style={{ color: '#F48FB1', fontWeight: '600' }}>Log in</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
