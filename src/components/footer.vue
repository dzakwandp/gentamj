<template lang="">
  <div class="flex flex-col w-full mt-16">
    <div class="flex w-full h-8 bg-blue-900"></div>
    <div class="flex w-full h-max p-8 gap-40">
      <!-- logo section -->
      <div class="flex w-1/2 justify-end items-center">
        <img class="h-14" :src="logo" />
      </div>

      <!-- address section -->
      <div class="flex flex-col w-1/2">
        <h1 class="text-lg font-semibold text-blue-900">Genta Multi Jayya</h1>
        <p class="w-1/2">
          Ruko Thamrin Square Blok A5, Jl. MH. Thamrin No. 5, Sekayu, Semarang
          Tengah, Kota Semarang, Jawa Tengah
        </p>
      </div>
    </div>
    <div class="flex w-full h-8 justify-center items-center bg-blue-900">
      <p class="text-white">© 2023 all rights reserved</p>
    </div>
  </div>
</template>
<script>
import Logo from "@/assets/logo/genta_logo.png";

export default {
  data() {
    return {
      logo: Logo,
    };
  },
};
</script>
<style lang=""></style>
