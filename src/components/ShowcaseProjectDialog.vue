<script>
export default {
    name: 'ShowcaseProjectDialog',
    props: {
        title: {type: String, default: 'Project title'},
        mainText: {type: String, default: 'Main text'},
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
            <v-carousel v-if="projectImages.length > 1" height="325" cycle>
                <v-carousel-item
                v-for="img in projectImages"
                :src="img"
                ></v-carousel-item>
            </v-carousel>
            <img 
            v-else 
            width="90%"
            :src="projectImages[0]" 
            :alt="'Image of ' + title" />
        </div>
        <div class="text-container">
            <h3 class="subheading">{{ title }}</h3>
            <p>{{ mainText }}</p>
            <div v-if="repoLink">
                <v-btn 
                class="view-btn"
                hover
                size="large"
                color="orange-lighten-1"
                :href="repoLink"
                border="sm"
                >View Project</v-btn>
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-container{
    width: 90vw;
    height: 90vh;
    margin: auto;
    background-color: white;
    color: black;
    padding: 20px 35px;
    border: 2px solid var(--main-hex);
    overflow-y: scroll;
}

.close-btn{
    float: right;
}

.view-btn{
    margin-top: 30px;
}

.carousel-container {
    margin: auto;
}

.carousel-container img {
    object-fit: contain;
    object-position: center;
    max-height: 325px;
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