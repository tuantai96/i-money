<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
<!--      Start: Form-->
      <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmit()">
        <div class="row ">
          <label class="flex flex-col" for="fullName">
            <span class="font-semibold">Full Name</span>
            <input id="fullName"
                   class="px-4 py-3 rounded-lg border-gray-100 mt-1"
                   type="text"
                   placeholder="iMoney..."
                   v-model="fullName"
            />
          </label>
        </div>
        <div class="row ">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email address</span>
            <input id="email"
                   class="px-4 py-3 rounded-lg border-gray-100 mt-1"
                   type="text"
                   placeholder="example@gmail.com"
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
                    autocomplete="username"
                    v-model="password"
                    />
          </label>
        </div>
          <button v-if="!isPending" type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
              Sign up
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
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{ name: 'Login', params: {} }" class="text-primary font-bold">Sign in</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {ref} from "vue";
  import { useRouter } from "vue-router";
  import {userSignUp} from "@/composables/userSignUp";

  export default {
    setup() {
      const { error, isPending, signup } = userSignUp();
      const router = useRouter();

      const fullName = ref("");
      const email = ref("");
      const password = ref("");

      async function onSubmit(){
        await signup(email.value, password.value, fullName.value);
        if (!error.value) router.push({name: 'Home', params: {} });
      }
      return {fullName, email, password, error, isPending, onSubmit};
    }
  }
</script>
