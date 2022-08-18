import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const letterswapping = () => {
    const [str, setstr] = useState('');
    const [opstr, setopstr] = useState('');
    const [rplcstr, setrplcstr] = useState('');
    const [scndrplcstr, setscndrplcstr] = useState('');

    const onclicking = () => {
        var array = Array.from(str)
        var x = rplcstr;
        var z = scndrplcstr;
        for (let i = 0; i < array.length; i++) {
            const ind = array.indexOf(x);
            if (ind !== -1) {
                array[ind] = z;
              }
            
        }
       setopstr(array)
      console.log("sdase",array);
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.textInputStyle}
                onChangeText={text => setstr(text)}
                placeholder="Enter String"
                value={str}
            />
            <TextInput
                style={styles.textInputStyle}
                onChangeText={text => setrplcstr(text)}
                placeholder="Letter to change"
                value={rplcstr}
            />
            <TextInput
                style={styles.textInputStyle}
                onChangeText={text => setscndrplcstr(text)}
                placeholder="Letter to change it from"
                value={scndrplcstr}
            />
            <TouchableOpacity style={styles.btText} onPress={() => { onclicking(); }}>
                <Text style={styles.listText}>GO!</Text>
            </TouchableOpacity>
            <Text>{opstr}</Text>
        </View>
    );
};
export default letterswapping;

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey'
    },
    btText: {
        height: 35,
        width: 50,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        textAlign: 'center',
        padding: 5,
        paddingLeft: 12,
        margin: 20
    },
    textInputStyle: {
        width: 220,
        margin: 20,
        backgroundColor: 'white'
    }

});
