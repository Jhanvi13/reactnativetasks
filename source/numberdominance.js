import React, { useState,useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
var poscount = 0;
var negcount = 0;
const Numberdominance = () => {
  const [num, setnum] = useState('');
  var array = [];
  useEffect(() => {
   
   console.log(num);
  }, [num]);
  const onclicking = (num) => {
    array.push(num);
    console.log("g",array);
    var number = parseInt(num);
 
    if (number > 0) {
      poscount++;
      console.log("++",poscount);
    } else {
      negcount++;
      console.log("--",negcount);
    }
   
  }
  const oncount = () => {
  
    if (poscount > negcount) {
      console.log("positive dominance ");
    } else {
      console.log("negative dominance ");
    }
   
  }
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => setnum(text)}
        placeholder="Enter Number Name"
        value={num}
      />
      <TouchableOpacity style={styles.btText} onPress={() => {onclicking(num);}}>
        <Text style={styles.listText}>GO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btTexts} onPress={() => oncount()}>
        <Text style={styles.listText}>positive or negative dominance?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Numberdominance;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    margin:50
  },
  passwordStyle: {
    height: 50,
    width: 280,
    backgroundColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  textInputStyle:{
    height:50,
    width:150,
    backgroundColor:"white"
  },
  btText:{
    height:35,
    width:50,
    backgroundColor:'lightblue',
    borderRadius:5,
    textAlign:'center',
    padding:5,
    paddingLeft:12,
    margin:20
  },
  btTexts:{
    height:35,
    width:250,
    backgroundColor:'lightblue',
    borderRadius:5,
    textAlign:'center',
    padding:5,
    paddingLeft:12,
    margin:20
  }
});
