<template>
  <div class="grid justify-items-center">
    <div class="w-2/3 flex flex-col h-screen">
      <div class="flex-auto bg-white">
        <div class="grid grid-cols-2 gap-4 h-full">
          <div
            class="
              rounded-xl
              justify-self-center justify-center
              cursor-pointer
              m-auto
            "
          >
            <Sell />
          </div>
          <div
            class="
              m-auto
              w-1/2
              rounded-xl
              justify-self-center
              text-right text-red-800
              font-semibold
              text-4xl
              select-none
            "
          >
            Staňte se dobrým prodejcem vašeho zboží
          </div>
        </div>
      </div>
      <div class="flex-auto bg-red-800 rounded-full border-8 border-red-800">
        <div class="grid grid-cols-2 gap-4 h-full m-auto">
          <div
            class="
              m-auto
              w-1/2
              rounded-xl
              justify-self-center
              text-left
              font-semibold
              text-4xl text-white
              select-none
            "
          >
            Zůstaňte v anonymitě a mimo sociální sítě
          </div>
          <div
            class="
              rounded-xl
              justify-self-center justify-center
              cursor-pointer
              m-auto
            "
          >
            <Incognito />
          </div>
        </div>
      </div>
      <div class="flex-auto">
        <div class="grid grid-cols-2 gap-4 h-full">
          <div
            class="
              rounded-xl
              justify-self-center justify-center
              cursor-pointer
              m-auto
            "
          >
            <Track />
          </div>
          <div
            class="
              m-auto
              w-1/2
              rounded-xl
              justify-self-center
              text-right text-black text-red-800
              font-semibold
              text-4xl
              select-none
            "
          >
            Sledujte prodej uživatelů a statistiky prodejů
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sell from "../../svgComponents/Sell.vue";
import Incognito from "../../svgComponents/Incognito.vue";
import Track from "../../svgComponents/Track.vue";
export default {
  components: {
    Sell,
    Incognito,
    Track,
  },
};
</script>

<style>
</style>