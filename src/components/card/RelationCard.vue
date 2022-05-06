<template lang="">
      <div class="bg-white flex mr-5 mb-5 rounded overflow-hidden  h-28 ">
            <div v-if="relation.coverImage.large" class="object-cover bg-cover h-full w-20  ">
                  <img class="object-cover w-20 h-full bg-cover" :src="relation.coverImage.large" alt="">
            </div>
            <div class="m-2 w-full flex flex-col justify-between">
                  <div class="text-slate-500">
                        {{relation.title.userPreferred}}
                  </div>
                  <div  class="text-slate-500 text-xs align-bottom">
                        {{relation.source}} - {{relation.status[0].toUpperCase() +  relation.status.split("_").join(" ").toLowerCase().slice(1)}}
                  </div>
            </div>
          
      </div>
</template>
<script>
export default {
      name : "RelationCard",
      props : {
            relation: Object
      }
}
</script>
<style lang="">
      
</style>