import {useLinkProps} from '@react-navigation/native';
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

const Datadisp = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setItems(temp);

        if (results.rows.length >= 1) {
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      });
    });
  }, []);

  const navigateToEditScreen = (id, name, phoneNumber, address) => {
    props.navigation.navigate('EditData', {
      studentId: id,
      studentName: name,
      studentPhone: phoneNumber,
      studentAddress: address,
    });
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View key={item.student_id} style={styles.itemView}>
            <TouchableOpacity
              onPress={() =>
                navigateToEditScreen(
                  item.student_id,
                  item.student_name,
                  item.student_phone,
                  item.student_address,
                )
              }
            >
              <Text style={styles.itemsStyle}> Id: {item.student_id} </Text>
              <Text style={styles.itemsStyle}> Name: {item.student_name} </Text>
              <Text style={styles.itemsStyle}>
                {' '}
                Phone Number: {item.student_phone}{' '}
              </Text>
              <Text style={styles.itemsStyle}>
                {' '}
                Address: {item.student_address}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
export default Datadisp;
const styles = StyleSheet.create({
  itemsStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    backgroundColor: 'white',
  },
  itemView: {
    padding: 20,
  },
});
