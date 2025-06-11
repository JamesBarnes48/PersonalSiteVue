<script>
import bannerImage from '/chivalry/chiv2banner.jpg';
import armamentsData from '../assets/data/chivalryArmaments.js';

import RankingBar from '../components/RankingBar.vue';
import ChivalryWeapon from '../components/ChivalryWeapon.vue';

import {ref, onMounted, onUnmounted} from 'vue';

export default {
  name: 'ChivalryArmoury',
  components: {RankingBar, ChivalryWeapon},
  setup(props){
    //imports
    const [banner, armaments] = [bannerImage, armamentsData];

    //reactive state
    let showWeapon = ref(false),
    displayedWeapon = ref(null);

    onMounted(() => {document.body.classList.add('dark-body')})
    onUnmounted(() => {document.body.classList.remove('dark-body')})

    const queryApi = async (route) => {
      const resJson = await (await fetch(route)).json();
      return resJson?.data || {};
    };

    const buildSelected = (build) => {
      if(!displayedWeapon.value) showWeapon.value = true; 
      if(displayedWeapon.value?.name === build.name){ 
        showWeapon.value = false;
        displayedWeapon.value = null;
        return;
      }
      displayedWeapon.value = build;
    };

    return {
      banner,
      armaments,
      showWeapon,
      displayedWeapon,
      queryApi,
      buildSelected
    };
  }
}
</script>

<template>
  <div class="main-container">
    <h1 class="page-title">Chivalry 2 Armoury</h1>
    <div class="chiv-container banner-wrapper">
      <img :src="banner" class="banner-image">
        <RankingBar
        :rankingData="armaments"
        :theme="{mainColour: '#64787d', offColour: '#4a6167', fontColour: 'white', boxWidth: '45px'}"
        @selected="buildSelected"
        />
        <Transition name="openbuild" mode="out-in">
          <ChivalryWeapon
          v-if="showWeapon"
          key="main"
          :weaponData="displayedWeapon"
          />
          <div 
          v-else
          key="placeholder"
          >
            <h3>In Elden Ring there are many armaments to choose from, but not all are forged equal.</h3>
            <h3>In the numerous times I have played through the game I have honed in on a few personal favourites, a gallery of weapons that are the most fun to play.</h3>
            <h2>Choose your weapon.</h2>
          </div>
        </Transition>
    </div>
  </div>
</template>

<style scoped>

.main-container {
  background-color: var(--off-background-hex);
  color: white;
}

.main-container h1 {
  color: var(--off-main-hex);
}

.chiv-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid var(--main-hex);
  background-color: #24211a;
  padding: 20px 15px;
  height: fit-content;
  min-height: 85vh;
}

/* relative positioned parent means max height, overflowing background image is contained inside it - "nearest positioned ancestor" */
.banner-wrapper {
  position: relative;
  overflow: hidden;
}

.banner-image {
  position: absolute; 
  left: 0; 
  right: 0; 
  bottom: 0;
  top: 0;
  margin: auto;
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  filter: alpha(opacity=50);  
  -moz-opacity: 0.5;  
  -khtml-opacity: 0.5; 
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

