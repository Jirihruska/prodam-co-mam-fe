<template>
  <div>
    <div class="absolute right-5 top-5 cursor-pointer">
      <span @click="menuOpen = !menuOpen">
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
        <span @click="goHome()" class="hover:bg-black hover:text-white p-4"
          >Domů</span
        >
        <span @click="signIn()" class="hover:bg-black hover:text-white p-4"
          >Přihlášení</span
        >
        <span @click="signUp()" class="hover:bg-black hover:text-white p-4"
          >Registrace</span
        >
        <span @click="goHome(),logOut()" class="hover:bg-black hover:text-white p-4"
          >Odhlásit</span
        >
      </div>
    </div>
  </div>
</template>

<script>
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
      this.$alert("Úspěšné odhlášení.");
    },
    clickOutside() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>