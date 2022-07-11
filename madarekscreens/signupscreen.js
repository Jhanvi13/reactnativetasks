import React, {useState, useRef} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  FlatList,
} from 'react-native';
import RadioGroup from 'react-native-radio-button-group';
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';

const signupscreen = () => {
  const DATA = [
    {code: 'AP', name: '11'},
    {code: 'AR', name: '22'},
    {code: 'GJ', name: '33'},
    {code: 'MH', name: '44'},
    {code: 'DI', name: '55'},
    {code: 'GA', name: '66'},
  ];

  const lastNameTextInput = useRef();
  const phoneNumberExtensionTextInput = useRef();
  const phoneNumberTextInput = useRef();
  const emailIdTextInput = useRef();
  const passWordTextInput = useRef();
  const reTypePasswordTextInput = useRef();
  const submitButtonInput = useRef();

  const [firstNameText, setfText] = useState('');
  const [lastNameText, setlText] = useState('');
  const [phoneNumberExtensionText, setphoneNumberExtensionText] = useState('');
  const [phoneNumberText, setphoneNumberText] = useState('');
  const [emailIdText, setemailIdText] = useState('');
  const [passWordText, setpassWordText] = useState('');
  const [reTypePasswordText, setreTypePasswordText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureReTypeTextEntry, setSecureReTypeTextEntry] = useState(true);

  const showPassImage = require('../src/visualaids/hideicon.jpg');
  const hidePassImage = require('../src/visualaids/showpass.jpg');

  const onPassPress = () => {
    console.log('Hello');
    setSecureTextEntry(!secureTextEntry);
  };
  const onReTypePassPress = () => {
    setSecureReTypeTextEntry(!secureReTypeTextEntry);
  };

  const toCheckIfTextInputIsEmpty = () => {
    if (firstNameText == '') {
      Alert.alert('Please Enter first name');
    } else if (lastNameText == '') {
      Alert.alert('Please Enter last name');
    } else if (phoneNumberExtensionText == '') {
      Alert.alert('Please Enter Phone Extension');
    } else if (phoneNumberText == '') {
      Alert.alert('Please Enter Phone number');
    } else if (emailIdText == '') {
      Alert.alert('Please Enter email ');
    } else if (passWordText == '') {
      Alert.alert('Please Enter Password');
    } else if (reTypePasswordText == '') {
      Alert.alert('Please Re Enter Password');
    } else {
      Alert.alert('All Text Inputs are Filled.');
    }

    if (phoneNumberText.length < 10) {
      console.log('Please enter a 10 digit phone number.');
    }
  };
  const onCodeSelected = value => {
    setCodeNum(value);
    setphoneExtensionCodeList([]);
  };

  const toValidatePassWord = () => {
    if (passWordText != reTypePasswordText) {
      Alert.alert('Password does not match');
    }
  };
  const toValidatePassWordType = x => {
    let regpwd =
      /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
    if (regpwd.test(x) === false) {
      Alert.alert(
        'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
      );
    } else {
      Alert.alert('Password Updated!');
    }
  };

  const validate = a => {
    let reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (reg.test(a) === false) {
      Alert.alert('Email is Not Correct');
      return false;
    } else {
      Alert.alert('Email is Correct');
    }
  };

  const onSubmitButtonClick = () => {
    console.log(firstNameText);
    console.log(lastNameText);
    console.log(phoneNumberExtensionText);
    console.log(phoneNumberText);
    console.log(emailIdText);
    console.log(passWordText);
    console.log(reTypePasswordText);
  };

  var radiogroup_options = [
    {id: 0, label: 'Individual'},
    {id: 1, label: 'Corporate'},
    {id: 2, label: 'Subject Expert'},
    {id: 3, label: 'Partner'},
  ];
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F9B52B"
        translucent={false}
      ></StatusBar>
      <View style={styles.headerStyle}>
        <View>
          <Image
            style={styles.leftArrowImage}
            source={require('../src/visualaids/arrow-left.png')}
          />
        </View>
        <View style={styles.signUpsign}>
          <Text style={styles.textStyle}>Sign Up</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.centerContainer}>
          <View style={styles.inputSections}>
            <View style={styles.radioGroupSection}>
              <Text style={styles.textLabelStyle}>Selected user type</Text>
              <RadioGroup
                horizontal
                options={radiogroup_options}
                onChange={option => this.setState({selectedOption: option})}
              />
            </View>
            <View style={styles.inputSectionsColumnOne}>
              <View style={styles.inputSectionsColumnOneLeft}>
                <View style={styles.inputSectionsColumnOneLeftOne}>
                  <Text style={styles.textLabelStyle}>First name</Text>
                  <Text style={styles.asteriskStyle}>*</Text>
                </View>
                <TextInput
                  placeholder="First Name"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    lastNameTextInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  style={styles.firstName}
                  onChangeText={firstNameText => setfText(firstNameText)}
                  Value={{firstNameText}}
                ></TextInput>
              </View>
              <View style={styles.inputSectionsColumnOneRight}>
                <View style={styles.inputSectionsColumnOneRightOne}>
                  <Text style={styles.textLabelStyle}>Last Name</Text>
                  <Text style={styles.asteriskStyle}>*</Text>
                </View>
                <TextInput
                  ref={lastNameTextInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    phoneNumberExtensionTextInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  placeholder="LastName"
                  style={styles.LastName}
                  onChangeText={lastNameText => setlText(lastNameText)}
                  Value={lastNameText}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputSectionsColumnTwo}>
              <View style={styles.inputSectionsColumnTwoPartOne}>
                <Text style={styles.textLabelStyle}>Phone Number</Text>
                <Text style={styles.asteriskStyle}>*</Text>
              </View>
              <View style={styles.inputSectionsColumnTwoPartTwo}>
                <Autocomplete
                  keyboardType="numeric"
                  placeholder="+"
                  ref={phoneNumberExtensionTextInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    phoneNumberTextInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  style={styles.phoneNumberExtension}
                  onChangeText={phoneNumberExtensionText =>
                    setphoneNumberExtensionText(phoneNumberExtensionText)
                  }
                  Value={phoneNumberExtensionText}
                  data={DATA}
                  displayKey="name"
                ></Autocomplete>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Phone Number"
                  ref={phoneNumberTextInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    emailIdTextInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  style={styles.phoneNumber}
                  onChangeText={phoneNumberText =>
                    setphoneNumberText(phoneNumberText)
                  }
                  Value={phoneNumberText}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputSectionsColumnThree}>
              <Text style={styles.textLabelStyle}>Email ID</Text>
              <View style={styles.inputSectionsColumnThreeOne}>
                <TextInput
                  placeholder="EmailId"
                  ref={emailIdTextInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passWordTextInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  style={styles.emailId}
                  onChangeText={emailIdText => {
                    setemailIdText(emailIdText);
                  }}
                  value={emailIdText}
                ></TextInput>
              </View>
            </View>
            <View style={styles.inputSectionsColumnFour}>
              <View style={styles.inputSectionsColumnFourOne}>
                <Text style={styles.textLabelStyle} secureTextEntry={true}>
                  Password
                </Text>
                <Text style={styles.asteriskStyle}>*</Text>
              </View>
              <View style={styles.inputSectionsColumnFourTwo}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={secureTextEntry}
                  ref={passWordTextInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    reTypePasswordTextInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  style={styles.passWord}
                  onChangeText={passWordText => setpassWordText(passWordText)}
                  Value={passWordText}
                ></TextInput>
                <TouchableOpacity
                  style={styles.imagePassword}
                  onPress={() => {
                    onPassPress();
                  }}
                >
                  <Image
                    source={secureTextEntry ? showPassImage : hidePassImage}
                    style={styles.showPasswordImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputSectionsColumnFive}>
              <View style={styles.inputSectionsColumnFivepartOne}>
                <Text style={styles.textLabelStyle}>Re-enter Password</Text>
                <Text style={styles.asteriskStyle}>*</Text>
              </View>
              <View style={styles.inputSectionsColumnFivePartTwo}>
                <TextInput
                  style={styles.reTypePassWord}
                  placeholder="Re Type Password"
                  secureTextEntry={secureReTypeTextEntry}
                  ref={reTypePasswordTextInput}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    submitButtonInput.current.focus();
                  }}
                  blurOnSubmit={false}
                  onChangeText={reTypePasswordText =>
                    setreTypePasswordText(reTypePasswordText)
                  }
                  value={reTypePasswordText}
                ></TextInput>
                <TouchableOpacity
                  style={styles.imagePassword}
                  onPress={() => {
                    onReTypePassPress();
                  }}
                >
                  <Image
                    source={
                      secureReTypeTextEntry ? showPassImage : hidePassImage
                    }
                    style={styles.showPasswordImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputSectionsColumnSix}>
              <TouchableOpacity
                ref={submitButtonInput}
                style={styles.signUpButtonStyle}
                activeOpacity={0.5}
                onPress={() => {
                  onSubmitButtonClick();
                  toCheckIfTextInputIsEmpty();
                  toValidatePassWord();
                  validate(emailIdText);
                  toValidatePassWordType(passWordText);
                }}
              >
                <Text style={styles.submitButtonTextStyle}> SUBMIT </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default signupscreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    flex: 0.5,
    backgroundColor: '#F9B52B',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
  leftArrowImage: {
    height: 25,
    width: 32,
    marginLeft: '20%',
    marginTop: '10%',
  },
  signUpsign: {
    alignSelf: 'center',
    marginRight: '34%',
  },
  centerContainer: {
    alignContent: 'center',
    shadowColor: 'black',
    alignSelf: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 2,
    elevation: 10,
    borderRadius: 7,
    width: '95%',
    height: '100%',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
  },
  inputSections: {
    height: '100%',
  },
  radioGroupSection: {
    marginTop: 20,
    marginLeft: 10,
  },
  inputSectionsColumnOne: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  inputSectionsColumnOneLeft: {
    flexDirection: 'column',
    width: '48%',
  },
  inputSectionsColumnOneLeftOne: {
    flexDirection: 'row',
  },
  inputSectionsColumnOneRight: {
    flexDirection: 'column',
    width: '48%',
  },
  inputSectionsColumnOneRightOne: {
    flexDirection: 'row',
  },
  firstName: {
    height: 50,
    fontSize: 18,
    width: '100%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  LastName: {
    height: 50,
    fontSize: 18,
    width: '100%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputSectionsColumnTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'column',
  },
  inputSectionsColumnTwoPartOne: {
    flexDirection: 'row',
  },
  inputSectionsColumnTwoPartTwo: {
    flexDirection: 'row',
  },
  inputSectionsColumnFivePartTwo: {
    flex: 1,
    flexDirection: 'column',
  },
  phoneNumberExtension: {
    height: 50,
    fontSize: 18,
    width: '20%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  phoneNumber: {
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 90,
    width: '74.5%',
    alignSelf: 'center',
    position: 'absolute',
  },
  inputSectionsColumnThree: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  emailId: {
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },
  inputSectionsColumnFour: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  inputSectionsColumnFourOne: {
    flexDirection: 'row',
  },
  passWord: {
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },
  inputSectionsColumnFive: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  inputSectionsColumnFivepartOne: {
    flexDirection: 'row',
  },
  reTypePassWord: {
    height: 50,
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputSectionsColumnSix: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  signUpButtonStyle: {
    paddingTop: 15,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 30,
    backgroundColor: '#F9B52B',
    borderRadius: 9,
    height: 50,
  },
  submitButtonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textLabelStyle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#646464',
  },
  asteriskStyle: {
    color: 'red',
  },
  showPasswordImage: {
    marginRight: 20,
    height: 25,
    width: 25,
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
    bottom: 20,
    borderStartColor: 'blue',
    backgroundColor: 'yellow',
  },
  imagePassword: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});
