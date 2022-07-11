import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const oneTimePassword = () => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <TextInput style={styles.otpStyle}></TextInput>
        <TextInput style={styles.otpStyle}></TextInput>
        <TextInput style={styles.otpStyle}></TextInput>
        <TextInput style={styles.otpStyle}></TextInput>
        <TextInput style={styles.otpStyle}></TextInput>
      </View>
    </View>
  );
};
export default oneTimePassword;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpStyle: {
    height: 35,
    width: 35,
    borderWidth: 1,
    backgroundColor: 'white',
    margin: 10,
    marginTop: 30,
  },
});
