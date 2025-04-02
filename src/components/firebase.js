import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAIUfjEHdkQRZC3KoG49qTD__qpnWufFHI",
  authDomain: "e-com-59da0.firebaseapp.com",
  projectId: "e-com-59da0",
  storageBucket: "e-com-59da0.firebasestorage.app",
  messagingSenderId: "455336540193",
  appId: "1:455336540193:web:309695daa39f9657c6cb60",
  measurementId: "G-V9VFR6EM05",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
