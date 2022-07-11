
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { requestUserPermission, NotificationListener } from './pushcontroller'


const Appl = () => {

  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, [])

  return (
    <View>
      <Text style={styles.title}>Helllooooooo</Text>
    </View>
  );
};
export default Appl;

const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  }
});

