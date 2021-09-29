//build with th tutorial: https://github.com/fireship-io/react-firebase-chat
//offical tutorial: https://firebase.google.com/docs/web/setup?authuser=0#config-object

import * as firebase from "firebase/app"
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import "firebase-auth";
import "firebase/firestore";
import { getStorage, getDownloadURL, ref, uploadString } from "firebase/storage";

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

export function updateFireBaseDoc(collectionUrl, id, object) {
    return setDoc(doc(firebaseAppStore, collectionUrl, id), object);
}

export const firebaseFileStorage = getStorage();

export function getFileFromFirebase(path) {
    return getDownloadURL(ref(firebaseFileStorage, path));
}

export function getTextFileFromFirebase(path) {
    return new Promise((resolve, reject) => {
        getFileFromFirebase(path).then((url) => {
            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
                const blob = xhr.response;
                blob.text().then((text) => {
                    resolve(text);
                })                
            };
            xhr.open('GET', url);
            xhr.send();
        })
    }).catch((error) => {
        console.error(error);
    })
}

export function postTextFileOnFireBase(path, text) {
    const storageRef = ref(firebaseFileStorage, path);
    uploadString(storageRef, text).then((snapshot) => {
        alert('storgae updated!');
      });

}

export function deleteOneDocFromFireStore(collection, docId) {
    deleteDoc(doc(firebaseAppStore, collection, docId)).then(() => {
        alert('event deleted!');
    }) 
}

export { firebase };
