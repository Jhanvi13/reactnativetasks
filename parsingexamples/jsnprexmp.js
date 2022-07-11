import React, {useEffect} from 'react';
import {View} from 'react-native';

const jPrsngexmp = () => {
  useEffect(() => {
    let data = {
      isbn: '123-456-222',
      author: {
        lastname: 'Doe',
        firstname: 'Jane',
      },
      editor: {
        lastname: 'Smith',
        firstname: 'Jane',
      },
      title: 'The Ultimate Database Study Guide',
      category: ['Non-Fiction', 'Technology'],
    };

    console.log('Firstname:', data.author.firstname);
    console.log('lastname:', data.author.lastname);
    console.log('Firstname:', data.editor.firstname);
    let a = data.category;
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
    }
  }, []);

  return <View></View>;
};
export default jPrsngexmp;
