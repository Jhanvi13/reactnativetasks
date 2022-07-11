import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNotesStore } from "./multipledatacontext";

const Mainpage = props => {
 
const [appName,setAppName] = useState('');
const [language,setLanguage] = useState('');
const notesStore = useNotesStore();


const onViewClick = () =>{
  props.navigation.navigate('Nextpage');
}
    return (
        <View style={styles.mainContainer}>
         <Text style={styles.headingText}>App and Languages</Text>
         <TextInput
          placeholder="Enter Application Name"
          style={styles.textInputStyle}
          onChangeText = {appNameText => setAppName(appNameText)}
          value = {appName}
        ></TextInput>
          <TextInput
          placeholder="Enter Language of Application"
          style={styles.textInputStyle}
          onChangeText = {languageText => setLanguage(languageText)}
          value = {language}
        ></TextInput>
        <TouchableOpacity onPress={()=> notesStore.addNote(appName,language)}  ><Text style={styles.buttons}>Add List</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=> onViewClick()}><Text style={styles.buttons}>View List</Text></TouchableOpacity>
        
        </View>
    );
};
export default Mainpage;
const styles = StyleSheet.create({
 headingText:{
   fontSize:20,
   margin:10
 },
 textInputStyle:{
   height:50,
   width:250,
   backgroundColor:'white',
   margin:10
 },
 buttons:{
   height:50,
   margin:10,
   paddingLeft:20,
   paddingTop:10,
   width:100,
   backgroundColor:'lightpink',
   borderRadius:5
 }
});
