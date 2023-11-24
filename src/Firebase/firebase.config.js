// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAR8fsY03xzjoifaR3XF-Yzh-UPv4brlE0",
//   authDomain: "inventory-management-a4af1.firebaseapp.com",
//   projectId: "inventory-management-a4af1",
//   storageBucket: "inventory-management-a4af1.appspot.com",
//   messagingSenderId: "950990635677",
//   appId: "1:950990635677:web:7a5d760eaa330131a88a74"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig); 
export default app;