import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PhoneNumber from './phoneNumber';
import EmailScreen from './emailScreen';
import OneTimePassword from './oneTimePassword';
import PassWord from './passWord';

const SigningupScreen = () => {
  const [visiblity, setvisiblity] = useState(false);
  const [isPassword, setPassword] = useState(false);

  const onPhoneNumberButtonClick = () => {
    setvisiblity(!visiblity);
  };
  const onEmailButtonClick = () => {
    setvisiblity(!visiblity);
  };
  const onTextClick = () => {
    setPassword(!isPassword);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerOne}>
        <TouchableOpacity
          style={styles.phoneNumberButton}
          onPress={() => onPhoneNumberButtonClick()}
        >
          <Text style={styles.textStyle}>Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.emailIdButton}
          onPress={() => onEmailButtonClick()}
        >
          <Text style={styles.textStyle}>Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.componentContainer}>
        {visiblity ? (
          <PhoneNumber visiblityStatus={visiblity} />
        ) : (
          <EmailScreen visiblityStatus={visiblity} />
        )}
        {!isPassword ? (
          <OneTimePassword visiblityStatus={visiblity} />
        ) : (
          <PassWord visiblityStatus={visiblity} />
        )}
        <View style={styles.otptextContainer}>
          <Text style={styles.otpTextStyle} onPress={() => onTextClick()}>
            {isPassword ? 'Use Password' : 'Use OTP'}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SigningupScreen;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: '90%',
    width: '80%',
    top: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'blck',
    elevation: 10,
    shadowRadius: 20,
    shadowOpacity: 1,
    borderRadius: 20,
  },
  containerOne: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
  otptextContainer: {
    marginLeft: 17,
    justifyContent: 'center',
    width: 315,
    height: 20,
  },
  componentContainer: {
    height: '50%',
    width: 350,
    alignSelf: 'center',
  },
  phoneNumberButton: {
    height: 50,
    width: 120,
    backgroundColor: 'lightblue',
    alignContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: 'black',
    shadowOffset: 10,
    shadowOpacity: 10,
  },
  emailIdButton: {
    height: 50,
    width: 120,
    backgroundColor: 'lightblue',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  textStyle: {
    alignSelf: 'center',
    top: 15,
  },
  otpTextStyle: {
    fontSize: 17,
    color: 'black',
    alignSelf: 'flex-end',
    right: 10,
    position: 'absolute',
  },
});
