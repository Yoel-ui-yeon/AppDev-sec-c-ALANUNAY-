import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function CustomTextInput({
    label,
    placeholder,
    value,
    onChangeText,
    textStyle,
    TextInputStyle,
    secureTextEntry = false,
}) {
    return (
        <View>
            <Text style={textStyle}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="pink"
                value={value}
                onChangeText={onChangeText}
                style={TextInputStyle}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
