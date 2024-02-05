<template lang="">
  <div>
    <div class="flex flex-col">
      <!-- first item -->
      <div class="grid md:grid-cols-2 mt-24">
        <!-- left item -->
        <div class="grid text-soft-brown justify-center">
          <img class="mx-12 w-72" src=@/assets/logo/genta_logo.png alt="" />
        </div>
        <!-- right item -->
        <div class="grid text-soft-brown p-8 md:p-0 md:mr-12">
          <div class="hidden md:grid text-blue-900 text-4xl">About Us</div>
          <div class="flex flex-col text-sm gap-4 text-justify">
            <p>
              GENTA MULTI JAYYA merupakan salah satu perusahaan yang bergerak di
              bidang Konstruksi Bangunan. Konstruksi yang menjadi bidikan,
              antara lain pembagunan gedung, perkantoran, fasilitas umum,
              pabrik, bangunan peribadatan, sekolah, hotel, villa dan rumah
              tinggal dengan sekala besar ataupun rumah mewah.
            </p>
            <p>
              GENTA MULTI JAYYA dapat bergerak dijasa konstruksi baik secara
              kontraktor utama (main contractor) ataupun sebagai kontraktor
              pendukung (sub-contractor).
            </p>
            <p>
              GENTA MULTI JAYYA berdomisili di Kota Semarang, Jawa Tengah. Untuk
              informasi lebih lanjut dapat menghubungi dan datang langsung ke
              alamat kami.
            </p>
          </div>
        </div>
      </div>
      <!-- second item -->
      <div class="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 my-10 px-2 md:px-20 place-content-center w-full">
        <!-- address -->
        <div class="flex flex-col text-soft-brown items-center">
          <div class="flex">
            <Location class="text-blue-900 w-10 md:w-16" />
          </div>
          <div class="flex text-base md:text-lg mb-4">Address</div>
          <div class="flex text-xs md:text-sm text-center">
            Ruko Thamrin Square Blok A5 Jl. MH. Thamrin NO. 5 Sekayu Semarang
            Tengah Kota Semarang, Jawa Tengah
          </div>
        </div>
        <!-- phone -->
        <div class="flex flex-col text-soft-brown items-center">
          <div class="flex">
            <Phone class="text-blue-900 w-10 md:w-16" />
          </div>
          <div class="flex text-base md:text-lg mb-4">Phone</div>
          <div class="flex text-xs md:text-sm text-center">024-3588766</div>
        </div>
        <!-- email -->
        <div class="flex flex-col col-span-2 md:col-auto text-soft-brown items-center">
          <div class="flex">
            <Mail class="text-blue-900 w-10 md:w-16" />
          </div>
          <div class="flex text-base md:text-lg mb-4">Email</div>
          <div class="flex text-xs md:text-sm text-center">gentamultijayya@gmail.com</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Location from "@/components/icons/location.vue";
import Mail from "@/components/icons/mail.vue";
import Phone from "@/components/icons/phone.vue";
export default {
  components: {
    Location,
    Mail,
    Phone,
  },
};
</script>
<style lang=""></style>
