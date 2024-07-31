<script>
import SkillsPanel from './SkillsPanel.vue'

export default {
    name: 'RankingBar',
    created() {
        console.info(this.rankingData);
    },
    components: {SkillsPanel},
    props: {
        rankingData: {type: Array, required: true},
        title: {type: String, required: true}
    }
}
</script>

<template>
    <div class="ranking-bar-container">
        <h3>{{this.title}}</h3>
        <div class="bar-container">
            <div
            class="datum-container"
            v-for="datum in rankingData"
            >
                <p>{{ datum.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ranking-bar-container {
    margin: 18px 14px;
    width: 100%;
}

.bar-container{
    margin: auto;
    position: relative;
    z-index: 2;
    padding: 10px 12px;
    background-color: black;
    border: 2px solid var(--off-main-hex);
}

.datum-container {
    height: 300px;
    background-color: white;
}
</style>