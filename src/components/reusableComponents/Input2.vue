<template>
  <div class="container pb-8">
    <div class="pl-20 w-1/5">
      <label class="text-white text-xl font-semibold select-none">{{
        label
      }}</label>
    </div>
    <div class="centered text-center">
      <input
        class="centered focus:outline-none bg-white text-red-800 text-lg p-4 ml-20 w-full"
        :type="type"
        required
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    label: String,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-self: center;
}
.centered {
  justify-content: center;
}
</style>