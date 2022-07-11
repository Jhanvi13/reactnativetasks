import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNameStore } from './nameContext';
import { useObserver } from 'mobx-react';

const Secondpage = props => {
    const nameStore = useNameStore();

console.log('Namestor.name',nameStore.names);
    const nextScreen = () => {
        props.navigation.navigate('Thirdpage');
    }
    const prevScreen = () => {
        props.navigation.navigate('Firstpage');
    }
    return useObserver(() => (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => nextScreen()} style={styles.button}>
                <Text style={styles.text}>ScreenThree</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => prevScreen()} style={styles.button}>
                <Text style={styles.text}>ScreenOne</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{nameStore.names}</Text>
        </View>
    ));
};
export default Secondpage;
const styles = StyleSheet.create({
    mainContainer: {
        margin: 100,
        left: 50
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'lightblue',
        margin: 10
    },
    text: {
        textAlign: 'center',
        top: 10
    },
    Name: {
        backgroundColor: 'white',
        width: 130,
        height: 60
    }
});
