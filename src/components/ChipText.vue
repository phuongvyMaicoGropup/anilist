<template>
     <div class="text-white bg-blue-500 px-2  mx-2 rounded-lg flex align-middle text-sm font-medium">
      <p>{{ tag}} </p>
      <div class=" align-middle inline-block ">
      <i @click="isDelete(this.tag)" class="fa-solid fa-xmark ml-2" size="xs"></i>

      </div>

      </div>
</template>
<script>
export default {
      name : "ChipText",
      props : {
            tag: String
      },
      computed :{
            tagName(){
                  return tag
            }
      },
      data() {
            return {
            bg: 'bg-red',

            }
      },
      methods : {
            isDelete(value){
                  this.$emit('delete-tag',value);
                  console.log("Delete tag: " +value)
            }
      }
}
</script>
<style >
      
</style>