<script>
import SkillsPanel from './SkillsPanel.vue'

export default {
    name: 'RankingBar',
    created() {
        console.info(this.rankingData);
    },
    components: {SkillsPanel},
    props: {
        rankingData: {type: Array, required: true}
    }
}
</script>

<template>
    <div class="ranking-bar-container">
        <p>hello</p>
    </div>
</template>

<style scoped>
.ranking-bar-container {
    margin: 18px 14px;
    width: 100%;
}
</style>