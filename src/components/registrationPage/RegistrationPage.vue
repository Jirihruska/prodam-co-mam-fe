<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="flex h-screen bg-red-800 text-center">
      <div class="flex h-screen">
      <form class="mt-40 ml-20">
        <Input2 label="Jméno" />
        <Input2 label="Příjmení" />
        <Input2 label="Email" />
        <Input2 label="Heslo" />
        <div class="text-white">
        </div>
        <div class="flex justify-center pt-6">
          <button class="bg-white font-bold text-red-800 p-4 ml-20 w-full hover:bg-gray-400 text-md">
            Registrovat
          </button>
        </div>
        <div class="text-white pt-8 ml-10 pl-10"> <input type="radio"> Souhlasím se zpracováním osobních údajů (GDPR)</div>
      </form>
    </div>
    </div>
    <div class="m-auto text-6xl text-red-800 font-semibold select-none">
        Registrace
      </div>
    </div>  
</template>

<script>
import Input2 from "../reusableComponents/Input2.vue";
export default {
  components: {
    Input2,
  },
};
</script>