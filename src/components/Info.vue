<template lang="">
  <div class="text-left text-sm py-2 mr-6 sm:text-slate-400 w-fit">
    <p class="font-medium truncate">{{ this.title }}</p>
    <div class="sm:flex-row flex flex-row md:flex-col lg:flex-col truncate text-xs sm:text-sm sm:text-black">
      <div  v-for="v in this.value">
        <div v-if="v != this.value[this.value.length - 1]">{{ v +","}}  </div>
        <div v-else>
          {{ v }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Info",
  props: {
    title: String,
    value: Array,
  },

  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>
<style>
p::first-letter {
  text-transform: capitalize;
}
</style>
