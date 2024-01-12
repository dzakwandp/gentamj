<template>
  <div class="min-h-screen">
    <div class="flex flex-col h-max w-full mt-10 items-center">
      <div
        class="flex w-96 h-36 -mb-20 pattern-cross pattern-slate-700 pattern-bg-white pattern-size-6 pattern-opacity-20"
      ></div>
      <div
        class="w-max text-4xl bg-blue-900 text-white font-medium self-center px-12 py-8 z-10"
      >
        Project Kami
      </div>
    </div>
  </div>
</template>
<script>
import image from "@/assets/image/images.json";
export default {
  data() {
    return {
      image,
    };
  },
};
</script>
<style lang=""></style>
