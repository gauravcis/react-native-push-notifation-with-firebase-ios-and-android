import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NotifcationListener, requestUserPermission } from './notifcationService';




const App=() => {
  
  useEffect(()=>{
    requestUserPermission();
    NotifcationListener()
  },[])

  return (
    <Text >App.js</Text> 
  );
};



export default App;
