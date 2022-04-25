/* eslint-disable */
<template >
<div class="header relative nav nav-unscoped flex-wrqap  items-center justify-between p-6 lg:block md:hidden sm:hidden hidden" >
  <!-- <nav class="flex items-center justify-between flex-wrap bg-teal-600 p-6"> -->
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
       <div >
     <img class=" h-9 w-9 " width="64" height="64" viewBox="0 0 64 64" src="../assets/icon.svg" alt="" >

  </div>
     
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-md lg:flex-grow">
        <a
          href="#manga"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-white
         
            mr-4
          "
        >
          Browse
        </a>
        <a
          href="#responsive-header"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-white
           
            mr-4
          "
        >
          Social
        </a>
        <a
          href="#responsive-header"
          class="
            block
            mt-4
            lg:inline-block lg:mt-0
            text-white
           
          "
        >
          Forum
        </a>
      </div>
      <div>
        <a
          href="#"
          class="
            inline-block
            text-sm
            px-4
            py-2
            leading-none
            border
            rounded
            text-white
            border-white
            hover:border-transparent hover:text-teal-500 hover:bg-white
            mt-4
            lg:mt-0
          "
          >Download</a
        >
      </div>
    </div>
   
    </div>
  <!-- </nav> -->
</div>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
<style >
      .header{
            background-color: #2b2d42;
      }
      a{
        color : white; 
        
      }
    

</style>