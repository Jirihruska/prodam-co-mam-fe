<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex h-screen bg-red-800">
      <form class="m-auto w-1/2">
        <Input
          type="email"
          :data="user.email"
          :classStyles="'text-red-800'"
          :labelStyles="'text-white'"
          label="Email"
        />
        <Input
        type="password"
          :data="user.password"
          :labelStyles="'text-white'"
          :classStyles="'text-red-800'"
          label="Heslo"
        />
         <Input
          type="password"
          :data="user.password2"
          :labelStyles="'text-white'"
          :classStyles="'text-red-800'"
          label="Heslo znovu"
        />
        <Checkbox :labelStyles="'text-white'" :checkboxStyles="'bg-white text-red-800'" :labelText="'Souhlasím se zpracováním osobních údajů'" />
        <div class="flex justify-center pt-6">
          <button
            @click.prevent="logginHandler()"
            class="bg-white text-red-800 p-4 w-full hover:bg-gray-200 text-md font-semibold"
          >
            Zaregistrovat
          </button>
          {{ errors.message }}
        </div>
      </form>
    </div>
    <div class="flex h-screen bg-white text-center">
      <div class="m-auto text-4xl text-red-800 font-semibold select-none">
        Registrace
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../reusableComponents/Input.vue";
import Checkbox from "../reusableComponents/Checkbox.vue";
export default {
  components: {
    Input,
    Checkbox
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
        password2: "",
      },
    };
  },
  methods: {
    logginHandler() {},
  },
};
</script>