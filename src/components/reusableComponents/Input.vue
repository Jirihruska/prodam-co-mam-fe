<template>
  <div class="container pb-8">
    <div class="text-right w-1/3">
      <label class="text-red-800 text-xl font-semibold select-none">{{ label }}</label>
    </div>
    <div class="centered text-center">
      <input
        class="
          centered
          focus:outline-none
          bg-red-800
          text-white text-lg
          p-4
        "
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

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(255, 161, 161);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}
</style>
