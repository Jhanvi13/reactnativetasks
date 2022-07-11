import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNotesStore } from "./multipledatacontext";
import { useObserver } from "mobx-react";

const Nextpage = (props) => {
    const notesStore = useNotesStore();
    const [newappName, setnewAppName] = useState('');
    const [newlanguage, setnewLanguage] = useState(''); console.log("jhanvi", notesStore);

    const submit = (id) => {
        notesStore.addNote(newappName, newlanguage, id);
    }
    return useObserver(() => (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder="Enter Application Name"
                style={styles.textInputStyle}
                onChangeText={appNameText => setnewAppName(appNameText)}
                value={newappName}
            ></TextInput>
            <TextInput
                placeholder="Enter Language of Application"
                style={styles.textInputStyle}
                onChangeText={languageText => setnewLanguage(languageText)}
                value={newlanguage}
            ></TextInput>
            {notesStore.notes.map((note) => (
                <View style={styles.listStyle}>
                    <Text onPress={() => notesStore.removeNote(note.id)}  style={styles.datastyle}>{note.nametext} {note.langtext}</Text>
                    <TouchableOpacity onPress={() => submit(note.id)} ><Text style={styles.buttons}>Update List</Text></TouchableOpacity>
                </View>
            ))}

        </View>
    ));
};
export default Nextpage;
const styles = StyleSheet.create({
  
    itemStyle: {
        backgroundColor: 'white',
        height: 100,
        width: 370,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 15
    },
    textStyle: {
        fontSize: 25
    },
    textInputStyle: {
        height: 50,
        width: 250,
        backgroundColor: 'white',
        margin: 10
    },
    buttons: {
        height: 40,
        width: 100,
        textAlign:'center',
        backgroundColor: 'lightpink',
        borderRadius: 5
    },
    listStyle:{
        flexDirection:'row',
        margin:10,
        justifyContent:'space-evenly'
    },
    datastyle:{
        height:40,
        backgroundColor:'white',
        width:250,
        fontSize:25,
        textAlign:"center"
    }
});
