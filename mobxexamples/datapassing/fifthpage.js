import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNameStore } from './nameContext';
import { useObserver } from 'mobx-react';

const Fifthpage = props => {
    const nameStore = useNameStore();


    const prevScreen = () => {
        props.navigation.navigate('Fourthpage');
    }

    return useObserver(() => (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => { prevScreen() }} style={styles.button}>
                <Text style={styles.text}>ScreenFour</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{nameStore.names}</Text>
        </View>
    ));
};
export default Fifthpage;
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
