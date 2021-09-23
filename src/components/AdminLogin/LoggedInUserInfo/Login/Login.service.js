import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { firebase } from "../../../../services/firebase-connection.service";

const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export const auth = getAuth(firebase.getApp());
auth.useDeviceLanguage();  

export function LoginWithGooglePopUp() {
    console.log('yop!');
    return new Promise((resolve, rejects) => {
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            resolve({user, token});
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;            
            rejects({errorCode, errorMessage})
        });
    })    
}

export function LogOutFromGoogle() {
    signOut(auth).then(() => {        
    }).catch((error) => {    
    });
}
