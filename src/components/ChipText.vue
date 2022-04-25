<template>
      <div  :class="[ bg]" class="rounded p-1 text-white " >
          {{text}}
      </div>
</template>
<script>
export default {
      name : "ChipText",
      props : {
            color:String,
            text: String
      },
      data() {
            bg: 'bg-red'
      }
}
</script>
<style >
      
</style>