//build with th tutorial: https://github.com/fireship-io/react-firebase-chat
//offical tutorial: https://firebase.google.com/docs/web/setup?authuser=0#config-object

import * as firebase from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "firebase-auth";
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
  
export const firebaseAppStore = getFirestore();

export function testConnection(callback) {
    getAllDocsFromCollection('connectionTest').then(callback); 
}

export function getAllDocsFromCollection(collection_id) {
    return new Promise((resolve, reject) => {
        getDocs(collection(firebaseAppStore, collection_id)).then((querySnapshot) => {
            let results = [];
            querySnapshot.forEach(doc => {
                results.push({id: doc.id, data: doc.data()})
            })
            resolve(results);
        });
    })    
}

export { firebase };
