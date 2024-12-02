<script setup>
  import HeaderPage from '../components/Layout/HeaderPage.vue';
  import Movie from '../components/Layout/Movie.vue';
  import Flecha from '../components/UI/Flecha.vue';
  import Generos from '../components/Layout/Generos.vue';
  import Movies from '../components/Layout/Movies.vue'
  import Loader from '../components/UI/Loader.vue';

  import { ref, computed } from 'vue';
  import { getMovies, getInfoPelicula } from '../api/api.js';

  let allMovies = ref([]);
  let indexPage = ref(1);
  let movieSelect = ref({});
  let idMovieSelect = ref(0);
  let isLoading = ref(true);

  const loaderPager = async (indexPage) => {
    try{
      const res = await getMovies(indexPage);
      console.log(res)
      const infoMovie = await getInfoPelicula(res[0].id);
      allMovies.value = res;
      idMovieSelect.value = res[0].id;
      movieSelect.value = infoMovie;

    }catch(Error){
      console.log(Error)
    }finally{
      isLoading.value = false;
    }
  }

  loaderPager(indexPage.value);

  const selectMovie= async(index,movie)=>{
    try{
      isLoading.value = true;
      movieSelect.value = await getInfoPelicula(index);
      idMovieSelect.value = index;
    }catch(error){
      console.log(error)
    }finally{
      isLoading.value = false;
    }

  }

  const changePage =(newPage)=> {
    indexPage.value = newPage;
    loaderPager(indexPage.value)
  };

  
</script>


<template >
  <div class="max-w-full h-full bg-slate-950 relative">
    <Movie :movie="movieSelect"></Movie>
    <HeaderPage></HeaderPage>
    <Flecha :id="idMovieSelect"></Flecha>
    <Generos></Generos>
    <div class="w-11/12 m-auto flex gap-5 pt-5">
      <button :disabled="indexPage <= 1? true:false" @click="changePage(indexPage - 1)" class="text-white border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700">{{ '<' }}</button>
      <button @click="changePage(indexPage + 1)" class="text-white border-2 font-bold rounded-md pl-3 pr-3 capitalize hover:bg-sky-700">{{ '>' }}</button>
      <p class="ml-3 text-white font-bold">pagina {{ indexPage }}</p>
    </div>
    <Movies :movies="allMovies" @update:movieSelect="selectMovie"></Movies>
    <div class="text-white h-24 bg-[#06081b] pl-5 flex items-center justify-around">
      <p class="font-semibold">Luis Angel Diaz Diaz</p>
      <a href="https://www.themoviedb.org/?language=es">API</a>
    </div>
    <Loader v-if="isLoading"></Loader>

  </div>
</template>

<style scoped>
.cont::-webkit-scrollbar {
  -webkit-appearance: none;
}

.cont::-webkit-scrollbar:vertical{
  width:5px;

}

.cont::-webkit-scrollbar-thumb {
  background-color: #182131;
  border-radius: 20px;
  border: 2px solid #404346;
}

.cont::-webkit-scrollbar-track {
  border-radius: 10px;  
}
</style>