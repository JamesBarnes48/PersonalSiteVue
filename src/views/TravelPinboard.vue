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
    <h1 class="page-title">Travel Pinboard</h1>
    <WorldMap></WorldMap>
  </div>
</template>

<style scoped>

.parent-container {
  background-color: var(--off-background-hex);
}

.page-title {
  margin-top: 10px; 
  font-size: 55px;
  color: var(--off-main-hex)
}

</style>

