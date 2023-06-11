//Autentucacion
import { signInWithPopup } from "firebase/auth";
import {auth, googleProvider} from "./config"



 export const signinWithGoogle = async () =>{
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
    }catch (error){
        console.error(error);
    }
 };
 
 export const RegisterWihtEmailAndPassword = async () =>{

 };
 export const siginWithEmailAndPassword = async () =>{

 };
 export const logout = async () =>{

 };