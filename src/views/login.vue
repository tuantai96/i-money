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
                   placeholder="example@gmail.com"/>
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
            />
          </label>
        </div>
        <button type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">
          Sign in
        </button>
      </form>
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
export default {
  setup() {
    function onSubmit(){}
    return {onSubmit};
  }
}
</script>

