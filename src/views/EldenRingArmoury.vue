<script>
import erdtreeImage from '/armoury/erdtree.webp';
import armamentsData from '../assets/data/eldenRingArmaments.js';

import RankingBar from '../components/RankingBar.vue';
import Build from '../components/Build.vue';

import {ref, onMounted, onUnmounted} from 'vue';

export default {
  name: 'EldenRingArmoury',
  components: {RankingBar, Build},
  setup(props){
    //imports
    const [erdtree, armaments] = [erdtreeImage, armamentsData];

    //reactive state
    let showBuild = ref(false),
    displayedBuild = ref(null);

    onMounted(() => {document.body.classList.add('dark-body')})
    onUnmounted(() => {document.body.classList.remove('dark-body')})

    const queryApi = async (route) => {
      const resJson = await (await fetch(route)).json();
      return resJson?.data || {};
    };

    const buildSelected = (build) => {
      if(!displayedBuild.value) showBuild.value = true; 
      if(displayedBuild.value?.name === build.name){ 
        showBuild.value = false;
        displayedBuild.value = null;
        return;
      }
      displayedBuild.value = build;
    };

    return {
      erdtree,
      armaments,
      showBuild,
      displayedBuild,
      queryApi,
      buildSelected
    };
  }
}
</script>

<template>
  <div class="armoury-container">
    <h1 class="page-title">Elden Ring Armoury</h1>
    <div class="elden-container">
      <img :src="erdtree" class="erdtree-image">
      <div>
        <RankingBar
        :rankingData="armaments"
        @selected="buildSelected"
        />
      </div>
      <div v-if="!showBuild">
        <h3>In Elden Ring there are many armaments to choose from, but not all are forged equal.</h3>
        <h3>In the numerous times I have played through the game I have honed in on a few personal favourites, a gallery of weapons that are the most fun to play.</h3>
        <h2>Choose your weapon.</h2>
      </div>
      <Transition name="openbuild">
        <Build
        v-if="showBuild"
        :buildData="displayedBuild"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>

.armoury-container {
  background-color: var(--off-background-hex);
}

.armoury-container h1 {
  color: var(--off-main-hex);
}

.elden-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid var(--main-hex);
  background-color: #24211a;
  padding: 20px 15px;
  height: fit-content;
  min-height: 85vh;
}

@media(max-width: 1280px){
  .elden-container{
    padding-left: 53px;
  }

  .erdtree-image {
    width: 43%;
  }
}

@media(max-width: 600px){
  .elden-container{
      padding-left: 0px;
      padding-right: 0px
  }
}

.openbuild-enter-active,
.openbuild-leave-active {
  transition: opacity 0.6s ease-in;
}

.openbuild-enter-from,
.openbuild-leave-to {
  opacity: 0;
}

.bar-title {
    font-size: 30px;
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

</style>

