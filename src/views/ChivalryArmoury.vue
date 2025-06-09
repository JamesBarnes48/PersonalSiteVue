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
      <RankingBar
      :rankingData="armaments"
      vertical="true"
      hideTitle="true"
      :theme="{mainColour: '#64787d', offColour: '#4a6167', fontColour: 'white'}"
      @selected="buildSelected"
      />
      <Transition name="openbuild">
        <ChivalryWeapon
        v-if="showWeapon"
        :weaponData="displayedWeapon"
        />
      </Transition>
      <div v-if="!showWeapon">
        <p>Current ideas:</p>
        <ul>
          <li>maybe put some intro text here and then click on each weapon to expand on it? Problem is dunno what text to put here could be cringe</li>
          <li>could put another rack of weapons along the other side if i want, might be a bit bloated visually and struggle for smaller screens</li>
          
        </ul>
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

