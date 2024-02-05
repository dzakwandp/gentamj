<template lang="">
  <div class="w-full h-max">
    <!-- carousel section -->
    <div class="w-full h-max mb-32">
      <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for="slide in carItems" :key="slide.index">
          <div
            class="carousel__item"
            :style="{ backgroundImage: `url(` + slide.image + `)` }"
          ></div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>

    <!-- company profile section -->
    <div class="flex w-full h-max items-center mb-16">
      <div class="flex w-1/5 h-full justify-end self-end">
        <div
          class="flex w-56 h-80 -mr-8 pattern-cross pattern-slate-700 pattern-bg-white pattern-size-6 pattern-opacity-20"
        ></div>
      </div>
      <div class="flex flex-col w-3/5 h-max z-10">
        <div
          class="w-max text-4xl bg-blue-900 text-white font-medium self-center px-12 py-8 z-10"
        >
          Profile Kami
        </div>
        <div
          class="w-full text-xl bg-gray-300 text-black font-normal self-center text-justify px-12 pb-8 pt-16 -mt-12 z-0"
        >
          <p class="mb-4">
            GENTA MULTI JAYYA merupakan salah satu perusahaan yang bergerak di
            bidang Konstruksi Bangunan. Konstruksi yang menjadi bidikan, antara
            lain pembagunan gedung, perkantoran, fasilitas umum, pabrik,
            bangunan peribadatan, sekolah, hotel, villa dan rumah tinggal dengan
            sekala besar ataupun rumah mewah.
          </p>
          <p>
            GENTA MULTI JAYYA dapat bergerak dijasa konstruksi baik secara
            kontraktor utama (main contractor) ataupun sebagai kontraktor
            pendukung (sub-contractor).
          </p>
        </div>
      </div>
      <div class="flex w-1/5 h-full"></div>
    </div>

    <!-- visi misi section -->
    <div class="flex h-max w-full">
      <!-- visi section -->
      <div class="flex flex-col h-max w-1/2">
        <div
          class="w-max text-4xl bg-blue-900 text-white font-medium self-center px-12 py-4 z-10"
        >
          Visi
        </div>
        <div
          class="flex w-2/3 h-[320px] text-xl bg-gray-300 text-black font-normal self-center text-justify items-center px-12 pb-8 pt-16 -mt-12 z-0"
        >
          <p>
            Menjadi Perusahaan yang unggul dan merupakan aset nasional melalui
            bisnis pengembangan perkotaan dengan memanfaatkan reputasi dan
            sinergi grup.
          </p>
        </div>
      </div>
      <!-- misi section -->
      <div class="flex flex-col h-max w-1/2">
        <div
          class="w-max text-4xl bg-blue-900 text-white font-medium self-center px-12 py-4 z-10"
        >
          Misi
        </div>
        <div
          class="w-2/3 text-xl bg-gray-300 text-black font-normal self-center text-justify px-12 pb-8 pt-16 -mt-12 z-0"
        >
          <ul class="list-disc">
            <li>
              Mengutamakan pertumbuhan yang berkesinambungan, berkualitas dan
              berwawasan lingkungan;
            </li>
            <li>
              Memberi nilai tambah bagi stakeholder melalui inovasi dan
              teknologi;
            </li>
            <li>
              Menyediakan wadah bagi sumber daya manusia unggul untuk berkarya,
              berkreasi, dan tumbuh bersama berlandaskan nilai nilai dan budaya
              Jaya.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex w-full h-16 mb-8 justify-center">
      <div
        class="flex w-2/3 h-16 pattern-cross pattern-slate-700 pattern-bg-white pattern-size-6 pattern-opacity-20"
      ></div>
    </div>

    <!-- why us section -->
    <div class="flex flex-col w-full h-max">
      <div
        class="w-max text-4xl bg-blue-900 text-white font-medium self-center px-12 py-8 z-10"
      >
        Mengapa Kami?
      </div>
      <div
        class="flex w-full h-max text-xl bg-gray-300 text-black font-normal self-center text-justify px-12 pb-8 pt-16 -mt-12 z-0 gap-2"
      >
        <div class="flex flex-col h-max w-1/4 items-center justify-center">
          <div class="rounded-full h-max w-max p-2 bg-blue-900">
            <Check class="text-white" />
          </div>
          <span class="text-3xl">Berkualitas</span>
        </div>
        <div class="flex flex-col h-max w-1/4 items-center justify-center">
          <div class="rounded-full h-max w-max p-2 bg-blue-900">
            <Earth class="text-white" />
          </div>
          <span class="text-3xl">Berwawasan Lingkungan</span>
        </div>
        <div class="flex flex-col h-max w-1/4 items-center justify-center">
          <div class="rounded-full h-max w-max p-2 bg-blue-900">
            <Cpu class="text-white" />
          </div>
          <span class="text-3xl">Inovasi Teknologi</span>
        </div>
        <div class="flex flex-col h-max w-1/4 items-center justify-center">
          <div class="rounded-full h-max w-max p-2 bg-blue-900">
            <Group class="text-white" />
          </div>
          <span class="text-3xl">SDM Unggul</span>
        </div>
      </div>
    </div>

    <!-- contact us -->
    <div class="flex w-full h-96 bg-gray-300 gap-20">
      <div class="flex w-1/2 h-full items-center justify-end">
        <div
          class="flex w-40 h-80 -mr-4 z-0 pattern-cross pattern-slate-700 pattern-bg-gray-300 pattern-size-6 pattern-opacity-20"
        ></div>
        <div
          class="flex w-1/2 h-1/3 bg-blue-900 items-center justify-center z-10"
        >
          <span class="text-2xl text-white">Informasi lebih lanjut</span>
        </div>
      </div>
      <div class="flex flex-col w-1/2 h-full justify-center gap-10">
        <div class="flex w-1/2 gap-2 items-center">
          <Location class="text-blue-900 w-20" />
          <p>
            Ruko Thamrin Square Blok A5, Jl. MH. Thamrin No. 5, Sekayu, Semarang
            Tengah, Kota Semarang, Jawa Tengah
          </p>
        </div>
        <div class="flex w-1/2 gap-2 items-center">
          <Phone class="text-blue-900 w-6" />
          <p>024-3588766</p>
        </div>
        <div class="flex w-1/2 gap-2 items-center">
          <Mail class="text-blue-900 w-6" />
          <p>gentamultijayya@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import Car1 from "@/assets/car1.png";
import Car2 from "@/assets/car2.png";
import Car3 from "@/assets/car3.png";

import Check from "@/components/icons/check.vue";
import Cpu from "@/components/icons/cpu.vue";
import Earth from "@/components/icons/earth.vue";
import Group from "@/components/icons/group.vue";
import Location from "@/components/icons/location.vue";
import Mail from "@/components/icons/mail.vue";
import Phone from "@/components/icons/phone.vue";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Check,
    Earth,
    Cpu,
    Group,
    Location,
    Mail,
    Phone,
  },

  data() {
    return {
      carItems: [{ image: Car1 }, { image: Car2 }, { image: Car3 }],
    };
  },
};
</script>

<style>
.carousel__item {
  min-height: 500px;
  width: 100%;
  color: var(--vc-clr-white);
  background-size: cover;
  background-position: center;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
}

.carousel__prev,
.carousel__next {
  color: #ffffff;
}
.carousel__prev:hover,
.carousel__next:hover {
  color: #1e3a8a;
}
</style>
