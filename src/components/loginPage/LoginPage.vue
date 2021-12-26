<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex h-screen bg-red-800 text-center">
      <div class="m-auto text-4xl text-white font-semibold select-none">
        Přihlášení
      </div>
    </div>
    <div class="flex h-screen">
      <form class="m-auto w-1/2">
        <Input
          :autocompleteProp="'new-password'"
          type="email"
          :data="user.email"
          :classStyles="'bg-red-800 text-white'"
          :labelStyles="'text-red-800'"
          label="Email"
        />
        <Input
          :autocompleteProp="'new-password'"
          type="password"
          :labelStyles="'text-red-800'"
          :data="user.password"
          :classStyles="'bg-red-800 text-white'"
          label="Heslo"
        />
        <div class="flex justify-center pt-6">
          <button
            @click.prevent="logginHandler()"
            class="
              bg-red-800
              text-white
              p-4
              w-full
              hover:bg-red-900
              text-md
              font-semibold
            "
          >
            Přihlásit
          </button>
          {{ errors.message }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "../reusableComponents/Input.vue";
export default {
  components: {
    Input,
  },
  data: () => {
    return {
      errors: {
        invalid: false,
        message: "",
      },
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    logginHandler() {},
  },
};
</script>