<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex h-screen bg-red-800 text-center">
      <div class="m-auto text-4xl text-white font-semibold select-none">
        Přihlášení
      </div>
    </div>
    <div class="flex h-screen">
      <form class="m-auto w-1/2">
        <Input label="Email" />
        <Input label="Heslo" />
        <div class="flex justify-center pt-6">
          <button class="bg-red-800 text-white p-4 w-full hover:bg-red-900 text-md">
            Přihlásit
          </button>
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
};
</script>