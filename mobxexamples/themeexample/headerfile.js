import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { change } from './themereducer';

const header = props => {
    
    const dispatch = useDispatch([]);
    const [theme, setTheme] = useState(DefaultTheme);
    const themeChange = () => {
        if (theme == DefaultTheme) {
            setTheme(DarkTheme)
            console.log(theme);
        } else {
            setTheme(DefaultTheme)
            console.log(theme);

        }
        props.navigation.navigate('themeImplementationOne', { themes: theme });
    }
    return (
        <View >
            <TouchableOpacity style={{ backgroundColor: 'white', height: 50, width: 100, margin: 100 }} onPress={() => {dispatch(change(theme)); themeChange() }}>
                <Text style={{ textAlign: "center", padding: 10, fontSize: 35, top: 10 }}>Hello</Text>
            </TouchableOpacity>
        </View>
    );
}

export default header
