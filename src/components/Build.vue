<script>
import RankingBar from './RankingBar.vue';
import EmbeddedVideo from './EmbeddedVideo.vue';

export default {
    name: 'Build',
    created() {
        this.characterImages = this.imagesToUrl(this.buildData.characterImages);
    },
    components: {RankingBar, EmbeddedVideo},
    props: {
        buildData: {type: Object, required: true}
    },
    watch: { 
        buildData: function(newBuild, oldBuild) { // watch it
          this.characterImages = this.imagesToUrl(newBuild.characterImages);
          this.videoNumber = 0;
          this.displayedTalisman = null;
          this.displayedSpell = null;
          this.showTalisman = false;
          this.showSpell = false;
        }
    },
    data() {
        return {
            characterImages: [],
            displayedTalisman: null,
            displayedSpell: null,
            showTalisman: false,
            showSpell: false,
            videoNumber: 0,
        };
    },
    computed: {
        isMobile(){
            return ['xs', 'sm'].includes(this.$vuetify.display.name)? true: false;
        }
    },
    methods: {
        imagesToUrl(images){
            return images;
            if(!images?.length) return ['temp'];
            return images.map((img) => {return new URL(img,import.meta.url).href});
        },

        getVideoThumbnail(){
            const thumb = this.characterImages[this.videoNumber];
            return !!thumb? thumb: this.characterImages[this.videoNumber - this.characterImages.length]
        },

        talismanSelected(talisman){
            if(!this.displayedTalisman){ this.showTalisman = true; }
            if(this.displayedTalisman === talisman){ 
                this.showTalisman = false;
                this.displayedTalisman = null;
                return;
            }
            this.displayedTalisman = talisman;       
        },
        
        spellSelected(spell){
            if(!this.displayedSpell){ this.showSpell = true; }
            if(this.displayedSpell === spell){ 
                this.showSpell = false;
                this.displayedSpell = null;
                return;
            }
            this.displayedSpell = spell;       
        }
    }
}
</script>

<template>
    <div class="build-container">
        <v-row>
            <v-col lg="6" md="12" sm="12" xs="12">
                <img class="character-image" :src="this.characterImages[0]" alt="">
                <RankingBar 
                :rankingData="buildData.talismans"
                title="Talismans"
                :hideTitle="isMobile"
                @selected="talismanSelected"
                />
                <Transition>
                    <div 
                    class="desc-container"
                    v-if="showTalisman"
                    >
                        <p class="desc-title" v-if="isMobile">{{ displayedTalisman.name }}</p>
                        <p class="desc-paragraph">{{ displayedTalisman.description }}</p>
                    </div>
                </Transition>
                <RankingBar 
                v-if="buildData.spells"
                :rankingData="buildData.spells"
                title="Spells"
                :hideTitle="isMobile"
                @selected="spellSelected"
                />
                <Transition>
                    <div 
                    class="desc-container"
                    v-if="showSpell"
                    >
                        <p class="desc-title" v-if="isMobile">{{displayedSpell.name}}</p>
                        <p class=desc-paragraph>{{ displayedSpell.description }}</p>
                    </div>
                </Transition>
            </v-col>
            <v-col lg="6" md="12" sm="12" xs="12">
                <div class="desc-container">
                    <p class="desc-flavour">{{ buildData.descriptionFlavour }}</p>
                    <p class="desc-paragraph" v-for="desc in buildData.descriptionParagraphs">{{ desc }}</p>
                </div>
            </v-col>
        </v-row>
        <EmbeddedVideo
            v-if="buildData.videos?.length"
            :video="buildData.videos[videoNumber]"
            :thumbnail="getVideoThumbnail()"
        />
        <div class="video-nav-container">
            <v-btn 
            class="video-nav-btn"
            :disabled="videoNumber < 1"
            @click="videoNumber--;"
            >
                Previous Video
            </v-btn>
            <v-btn 
            class="video-nav-btn"
            :disabled="videoNumber >= buildData.videos?.length - 1"
            @click="videoNumber++;"
            >
                Next Video
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.build-container {
  width: 95%;
  height: fit-content;
  position: relative;
  z-index: 2;
  margin: 25px auto;
  padding: 15px 20px;
  border: 1px solid var(--off-main-hex);
}

@media(max-width: 600px){
    .build-container{
        padding-left: 7px;
        padding-right: 7px;
    }
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

.desc-title {
    font-size: 18px;
    font-weight: bold;
}

.desc-paragraph {
    margin: 10px 0;
}

.desc-flavour {
    margin-bottom: 20px;
    font-weight: bold;
    font-style: italic;
}

.video-nav-container {
    margin: 10px auto;
    display: flex;
    width: 90%;
    justify-content: space-between;
}

.video-nav-btn {
    background-color: var(--main-hex);
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

</style>