<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!--      Start: Form-->
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit()">
        <div class="row ">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email address</span>
            <input id="email"
                   class="px-4 py-3 rounded-lg border-gray-100 mt-1"
                   type="text"
                   placeholder="example@gmail.com"
                   autocomplete="username"
                   v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="passWord">
            <span class="font-semibold">Password</span>
            <input  id="passWord"
                    class="px-4 py-3 rounded-lg border-gray-100 mt-1"
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password"
                    v-model="password"
            />
          </label>
        </div>
        <button v-if="!isPending" type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
          Sign in
        </button>
        <button v-else type="button" class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed" disabled>
          Loading...
        </button>
      </form>
      <!--      Start: Error-->
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!--      start:direction-->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Register', params: {} }" class="text-primary font-bold">Sign up</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import { userSignIn} from "@/composables/userSignIn";

export default {
  setup() {
    const { error, isPending, signin } = userSignIn();
    const email = ref("");
    const password = ref("");
    async function onSubmit(){
      await signin( email.value, password.value);
    }

    return {onSubmit, email, password, error, isPending};
  }
}
</script>

