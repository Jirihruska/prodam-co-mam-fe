<template>
  <div>
    <div class="absolute right-5 top-5 cursor-pointer">
      <span @click="clickIn()">
        <UserSvg />
      </span>
    </div>
    <div
      v-if="menuOpen"
      class="
        absolute
        font-bold
        right-5
        w-40
        top-24
        bg-white
        rounded-md
        cursor-pointer
        text-black text-lg
      "
    >
      <div
        v-click-outside="clickOutside"
        class="grid grid-rows-2 select-none border-2 border-black"
      >
        <!-- Go to dashboard, if you are logged in -->
        <span
          v-if="loggedIn"
          @click="
            [$router.push('/dashboard', () => {}), (menuOpen = !menuOpen)]
          "
          class="hover:bg-black hover:text-white p-4"
          >Zeď</span
        >
        <span
          v-if="loggedIn"
          @click="
            [$router.push('/sell', () => {}), (menuOpen = !menuOpen)]
          "
          class="hover:bg-black hover:text-white p-4"
          >Prodat zboží</span
        >
        <span
          v-if="loggedIn"
          @click="
            [$router.push('/user-profile', () => {}), (menuOpen = !menuOpen)]
          "
          class="hover:bg-black hover:text-white p-4"
          >Můj profil</span
        >
        <!-- Go to main page, if you are not logged -->
        <span
          v-if="!loggedIn"
          @click="[$router.push('/', () => {}), (menuOpen = !menuOpen)]"
          class="hover:bg-black hover:text-white p-4"
          >Domů</span
        >
        <span
          v-if="!loggedIn"
          @click="signIn()"
          class="hover:bg-black hover:text-white p-4"
          >Přihlášení</span
        >
        <span
          v-if="!loggedIn"
          @click="signUp()"
          class="hover:bg-black hover:text-white p-4"
          >Registrace</span
        >
        <span
          v-if="loggedIn"
          @click="logOut()"
          class="hover:bg-black hover:text-white p-4 text-red-800"
          >Odhlásit se</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { logged } from "../../services/LocalStorage";
import UserSvg from "../svgComponents/User.vue";
import vClickOutside from "v-click-outside";
export default {
  components: {
    UserSvg,
  },
  data: () => {
    return {
      menuOpen: false,
      directives: {
        clickOutside: vClickOutside.directive,
      },
      loggedIn: false,
    };
  },
  methods: {
    goHome() {
      if (this.$route.name !== "landing-page") {
        this.$router.push("/");
        this.menuOpen = !this.menuOpen;
      } else return (this.menuOpen = !this.menuOpen);
    },
    signIn() {
      if (this.$route.name !== "login-page") {
        this.$router.push("/login-page");
        this.menuOpen = !this.menuOpen;
      } else return (this.menuOpen = !this.menuOpen);
    },
    signUp() {
      if (this.$route.name !== "registration-page") {
        this.$router.push("/registration-page");
        this.menuOpen = !this.menuOpen;
      } else return (this.menuOpen = !this.menuOpen);
    },
    logOut() {
      this.menuOpen = !this.menuOpen;
      localStorage.clear();
      this.$router.push("/");
    },
    clickIn() {
      this.loggedIn = logged();
      this.menuOpen = !this.menuOpen;
    },
    clickOutside() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>