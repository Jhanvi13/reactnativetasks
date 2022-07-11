import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const phoneNumber = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerOne}>
        <TextInput
          keyboardType="numeric"
          placeholder="+"
          style={styles.extensionStyle}
        ></TextInput>
        <TextInput
          keyboardType="numeric"
          placeholder="Phone Number"
          style={styles.phoneNumberStyle}
        ></TextInput>
      </View>
    </View>
  );
};
export default phoneNumber;
const styles = StyleSheet.create({
  containerOne: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 0,
  },
  extensionStyle: {
    height: 50,
    width: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    marginRight: 10,
  },
  phoneNumberStyle: {
    height: 50,
    width: 230,
    backgroundColor: 'white',
    borderWidth: 1,
  },
});
