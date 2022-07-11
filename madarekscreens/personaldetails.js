import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Personaldetails = () => {


    return (

        <View style={styles.mainContainer}>
            <View style={styles.personalCard}>
                <Image style={styles.userprofile} source={require('../src/visualaids/profilepicture.png')}></Image>
                <View style={styles.bottomStyle}>
                    <View style={styles.topSpacingStyle}>
                        <Text style={styles.labeltext}>User Type</Text>
                        <Text style={styles.textStyle}>Expert</Text>
                    </View>
                    <View style={[styles.spacingStyle, styles.rowStyle]}>
                        <View style={styles.internalspacingStyle}>
                            <Text style={styles.labeltext}>Name</Text>
                            <Text style={styles.textStyle}>Amanpreet</Text>
                        </View>
                        <View style={styles.internalspacingStyle}>
                            <Text style={styles.labeltext}>Last Name</Text>
                            <Text style={styles.textStyle}>Shrivastav</Text>
                        </View>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Organization Name</Text>
                        <Text style={styles.textStyle}>Reliance Industries Ltd.</Text>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Job Title (optional)</Text>
                        <Text style={styles.textStyle}>Chief Marketing officer</Text>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Email ID</Text>
                        <Text style={styles.textStyle}>AmanpreetSrivastav005@gmail.com</Text>
                    </View>
                    <View style={[styles.spacingStyle, styles.rowStyle]}>
                        <View style={styles.internalspacingStyle}>
                            <Text style={styles.labeltext}>Country</Text>
                            <Text style={styles.textStyle}>India</Text>
                        </View>
                        <View style={styles.internalspacingStyle}>
                            <Text style={styles.labeltext}>City</Text>
                            <Text style={styles.textStyle}>Banglore</Text>
                        </View>
                    </View>
                    <View style={styles.spacingStyle}>
                        <Text style={styles.labeltext}>Mobile Number</Text>
                        <Text style={styles.textStyle}>+971 90665 85235</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Personaldetails;

const styles = StyleSheet.create({
    mainContainer: {
        top:55,
        marginRight:10
    },
    personalCard: {
        alignContent: 'center',
        shadowColor: 'black',
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 2,
        elevation: 5,
        borderRadius: 20,
        width: 350,
        height: 570,
        marginTop: 30,
        backgroundColor: '#FFFFFF',
    },
    userprofile: {
        alignSelf: 'center',
        bottom: 70,
        height: 160,
        width: 150
    },
    labeltext: {
        color: '#848484',
        fontSize: 13,
        top: 5,
        left: 5
    },
    textStyle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        top: 7,
        left: 5,

    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    spacingStyle: {
        margin: 10,
        top: 15
    },
    topSpacingStyle: {
        left: 10,
        top: 10
    },
    bottomStyle: {
        bottom: 70
    },
    internalspacingStyle: {
        marginRight: 50,

    }
});
