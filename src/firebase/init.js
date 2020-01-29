import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCZuPCD8xjBXW8L8RZj1bYc3gRhrrzjU1Y",
  authDomain: "kinsella-chat.firebaseapp.com",
  databaseURL: "https://kinsella-chat.firebaseio.com",
  projectId: "kinsella-chat",
  storageBucket: "kinsella-chat.appspot.com",
  messagingSenderId: "938597797018",
  appId: "1:938597797018:web:3af6e662fd57a2823c6323"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots: true})
export default firebaseApp.firestore()


