
import React, { useEffect } from 'react';
import { View } from 'react-native';


const promiseEx = () => {
    useEffect(() => {
        let p = new Promise((resolve,reject)=> {
            let a=20
            if (a==100) {
                setTimeout(()=> {
                    resolve("Promise is successful");
                },3*100)
                
            }else{
                reject("Promise failed")
            }
        });
        p.then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        });
    }, [])
    return (
        <View>

        </View>
    );
};
export default promiseEx;



