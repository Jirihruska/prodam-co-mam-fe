<template>
  <div id="app">
    <PageNavbar/>
     <router-view class="mb-auto">
       
     </router-view>
  </div>
</template>

<script>
import PageNavbar from './components/pageNavbar/PageNavbar.vue'

export default {
  name: 'App',
  components: {
    PageNavbar
  },
}
</script>
