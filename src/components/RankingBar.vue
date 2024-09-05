<script>
export default {
    name: 'RankingBar',
    created() {
        
    },
    props: {
        rankingData: {type: Array, required: true},
        title: {type: String},
        hideTitle: {type: Boolean, default: false},
    },
    methods: {
        getImgUrl(item){
            if(item.thumbnail) return item?.thumbnail;
            return item.imgSrc;
        }
    }
}
</script>

<template>
    <div class="ranking-bar-container">
        <h3 class="bar-title">{{this.title}}</h3>
        <div class="bar-container">
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
    margin: auto;
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
        margin-left: 5px;
        margin-right: 5px;
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