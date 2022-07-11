import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, StyleSheet, Text} from 'react-native';
import moment from 'moment';
const apiExmp = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    let data = {
      Searchby: '',
      Filterby: '',
      page: '1',
      limit: '20',
    };
    fetch(
      'http://138.68.152.151:3000/pupilbyschoolid/60ebe2aa2356093d8a40f96b',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization:
            'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmVzaC5sYWt1bUBzaWx2ZXJ0b3VjaC5jb20iLCJmdWxsTmFtZSI6IlNpbHZlciIsIl9pZCI6IjYwM2Y3YWY0ZjVkYzVkNGJiNDg5MmRmMCIsImlhdCI6MTYxNTg5NTgyN30.gCsd2gRA3qtHX7EQbi-b4Xm6nETAg0MjjojD_q8fO6Q',
        },
        body: JSON.stringify(data),
      },
    )
      .then(res => res.json())
      .then(res => {
        console.log('dfdsfds', res);
        setList(res.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  const Item = ({item}) => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.profileImage}
        source={require('../src/visualaids/kang.jpeg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          {item.FirstName == '' ? '-' : item.FirstName}
        </Text>
        <Text style={styles.textStyle}>
          {item.LastName == '' ? '-' : item.LastName}
        </Text>
        <Text style={styles.textStyle}>
          {item.GroupName == '' ? '-' : item.GroupName}
        </Text>
        <Text style={styles.textStyle}>
          {item.Dob == '' ? '-' : moment(item.Dob).format('DD/MM/yyyy')}
        </Text>
      </View>
      <View style={styles.iconImages}>
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/purpledot.jpeg')}
        />
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/yellowdot.png')}
        />
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/goldenstar.jpeg')}
        />
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/silverstar.png')}
        />
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/yellowstar.jpeg')}
        />
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/right-arrow.png')}
        />
      </View>
    </View>

    //<Text style={styles.listText}>{item.FirstName}{'  '}{item.LastName}{'  '}{item.GroupName}{'  '}{item.Dob}</Text>
  );
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.List}
        data={List}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default apiExmp;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  iconImages: {
    flexDirection: 'row',
  },
  List: {
    borderWidth: 1,
    height: '100%',
    width: '100%',
  },
  listText: {
    marginTop: 10,
    fontSize: 16,
    backgroundColor: 'white',
    height: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  imageContainer: {},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 50 / 2,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '600',
    width: 100,
    height: 20,
    textAlign: 'center',
    top: 25,
  },
  iconImage: {
    height: 40,
    width: 40,
    margin: 10,
  },
});
