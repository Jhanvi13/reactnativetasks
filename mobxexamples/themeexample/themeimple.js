import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const themeImplementationOne = () => {

    
        return (
            <View >
                <TouchableOpacity style={{backgroundColor:'white',height:100,width:150,margin:100}}>
                    <Text style={{textAlign:"center",padding:10,fontSize:35,top:10}}>Hello</Text>
                </TouchableOpacity>
            </View>
        );
}

export default themeImplementationOne
 