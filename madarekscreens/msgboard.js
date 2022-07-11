import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, StyleSheet, Text} from 'react-native';
import moment from 'moment';
const msgBoard = () => {
  const [List, setList] = useState([]);

  useEffect(() => {
    let data = {
      Searchby: '',
      Filterby: '',
    };
    fetch('http://138.68.152.151:3000/pupilglobalmessaging/5263410236', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization:
          'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhhcmVzaC5sYWt1bUBzaWx2ZXJ0b3VjaC5jb20iLCJmdWxsTmFtZSI6IlNpbHZlciIsIl9pZCI6IjYwM2Y3YWY0ZjVkYzVkNGJiNDg5MmRmMCIsImlhdCI6MTYxNTQ0MDIwM30.Z09jet4FD1RVgZfr2y6KMEFsMAtlAdcdDJ_nY1y0OBk',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        // console.log('Response:', res);
        setList(res.data);
      })
      .catch(err => {
        // console.log('Error:', err);
      });
    console.log('list', List);
  }, []);
  const Item = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.txtcmpContainer}>
        <View>
          <Text style={styles.dateText}>
            {moment(item.CreatedDate).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
            {item.Message}
          </Text>
        </View>
        <View>
          {item.Status == 'Sent' ? (
            <Text style={styles.sentstatusText}>{item.Status}</Text>
          ) : (
            <Text style={styles.draftstatusText}>{item.Status}</Text>
          )}
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.iconImage}
          source={require('../src/visualaids/right-arrow.png')}
        />
      </View>
    </View>
  );
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList style={styles.List} data={List} renderItem={renderItem} />
    </View>
  );
};

export default msgBoard;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  List: {
    height: '100%',
    width: '100%',
  },
  titleText: {
    alignContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: 'white',
    margin: 10,

    borderRadius: 15,
  },
  txtcmpContainer: {
    margin: 10,
    width: 200,
    height: 150,
  },
  iconImage: {
    height: 20,
    width: 20,
    margin: 30,
    marginTop: 40,
    alignSelf: 'center',
  },
  imgContainer: {
    right: 0,
    position: 'absolute',
  },
  sentstatusText: {
    backgroundColor: 'lightblue',
    width: 35,
    marginTop: 10,
    color: 'blue',
    fontWeight: '600',
    textAlign: 'center',
  },
  draftstatusText: {
    backgroundColor: '#f4c430',
    width: 40,
    height: 20,
    marginTop: 10,
    color: 'darkorange',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  dateText: {
    fontWeight: '800',
  },
});
