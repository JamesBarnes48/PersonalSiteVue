<script>
import armamentsData from '../assets/data/chivalryArmaments.js';

import RankingBar from '../components/RankingBar.vue';
import ChivalryWeapon from '../components/ChivalryWeapon.vue';

import {ref, onMounted, onUnmounted} from 'vue';

export default {
  name: 'ChivalryArmoury',
  components: {RankingBar, ChivalryWeapon},
  setup(props){
    //imports
    const [armaments] = [armamentsData];

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
    <div class="chiv-container">
      <div>
        <h3 class="bar-title">Choose a Weapon</h3>
        <RankingBar
        :rankingData="armaments"
        :theme="{mainColour: '#64787d', offColour: '#4a6167', fontColour: 'white', boxWidth: '45px'}"
        @selected="buildSelected"
        />
        <Transition name="openbuild">
          <ChivalryWeapon
          v-if="showWeapon"
          :weaponData="displayedWeapon"
          />
        </Transition>
      </div>
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

.bar-title {
    font-size: 30px;
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

