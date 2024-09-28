<script>
import WorldMap from '../components/WorldMap.vue';

export default {
  name: 'TravelPinboard',
  components: {WorldMap},
  data() {
    return {
        thing: 2
    }
  },
  methods: {

  },
}
</script>

<template>
  <div class="parent-container">
    <div class="title-container">
      <h1 class="page-title">Travel Pinboard</h1>
    </div>
    <WorldMap></WorldMap>
  </div>
</template>

<style scoped>

.parent-container {
  background-color: var(--background-hex);
}

.title-container {
  background-color: white;
  padding-top: 10px;
  border-bottom: solid 1px var(--main-hex);
}

.page-title {
  margin-top: 10px; 
  font-size: 55px;
  color: var(--off-main-hex)
}

</style>

