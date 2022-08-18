import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const madeamistake = () => {

    var array = [[[[[[[[[[[[[[[["bazinga"]]]]]]]]]]]]]]]];


    const onclicking = (array) => {
        
        for (let i = 0; i < array.length; i++) 
        {
            if (typeof(array[i]) == "string")   {
                console.log("b",array[i]);
                
            }else{
                onclicking(array[i]);
            }
            
        }

    }

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.btText} onPress={() => { onclicking(array); }}>
                <Text style={styles.listText}>GO</Text>
            </TouchableOpacity>
        </View>
    );
};
export default madeamistake;

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        margin: 50
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

});
