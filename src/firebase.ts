import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCcdEFFdalk0w9Z7XaFamrs5PB_t5OaRUA",
  authDomain: "ai-powered-parenting-assistant.firebaseapp.com",
  projectId: "ai-powered-parenting-assistant",
  storageBucket: "ai-powered-parenting-assistant.firebasestorage.app",
  messagingSenderId: "789978305676",
  appId: "1:789978305676:web:c4b37591ef02a3f74397a9",
  measurementId: "G-5J5297E5H3"
};


const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export const getParentingAdvice = httpsCallable(functions, "getParentingAdvice");