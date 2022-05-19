<template lang="">
  <div
    v-if="character"
    class="bg-white grid grid-cols-2 mr-5 mb-5 rounded overflow-hidden h-20 justify-between text-xs"
  >
    <div class="flex text-left">
      <div v-if="character.node?.image?.large" class="object-cover  h-20 ">
        <img class="object-cover w-16 h-20 " :src="character.node?.image?.large" alt="" />
      </div>
      <div class="m-2 flex flex-col text-left  justify-between">
        <div class="text-slate-500">
               <p>   {{ character.node?.name?.full }}</p>

          <p class="text-slate-400 text-sm">Main</p>
       
        </div>
      </div>
    </div>
    
    <div class="flex justify-between">
      <div class="m-2 flex flex-col justify-between">
        <div class="text-slate-500">
          <p>{{ character.voiceActors[0]?.name?.full }}</p>

          <p class="text-slate-400 text-sm">Japanese</p>
        </div>
      </div>
      <div v-if="character.voiceActors[0]?.image?.large" class="object-cover w-16 h-20 ">
        <img :src="character.voiceActors[0]?.image?.large" class="object-cover w-16 h-20 " alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CharacterCard",

  props: {
    character: Object,
  },
  mounted() {
    // console.log(this.character.voiceActors[0].image.large);
  },
};
</script>
<style lang=""></style>
