<template lang="">
  <div>
    <Navbar/>
    <RouterView/>
  </div>
</template>
<script>
import Navbar from "@/components/navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style lang=""></style>
