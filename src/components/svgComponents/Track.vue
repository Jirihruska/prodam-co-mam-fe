<template>
  <svg
    height="200"
    viewBox="0 0 24 24"
    class="track"
    xmlns="http://www.w3.org/2000/svg"
    v-on="$listeners"
  >
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3a1 1 0 0 1 1 1v1.07A7.004 7.004 0 0 1 18.93 11H20a1 1 0 1 1 0 2h-1.07A7.004 7.004 0 0 1 13 18.93V20a1 1 0 1 1-2 0v-1.07A7.004 7.004 0 0 1 5.07 13H4a1 1 0 1 1 0-2h1.07A7.005 7.005 0 0 1 11 5.07V4a1 1 0 0 1 1-1zm-5 9a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"

    ></path>
  </svg>
</template>

<style scoped>
.track {
  fill: #991B1B;
}
.track:hover {
  filter: drop-shadow(3px 5px 2px rgb(153 27 27 / 0.4));
}
</style>
