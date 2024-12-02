<script setup>
  import Genero from '../UI/Genero.vue';
  import { URL_BASE_IMG } from '../../api/api';
  
  defineProps({
    movie:{
      typeof:Object,
      default:()=>({})
    }
  }) 

</script>

<template >
  <div v-if="movie" id="inicio" :style="{
    backgroundImage: `url(${URL_BASE_IMG}${movie.backdrop_path})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    width: '100%', 
    minHeight: '100vh',
    maxHeight:'100vh'
  } " class="max-w-full flex justify-center items-center gap-4">

    <div class="w-1/4 pl-3"> 
      <img class="w-64 rounded-lg" :src="URL_BASE_IMG+movie.poster_path" alt="imagen de una pelicula">
    </div>
    <div class="cont-info w-2/3 h-96 pl-16 rounded-lg flex flex-col gap-10 p-2 text-[#fff]">
      <div>
        <span class="font-bold">{{ movie.release_date }}</span>
        <h2 class="text-3xl font-extrabold">{{ movie.title }}</h2>
      </div>
      <ul class="flex gap-5 font-bold">
        <Genero v-for="gender in movie.genres" :key="gender.id" :name="gender.name"/>
      </ul>
      
      <p class="cont w-10/12 max-h-24 overflow-y-auto from-slate-600">{{ movie.overview?movie.overview:"Sin descripcion" }}</p>
      <div>
        <span class="text-2xl capitalize font-bold">actores:</span>
        <ul class="flex gap-5">
          <ul class="font-light" v-for="actor in movie.actors" :key="actor.id">{{ actor.name }}</ul>
        </ul>
      </div>
    </div>  

  </div>

</template>

<style scoped >
  .cont-info{
    backdrop-filter: blur(1px) brightness(90%);
  }
</style>