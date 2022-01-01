<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex h-screen bg-red-800 text-center">
      <div class="m-auto text-4xl text-white font-semibold select-none">
        Přihlášení
      </div>
    </div>
    <div class="flex h-screen">
      <form class="m-auto w-1/2">
        <div class="container pb-8">
          <div class="text-left w-1/3">
            <label class="text-xl font-semibold select-none text-red-800"
              >Email</label
            >
          </div>
          <div class="centered text-center">
            <input
              type="email"
              autocomplete="email"
              v-model="email"
              class="
                centered
                focus:outline-none
                text-lg
                p-4
                w-full
                text-white
                bg-red-800
              "
              required
            />
          </div>
        </div>
        <div class="container pb-8">
          <div class="text-left w-1/3">
            <label class="text-xl font-semibold select-none text-red-800"
              >Heslo</label
            >
          </div>
          <div class="centered text-center">
            <input
              type="password"
              autocomplete="new-password"
              v-model="password"
              class="
                centered
                focus:outline-none
                text-lg
                p-4
                w-full
                text-white
                bg-red-800
              "
              required
            />
          </div>
        </div>
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
import SimpleVueValidation from "simple-vue-validator";
import { logged } from "../../services/LocalStorage";
import { api_login } from "../../services/User";
export default {
  data: () => {
    return {
      errors: {
        invalid: false,
        message: "",
      },
      email: "",
      password: "",
    };
  },
  methods: {
    async logginHandler() {
      await api_login({
        email: this.email,
        password: this.password,
      });
      // function logged() can be true or false "if (logged() is true)"
      if (logged()) {
        return this.$router.push("/dashboard");
      }
    },
  },
  validators: {
    email: (val) => {
      return SimpleVueValidation.Validator.value(val).email();
    },
  },
};
</script>