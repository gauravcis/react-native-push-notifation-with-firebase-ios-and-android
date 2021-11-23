import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getfcmToken();
  }
}

const getfcmToken =async  () => {
try{

const fcmToken = await messaging().getToken();
console.log("genrated token"+fcmToken)
alert(fcmToken);
}
catch(err){
    console.log(err)
    alert(err?.message)
}
}

export const NotifcationListener = () => {
  alert("NotifcationListener")
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
   alert("ok");
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        alert("ok new");
      }
      
    });
}