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
            <v-carousel cycle>
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
    border-top: 2px solid var(--main-hex);
    border-bottom: 1px solid var(--main-hex);
}
.project-container:nth-of-type(even) {
    background-color: var(--background-hex);
    color: black;
}

.carousel-container {
    width: 60%;
    margin: auto;
}

@media(max-width: 1280px){
    .project-container{
        padding: 25px 20px;
    }

    .carousel-container {
        width: 100%;
    }
}
</style>