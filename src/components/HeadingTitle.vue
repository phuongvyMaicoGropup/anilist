<template lang="">
      <div class="flex items-center justify-between ">
            <p class="text-lg font-semibold">{{title.toUpperCase()}}</p>
            <p class="hover:text-slate-500" @click="changeRoute()">Xem thêm</p>
      </div>
</template>
<script>
export default {
      name:"HeadingTitle",
      props: {
            title: String , 
            link : String , 
            queryObject : Object
      },
      methods: {
         changeRoute(){
               if (this.queryObject != null){
 this.$router.push({
        path: "/search",
        query: queryObject
      });
               }
               else{
                     this.$router.push( "/search");
               }
              

         }   
      }
}
</script>
<style lang="">
      
</style>