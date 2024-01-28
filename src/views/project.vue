<template>
  <div class="min-h-screen w-full">
    <div class="flex flex-col h-max w-full mt-10 items-center">
      <div
        class="flex w-96 h-36 -mb-20 pattern-cross pattern-slate-700 pattern-bg-white pattern-size-6 pattern-opacity-20"
      ></div>
      <div
        class="w-max text-4xl bg-blue-900 text-white font-medium self-center px-12 py-8 z-10"
      >
        Gallery Project
      </div>
      <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-8">
        <div v-for="img in image" :key="img.index" class="h-min w-full">
          <img class="object-cover" :src="img" />
        </div>
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
