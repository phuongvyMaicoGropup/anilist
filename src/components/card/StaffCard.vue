<template lang="">
      <div
    v-if="staff"
    class="bg-white  mr-5 mb-5 rounded overflow-hidden h-20 justify-between text-sm"
  >
    <div class="flex text-left">
      <div v-if="staff.node?.image?.large" class="cover w-16 h-20 ">
        <img :src="staff.node?.image?.large" alt="" />
      </div>
      <div class="m-2 flex flex-col text-left justify-between">
        <div class="text-slate-500">
               <p>   {{ staff.node?.name?.full }}</p>

          <p class="text-slate-400 text-sm">{{staff.role}}</p>
       
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
export default {
      name : "StaffCard",
      props : {
            staff : Object
      }
}
</script>
<style lang="">
      
</style>