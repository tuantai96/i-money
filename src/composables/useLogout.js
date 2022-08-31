import { ref } from "vue";
import {projectAuth} from "@/configs/firebase"

const error = ref(null);
const isPending = ref(false);

async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Could not create a new user.");

    await response.user.updateProfile({ displayName: fullName });
    console.log(response);

    return response;
  } catch (err){
    console.log(err);
    error.value = err.messages;
  } finally {
    isPending.value = false;
  }
}

export function userSignUp(){
  return{ error, isPending, signup }
}
