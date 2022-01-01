<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex h-screen bg-red-800">
      <form class="m-auto w-1/2">
        <div class="container pb-8">
          <div class="text-left w-1/3">
            <label class="text-xl font-semibold select-none text-white"
              >Přezdívka</label
            >
          </div>
          <div class="centered text-center">
            <input
              type="text"
              autocomplete="new-password"
              v-model="username"
              class="
                centered
                focus:outline-none
                text-lg
                p-4
                w-full
                text-red-800
              "
            />
          </div>
        </div>
        <div class="container pb-8">
          <div class="text-left w-1/3">
            <label class="text-xl font-semibold select-none text-white"
              >Email</label
            >
          </div>
          <div class="centered text-center">
            <input
              type="email"
              autocomplete="new-password"
              v-model="email"
              class="
                centered
                focus:outline-none
                text-lg
                p-4
                w-full
                text-red-800
              "
            />
          </div>
        </div>
        <div class="container pb-8">
          <div class="text-left w-1/3">
            <label class="text-xl font-semibold select-none text-white"
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
                text-red-800
              "
              required
            />
          </div>
        </div>
        <div class="container pb-8">
          <div class="text-left w-1/3">
            <label class="text-xl font-semibold select-none text-white"
              >Heslo znova</label
            >
          </div>
          <div class="centered text-center">
            <input
              type="password"
              autocomplete="new-password"
              v-model="password2"
              class="
                centered
                focus:outline-none
                text-lg
                p-4
                w-full
                text-red-800
              "
              required
            />
          </div>
        </div>
        <Checkbox
          v-on:pass="passValue($event)"
          :labelStyles="'text-white'"
          :checkboxStyles="'bg-white text-red-800'"
          :labelText="'Souhlasím se zpracováním osobních údajů'"
        />
        <div class="flex justify-center pt-6">
          <button
            @click.prevent="registrationHandler()"
            class="
              bg-white
              text-red-800
              p-4
              w-full
              hover:bg-gray-200
              text-md
              font-semibold
            "
          >
            {{ errors.invalid ? errors.message : "Zaregistrovat" }}
          </button>
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
import Checkbox from "../reusableComponents/Checkbox.vue";
import SimpleVueValidation from "simple-vue-validator";
import { api_register } from "../../services/User";
export default {
  components: {
    Checkbox,
  },
  data: () => {
    return {
      errors: {
        invalid: false,
        message: "",
      },
      username: "",
      email: "",
      password: "",
      password2: "",
      accepted: false,
    };
  },
  methods: {
    passValue(e) {
      this.accepted = e;
    },
    registrationHandler() {
      // Start with no errors
      this.errors.invalid = false;
      // VALIDATIONS
      // If email has invalid format
      this.$validate().then((success) => {
        if (!success) {
          this.errors.invalid = true;
          this.errors.message = "Špatný formát e-mailu";
          return;
        }
      });
      // If username is empty
      if (this.username === "" || undefined) {
        this.errors.invalid = true;
        this.errors.message = "Přezdívka není vyplněná";
        return;
      }
      // If email is empty
      if (this.email === "" || undefined) {
        this.errors.invalid = true;
        this.errors.message = "E-mail není vyplněný";
        return;
      }
      // If password is empty
      if (this.password === "" || undefined) {
        this.errors.invalid = true;
        this.errors.message = "Heslo není vyplněno";
        return;
      }
      // The password must be at least 6 characters long
      if (this.password.length < 6) {
        this.errors.invalid = true;
        this.errors.message = "Heslo musí obsahovat alespoň 6 znaků";
        return;
      }
      // If password2 is empty
      if (this.password2 === "" || undefined) {
        this.errors.invalid = true;
        this.errors.message = "Heslo znova není vyplněno";
        return;
      }
      // If password not match password2
      if (this.password !== this.password2) {
        this.errors.invalid = true;
        this.errors.message = "Hesla se neshodují";
        return;
      }
      // If GDPR is not accepted
      if (!this.accepted) {
        this.errors.invalid = true;
        this.errors.message = "Musíte souhlasit s podmínkami";
        return;
      }
      this.submit();
    },
    async submit() {
      await api_register({
        username: this.username,
        email: this.email,
        password: this.password,
      });
      //this.$router.push("/confirmation-page");
      this.$router.push("/login-page");
    },
  },
  validators: {
    email: (val) => {
      return SimpleVueValidation.Validator.value(val).email();
    },
  },
};
</script>