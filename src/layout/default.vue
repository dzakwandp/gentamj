<template lang="">
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>
<style lang=""></style>
