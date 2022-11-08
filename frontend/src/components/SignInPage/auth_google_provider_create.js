import { GoogleAuthProvider } from "firebase/auth";

const google_provider = new GoogleAuthProvider();

google_provider.addScope('profile');
google_provider.addScope('email');

// google_provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default google_provider;