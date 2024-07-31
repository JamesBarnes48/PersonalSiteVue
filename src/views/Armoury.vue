<script>
import erdtreeImage from '../assets/images/armoury/erdtree.webp';
import armaments from '../assets/data/armaments.js';

import RankingBar from '../components/RankingBar.vue';

export default {
  name: 'Armoury',
  async created() {
    for(let i = 0; i < this.armaments.length; i++){
      this.armaments[i].apiData = (await this.queryApi(this.armaments[i].apiRoute))[0];
    }
    console.info(this.armaments);
  },
  data() {
    return {
      erdtreeImage: erdtreeImage,
      armaments: armaments,
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
  props: {
   
  },
  components: {RankingBar},
  methods: {
    async queryApi(route){
      const rawRes = await fetch(route);
      const resJson = await rawRes.json();
      return resJson?.data || {};
    }
  },
}
</script>

<template>
  <div class="armoury-container">
    <h1 class="armoury-title">Armoury</h1>
    <div class="elden-container">
      <img :src="erdtreeImage" class="erdtree-image">
      <v-row>
        <v-col col="6">
          <RankingBar
          :rankingData="this.armaments"
          title="Armaments"
          />
        </v-col>
        <v-col col="6"></v-col>
      </v-row>
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
  height: 850px;
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

