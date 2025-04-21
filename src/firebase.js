// Remove the storage import and export
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATWYCckxIUanBIb_yS0pi1B-iSWJbuAMY",
  authDomain: "spistonlinelearninghub-7e2d9.firebaseapp.com",
  projectId: "spistonlinelearninghub-7e2d9",
  storageBucket: "spistonlinelearninghub-7e2d9.appspot.com",
  messagingSenderId: "484050587568",
  appId: "1:484050587568:web:4652646648c1267ec81075"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // Only export db now