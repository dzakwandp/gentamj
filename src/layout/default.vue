<template lang="">
  <div>
    <Navbar />
    <RouterView class="min-h-screen" />
      <button
        v-if="showScrollToTop"
        ref="toTop"
        class="fixed bottom-4 right-4 bg-blue-900 hover:bg-soft-brown hover:text-aqua text-white font-bold py-2 px-2 rounded-none"
        :class="{ hidden: shouldHide }"
        @click="scrollToTop()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/navbar.vue";
import Footer from "@/components/footer.vue";
export default {
  components: { Navbar, Footer },
  data() {
    return {
      showScrollToTop: false,
    };
  },
  methods: {
    onScroll(e) {
      let scrollYPosition;
      scrollYPosition = window.top.scrollY;
      if (scrollYPosition > 500) {
        this.showScrollToTop = true;
      }
      if (scrollYPosition < 200) {
        this.showScrollToTop = false;
      }
      // console.log('Scroll Position', scrollYPosition)
      // e.target.documentElement.scrollTop
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang=""></style>
