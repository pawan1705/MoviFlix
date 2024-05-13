
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {toast} from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyDlrvhULMF-ieDQmE1MXm__kyZThdQT1k0",
  authDomain: "moviflix-3667c.firebaseapp.com",
  projectId: "moviflix-3667c",
  storageBucket: "moviflix-3667c.appspot.com",
  messagingSenderId: "467553223771",
  appId: "1:467553223771:web:505b1b38cf16f4f5772b7e",
  measurementId: "G-L06B41R5CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password)
    }catch(err){
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
}

const logout=()=>{
    try{
        signOut(auth);
    }catch(err){
        console.log(err);
        toast.error(err.code.split('/')[1].split('-').join(" "));
    }
}
export {auth,db,login,signup,logout};