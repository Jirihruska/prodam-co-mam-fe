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
        top-24
        bg-white
        rounded-md
        cursor-pointer
        text-black text-lg
      "
    >
      <div class="grid grid-rows-2 select-none">
        <span
          @click="signIn()"
          class="hover:bg-black hover:text-white p-4 rounded-md"
          >Přihlášení</span
        >
        <span
          @click="signUp()"
          class="hover:bg-black hover:text-white p-4 rounded-md"
          >Registrace</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import UserSvg from "../svgComponents/User.vue";
export default {
  components: {
    UserSvg,
  },
  data: () => {
    return {
      menuOpen: false,
    };
  },
  methods: {
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
  },
};
</script>