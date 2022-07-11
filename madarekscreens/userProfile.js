import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, StatusBar, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Personaldetails from './personaldetails';
import Otherdetails from './otherdetails';
import Expertspage from './expertspage';

const Tab = createMaterialTopTabNavigator();


const userProfile = props => {
  
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#800080"
                translucent={false}
            ></StatusBar>
            <View style={styles.headerStyle}>
                <View>
                    <Image
                        style={styles.leftArrowImage}
                        source={require('../src/visualaids/arrow-left.png')}
                    />
                </View>
                <View style={styles.usersign}>
                    <Text style={styles.textStyle}>User Profile</Text>
                </View>
                <View>
                    <Image
                        style={styles.editimg}
                        source={require('../src/visualaids/edit.png')}
                    />
                </View>
            </View>
            <View style={styles.profileTabs}>
                <Tab.Navigator
                    initialRouteName="Personaldetails"
                    screenOptions={{
                        tabBarLabelStyle: { fontSize: 11.5 ,textAlign:'left',fontWeight:'450' },
                        tabBarActiveTintColor:"black",
                        tabBarIndicatorStyle:{ backgroundColor: 'black' },
                        tabBarItemStyle:{ paddingRight:15}
                    }}
                >
            <Tab.Screen name={"Personaldetails"} children={() => <Personaldetails />} />
            <Tab.Screen name={"Otherdetails"} children={() => <Otherdetails />} />
            <Tab.Screen name={"Expertspage"} children={() => <Expertspage />} />
                </Tab.Navigator>
            </View>

        </View>
    );
};

export default userProfile;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F5F7FB'
    },
    headerStyle: {
        height: 60,
        backgroundColor: '#8C67A9',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between',

    }, leftArrowImage: {
        height: 15,
        width: 25,
        top: 23,
        left: 20
    },
    usersign: {
        alignSelf: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 24,
        height: 45,
        top: 7,
        color: 'white',
        fontWeight: '370',
    },
    editimg: {
        height: 20,
        width: 20,
        top: 20,
        right: 15
    },
    profileTabs: {
        flexDirection: 'row',
       justifyContent:'space-evenly',
        backgroundColor: 'white',
        width:409,
       height:800,
    },
    cardsStyle: {
        top: 45
    },
    othercardsStyle: {
        bottom: 30,
        marginLeft: 5,
        marginRight: 5
    },
    selTabsText: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        borderBottomWidth: 3,
    }

});
