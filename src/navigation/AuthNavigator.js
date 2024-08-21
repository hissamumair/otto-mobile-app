/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import WellcomeScreen from '../screens/WellcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import ForgetScreen from '../screens/ForgetScreen';
import ForgetVerificationScreen from '../screens/ForgetVerificationScreen';
import ConfirmEmail from '../screens/ConfirmEmail';
import SetPassword from '../screens/SetPassword';
import SetProfile from '../screens/SetProfile';
import SuccessfulRecover from '../screens/SuccessfulRecover';
import SignupScreen1 from '../screens/SignupScreen1';
import SignupScreen2 from '../screens/SignupScreen2';
import SignupScreen3 from '../screens/SignupScreen3';
import SignupScreen4 from '../screens/SignupScreen4';
import SignupScreen5 from '../screens/SignupScreen5';
import SignupScreen6 from '../screens/SignupScreen6';

import HomeScreen from '../screens/HomeScreen';

const AuthStack = createNativeStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
              <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
              <AuthStack.Screen name="WellcomeScreen" component={WellcomeScreen} />
              <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
              <AuthStack.Screen name="ForgetScreen" component={ForgetScreen} />
              <AuthStack.Screen name="ForgetVerificationScreen" component={ForgetVerificationScreen} />
              <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmail} />
              <AuthStack.Screen name="SetPassword" component={SetPassword} />
              <AuthStack.Screen name="SetProfile" component={SetProfile} />
              <AuthStack.Screen name="SuccessfulRecover" component={SuccessfulRecover} />
              <AuthStack.Screen name="SignupScreen1" component={SignupScreen1} />
              <AuthStack.Screen name="SignupScreen2" component={SignupScreen2} />
              <AuthStack.Screen name="SignupScreen3" component={SignupScreen3} />
              <AuthStack.Screen name="SignupScreen4" component={SignupScreen4} />
              <AuthStack.Screen name="SignupScreen5" component={SignupScreen5} />

              <AuthStack.Screen name="SignupScreen6" component={SignupScreen6} />
              <AuthStack.Screen name="HomeScreen" component={HomeScreen} />



      {/* <AuthStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Signup" component={Signup} />

      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="ExpeditionPackagesScreen"
        component={ExpeditionPackagesScreen}
      />
      <AuthStack.Screen name="Profile" component={Profile} />
      <AuthStack.Screen name="Launguage" component={Launguage} />
      <AuthStack.Screen name="DetailScreen" component={DetailScreen} />
      <AuthStack.Screen name="Viewbookdetail" component={Viewbookdetail} />
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Search" component={Search} />
      <AuthStack.Screen name="Popularplace" component={Popularplace} />
      <AuthStack.Screen name="Editprofile" component={Editprofile} />


      <AuthStack.Screen name="Setting" component={Setting} /> */}

    </AuthStack.Navigator>
  );
}
