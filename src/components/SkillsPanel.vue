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
}
</script>

<template>
    <v-hover>
        <template v-slot:default="{ isHovering, props }">
        <v-expansion-panel :class="[skillStyle, isHovering? 'isHovering':'']" v-bind="props">
            <v-expansion-panel-title>
                <font-awesome-icon class="skill-icon" :icon="iconImport" />
                <h3>{{ skillName }}</h3>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
                <p>{{ skillDesc }}</p>
            </v-expansion-panel-text>
        </v-expansion-panel>
        </template>
    </v-hover>
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
}
</style>