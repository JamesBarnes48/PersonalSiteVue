<script>
import erdtreeImage from '/armoury/erdtree.webp';
import armamentsData from '../assets/data/armaments.js';

import RankingBar from '../components/RankingBar.vue';
import Build from '../components/Build.vue';

import {ref} from 'vue';

export default {
  name: 'Armoury',
  components: {RankingBar, Build},
  setup(props){
    //imports
    const [erdtree, armaments] = [erdtreeImage, armamentsData];

    //reactive state
    let showBuild = ref(false),
    displayedBuild = ref(null);

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
      <RankingBar
      :rankingData="armaments"
      title="Choose an Armament"
      @selected="buildSelected"
      />
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
  border: 1px solid var(--main-hex);
  background-color: #24211a;
  padding: 20px 15px;
  height: fit-content;
  min-height: 550px;
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

