import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDj8ZZGe3yLQuIi_6qOJKV0dn_0Ojhyz3A",
    authDomain: "expensee-1b659.firebaseapp.com",
    projectId: "expensee-1b659",
    storageBucket: "expensee-1b659.appspot.com",
    messagingSenderId: "903761126740",
    appId: "1:903761126740:web:d081428128148483abd4c1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
