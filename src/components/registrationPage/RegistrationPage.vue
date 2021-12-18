<template>
  <div class='border-4 border-red-600 mt-2 mr-80 ml-10 pb-2 rounded-lg'>
    <div class='text-3xl mt-5 ml-20 text-red-600 underline'>REGISTRACE NOVÉHO ÚČTU</div>
    <div class="text-red-400"><input class='border-2 border-black mt-8 ml-40 hover:border-red-400 rounded-lg' placeholder="Jméno" type="text">*</div>
    <div class="text-red-400"><input class='border-2 border-black mt-2 ml-40 hover:border-red-400 rounded-lg' placeholder="Příjmení" type="text">*</div>
    <div class="text-red-400"><input class='border-2 border-black mt-2 ml-40 hover:border-red-400 rounded-lg' placeholder="Email" type="email">*</div>
    <div><input class='border-2 border-black mt-2 ml-40 pl-5 hover:border-red-400 rounded-lg' type="date"></div>
    <div class="text-red-400"><input class='border-2 border-black mt-2 ml-40 hover:border-red-400 rounded-lg' placeholder="Heslo" type="password">*</div>
    <div class=" text-red-400 ml-40 mt-2 font-bold">* = Povinný údaj</div>
    
  </div>
</template>

<script>
export default {

}
</script>
