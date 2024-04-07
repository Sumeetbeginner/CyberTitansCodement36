

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDmPDErXW2E_cUNTKeMe8huihwSCiadPzA",
    authDomain: "quasar-27fe5.firebaseapp.com",
    databaseURL: "https://quasar-27fe5-default-rtdb.firebaseio.com",
    projectId: "quasar-27fe5",
    storageBucket: "quasar-27fe5.appspot.com",
    messagingSenderId: "367497529301",
    appId: "1:367497529301:web:6eb2df9268fdabefa7df5c",
    measurementId: "G-PCFE32JH2N"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth, database, firebaseApp };