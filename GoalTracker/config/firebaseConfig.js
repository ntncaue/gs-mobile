import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Cz-PjIID7Q8jNZ0i6v6PIHco4Mgxo74",
  authDomain: "goaltracker-29535.firebaseapp.com",
  projectId: "goaltracker-29535",
  storageBucket: "goaltracker-29535.firebasestorage.app",
  messagingSenderId: "61227429916",
  appId: "1:61227429916:web:817198308a270d2cb16fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };