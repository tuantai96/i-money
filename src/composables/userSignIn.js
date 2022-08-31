import { ref } from "vue";
import { projectAuth } from "@/configs/firebase"

const error = ref(false);
const isPending = ref(false);

async function signin (email, password){
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(email, password);
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.messages;
  } finally {
    isPending.value = false;
  }
}

export function userSignIn() {
  return{ error, isPending, signin}
}
