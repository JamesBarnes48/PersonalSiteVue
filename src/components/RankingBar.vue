<script>
import SkillsPanel from './SkillsPanel.vue'

export default {
    name: 'RankingBar',
    created() {
        
    },
    components: {SkillsPanel},
    props: {
        rankingData: {type: Array, required: true},
        title: {type: String, required: true}
    },
    methods: {

    }
}
</script>

<template>
    <div class="ranking-bar-container">
        <h3>{{this.title}}</h3>
        <div class="bar-container">
            <div
            class="item-container"
            v-for="item in rankingData"
            @click="this.$emit('select-build', item)"
            >
                <img class="item-image" :src="item?.apiData?.image">
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes highlightItem {
    0% {
        transform: scale(1);
        background-color: var(--off-main-hex);
    }
    100% {
        transform: scale(1.05);
        background-color: var(--main-hex);
    }
}

.ranking-bar-container {
    margin: auto;
    width: fit-content;
}

.bar-container{
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 2;
    padding: 10px 12px;
    background-color: black;
    border: 2px solid var(--off-main-hex);
}

.item-container {
    height: fit-content;
    padding: 10px 13px;
    background-color: var(--off-main-hex);
}

.item-container:hover {
    animation-name: highlightItem;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.item-container p {
    font-size: 18px;
    font-weight: bold;
}

.item-image {
    object-fit: cover;
    height: 100px;
}
</style>