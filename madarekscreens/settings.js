import React, { useState } from 'react';
import { View, StyleSheet, Switch, Image, TouchableOpacity, StatusBar, Text } from 'react-native';

const settingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [issecEnabled, setIssecEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitchTwo = () => setIssecEnabled(previousState => !previousState);

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
        <View style={styles.settingsign}>
          <Text style={styles.textStyle}>Settings</Text>
        </View>
      </View>
      <View style={styles.settings}>
      <View style={styles.settingOptions}>
        <Image style={styles.img} source={require('../src/visualaids/lock.png')} />
        <TouchableOpacity ><Text style={styles.optionText}>Change Password</Text></TouchableOpacity>
       <TouchableOpacity ><Image style={styles.arrowimg} source={require('../src/visualaids/arrowdown.png')} /></TouchableOpacity>
      </View>
      <View style={styles.settingOptions}>
        <Image style={styles.img} source={require('../src/visualaids/language.png')} />
        <TouchableOpacity ><Text style={styles.optionText}>Language</Text></TouchableOpacity>
        <TouchableOpacity ><Text style={styles.engText}>English</Text></TouchableOpacity>
      </View>
      <View style={styles.settingOptions}>
        <Image style={styles.img} source={require('../src/visualaids/bell.png')} />
        <TouchableOpacity ><Text style={styles.optionText}>Notifications</Text></TouchableOpacity>
        <Switch
        trackColor={{ false: "darkgrey", true: "#CBC3E3" }}
        thumbColor={isEnabled ? "#8C67A9" : "lightgrey"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      </View>
      <View style={styles.settingOptions}>
        <Image style={styles.img} source={require('../src/visualaids/messages.png')} />
        <TouchableOpacity ><Text style={styles.optionText}>Messages</Text></TouchableOpacity>
        <Switch
        trackColor={{ false: "darkgrey", true: "#CBC3E3" }}
        thumbColor={isEnabled ? "#8C67A9" : "lightgrey"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchTwo}
        value={issecEnabled}
        style={styles.switch}
      />
      </View>
      <View style={styles.settingOptions}>
        <Image style={styles.img} source={require('../src/visualaids/aboutapp.png')} />
        <TouchableOpacity ><Text style={styles.optionText}>About App</Text></TouchableOpacity>
        <TouchableOpacity ><Image style={styles.arrowimg} source={require('../src/visualaids/arrowdown.png')} /></TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default settingScreen;

const styles = StyleSheet.create({
  headerStyle: {
    height: 60,
    backgroundColor: '#8C67A9',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    
  },
  leftArrowImage: {
    height: 20,
    width: 30,
    top: 21,
    left: 20
  },
  settingsign: {
    alignSelf: 'center',
    right: 135
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '500',
  },
  settingOptions: {
    flexDirection: 'row',
    width:350,
    alignSelf:'center',
    margin:10,
    marginTop:10,
    borderRadius:10,
    height:70,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor:'white'
  },
  mainContainer:{
  backgroundColor:'#F5F7FB'
  },
  img:{
    height:32,
    width:28,
    padding:10,
    margin:10,
    top:10,
    left:10
  },
  optionText:{
    fontSize:20,
    fontWeight:'bold',
    top:20,
    left:25,
    width:165
  },
  arrowimg:{
    height:15,
    width:15,
    margin:10,
    left:90,
    top:16,
    transform: [{ rotate: '90deg' }]
  },
  settings:{
    top:20
  },
  engText:{
    color:'#8C67A9',
    fontSize:18,
    fontWeight:'bold',
    top:22,
    left:65
  },
  switch:{
    left:80
  }
});
