<template>
  <div>
    <div
      class="
        w-full
        h-12
        bg-red-800
        text-white
        grid grid-rows-1 grid-cols-1 grid-flow-col
        gap-4
      "
    >
      <div class="p-3">
        <span
          @click="$router.push('/', () => {})"
          class="inline-flex cursor-pointer font-bold select-none"
          >ProdamCoMam</span
        >
      </div>
      <div>
        <div
          class="
            inline-flex
            hover:bg-red-900
            h-12
            p-3
            cursor-pointer
            select-none
          "
        >
          <router-link to="/registration-page">Registrace</router-link>
        </div>
        <div
          class="
            inline-flex
            hover:bg-red-900
            h-12
            p-3
            cursor-pointer
            select-none
          "
        >
          <router-link to="/login-page">Přihlášení</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
