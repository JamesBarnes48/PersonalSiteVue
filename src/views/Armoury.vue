<script>
  import erdtreeImage from '../assets/images/armoury/erdtree.webp';

export default {
  name: 'Armoury',
  created() {

  },
  data() {
    return {
      erdtreeImage: erdtreeImage,
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<template>
  <div class="armoury-container">
    <h1 class="armoury-title">Armoury</h1>
    <div class="build-container">
      <img :src="erdtreeImage" class="erdtree-image">

    </div>
  </div>
</template>

<style scoped>

.armoury-container {
  background-color: var(--off-background-hex);
}

.armoury-title {
  margin-top: 10px; 
  font-size: 55px;
}

.build-container {
  border: 1px solid var(--main-hex);
  background-color: #24211a;
  height: 650px;
}

.erdtree-image {
  position: absolute; 
  left: 0; 
  right: 0; 
  bottom: 0;
  top: 0;
  margin: auto;
  object-fit: cover;
  width: 35%;
  opacity: 0.5;
  filter: alpha(opacity=50);  
  -moz-opacity: 0.5;  
  -khtml-opacity: 0.5; 
}

@media(max-width: 1280px){
  .erdtree-image {
    width: 43%;
  }
}

</style>

