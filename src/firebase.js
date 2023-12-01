import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxMrnY4w5NsjNmDH3oDisWvclRjbiV5sA",
  authDomain: "realtor-home-6f1fc.firebaseapp.com",
  projectId: "realtor-home-6f1fc",
  storageBucket: "realtor-home-6f1fc.appspot.com",
  messagingSenderId: "1000713293417",
  appId: "1:1000713293417:web:cffa6e8dc0ab339c1a5cf8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const storage = getStorage(app); // Storage instance

export { app, db, storage };
