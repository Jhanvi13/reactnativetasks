import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

const parsingEx = () => {
  useEffect(() => {
    let data = [
      {
        firstName: 'Sally',
        lastName: 'Green',
        age: 27,
      },
      {
        firstName: 'Jim',
        lastName: 'Galley',
        age: 41,
      },
      {
        firstName: 'Sally',
        lastName: 'Green',
        age: 27,
      },
      {
        firstName: 'Jim',
        lastName: 'Galley',
        age: 41,
      },
      {
        firstName: 'Sally',
        lastName: 'Green',
        age: 27,
      },
      {
        firstName: 'Jim',
        lastName: 'Galley',
        age: 41,
      },
      {
        firstName: 'Sally',
        lastName: 'Green',
        age: 27,
      },
      {
        firstName: 'Jim',
        lastName: 'Galley',
        age: 41,
      },
    ];
    let a = data;
    for (let i = 0; i < data.length; i++) {
      console.log(a[i].firstName, a[i].lastName, a[i].age);
    }
  }, []);

  return <View></View>;
};
export default parsingEx;
