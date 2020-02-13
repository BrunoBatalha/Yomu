// Initialize Firebase
var config = {
  apiKey: "AIzaSyBCrh3y8uOq9NXTvRTm3rh9Y56MIFAAsuU",
  authDomain: "yomu-f0f10.firebaseapp.com",
  databaseURL: "https://yomu-f0f10.firebaseio.com",
  projectId: "yomu-f0f10",
  storageBucket: "yomu-f0f10.appspot.com",
  messagingSenderId: "964471218983"
};
firebase.initializeApp(config);

// TODO: VERIFICAR SE A CONEXÃO FOI BEM FEITA!

const rootRef = firebase.database().ref();
const storageRef = firebase.storage().ref();
