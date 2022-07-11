import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'SchoolDatabase.db'});
const dbMainPage = props => {
  const [studentName, setName] = useState('');
  const [studentPhone, setPhone] = useState();
  const [studentAddress, setAddress] = useState('');

  useEffect(() => {
    db.transaction(function (execute) {
      execute.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Student_Table'",
        [],
        function (ex, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Student_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Student_Table(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(30), student_phone INT(15), student_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const insertData = () => {
    if (studentName == '' || studentPhone == '' || studentAddress == '') {
      Alert.alert('Please Enter All the Values');
    } else {
      db.transaction(function (exe) {
        exe.executeSql(
          'INSERT INTO Student_Table (student_name, student_phone, student_address) VALUES (?,?,?)',
          [studentName, studentPhone, studentAddress],
          (exe, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Data Inserted Successfully....');
            } else Alert.alert('Failed....');
          },
        );
      });
    }
  };

  const navigateToViewScreen = () => {
    props.navigation.navigate('Datadisp');
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => setName(text)}
        placeholder="Enter Student Name"
        value={studentName}
      />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => setPhone(text)}
        placeholder="Enter Student Phone Number"
        keyboardType={'numeric'}
        value={studentPhone}
      />
      <TextInput
        style={[styles.textInputStyle, {marginBottom: 20}]}
        onChangeText={text => setAddress(text)}
        placeholder="Enter Student Address"
        value={studentAddress}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={insertData}>
          <Text style={styles.touchableOpacityText}>Insert Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={navigateToViewScreen}
        >
          <Text style={styles.touchableOpacityText}>View Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default dbMainPage;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
  textInputStyle: {
    margin: 20,
    fontSize: 20,
    backgroundColor: 'white',
  },
  touchableOpacity: {
    margin: 20,
    height: 50,
    width: 150,
    backgroundColor: 'red',
  },
  touchableOpacityText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
