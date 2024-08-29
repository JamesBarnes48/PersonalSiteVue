<script>
import erdtreeImage from '../assets/images/armoury/erdtree.webp';
import armaments from '../assets/data/armaments.js';

import RankingBar from '../components/RankingBar.vue';
import Build from '../components/Build.vue';

export default {
  name: 'Armoury',
  async created() {
    /* no api query required yet
    for(let i = 0; i < this.armaments.length; i++){
      this.armaments[i].apiData = this.armaments[i].apiRoute? (await this.queryApi(this.armaments[i].apiRoute))[0]: [];
    }
      */
  },
  data() {
    return {
      erdtreeImage: erdtreeImage,
      armaments: armaments,
      showBuild: false,
      displayedBuild: null,
      builds: [
        {'Lightning Knight': {
          'main': 'Death Knight\'s Longhaft Axe',
          'offhand': 'Clawmark Seal',
          'spells': ['Knight\'s Lightning Spear', 'Ancient Dragon\'s Lightning Strike', 'Fortissax\'s Lightning Spear', 'Wrath of Gold', 'Aspects of the Crucible: Horns', 'Divine Beast Tornado', 'Golden Vow', 'Flame, Grant Me Strength', 'Blessing of the Erdtree'],
          'helmet': 'Oathseeker Knight Helm',
          'chest': 'Gelmir Knight Armour',
          'legs': 'Death Knight Greaves',
          'arms': 'Death Knight Gauntlets',
          'talismans': ['Two-Headed Turtle Talisman', 'Godfrey Icon', 'Lightning Scorpion Charm', 'Flock\'s Canvas Talisman']
        }}
      ]
    }
  },
  components: {RankingBar, Build},
  methods: {
    async queryApi(route){
      const rawRes = await fetch(route);
      const resJson = await rawRes.json();
      return resJson?.data || {};
    },

    buildSelected(build) {
      if(!this.displayedBuild){ this.showBuild = true; }
      if(this.displayedBuild === build){ 
        this.showBuild = false;
        this.displayedBuild = null;
        return;
      }
      this.displayedBuild = build;
    }
  },
}
</script>

<template>
  <div class="armoury-container">
    <h1 class="armoury-title">Elden Ring Armoury</h1>
    <div class="elden-container">
      <img :src="erdtreeImage" class="erdtree-image">
      <RankingBar
      :rankingData="this.armaments"
      title="Choose an Armament"
      @selected="buildSelected"
      />
      <Transition name="openbuild">
        <Build
        v-if="showBuild"
        :buildData="this.displayedBuild"
        />
      </Transition>
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
  color: var(--off-main-hex)
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
}

@media(max-width: 600px){
    .elden-container{
        padding-left: 20px;
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

@media(max-width: 1280px){
  .erdtree-image {
    width: 43%;
  }
}

</style>

