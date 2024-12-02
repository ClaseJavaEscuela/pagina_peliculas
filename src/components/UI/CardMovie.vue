<script setup>
  import { URL_BASE_IMG } from '../../api/api';
  import { defineProps, defineEmits } from 'vue';
  
  const emit = defineEmits(['seleccionar'])
  const props = defineProps({
    movie:{
      typeof:Object
    }

  });

  const handleClick =()=>{

    emit('seleccionar',props.movie.id,props.movie);
  }

</script>

<template>
  <div class="card w-full">
    <div class="relative w-full h-[450px]">
      <img class="absolute h-full w-full rounded-md object-fill" :src="URL_BASE_IMG + movie.poster_path" alt="imagen de una pelicula">
    </div>
    <div class="flex justify-between h-[80px] pl-3 pr-3 mt-3">
      <h3 class="text-wrap text-center text-2xl font-bold text-white">{{ movie.title }}</h3>
      <button @click="handleClick" class="bg-[#333] h-[30px] cursor-pointer capitalize hover:bg-[#192764] rounded-md text-white p-[4px]">info..</button>
    </div>
    
  </div>
  
</template>

<style scoped>
  
  card:checked>.card {
    color: #000; /* Borde blanco cuando el botón dentro de la tarjeta tiene foco */
  }
</style>
