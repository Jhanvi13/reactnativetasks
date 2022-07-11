import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const passWord = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder="Password"
        style={styles.passwordStyle}
      ></TextInput>
    </View>
  );
};
export default passWord;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    top: 0,
  },
  passwordStyle: {
    height: 50,
    width: 280,
    backgroundColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
});
