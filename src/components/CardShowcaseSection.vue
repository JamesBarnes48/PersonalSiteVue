<script>
import ShowcaseProjectDialog from '../components/ShowcaseProjectDialog.vue';
import {ref} from 'vue';

export default {
    name: 'CardShowcaseSection',
    components: {ShowcaseProjectDialog},
    props: {
        sectionTitle: {type: String, default: 'Section Title'},
        projectsInfo: {type: Array, default(){return []}},
        sectionStyle: {type: String, default: 'webdev'}
    },
    setup(props){
        const [sectionTitle, projectsInfo, sectionStyle] = [props.sectionTitle, props.projectsInfo, props.sectionStyle];

        let models = ref({});
        const closeDialog = (index) => {models.value[index] = false}

        return {
            sectionTitle,
            projectsInfo,
            models,
            sectionStyle,
            closeDialog
        };
    }
}
</script>

<template>
    <div class="main-container" :class="sectionStyle">
        <h3 class="section-title">{{ sectionTitle }}</h3>

        <div class="project-cards-container">
            <div 
            v-for="(project, index) in projectsInfo"
            :key="index"
            >
                <v-dialog v-model="models[index]">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-card 
                        v-bind="activatorProps"
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
                    </template>
                    <template v-slot:default="{ isActive }">
                        <ShowcaseProjectDialog
                        v-on:close-dialog="closeDialog(index)"
                        :title="project.title"
                        :mainText="project.mainText"
                        :repoLink="project.repoLink"
                        :projectImages="project.projectImages"
                        ></ShowcaseProjectDialog>
                    </template>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    padding: 40px 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;    
}

.main-container.webdev {
    background-color: #ced8de;
    background-image: url("@/assets/images/showcase/webdev/webdevbg.png");
}

.main-container.webdev .section-title {
    color: #5e849a;
}

.main-container.java {
    background-color: #fc8b72;
    background-image: url("@/assets/images/showcase/java/javabg.png");
}

.main-container.java .section-title {
    color: #fc231c;
}

.main-container.c {
    background-color: #fffc61;
    background-image: url("@/assets/images/showcase/c++/cbg.png");
    background-size: 60%;
}

.main-container.c .section-title {
    color: #adab02;
}

@media (max-width: 1280px){
    .main-container.c {
        background-size: 80%;
    }
}

@media (max-width: 760px){
    .main-container.webdev {
        background-image: url("@/assets/images/showcase/webdev/webdevbg-sm.png");
    }

    .main-container.java {
        background-image: url("@/assets/images/showcase/java/javabg-sm.png");
    }

    .main-container.c {
        background-image: url("@/assets/images/showcase/c++/cbg-sm.png");
    }
}

.section-title {
    margin-bottom: 30px;
    font-size: 33px;
}

.project-cards-container{
    width: 90%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    row-gap: 40px;
    column-gap: 3%;
}

.project-cards-container div{
    flex: 0 0 47%;
    width: 370px;
}

.project-cards-container .v-card{
    background-color: var(--background-hex);
    color: var(--main-hex);
}

.project-cards-container .v-card:hover{
    background-color: var(--main-hex);
    color: var(--background-hex);
}

.project-cards-container .v-card .v-img{
    margin: auto;
    width: 100%;
}

.project-cards-container .v-card .v-card-title{
    margin: auto;
}

@media (max-width: 1280px){
    .section-title{
        font-size: 28px;
        margin-bottom: 20px;
    }

    .project-cards-container div{
    width: 340px;
}
}
</style>