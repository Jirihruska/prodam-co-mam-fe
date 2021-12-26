<template>
  <div class="container pb-8">
    <div class="text-left w-1/3">
      <label :class="labelStyles" class="text-xl font-semibold select-none">{{
        label
      }}</label>
    </div>
    <div class="centered text-center">
      <input
        class="centered focus:outline-none text-lg p-4 w-full"
        :type="type"
        :class="classStyles"
        required
        :v-model="data"
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
    classStyles: String,
    labelStyles: String,
    data: String,
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
