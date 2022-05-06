/* eslint-disable */
<template>
  <div
    class="fixed w-full right-0 opacity-70 hover:opacity-100 ease-linear z-50 duration-500 top-0 header nav nav-unscoped flex-wrqap items-center justify-between p-4 lg:block md:hidden sm:hidden hidden "
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between opacity-60 w-10/12">
      <div>
        <a href="../">
        <img
          class="h-9 w-9"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          src="https://anilist.co/img/icons/icon.svg"
          alt=""
        />
        </a>
      </div>

      <div class="block flex-grow lg:flex lg:items-center lg:w-auto opacity-90 ">
        <div class="text-md lg:flex-grow">
          <a
            href="#manga"
            class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          >
            Browse
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          >
            Social
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white"
          >
            Forum
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Download</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
<style>
.header {
  background-color: #2b2d42;
}
a {
  color: white;
}
</style>
