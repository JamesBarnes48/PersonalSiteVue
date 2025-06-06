<script>
import { onMounted } from 'vue';
export default {
    name: 'RankingBar',
    props: {
        rankingData: {type: Array, required: true},
        title: {type: String},
        hideTitle: {type: Boolean, default: false},
        vertical: {type: Boolean, default: false}
    },
    setup(props){
        const getImgUrl = (item) => item.thumbnail ? item.thumbnail : item.imgSrc;

        onMounted(() => {console.log(props.vertical)})

        return {
            getImgUrl
        };
    }
}
</script>

<template>
    <div class="ranking-bar-container">
        <h3 class="bar-title">{{title}}</h3>
        <div :class="vertical? 'vertical': ''" class="bar-container">
            <div
            class="item-container"
            v-for="item in rankingData"
            @click="this.$emit('selected', item)"
            >
                <img class="item-image" :src="getImgUrl(item)">
                <p v-if="!hideTitle">{{ item.name }}</p>
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
    width: fit-content;
}

.bar-title {
    font-size: 30px;
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

.vertical{
    flex-direction: column;
}

.item-container {
    padding: 10px 13px;
    flex-grow: 1;
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

@media(max-width: 700px){
    .item-image{
        height: 75px;
    }

    .item-container p {
        font-size: 15px;
    }

    .item-container {
        padding: 3px 5px;
    }
}

@media(max-width: 600px){
    .bar-container{
        padding: 3px 4px;
        margin-left: 8px;
        margin-right: 8px;
    }

    .item-image{
        height: 51px;
    }

    .item-container p {
        font-size: 11px;
    }

    .bar-title {
        font-size: 23px;
    }
}

</style>