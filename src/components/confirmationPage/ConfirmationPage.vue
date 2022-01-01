<template>
  <div class="bg-red-800 h-full h-screen pt-64">
    <div class="flex justify-center">
      <Message />
    </div>
    <div class="text-center text-4xl text-white">
      Potvrď registraci klikem na link v E-Mailu
    </div>
  </div>
</template>

<script>
import Message from "../svgComponents/Message.vue";
export default {
  components: {
    Message,
  },
};
</script>

<style>
</style>