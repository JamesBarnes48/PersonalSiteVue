<script setup>
import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <v-app>
    <NavigationBar />
    <router-view />
    <Footer />
  </v-app>
</template>