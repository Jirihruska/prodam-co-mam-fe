<template>
<div class="grid grid-cols-6 pb-1">
  <div @click="pass()" :class="checkboxStyles" class="check-div col-start-1 col-end-2">{{value ? "✓":""}}</div>
  <div :class="labelStyles" class="col-start-2 col-end-7">{{labelText}}</div>
  </div>
</template>

<script>
export default {
  props: {
    checkboxStyles: String,
    labelText: String,
    labelStyles: String,
  },
  data: () => {
    return {
      value: false,
    }
  },
  methods: {
    pass() {
      this.value = !this.value
      this.$emit("pass", this.value);
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