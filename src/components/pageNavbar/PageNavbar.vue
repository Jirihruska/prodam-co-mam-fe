<template>
  <div>
    <div
      class="
        w-full
        h-16
        bg-red-800
        text-white
        grid grid-rows-1 grid-cols-1 grid-flow-col
        gap-4
      "
    >
      <div>About</div>
      <div>
        <div class="inline-flex hover:bg-red-600 h-full pr-4 cursor-pointer">
          <router-link to="/registration-page">Registrace</router-link>
        </div>
        <div class="inline-flex hover:bg-red-600 h-full pr-4 cursor-pointer">
          <router-link to="/login-page">Přihlášení</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
