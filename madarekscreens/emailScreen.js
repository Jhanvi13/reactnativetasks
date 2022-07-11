import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const emailScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Email" style={styles.emailStyle}></TextInput>
    </View>
  );
};
export default emailScreen;
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    top: 0,
  },
  emailStyle: {
    height: 50,
    width: 280,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
  },
});
