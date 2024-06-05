<script>
export default {
    name: 'ShowcaseProjectDialog',
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
        <v-btn 
        class="close-btn" 
        icon="mdi-window-close"
        @click="this.$emit('close-dialog');"
        ></v-btn>
        <div class="carousel-container">
            <v-carousel height="350" cycle>
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
    width: 80vw;
    height: 90vh;
    margin: auto;
    background-color: white;
    color: black;
    padding: 20px 35px;
    border: 2px solid var(--main-hex);
}

.close-btn{
    float: right;
}

.carousel-container {
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