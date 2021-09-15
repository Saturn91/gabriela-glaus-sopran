//build with th tutorial: https://github.com/fireship-io/react-firebase-chat
//offical tutorial: https://firebase.google.com/docs/web/setup?authuser=0#config-object

import firebase from "firebase/app"

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBR9M8C7vqf79j6ogwaO4salLGUXIF2v_g",

    authDomain: "gabrielaglaussopran-4a78e.firebaseapp.com",

    projectId: "gabrielaglaussopran-4a78e",

    storageBucket: "gabrielaglaussopran-4a78e.appspot.com",

    messagingSenderId: "557065105744",

    appId: "1:557065105744:web:5b8f11b1634efda755fc55"
  
};

firebase.initializeApp(firebaseConfig);
  
export const firebaseApp = firebase.firestore(); 

export function testConnection(callback) {
    getAllDocsFromCollection('connectionTest').then(callback); 
}

export function getAllDocsFromCollection(collection) {
    return new Promise((resolve, reject) => {
        firebaseApp.collection(collection).get().then((querySnapshot) => {
            let results = [];
            querySnapshot.forEach(doc => {
                results.push({id: doc.id, data: doc.data()})
            })
            resolve(results);
        }) 
    })
    
}
