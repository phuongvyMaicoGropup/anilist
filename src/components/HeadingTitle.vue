<template lang="">
      <div class="flex items-center justify-between py-4">
            <p class="text-lg font-semibold">{{title.toUpperCase()}}</p>
            <p :click="changeRoute()">Xem thêm</p>
      </div>
</template>
<script>
export default {
      name:"HeadingTitle",
      props: {
            title: String , 
            link : String
      },
      methods: {
         changeRoute(){
                              console.log("Click in heading text")

         }   
      }
}
</script>
<style lang="">
      
</style>