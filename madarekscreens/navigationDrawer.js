import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, DrawerLayoutAndroid, ScrollView, Button } from 'react-native';

const navigationdrawerScreen = () => {

    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState("left");
    const [ideavisiblity, setideavisiblity] = useState(false);

    const setVisiblity = () => {
        setideavisiblity(!ideavisiblity);
    }

    const navigationView = () => (
        <View style={styles.navigationContainer}>
            <View style={styles.navigationtopContainer}>
                <View style={styles.madarekCon}>
                   <TouchableOpacity onPress={() => drawer.current.closeDrawer()}><Image style={styles.closeImage} source={require('../src/visualaids/closecross.png') }></Image></TouchableOpacity> 
                    <Image style={styles.madarekImage} source={require('../src/visualaids/madarek.png')}></Image>
                </View>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileImage}
                        source={require('../src/visualaids/profileimg.png')}
                    />
                    <View style={styles.userprofile}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <Text style={styles.userName}>Abhimanyu Gayakwad</Text>
                    </View>
                </View>
                <View style={styles.dashboardButtons}>
                    <TouchableOpacity ><Text style={styles.buttons}>Dashboard</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.buttons}>Submit Idea</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.navigationbottomContainer}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.dashboardOptions}>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/home.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>Home</Text></TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/ideas.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>Ideas</Text></TouchableOpacity>
                            {ideavisiblity ?
                                (
                                    <TouchableOpacity onPress={() => setVisiblity()} ><Image style={styles.arrowimgchange} source={require('../src/visualaids/arrowdown.png')} /></TouchableOpacity>

                                )
                                :
                                (
                                    <TouchableOpacity onPress={() => setVisiblity()} ><Image style={styles.arrowimg} source={require('../src/visualaids/arrowdown.png')} /></TouchableOpacity>

                                )
                            }
                        </View>
                        {ideavisiblity ?
                            (
                                <View style={styles.suboptions}>
                                    <TouchableOpacity ><Text style={styles.suboptionText}>Popular ideas</Text></TouchableOpacity>
                                    <TouchableOpacity ><Text style={styles.suboptionText}>Latest ideas</Text></TouchableOpacity>
                                    <TouchableOpacity ><Text style={styles.suboptionText}>Madarek Spotlight</Text></TouchableOpacity>
                                    <TouchableOpacity ><Text style={styles.suboptionText}>Winning ideas</Text></TouchableOpacity>
                                </View>
                            )
                            : null
                        }
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/challenges.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>Challenges</Text></TouchableOpacity>
                            <TouchableOpacity ><Image style={styles.arrowimg} source={require('../src/visualaids/arrowdown.png')} /></TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/users.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>Experts</Text></TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/enterprises.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>Enterprises</Text></TouchableOpacity>
                            <TouchableOpacity ><Image style={styles.arrowimg} source={require('../src/visualaids/arrowdown.png')} /></TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle}  ><Image style={styles.img} source={require('../src/visualaids/howitworks.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>How it Works</Text></TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/partners.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>Partners</Text></TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity style={styles.imgstyle} ><Image style={styles.img} source={require('../src/visualaids/myaccount.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.optionText}>My Account</Text></TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.bottomdrawer}>
                        <View style={styles.bottomdraweropt}>
                            <TouchableOpacity ><Image style={styles.bdimg} source={require('../src/visualaids/settingicon.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.bdoptionText}>Settings</Text></TouchableOpacity>
                        </View>
                        <View style={styles.bottomdraweropt}>
                            <TouchableOpacity ><Image style={styles.bdimg} source={require('../src/visualaids/logout.png')} /></TouchableOpacity>
                            <TouchableOpacity ><Text style={styles.bdoptionText}>Logout</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={350}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}
        >
            <View style={styles.container}>
                <Button
                    title="Open drawer"
                    onPress={() => drawer.current.openDrawer()}
                />
            </View>
        </DrawerLayoutAndroid>
    );
};

export default navigationdrawerScreen;

const styles = StyleSheet.create({
    navigationtopContainer: {
        backgroundColor: '#F9B52B',
        height: 255
    },
    navigationbottomContainer: {
        height: 550
    },
    imgstyle:{
       padding:5
    },
    suboptions: {
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 10,
    },
    suboptionText: {
        fontSize: 20,
        paddingLeft: 25
    },
    madarekImage: {
        height: 50,
        width: 280,
        marginLeft: 20,
        backgroundColor: '#F9B52B',
        bottom: 25
    },
    closeImage: {
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
        margin: 10,
        marginTop: 15
    },
    profileImage: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        borderWidth: 3,
        borderColor: 'white',
        top: 15
    },
    userprofile: {
        left: 10,
        top: 20,
    },
    userName: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    profileContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'white',
        width: 300,
        marginLeft: 20,
        paddingTop: 10
    },
    welcomeText: {
        fontSize: 19,
        color: 'white',
        fontWeight: '500'
    },
    dashboardButtons: {
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 60,
        flexDirection: 'row'
    },
    container:{
     height:200,
     width:200,
     alignSelf:'center',
     top:100
    },
    buttons: {
        borderWidth: 1.5,
        margin: 5,
        borderColor: 'white',
        borderRadius: 5,
        height: 35,
        width: 100,
        color: 'white',
        textAlign: 'center',
        padding: 5,
        fontWeight: '500'
    },
    option: {
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        borderBottomColor: 'lightgrey',
        width: 300,
        marginLeft: 20
    },
    img: {
        height: 35,
        width: 35,
        margin: 20,
        marginLeft: 10
    },
    optionText: {
        fontSize: 25,
        color: '#323232',
        fontWeight: '400',
        marginTop: 25,
        width: 150
    },
    arrowimg: {
        height: 15,
        width: 15,
        marginLeft: 60,
        marginTop: 34,
        transform: [{ rotate: '180deg' }]
    },
    arrowimgchange: {
        height: 15,
        width: 15,
        marginLeft: 60,
        marginTop: 34,

    },
    scrollview: {
        height: '100%'
    },
    bottomdrawer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#F5F7FB'
    },
    bdimg: {
        height: 30,
        width: 30,
        margin: 5,
        left: 15,
        top: 10
    },
    bdoptionText: {
        height: 30,
        width: 100,
        margin: 10,
        top: 10,
        left: 10,
        justifyContent: 'center'
    },
    bottomdraweropt: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
});
