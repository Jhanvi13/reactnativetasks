import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

 export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken();
  }
}

 async function GetFCMToken(){


  let fcmtoken = await AsyncStorage.getItem("AsyncStorage");
  console.log("Old token",fcmtoken);
  if (!fcmtoken) {


    try {
      const fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log("new Token",fcmtoken);
        await AsyncStorage.setItem("FcmToken",fcmtoken)
        
      }
    } catch (error) {
      console.log("Error in Fcm Token",error);
    }
    
  }
}
 export const NotificationListener =()=>{
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });
  messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
      <Text>Notification caused app to open from quit state:</Text>
      
        }
      });
messaging().onMessage(async remoteMessage =>{
  console.log("Notification on foreground stage.................",remoteMessage);
})
}