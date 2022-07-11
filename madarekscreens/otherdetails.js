import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Otherdetails = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.otherdetailsCard}>
                <Text style={[styles.labeltext, styles.spacingStyle]}>Interested Categories</Text>
                <View style={styles.rowStyle}>
                    <Text style={[styles.rowtextStyle, styles.boxStyle]}>Renewable Energy</Text>
                    <Text style={[styles.rowtextStyle, styles.boxStyle]}>Corporate</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={[styles.btrowtextStyle, styles.boxStyle]}>Aviation</Text>
                    <Text style={[styles.btrowtextStyle, styles.boxStyle]}>Education</Text>
                    <Text style={[styles.btrowtextStyle, styles.boxStyle]}>Health</Text>
                </View>
                <View style={styles.btmPart}>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Headline</Text>
                        <Text style={styles.textStyle}>This is a dummy text of the printing and typesetting.</Text>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Facebook Link</Text>
                        <Text style={styles.textStyle}>http://www.example.com/</Text>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Twitter Link</Text>
                        <Text style={styles.textStyle}>http://www.example.com/</Text>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Linkdin Link</Text>
                        <Text style={styles.textStyle}>-</Text>
                    </View>
                </View>
            </View>
        </View>

    );
};

export default Otherdetails;

const styles = StyleSheet.create({
    mainContainer: {
        marginRight: 10
    },
    btmPart: {
        bottom: 15
    },
    otherdetailsCard: {
        alignContent: 'center',
        shadowColor: 'black',
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        elevation: 5,
        borderRadius: 20,
        width: 350,
        height: 450,
        marginTop: 30,
        backgroundColor: '#FFFFFF',

    },
    labeltext: {
        color: '#848484',
        fontSize: 13,
        fontWeight: '460',
        top: 10,
        left: 5
    },
    textStyle: {
        color: 'textStyle',
        fontSize: 18,
        fontWeight: '600',
        top: 10,
        left: 5
    },
    rowtextStyle: {
        color: 'textStyle',
        fontSize: 19,
        fontWeight: 'bold',
        left: 5,
    },
    btrowtextStyle: {
        color: 'textStyle',
        fontSize: 19,
        fontWeight: 'bold',
        left: 5,
        bottom: 10
    },
    rowStyle: {
        flexDirection: 'row',
        top: 5
    },
    boxStyle: {
        borderWidth: 1.5,
        marginLeft: 10,
        marginBottom: 15,
        borderColor: 'lightgrey',
        borderRadius: 5,
        height: 35,
        padding: 5
    },
    spacingStyle: {
        margin: 10
    }
});
