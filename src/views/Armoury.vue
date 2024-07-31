<script>
import erdtreeImage from '../assets/images/armoury/erdtree.webp';
import armaments from '../assets/data/armaments.js';

export default {
  name: 'Armoury',
  created() {
    console.info(armaments);
    //this.queryApi('weapons');
  },
  data() {
    return {
      erdtreeImage: erdtreeImage,
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
  methods: {
    async queryApi(route){
      await fetch(route).then((response) => {
        response.json().then((data) => {
          console.info(data);
        })
      })
    }
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

