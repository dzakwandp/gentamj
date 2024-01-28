<template lang="">
  <div>
    <div class="hidden md:flex flex-col">
      <!-- first item -->
      <div class="grid grid-cols-2 mt-24">
        <!-- left item -->
        <div class="grid text-soft-brown justify-center">
          <img
            class="mx-12 h-72 w-72"
            src="@/assets/logo_softbrown.png"
            alt=""
          />
        </div>
        <!-- right item -->
        <div class="grid text-soft-brown mr-12">
          <div
            class="grid text-soft-brown font-body font-medium text-4xl underline underline-offset-8"
          >
            About Us!
          </div>
          <div class="text-soft-brown font-body font-normal text-sm">
            Kapital Printing berfokus pada bidang percetakan digital baik design
            maupun produk.
          </div>
        </div>
      </div>
      <!-- second item -->
      <div class="grid grid-cols-3 my-10 px-20 place-content-center w-full">
        <!-- address -->
        <div class="flex flex-col text-soft-brown items-center">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div class="flex font-body text-lg mb-4">Address</div>
          <div class="flex font-body text-sm text-center">
            Ngabean Kulon RT01/RW34, Sinduharjo, Ngaglik, Sleman<br />
            55581<br />
            Perumahan Taman Semesta Asri, Jl. Pule No.01, Guwo, Triwidadi,
            Pajangan, Bantul<br />
            55751
          </div>
        </div>
        <!-- phone -->
        <div class="flex flex-col text-soft-brown items-center">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <div class="flex font-body text-lg mb-4">Phone</div>
          <div class="flex font-body text-sm text-center">
            <a href="https://wa.me/6289507699099" target="_blank"
              >+6289507699099</a
            >
          </div>
        </div>
        <!-- email -->
        <div class="flex flex-col text-soft-brown items-center">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-16 h-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div class="flex font-body text-lg mb-4">Email</div>
          <div class="flex font-body text-sm text-center">
            <a href="mailto:info@kapitalprinting.com"
              >info@kapitalprinting.com</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
