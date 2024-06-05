<script>
export default {
    name: 'CardShowcaseSection',
    props: {
        sectionTitle: {type: String, default: 'Section Title'},
        projectsInfo: {type: Array, default(){return []}}
    }
}
</script>

<template>
    <h3 class="section-title">{{ sectionTitle }}</h3>

    <div class="project-cards-container">
        <div v-for="project in projectsInfo">
            <v-card width="100%">
                <v-img
                height="65%"
                :src="project.projectImages[0]"
                cover
                ></v-img>
                <v-card-title>{{ project.title }}</v-card-title>
            </v-card>
        </div>
    </div>
</template>

<style scoped>
.section-title {
    margin: 50px 0;
    font-size: 30px;
}

.project-cards-container{
    width: 90%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    row-gap: 40px;
    column-gap: 15%;
}

.project-cards-container div{
    flex: 35%;
    background-color: brown;
    border: 1px solid blue;
}

@media (max-width: 1280px){
    .section-title{
        font-size: 28px;
        margin: 20px 0;
    }
}
</style>