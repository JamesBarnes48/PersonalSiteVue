<script>
export default {
    name: 'SkillsPanel',
    props: {
        skillName: {type: String, default: 'A Skill'},
        skillDesc: {type: String, default: 'Skill Description'},
        listDescription: {type: String},
        listItems: {type: Array, default() {return []}}
    }
}
</script>

<template>
    <v-expansion-panel
    :title="skillName"
    >
        <v-expansion-panel-text>
            <p>{{ skillDesc }}</p>
            <div v-if="listItems.length">
                <p>{{ listDescription }}</p>
                <v-list>
                    <v-list-item 
                    v-for="item in listItems"
                    :key="item"
                    :title="item" />
                </v-list>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped>
</style>