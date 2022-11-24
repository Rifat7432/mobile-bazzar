// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAlLPv9BJiEJrypJEA5rAv3kdSJhiLuW78",
//   authDomain: "mobilebazzardotcom.firebaseapp.com",
//   projectId: "mobilebazzardotcom",
//   storageBucket: "mobilebazzardotcom.appspot.com",
//   messagingSenderId: "224997459463",
//   appId: "1:224997459463:web:b862eae682899949f6cca2"
apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;