<script lang="ts">
import { PropType, ref } from 'vue';

//prop defining styling options for ranking bar
interface Theme{
    mainColour: string,     //defaults to off-main-hex
    offColour: string,       //defaults to main-hex
    fontColour: string,      //defaults to main-hex
    boxWidth: string,       //defaults to 25px
    block: boolean          //does box fill maximum width?
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
        const defaultTheme: Theme = {mainColour: '#Fab256', offColour: '#Fd920b', fontColour: '#Fd920b', boxWidth: '25px', block: false};
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
    <div class="ranking-bar-container" :style="{'--mainColour_inline': pageTheme.mainColour, '--offColour_inline': pageTheme.offColour, '--fontColour_inline': pageTheme.fontColour, '--boxWidth_inline': pageTheme.boxWidth, '--block_inline': pageTheme.block? '100%': 'fit-content'}">
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

/* for responsiveness, media queries override certain css variables for smaller screens */
/* css variables defined inline cannot be overridden, must translate inline style variables onto class so the class can be overridden */
/* also cant just put theme prop vals straight into <style> tags, must put in inline style first */
.ranking-bar-container {
    width: var(--block_inline);
    --mainColour: var(--mainColour_inline);
    --offColour: var(--offColour_inline);
    --fontColour: var(--fontColour_inline);
    --boxWidth: var(--boxWidth_inline);
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
    height: 90px;
}

@media(max-width: 1080px){
    .ranking-bar-container{
        --boxWidth: 28px;
    }

    .item-image{
        height: 85px;
    }
}

@media(max-width: 800px){
    .ranking-bar-container{
        --boxWidth: 25px;
    }

    .item-image{
        height: 80px;
    }
}

@media(max-width: 700px){
    .item-image{
        height: 75px;
    }

    .item-container p {
        font-size: 15px;
    }

    .item-container {
        padding: 12px 17px;
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