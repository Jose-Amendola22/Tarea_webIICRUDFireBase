import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.ts";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const usersCollection = collection(db, 'users');

export const addUser = async (user) => {
    try {
        await addDoc(usersCollection, user);
        return true;
    } catch (error) {
        return false;
    }
};

export const getUsers = async () => {
    const result = await getDocs(usersCollection);
    return result;
}; 

export const editUser = async(user, id) => {
    const taskDocRef = doc(db, 'users', id)
    try{
        await updateDoc(taskDocRef, user);
        return true;
    } catch(error){
        return false;
    }
}

export const deleteUser = async(id) => {
    const taskDocRef = doc(db, 'users', id);
    try{
        await deleteDoc(taskDocRef);
        return true;
    } catch(error){
        return false;
    }
}