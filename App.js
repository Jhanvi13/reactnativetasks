import * as React from 'react';
import "react-native-gesture-handler";
import { LogBox, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import Taskseven from './tutorials/taskseven';
import tasksevencontinued from './tutorials/tasksevencontinued';
import signupscreen from './madarekscreens/signupscreen';
import TaskNine from './tutorials/TaskNine';
import cal from './tutorials/calc';
import Calscreen from './tutorials/calscreen';
import CmpOne from './tutorials/cmpOne';
import CmpTwo from './tutorials/cmpTwo';
import pageTwo from './tutorials/pageTwo';
import SigningupScreen from './madarekscreens/SigningupScreen';
import phoneNumber from './madarekscreens/phoneNumber';
import emailScreen from './madarekscreens/emailScreen';
import oneTimePassword from './madarekscreens/oneTimePassword';
import passWord from './madarekscreens/passWord';
import apiExmp from './parsingexamples/apiExmp';
import apiExamp from './parsingexamples/apiExamp';
import jParsing from './parsingexamples/jsnparsing';
import jPrsngexmp from './parsingexamples/jsnprexmp';
import msgBoard from './madarekscreens/msgboard';
import parsingEx from './parsingexamples/parsingEx';
import dbMainPage from './databaseex/sqlExample';
import Datadisp from './databaseex/viewData';
import EditData from './databaseex/editData';
import Imageselector from './tutorials/imagePickerex';
import chatScreen from './madarekscreens/chatScreen';
import searchScreen from './madarekscreens/searchScreen';
import navigationdrawerScreen from './madarekscreens/navigationDrawer';
import settingScreen from './madarekscreens/settings'
import userProfile from './madarekscreens/userProfile'
import Personaldetails from './madarekscreens/personaldetails'
import Otherdetails from './madarekscreens/otherdetails'
import Expertspage from './madarekscreens/expertspage'
import Screenone from './reduxexamples/slicedemo/screenone';
import Screentwo from './reduxexamples/slicedemo/screentwo';
import Screenthree from './reduxexamples/slicedemo/screenthree';
import Screenfour from './reduxexamples/slicedemo/screenfour';
import Screenfive from './reduxexamples/slicedemo/screenfive';
import Pageone from './reduxexamples/basicredux/pageone';
import pageSec from './reduxexamples/basicredux/pagetwo';
import Pagethree from './reduxexamples/basicredux/pagethree';
import Pagefour from './reduxexamples/basicredux/pagefour';
import Pagefive from './reduxexamples/basicredux/pagefive';
import Firstpage from './mobxexamples/datapassing/firstpage';
import Secondpage from './mobxexamples/datapassing/secondpage';
import Thirdpage from './mobxexamples/datapassing/thirdpage';
import Fourthpage from './mobxexamples/datapassing/fourthpage';
import Fifthpage from './mobxexamples/datapassing/fifthpage';
import Mainpage from './mobxexamples/multipledatapassing/mainpage';
import Nextpage from './mobxexamples/multipledatapassing/nextpage';
import Chatscreen from './pubnubexample/chatScreen';
import Appl from './firebasemsgpushnotif/app';
import promiseEx from './promisesexample/promisesex';
import CalculateFactorial from './usememodemo/usememoex';
import fiboandarmstrong from './tutorials/fiboandarmstrongnum';
import Countingtask from './tutorials/countingtask';
import happynewyear from './tutorials/happynewyear';
import datedifference from './tutorials/datediff';
import datedifferenceex from './tutorials/datediffex';
// import PushController from './firebasemsgpushnotif/pushcontroller';
// import { useSelector } from "react-redux"; 
// import themeImplementationOne from './themeexample/themeimple';
// import header from './themeexample/headerfile';
//import { NotesProvider } from './mobxexamples/multipledatapassing/multipledatacontext';
//import {NameProvider} from './mobxexamples/datapassing/nameContext';
// import { Store } from './reduxexamples/slicdemo/store';
//import { store } from './reduxexamples/basicredux/store'
//import { Provider } from 'react-redux';
//import { store } from './themeexample/themestore'
const pubnub = new PubNub({
  subscribeKey: "sub-c-e13a3fcd-b95d-4405-99bf-f2786585555c",
  publishKey: "pub-c-3332c165-56c3-4c33-a2a7-356b101257b2"
});
LogBox.ignoreAllLogs();

const App = () => {
  //const Theme = useSelector((state) => state.changeTheme.value);
  const Stack = createNativeStackNavigator();
  return (
   
      <View style={{flex: 1}}>
        <PubNubProvider client={pubnub}>
          <NavigationContainer >
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName={'datedifferenceex'}
            >
              <Stack.Screen
                name="TasksevenPartone"
                component={Taskseven}
                options={{ title: 'Taskseven' }}
              />
              <Stack.Screen
                name="tasksevencontinued"
                component={tasksevencontinued}
                options={{ title: 'Tasksevencontd' }}
              />
              <Stack.Screen
                name="signupscreen"
                component={signupscreen}
                options={{ title: 'SignUp' }}
              />
              <Stack.Screen
                name="TaskNine"
                component={TaskNine}
                options={{ title: 'TaskNine' }}
              />
              <Stack.Screen
                name="cal"
                component={cal}
                options={{ title: 'cal' }} />
              <Stack.Screen
                name="Calscreen"
                component={Calscreen}
                options={{ title: 'Calscreen' }}
              />
              <Stack.Screen
                name="CmpOne"
                component={CmpOne}
                options={{ title: 'CmpOne' }}
              />
              <Stack.Screen
                name="CmpTwo"
                component={CmpTwo}
                options={{ title: 'CmpTwo' }}
              />
              <Stack.Screen
                name="pageTwo"
                component={pageTwo}
                options={{ title: 'pageTwo' }}
              />
              <Stack.Screen
                name="SigningupScreen"
                component={SigningupScreen}
                options={{ title: 'SigningupScreen' }}
              />
              <Stack.Screen
                name="phoneNumber"
                component={phoneNumber}
                options={{ title: 'phoneNumber' }}
              />
              <Stack.Screen
                name="emailScreen"
                component={emailScreen}
                options={{ title: 'emailScreen' }}
              />

              <Stack.Screen
                name="oneTimePassword"
                component={oneTimePassword}
                options={{ title: 'oneTimePassword' }}
              />
              <Stack.Screen
                name="passWord"
                component={passWord}
                options={{ title: 'passWord' }}
              />
              <Stack.Screen
                name="apiExmp"
                component={apiExmp}
                options={{ title: 'apiExmp' }}
              />
              <Stack.Screen
                name="apiExamp"
                component={apiExamp}
                options={{ title: 'apiExamp' }}
              />
              <Stack.Screen
                name="jParsing"
                component={jParsing}
                options={{ title: 'jParsing' }}
              />
              <Stack.Screen
                name="jPrsngexmp"
                component={jPrsngexmp}
                options={{ title: 'jPrsngexmp' }}
              />
              <Stack.Screen
                name="msgBoard"
                component={msgBoard}
                options={{ title: 'msgBoard' }}
              />
              <Stack.Screen
                name="parsingEx"
                component={parsingEx}
                options={{ title: 'parsingEx' }}
              />
              <Stack.Screen
                name="dbMainPage"
                component={dbMainPage}
                options={{ title: 'dbMainPage' }}
              />
              <Stack.Screen
                name="Datadisp"
                component={Datadisp}
                options={{ title: 'Datadisp' }}
              />
              <Stack.Screen
                name="EditData"
                component={EditData}
                options={{ title: 'EditData' }}
              />
              <Stack.Screen
                name="Imageselector"
                component={Imageselector}
                options={{ title: 'Imageselector' }}
              />
              <Stack.Screen
                name="chatScreen"
                component={chatScreen}
                options={{ title: 'chatScreen' }}
              />
              <Stack.Screen
                name="searchScreen"
                component={searchScreen}
                options={{ title: 'searchScreen' }}
              />
              <Stack.Screen
                name="navigationdrawerScreen"
                component={navigationdrawerScreen}
                options={{ title: 'navigationdrawerScreen' }}
              />
              <Stack.Screen
                name="settingScreen"
                component={settingScreen}
                options={{ title: 'settingScreen' }}
              />
              <Stack.Screen
                name="userProfile"
                component={userProfile}
                options={{ title: 'userProfile' }}
              />
              <Stack.Screen
                name="Personaldetails"
                component={Personaldetails}
                options={{ title: 'Personaldetails' }}
              />
              <Stack.Screen
                name="Otherdetails"
                component={Otherdetails}
                options={{ title: 'Otherdetails' }}
              />
              <Stack.Screen
                name="Expertspage"
                component={Expertspage}
                options={{ title: 'Expertspage' }}
              />

              <Stack.Screen
                name="Screenone"
                component={Screenone}
                options={{ title: 'Screenone' }}
              />
              <Stack.Screen
                name="Screentwo"
                component={Screentwo}
                options={{ title: 'Screentwo' }}
              />
              <Stack.Screen
                name="Screenthree"
                component={Screenthree}
                options={{ title: 'Screenthree' }}
              />
              <Stack.Screen
                name="Screenfour"
                component={Screenfour}
                options={{ title: 'Screenfour' }}
              />
              <Stack.Screen
                name="Screenfive"
                component={Screenfive}
                options={{ title: 'Screenfive' }}
              />
              <Stack.Screen
                name="Pageone"
                component={Pageone}
                options={{ title: 'Pageone' }}
              />
              <Stack.Screen
                name="pageSec"
                component={pageSec}
                options={{ title: 'pageSec' }}
              />
              <Stack.Screen
                name="Pagethree"
                component={Pagethree}
                options={{ title: 'Pagethree' }}
              />
              <Stack.Screen
                name="Pagefour"
                component={Pagefour}
                options={{ title: 'Pagefour' }}
              />
              <Stack.Screen
                name="Pagefive"
                component={Pagefive}
                options={{ title: 'Pagefive' }}
              />
              <Stack.Screen
                name="Firstpage"
                component={Firstpage}
                options={{ title: 'Firstpage' }}
              />
              <Stack.Screen
                name="Secondpage"
                component={Secondpage}
                options={{ title: 'Secondpage' }}
              />
              <Stack.Screen
                name="Thirdpage"
                component={Thirdpage}
                options={{ title: 'Thirdpage' }}
              />
              <Stack.Screen
                name="Fourthpage"
                component={Fourthpage}
                options={{ title: 'Fourthpage' }}
              />
              <Stack.Screen
                name="Fifthpage"
                component={Fifthpage}
                options={{ title: 'Fifthpage' }}
              />
              <Stack.Screen
                name="Mainpage"
                component={Mainpage}
                options={{ title: 'Mainpage' }}
              />
              <Stack.Screen
                name="Nextpage"
                component={Nextpage}
                options={{ title: 'Nextpage' }}
              />
              <Stack.Screen
                name="Chatscreen"
                component={Chatscreen}
                options={{ title: 'Chatscreen' }}
              />
              <Stack.Screen
                name="Appl"
                component={Appl}
                options={{ title: 'Appl' }}
              />
              <Stack.Screen
                name="promiseEx"
                component={promiseEx}
                options={{ title: 'promiseEx' }}
              />
            
               <Stack.Screen
                name="CalculateFactorial"
                component={CalculateFactorial}
                options={{ title: 'CalculateFactorial' }}
              />
               <Stack.Screen
                name="fiboandarmstrong"
                component={fiboandarmstrong}
                options={{ title: 'fiboandarmstrong' }}
              />
               <Stack.Screen
                name="Countingtask"
                component={Countingtask}
                options={{ title: 'Countingtask' }}
              />
              <Stack.Screen
                name="happynewyear"
                component={happynewyear}
                options={{ title: 'happynewyear' }}
              />
               <Stack.Screen
                name="datedifference"
                component={datedifference}
                options={{ title: 'datedifference' }}
              />
                 <Stack.Screen
                name="datedifferenceex"
                component={datedifferenceex}
                options={{ title: 'datedifferenceex' }}
              />
              {/* <Stack.Screen
                name="themeImplementationOne"
                component={themeImplementationOne}
                options={{ title: 'themeImplementationOne' }}
              />
              <Stack.Screen
                name="header"
                component={header}
                options={{ title: 'header' }}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </PubNubProvider>
      </View>
  );
};

export default App;
