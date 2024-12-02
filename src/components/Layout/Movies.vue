<script setup>
  import CardMovie from "../UI/CardMovie.vue";
  import { ref, defineEmits } from "vue";
  defineProps({
    movies:{
      typeof:Array,
      default:[]
    }
  })

  const emit = defineEmits(['update:movieSelect'])

  const select=(index,movie)=>{
    emit('update:movieSelect',index,movie);
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })

  }

</script>
  
<template>
  <div class="m-auto mt-5 min-h-[100vh] w-11/12 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
    
    <CardMovie v-for="movie in movies" :id="movie.id" :key="movie.id"
      :movie="movie"
      @seleccionar="select"
    ></CardMovie>
    
    
  </div>
</template>

<style>

</style>