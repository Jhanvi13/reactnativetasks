import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

const jParsing = () => {
  useEffect(() => {
    let data = {
      accounting: [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 23,
        },
        {
          firstName: 'Mary',
          lastName: 'Smith',
          age: 32,
        },
      ],
      sales: [
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
      ],
    };
    let a = data.accounting;
    for (let i = 0; i < a.length; i++) {
      console.log(a[i].firstName, a[i].lastName, a[i].age);
    }
    let b = data.sales;
    for (let j = 0; j < b.length; j++) {
      console.log(b[j].firstName, b[j].lastName, b[j].age);
    }
  }, []);

  return <View></View>;
};
export default jParsing;
