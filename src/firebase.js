import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCiGurrM5PXt5O56fIQW27htqlnO6ksB4",
  authDomain: "atostogu-nuotraukos-egidijus.firebaseapp.com",
  projectId: "atostogu-nuotraukos-egidijus",
  storageBucket: "atostogu-nuotraukos-egidijus.appspot.com",
  messagingSenderId: "1035666160421",
  appId: "1:1035666160421:web:ab27123dc1da67aea278cc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;
export {
    app
}