<script>
import RankingBar from './RankingBar.vue';

export default {
    name: 'Build',
    created() {
        this.characterImages = this.imagesToUrl(this.buildData.characterImages);
    },
    components: {RankingBar},
    props: {
        buildData: {type: Object, required: true}
    },
    data() {
        return {
            characterImages: [],
            displayedTalisman: null,
            showTalisman: false
        };
    },
    methods: {
        imagesToUrl(images){
            if(!images?.length) return ['temp'];
            return images.map((img) => {return new URL(img,import.meta.url).href});
        },

        talismanSelected(talisman){
            if(!this.displayedTalisman){ this.showTalisman = true; }
            if(this.displayedTalisman === talisman){ 
                this.showTalisman = false;
                this.displayedTalisman = null;
                return;
            }
            this.displayedTalisman = talisman;       
        }
    }
}
</script>

<template>
    <div class="build-container">
        <v-row>
            <v-col cols="6">
                <img class="character-image" :src="this.characterImages[0]" alt="">
                <RankingBar 
                :rankingData="buildData.talismans"
                title="Talismans"
                @selected="talismanSelected"
                />
                <Transition name="opentalisman">
                    <div 
                    class="desc-container"
                    v-if="showTalisman"
                    >
                        <p class=desc-paragraph>{{ displayedTalisman.description }}</p>
                    </div>
                </Transition>
            </v-col>
            <v-col cols="6">
                <div class="desc-container">
                    <p class="desc-flavour">{{ buildData.descriptionFlavour }}</p>
                    <p class="desc-paragraph" v-for="desc in buildData.descriptionParagraphs">{{ desc }}</p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.build-container {
  width: 95%;
  height: 70%;
  position: relative;
  z-index: 2;
  margin: 25px auto;
  padding: 15px 20px;
  border: 1px solid var(--off-main-hex);
}

.character-image {
    border: 1px solid black;
    width: 100%;
}

.desc-container {
    border: 1px solid var(--off-main-hex);
    padding: 14px 12px;
    background-color: var(--off-main-hex);
    font-size: 15px;
}

.desc-paragraph {
    margin: 10px 0;
}

.desc-flavour {
    margin-bottom: 20px;
    font-weight: bold;
    font-style: italic;
}

.opentalisman-enter-active,
.opentalisman-leave-active {
    transition: opacity 0.6s ease-in;
}

.opentalisman-enter-from,
.opentalisman-leave-to {
    opacity: 0;
}

</style>