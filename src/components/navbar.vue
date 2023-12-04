<template lang="">
  <div class="flex flex-col w-full h-32">
    <!-- logo section -->
    <div class="flex w-full h-4/5 bg-white justify-center p-1">
      <img :src="logo" />
    </div>
    <!-- menu section -->
    <div class="flex w-full h-1/5 bg-blue-900 justify-center items-center gap-10">
      <div v-for="items in navbarItems" :key="items.index" class="font-medium text-white">
        <router-link :to="items.route">{{ items.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "@/assets/logo/genta_logo.png";

export default {
  data() {
    return {
      logo: Logo,
      navbarItems: [
        { title: "HOME", route: "/home" },
        { title: "PORTOFOLIO", route: "/portofolio" },
        { title: "ABOUT US", route: "/about" },
      ],
    };
  },
};
</script>
<style lang=""></style>
