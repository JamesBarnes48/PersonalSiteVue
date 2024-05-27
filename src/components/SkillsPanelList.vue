<script>
import SkillsPanel from './SkillsPanel.vue'

export default {
    name: 'SkillsPanelList',
    components: {SkillsPanel},
    props: {
        skills: {
            type: 'Object',
            required: true
        }
    }
}
</script>

<template>
    <v-expansion-panels>
        <SkillsPanel
        v-for="skill in skills"
        :skillName="skill.skillName"
        :skillDesc="skill.skillDesc"
        :listDescription="skill.listDescription"
        :listItems="skill.listItems"
        ></SkillsPanel>
    </v-expansion-panels>
</template>

<style scoped>
</style>