import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FirebaseConfig } from "./firebase_config"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;