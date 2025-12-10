// Example for Sign In
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

const SignIn = async (email, password) => {
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
      // ... handle response
    });

  } catch (error) {
    console.error("Sign-in error:", error.message);
  }
};

export default SignIn;