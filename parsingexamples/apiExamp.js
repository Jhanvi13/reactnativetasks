import React, {useEffect} from 'react';
import {View} from 'react-native';

const apiExamp = () => {
  useEffect(() => {
    let data = {
      key1: {
        Key2: '',
        key3: [
          {
            name: 'AAAA',
            phoneNo: [
              {
                number: 111,
              },
              {
                number: 222,
              },
            ],
            address: 'Ahmedabad',
          },
          {
            name: 'BBBB',
            phoneNo: [
              {
                number: 333,
              },
              {
                number: 444,
              },
            ],
            address: 'Ahmedabad',
          },
        ],
      },
    };
    let a = data.key1.key3;
    for (let i = 0; i < a.length; i++) {
      console.log(a[i].address);
      for (let j = 0; j < a.length; j++) {
        console.log(a[i].phoneNo[j].number);
      }
    }
  }, []);
  return <View></View>;
};
export default apiExamp;
