import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Expertspage = () => {

    const bodyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return (
        <View style={styles.mainContainer}>
            <View style={styles.expertspageCard}>
                <Text style={[styles.labeltext, styles.spacingStyle]}>Expertise</Text>
                <View style={styles.rowStyle}>
                    <Text style={[styles.textStyle, styles.boxStyle]}>Renewable Energy</Text>
                    <Text style={[styles.textStyle, styles.boxStyle]}>Corporate</Text>
                </View>
                <View style={styles.spacingStyle}>
                    <Text style={styles.labeltext}>Skills</Text>
                    <Text style={styles.bxtextStyle} numberOfLines={2}>Decision Making , Coaching , Motivation .</Text>
                </View>
                <View style={styles.spacingStyle}>
                    <Text style={styles.labeltext}>Biography</Text>
                    <Text style={styles.textStyle} numberOfLines={3}>This is a dummy text of the printing and typesetting.This is a dummy text of the printing and typesetting.</Text>
                </View>
                <View style={styles.spacingStyle}>
                    <Text style={styles.labeltext}>Description</Text>
                    <Text style={styles.textStyle} numberOfLines={8}>{bodyText}</Text>
                </View>
            </View>
        </View>

    );
};

export default Expertspage;

const styles = StyleSheet.create({
    mainContainer: {
        marginRight:10
    },
    expertspageCard: {
        alignContent: 'center',
        shadowColor: 'black',
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        elevation: 10,
        borderRadius: 20,
        width: 350,
        height: 550,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
        padding: 10

    },
    labeltext: {
        color: '#888888',
        fontSize: 13,
        fontWeight: '500',
        left: 5,
        top: 5
    },
    textStyle: {
        color: 'textStyle',
        fontSize: 18,
        fontWeight: '600',
        left: 5,
        top: 5
    },
    bxtextStyle: {
        color: 'textStyle',
        fontSize: 19,
        fontWeight: 'bold',
        left: 5,

    },
    rowStyle: {
        flexDirection: 'row',
        bottom: 9
    },
    boxStyle: {
        borderWidth: 1.5,
        marginLeft: 10,
        borderColor: 'lightgrey',
        borderRadius: 3,
        height: 35,
        top: 5,
        padding: 5
    },
    spacingStyle: {
        margin: 10
    }
});
