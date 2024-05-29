<script>
import SkillsPanel from './SkillsPanel.vue'

export default {
    name: 'SkillsPanelList',
    components: {SkillsPanel},
    props: {
        skillsList: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <v-expansion-panels variant="popout">
        <SkillsPanel
        v-for="skill in skillsList"
        :skillName="skill.skillName"
        :skillDesc="skill.skillDesc"
        :listDescription="skill.listDescription"
        :listItems="skill.listItems"
        ></SkillsPanel>
    </v-expansion-panels>
</template>

<style scoped>
</style>