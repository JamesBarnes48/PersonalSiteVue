<script>
export default {
    name: 'ShowcaseProject',
    props: {
        title: {type: String, default: 'Project title'},
        mainText: {type: String, default: 'Main text'},
        repoLinkText: {type: String, default: 'Find the Github repository here: '},
        repoLink: {type: String, default: '<link to repo>'},
        projectImages: {type: Array, default() {return []}}
    }
}
</script>

<template>
    <div class="project-container">
        <div class="carousel-container">
            <v-carousel>
                <v-carousel-item
                v-for="img in projectImages"
                :src="img"
                ></v-carousel-item>
            </v-carousel>
        </div>
        <div class="text-container">
            <h3 class="subheading">{{ title }}</h3>
        <p>{{ mainText }}</p>
        <p>{{ repoLinkText }} <a href="https://github.com/JamesBarnes48/Virtual-Garage">here</a></p>
        </div>
    </div>
</template>

<style scoped>
.project-container{
    margin: 80px 65px;
}

.carousel-container {
    width: 60%;
    margin: auto;
}
</style>