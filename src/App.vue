<script setup>
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <v-app>
    <NavigationBar />
    <router-view />
  </v-app>
</template>