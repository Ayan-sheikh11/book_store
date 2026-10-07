import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyC0wm9IQz6uSxrEEhvGptJxlUkA041Wqzk",
  authDomain: "learning-5abca.firebaseapp.com",
  projectId: "learning-5abca",
  storageBucket: "learning-5abca.firebasestorage.app",
  messagingSenderId: "116424209345",
  appId: "1:116424209345:web:b38950bbb07cc6c7f27540",
  measurementId: "G-KJQH31YG33"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export FireStore = 