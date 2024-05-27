<script>
export default {
    name: 'SkillPanel',
    props: {
        skillName: {type: String, default: 'A Skill'},
        description: {type: 'String', default: 'Skill Description'},
        listDescription: {type: 'String'},
        listItems: {type: 'Object', default() {return []}}
    }
}
</script>

<template>
    <v-expansion-panel
    :title="skillName"
    >
        <v-expansion-panel-text>
            <p>{{ description }}</p>
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