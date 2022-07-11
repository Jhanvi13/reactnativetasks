import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'SchoolDatabase.db'});

const EditData = props => {
  const {route, navigation} = props;
  const [studentId, setID] = useState('');
  const [studentName, setName] = useState('');
  const [studentPhone, setPhone] = useState();
  const [studentAddress, setAddress] = useState('');

  useEffect(() => {
    setID(route.params.studentId);
    setName(route.params.studentName);
    setPhone(route.params.studentPhone.toString());
    setAddress(route.params.studentAddress);
  }, []);

  const editData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Student_Table set student_name=?, student_phone=? , student_address=? where student_id=?',
        [studentName, studentPhone, studentAddress, studentId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Record Updated Successfully...');
          } else Alert.alert('Error');
        },
      );
    });
  };

  const deleteRecord = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Student_Table where student_id=?',
        [studentId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Done',
              'Record Deleted Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Datadisp'),
                },
              ],
              {cancelable: false},
            );
          }
        },
      );
    });
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
        style={styles.textInputStyle}
        onChangeText={text => setAddress(text)}
        placeholder="Enter Student Address"
        value={studentAddress}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={editData}>
          <Text style={styles.touchableOpacityText}> Edit Record </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={deleteRecord}
        >
          <Text style={styles.touchableOpacityText}>Delete Record </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EditData;
const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: 'white',
    margin: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  touchableOpacityText: {
    textAlign: 'center',
    fontSize: 20,
  },
  touchableOpacity: {
    height: 50,
    width: 150,
    backgroundColor: 'white',
    margin: 20,
    borderWidth: 1,
  },
});
