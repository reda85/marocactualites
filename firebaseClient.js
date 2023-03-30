import firebaseClient from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/storage'


/*
Copy/paste your *client-side* Firebase credentials below. 
To get these, go to the Firebase Console > open your project > Gear Icon >
Project Settings > General > Your apps. If you haven't created a web app
already, click the "</>" icon, name your app, and copy/paste the snippet.
Otherwise, go to Firebase SDK Snippet > click the "Config" radio button >
copy/paste.
*/
const CLIENT_CONFIG = {
    apiKey: "AIzaSyBatmiSARhdN7h4KJXH1yDVUd6I0bluEIw",
    authDomain: "kmx1-16598.firebaseapp.com",
    projectId: "kmx1-16598",
    storageBucket: "kmx1-16598.appspot.com",
    messagingSenderId: "804907983944",
    appId: "1:804907983944:web:bec34c0f9faf187d0d247d"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
 
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  window.firebase = firebaseClient;
}

export { firebaseClient };