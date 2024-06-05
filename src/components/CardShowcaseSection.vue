<script>
export default {
    name: 'CardShowcaseSection',
    props: {
        sectionTitle: {type: String, default: 'Section Title'},
        inverted: {type: Boolean, default: false},
        projectsInfo: {type: Array, default(){return []}}
    }
}
</script>

<template>
    <div class="main-container" :class="{invertedStyle: !!inverted}">
        <h3 class="section-title">{{ sectionTitle }}</h3>

        <div class="project-cards-container">
            <div v-for="project in projectsInfo">
                <v-card 
                width="100%"
                border="sm"
                hover
                >
                    <v-img
                    height="160"
                    cover
                    :src="project.projectImages[0]"
                    ></v-img>
                    <v-card-title>{{ project.title }}</v-card-title>
                </v-card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    padding: 40px 0;
    background-color: var(--off-background-hex);
}

.main-container.invertedStyle{
    background-color: var(--background-hex);
}

.section-title {
    margin-bottom: 30px;
    font-size: 30px;
}

.project-cards-container{
    width: 90%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    row-gap: 40px;
    column-gap: 5%;
}

.project-cards-container div{
    flex: 0 0 30%;
}

.project-cards-container .v-card{
    background-color: var(--background-hex);
    color: var(--main-hex);
}

.project-cards-container .v-card:hover{
    background-color: var(--main-hex);
    color: var(--background-hex);
}

.main-container.invertedStyle .project-cards-container .v-card {
    background-color: var(--off-background-hex);
}

.main-container.invertedStyle .project-cards-container .v-card:hover {
    background-color: var(--main-hex);
    color: var(--background-hex);
}

@media (max-width: 1280px){
    .section-title{
        font-size: 28px;
        margin-bottom: 20px;
    }
}
</style>