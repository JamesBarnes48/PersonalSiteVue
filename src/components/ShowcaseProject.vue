<script>
export default {
    name: 'ShowcaseProject',
    props: {
        title: {type: String, default: 'Project title'},
        mainText: {type: String, default: 'Main text'},
        repoLinkText: {type: String, default: 'Find the Github repository '},
        repoLink: {type: String},
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
            <div v-if="repoLink">
                <p>{{ repoLinkText }} <a :href="repoLink">here</a></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-container{
    background-color: var(--off-background-hex);
    color: white;
    padding: 80px 65px;
}
.project-container:nth-of-type(odd) {
    background-color: var(--background-hex);
    color: black;
}

.carousel-container {
    width: 60%;
    margin: auto;
}
</style>