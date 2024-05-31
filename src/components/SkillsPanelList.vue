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
    <div class="panels-container">
        <v-expansion-panels class="panels" variant="popout">
            <SkillsPanel
            v-for="skill in skillsList"
            :skillName="skill.skillName"
            :skillDesc="skill.skillDesc"
            :listDescription="skill.listDescription"
            :listItems="skill.listItems"
            ></SkillsPanel>
        </v-expansion-panels>
    </div>
</template>

<style scoped>
.panels-container {
    margin: 60px 60px;
}
</style>