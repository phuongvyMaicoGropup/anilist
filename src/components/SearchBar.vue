<template lang="">
  <div :class="[isDisplay ? 'block':'hidden'  ]" >
      <div class="h-32">

  </div>
    <div>
      
    </div>
    <div class="grid lg-grid-cols-6 sm:grid-cols-5 md:grid-cols-5 text-left mx-auto w-11/12 md:w-11/12 lg:w-10/12 xl:w-10/12 sm:w-11/12 ">
      <div class="mx-2 lg:col-span-1  md:col-span-5 sm:col-span-5">
        <div class="">Search</div>
        <div>
          <input
            v-model="searchKey"
            class="form-control mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            type="search"
            id="textform"
            name="searchKey"
          /><br />
        </div>
      </div>
      <div class="mx-2 ">
        <div>Genres</div>
        <div>
          <input @focus="resetValue(genreKey)" v-model="genreKey"
          class="form-control mt-1 block w-full px-3 py-2 bg-white border
          border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-slate-500 focus:ring-1
          focus:ring-slate-500" type ="search" name="genres" placeholder="Any" 
          list="genres" />
          <!-- {{this.searchKey}} -->

          <datalist id="genres" class="mr-5">
            <div v-for="genre in genres" :key="genre">
              <div v-if="genre == genreKey">
                <option
                  class="text-black bg-white color-green"
                  :value="genre"
                ></option>
              </div>
              <div v-else>
                <option
                  class="text-black bg-white color-green"
                  :value="genre"
                ></option>
              </div>
            </div>
          </datalist>
        </div>
      </div>
      <div class="mx-2">
        <div>Year</div>
        <div>
          <input
            v-model="yearKey"
            class="form-control mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            type="text"
            name="year"
            placeholder="Any"
            list="year"
          /><br />
          <datalist id="year">
            <div v-for="year in (91)" :key="year">
              <option class="text-black bg-white" :value="year+1939"></option>
            </div>
          </datalist>
        </div>
      </div>
      <div class="mx-2">
        <div>Season</div>
        <div>
          <input
            v-model="seasonKey"
            class="form-control mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            type="text"
            name="seasons"
            placeholder="Any"
            list="seasons"
          />
          <div class="align-middle inline-block">
            
          </div>
          <datalist id="seasons">
            <div v-for="s in seasons" :key="s">
              <option class="text-black bg-white" :value="s"></option>
            </div>
          </datalist>
        </div>
      </div>
      <div class="mx-2">
        <div>Format</div>
        <div>
          <input
            class="form-control mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none ffocus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            type="text"
            v-model="formatKey"
            name="formats"
            placeholder="Any"
            list="formats"
          /><br />
          <datalist id="formats">
            <div v-for="format in formats" :key="format">
              <option class="text-black bg-white" :value="format"></option>
            </div>
          </datalist>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import { listGenres, seasons, formatList } from "../const-variables.js";
export default {
  name: "SearchBar",
  data() {
    return {
      display: true,
      genres: listGenres,
      seasons: seasons,
      formats: formatList,
      searchKey: "",
      genreKey: "",
      yearKey: "",
      seasonKey: "",
      formatKey: "",
      // isOpen : routeName == "search" || routeName== "home"
    };
  },
  
  computed: {
    searchValue(){
      return this.$route.query.search
    },
    isDisplay(){
      console.log(this.$route.name )
      return  this.$route.name !=="detail";
    },
    searchQuery: function () {
      return [
        {
          key: "search",
          value: this.searchKey,
        },
        {
          key: "genre",
          value: this.genreKey,
        },
        {
          key: "year",
          value: this.yearKey,
        },
        {
          key: "season",
          value: this.seasonKey,
        },
        {
          key: "format",
          value: this.formatKey,
        },
      ];
    },
  },
  watch: {
    searchQuery(value) {
      this.$router.push({
        path: "/search",
        query: value.reduce((prev, curr) => {
          if (curr.value === "") return prev;
          return Object.assign(prev, { [curr.key]: curr.value });
        }, {}),
      });
    },
  },

  methods: {
    resetValue(key){
      console.log("resetValue")
       key ="" 
       console.log(key)
    }
  },
};
</script>
