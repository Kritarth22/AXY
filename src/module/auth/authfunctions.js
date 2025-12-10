// src/authFunctions.js
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword // Add this for sign-up
} from "firebase/auth";
import { auth } from './firebase';

// --- SIGN IN FUNCTION ---
export const signInUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in successfully:", userCredential.user);

        const idToken = await userCredential.user.getIdToken();

        // Send the ID token to your Node.js backend for verification/session creation
        await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`
            }
        });
        
        // Return success status or user object
        return { success: true, user: userCredential.user };

    } catch (error) {
        console.error("Sign-in error:", error.message);
        // Return error details
        return { success: false, error: error.message };
    }
};

// --- SIGN UP FUNCTION (NEW) ---
export const signUpUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Signed up successfully:", userCredential.user);
        
        // Optionally, you might send a different request to your backend 
        // after sign-up to register the new user in your database.

        return { success: true, user: userCredential.user };

    } catch (error) {
        console.error("Sign-up error:", error.message);
        return { success: false, error: error.message };
    }
};