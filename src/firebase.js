import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyD_lrw8p7y5p3i7JOBruaKTLxXVFPE2Bl4",
        authDomain: "e-comm-3cbf6.firebaseapp.com",
        projectId: "e-comm-3cbf6",
        storageBucket: "e-comm-3cbf6.appspot.com",
        messagingSenderId: "1034619064077",
        appId: "1:1034619064077:web:b815f5245fc86108e06a44",
        measurementId: "G-E48BBVYYSK"
    }
)
export const auth = app.auth();
export default app;