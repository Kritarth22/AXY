import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword 
} from "firebase/auth";
import { auth } from './firebase';

export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in successfully:", userCredential.user);

        const idToken = await userCredential.user.getIdToken();

        await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`
            }
        });
        
        return { success: true, user: userCredential.user };

    } catch (error) {
        console.error("Sign-in error:", error.message);
        return { success: false, error: error.message };
    }
};

export const signUpUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signed up successfully:", userCredential.user);

        return { success: true, user: userCredential.user };

    } catch (error) {
        console.error("Sign-up error:", error.message);
        return { success: false, error: error.message };
    }
};