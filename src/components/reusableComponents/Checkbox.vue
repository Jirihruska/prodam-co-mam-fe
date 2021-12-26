<template>
<div class="grid grid-cols-6">
  <div @click="value = !value" :class="checkboxStyles" class="check-div col-start-1 col-end-2">{{value ? "✓":""}}</div>
  <div :class="labelStyles" class="col-start-2 col-end-7">{{labelText}}</div>
  </div>
</template>

<script>
export default {
  props: {
    checkboxStyles: String,
    labelText: String,
    labelStyles: String,
    value: Boolean,
  },
  data: () => {
    return {
      value: false,
    }
  }
};
</script>

<style>
  .check-div {
    height: 24px;
    width: 24px;
    text-align: center;
    user-select: none;
    font-weight: 1000;
  }
  .check-div:hover {
    cursor: pointer;
  }
</style>