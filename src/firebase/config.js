import { initializeApp } from 'firebase/app';
import { getStorage, ref, get } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAIzL9yXTEO2-mAq7CFU0PzfHcK3_sDsZU",
    authDomain: "firegram-101e2.firebaseapp.com",
    projectId: "firegram-101e2",
    storageBucket: "firegram-101e2.appspot.com",
    messagingSenderId: "791263657177",
    appId: "1:791263657177:web:f320b5aa7f3b93bb8652c8",
    measurementId: "G-13S3QQ6062"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  const db = getFirestore(app);

  export {db, storage};

 
