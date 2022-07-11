import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNameStore } from './nameContext';
import { useObserver } from 'mobx-react';

const Firstpage = props => {

const[name,setname]=useState("")
const nameStore = useNameStore();

    const onclick = () => {
        props.navigation.navigate('Secondpage');
        nameStore.addName(name);
    }
    
    return useObserver(() => (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder="Enter Name Here..."
                style={styles.Name}
                onChangeText={nameText => setname(nameText)}
                Value={{ name }}
            ></TextInput>
            <TouchableOpacity onPress={() => onclick() } style={styles.button}>
                <Text style={styles.text}>PageTwo</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>{nameStore.names}</Text>
        </View>
    ));
};
export default Firstpage;
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
