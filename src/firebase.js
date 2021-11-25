import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
    .initializeApp({
        apiKey: 'AIzaSyCtr_HkwDHLYZUPEn23cdYOuCaXfp3h68Q',
        authDomain: 'mymessage-eceb6.firebaseapp.com',
        projectId: 'mymessage-eceb6',
        storageBucket: 'mymessage-eceb6.appspot.com',
        messagingSenderId: '529784184490',
        appId: '1:529784184490:web:12096b411ba92ef2627ad3',
    })
    .auth();
