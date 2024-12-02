<script setup>
 const props = defineProps({
  id:{
    typeof:Number
  }
 })
 const handler =()=>{
  const movie = document.getElementById(`${props.id}`);
    movie.scrollIntoView({behavior:'smooth'});
 }
</script>

 <template>
  <button @click="handler" class="cursor-pointer right-1/2 top-[85vh] w-16 absolute ">
    <img src="../../assets/scroll-down.png" alt="">
  </button>
</template>


<style scoped>
  button {
  animation: select 2s infinite alternate; /* Cambiado a 'alternate' para un efecto más natural */
}

@keyframes select {
  0% {
    transform: translateY(15px); /* Inicio */
  }
  100% {
    transform: translateY(-5px); /* Fin */
  }
}

</style>
