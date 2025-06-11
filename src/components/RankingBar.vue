<script lang="ts">
import { PropType, ref } from 'vue';

//prop defining styling options for ranking bar
interface Theme{
    mainColour: string,     //defaults to off-main-hex
    offColour: string,       //defaults to main-hex
    fontColour: string,      //defaults to main-hex
    boxWidth: string,       //defaults to 13px
}

export default {
    name: 'RankingBar',
    props: {
        rankingData: {type: Array, required: true},
        hideTitle: {type: Boolean, default: false},
        vertical: {type: Boolean, default: false},
        theme: {type: Object as PropType<Partial<Theme>>, default: {}}
    },
    setup(props, {emit}){
        const selectedItemKey = ref(null);
        const disableAnimationKey = ref(null);

        const getImgUrl = (item) => item.thumbnail ? item.thumbnail : item.imgSrc;
        const resetAnimation = () => disableAnimationKey.value = selectedItemKey.value? disableAnimationKey.value: null;
        const selectItem = (key, item) => {
            //if re-clicking same element
            if(selectedItemKey.value === key){
                //if unselecting element, mark it to disable the hover animation until the mouse leaves the element and resetAnimation un-marks it again
                disableAnimationKey.value = key;
                selectedItemKey.value = null;
            }else{
                selectedItemKey.value = key;
            }
            emit('selected', item);
        };

        //sets out a default set of values for the css variables we need to style the page 
        //we then use spread on top of that to replace defaults with any provided values, if we have them.
        const defaultTheme: Theme = {mainColour: '#Fab256', offColour: '#Fd920b', fontColour: '#Fd920b', boxWidth: '25px'};
        const pageTheme: Theme = {...defaultTheme, ...props.theme};


        return {
            getImgUrl,
            selectItem,
            resetAnimation,
            pageTheme,
            selectedItemKey,
            disableAnimationKey
        };
    }
}
</script>

<template>
    <div class="ranking-bar-container" :style="{'--mainColour': pageTheme.mainColour, '--offColour': pageTheme.offColour, '--fontColour': pageTheme.fontColour, '--boxWidth': pageTheme.boxWidth}">
        <div :class="vertical? 'vertical': ''" class="bar-container">
            <div
            class="item-container"
            :class="{'selected': selectedItemKey === key, 'animationDisabled': disableAnimationKey === key}"
            v-for="(item, key) in rankingData"
            @click="selectItem(key, item)"
            @mouseleave="resetAnimation"
            >
                <img class="item-image" :src="getImgUrl(item)">
                <p v-if="!hideTitle">{{ item?.name || '' }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes highlightItem {
    0% {
        transform: scale(1);
        background-color: var(--mainColour);
    }
    100% {
        transform: scale(1.05);
        background-color: var(--offColour);
    }
}

.ranking-bar-container {
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
    border: 2px solid var(--mainColour);
}

.vertical{
    flex-direction: column;
}

.item-container {
    padding: 10px var(--boxWidth);
    flex-grow: 1;
    background-color: var(--mainColour);
}

.item-container:hover {
    animation-name: highlightItem;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.item-container.animationDisabled:hover{
    animation: none;
}

.item-container.selected {
    animation: none;
    transform: scale(1.05);
    background-color: var(--offColour);
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

    .bar-title {
        font-size: 26px;
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