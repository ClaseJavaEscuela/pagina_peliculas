<script setup>
  import Genero from '../UI/Genero.vue';
  import { getGenerous } from '../../api/api.js';
  import {computed, ref} from 'vue';

  let listaGeneros = ref([]);
  let start = ref(0);
  let end = ref(14);
  let isVisible = computed(()=>{
    if(start.value > 0) return true;
  })

  getGenerous().then(res => {
    listaGeneros.value = res
  });

  const next=()=>{
    start.value = end.value;
    end.value = listaGeneros.value.length;
  }

  const back =()=>{
    start.value = 0;
    end.value = 14;
  }

</script>

<template >
  <div class="w-11/12 m-auto p-1 pr-1 mt-3 flex flex-col gap-2">
    <span class="text-[#fff] text-1xl font-bold">Generos</span>
    <div class="cont max-w-full flex gap-3 p-3">
      <button :disabled="isVisible?false:true" @click="back" class="text-white cursor-pointer text-2xl font-extrabold">{{ "<" }}</button>
      <div class="flex w-full h-7 gap-3">
        <Genero v-for="item in listaGeneros.slice(start,end)" :key="item.id" :name="item.name"></Genero>
      </div>
      <button :disabled="isVisible?true:false" @click="next" class="text-white cursor-pointer text-2xl font-extrabold">{{ ">" }}</button>

    </div>
    <hr class="border-[#323346]">

  </div>
  

</template>

<style >
  
  
</style>