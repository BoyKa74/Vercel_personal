import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1jZfAx6D63G6HuL2lZ56jBIfnAKfpozs",
  authDomain: "vercel-avatar.firebaseapp.com",
  projectId: "vercel-avatar",
  storageBucket: "vercel-avatar.appspot.com",
  messagingSenderId: "136249441795",
  appId: "1:136249441795:web:99926b89cee1ebc39b9836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 