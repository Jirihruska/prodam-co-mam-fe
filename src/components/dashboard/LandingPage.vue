<template>
 <div class="h-screen bg-red-800 text-white text-center font-bold pt-16">
    Zeď plná prodejů
    <div class="absolute left-5 top-5 cursor-pointer">
      <span>
        <Filters />
      </span>
    </div>
  </div>
</template>

<script>
import Filters from '../svgComponents/Filters.vue'

export default {
  components: {
    Filters,
  }
};
</script>

<style scoped>
.filter:hover {
  text-shadow: 2px 2px 6px black;
}
</style>