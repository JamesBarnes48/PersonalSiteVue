<script>
import armamentsData from '../assets/data/chivalryArmaments.js';

import RankingBar from '../components/RankingBar.vue';
import Build from '../components/Build.vue';

import {ref, onMounted, onUnmounted} from 'vue';

export default {
  name: 'ChivalryArmoury',
  components: {RankingBar, Build},
  setup(props){
    //imports
    const [armaments] = [armamentsData];

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
  <div class="main-container">
    <h1 class="page-title">Chivalry 2 Armoury</h1>
    <div class="chiv-container">
      <RankingBar
      :rankingData="armaments"
      vertical="true"
      :theme="{mainColour: '#64787d', offColour: '#4a6167'}"
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

.main-container {
  background-color: var(--off-background-hex);
}

.main-container h1 {
  color: var(--off-main-hex);
}

.chiv-container {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  border: 1px solid var(--main-hex);
  background-color: #24211a;
  padding: 20px 15px;
  height: fit-content;
  min-height: 550px;
}

@media(max-width: 1280px){
  .chiv-container{
    padding-left: 73px;
  }
}

@media(max-width: 960px){
  .chiv-container{
    padding-left: 8px;
    padding-right: 0px;
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

</style>

