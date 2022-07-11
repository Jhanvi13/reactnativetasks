import React ,{useState}from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,TextInput} from 'react-native';
import { useNameStore } from './nameContext';
import { useObserver } from 'mobx-react';

const Fourthpage = props => {
    const nameStore = useNameStore();
    const [name, setName] = useState('');

    const nextScreen = () => {
        props.navigation.navigate('Fifthpage');
    }
    const prevScreen = () => {
        props.navigation.navigate('Thirdpage');
        nameStore.addName(name);
    }
    return useObserver(() => (
        <View style={styles.mainContainer}>
           <TextInput
                placeholder="Enter Name Here..."
                style={styles.Name}
                onChangeText={nameText => setName(nameText)}
                Value={{ name }}
            ></TextInput>
            <TouchableOpacity onPress={() => {  nextScreen() }} style={styles.button}>
                <Text style={styles.text}>Screenfive</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {  prevScreen() }} style={styles.button}>
                <Text style={styles.text}>ScreenThree</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{nameStore.names}</Text>
        </View>
    ));
};
export default Fourthpage;
const styles = StyleSheet.create({
    mainContainer: {
        margin: 100,
        left: 50
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'lightblue',
        margin: 10
    },
    text: {
        textAlign: 'center',
        top: 10
    },
    Name: {
        backgroundColor: 'white',
        width: 130,
        height: 60
    }
});
