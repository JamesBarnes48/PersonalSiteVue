<script>
export default {
    name: 'SkillsPanel',
    props: {
        skillName: {type: String, default: 'A Skill'},
        skillDesc: {type: String, default: 'Skill Description'},
        skillStyle: {type: String, default: ''},
        iconImport: {type: Array, default() {return []}},
        listDescription: {type: String},
        listItems: {type: Array, default() {return []}}
    }

    /*
    listItems html - getting rid for now as looks ugly
                <div v-if="listItems.length">
                    <p>{{ listDescription }}</p>
                    <ul class="list_items">
                        <li v-for="item in listItems">{{ item }}</li>
                    </ul>
                </div>
    */
}
</script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title >
            <v-hover>
            <template v-slot:default="{ isHovering, props }">
                <div class="skill-title" :class="isHovering? skillName: ''">
                    <font-awesome-icon class="skill-icon" :class="isHovering? skillName: ''" :icon="iconImport" />
                    <h3 class="skill-name" :class="isHovering? skillName: ''">{{ skillName }}</h3>
                </div>
            </template>
            </v-hover>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
            <p>{{ skillDesc }}</p>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style lang="css" scoped src="../assets/css/skills-styles.css"></style>
<style scoped>
.list_items {
    margin: auto;
    margin-top: 20px;
    max-width: 40%;
    font-size: 16px;
}

@media (max-width: 1280px) {
    .list_items {
        max-width: 65%;
    }

    .skillName {
        font-size: 18px;
    }
}
</style>