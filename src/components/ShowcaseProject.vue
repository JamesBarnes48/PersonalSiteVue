<script>
export default {
    name: 'ShowcaseProject'
    props: {
        title: {type: String, default: 'Project title'},
        mainText: {type: String, default: 'Main text'},
        repoLink: {type: String, default: '<link to repo>'},
        projectImages: {type: Array}
    }
}
</script>

<template>
    <div class="project-container">
        <v-carousel>
            <v-carousel-item
            v-for="img in projectImages"
            :src="img"
            cover
            ></v-carousel-item>
        </v-carousel>
        <div class="text-container">
            <h3 class="subheading">{{ title }}</h3>
        <p>{{ mainText }}</p>
        <p>Try cloning the repo and follow the .readme's instructions to set it up yourself <a href="https://github.com/JamesBarnes48/Virtual-Garage">here</a></p>
        </div>
    </div>
</template>

<style>
</style>