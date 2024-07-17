<script>
  import erdtreeImage from '../assets/images/armoury/erdtree.webp';

export default {
  name: 'Armoury',
  created() {

  },
  data() {
    return {
      erdtreeImgProps: {
        'backgroundImage': `url(${erdtreeImage})`,
        'background-size': 'contain',
        'background-position': 'center'
      }
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
    <div class="build-container" :style="erdtreeImgProps">

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

</style>

