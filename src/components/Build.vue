<script>
import RankingBar from './RankingBar.vue';
import EmbeddedVideo from './EmbeddedVideo.vue';
import {ref, computed, watch, onMounted} from 'vue';
import {useDisplay} from 'vuetify';

//this uses Vue3 syntax - need to use this in future
export default {
    name: 'Build',
    components: {RankingBar, EmbeddedVideo},
    props: {
        buildData: {type: Object, required: true}
    },
    setup(props) {
    // Reactive state
    const characterImages = ref(imagesToUrl(props.buildData.characterImages));
    const displayedTalisman = ref(null);
    const displayedSpell = ref(null);
    const showTalisman = ref(false);
    const showSpell = ref(false);
    const videoNumber = ref(0);

    //static
    const display = useDisplay();

    // Computed property for isMobile
    const isMobile = computed(() => {
        return ['xs', 'sm'].includes(display.name.value);
    });

    watch(
      () => props.buildData, //watch() requires a function as its first arg - returning the val you want to watch
      (newBuild) => {
        characterImages.value = imagesToUrl(newBuild.characterImages);
        videoNumber.value = 0;
        displayedTalisman.value = null;
        displayedSpell.value = null;
        showTalisman.value = false;
        showSpell.value = false;
      }
    );

    // Method equivalents
    function imagesToUrl(images) {
      if (!images?.length) return ['temp'];
      return images.map((img) => new URL(img, import.meta.url).href);
    }

    function getVideoThumbnail() {
      const thumb = characterImages.value[videoNumber.value];
      return thumb ? thumb : characterImages.value[videoNumber.value - characterImages.value.length];
    }

    function talismanSelected(talisman) {
      if (!displayedTalisman.value) { showTalisman.value = true; }
      if (displayedTalisman.value === talisman) {
        showTalisman.value = false;
        displayedTalisman.value = null;
        return;
      }
      displayedTalisman.value = talisman;
    }

    function spellSelected(spell) {
      if (!displayedSpell.value) { showSpell.value = true; }
      if (displayedSpell.value === spell) {
        showSpell.value = false;
        displayedSpell.value = null;
        return;
      }
      displayedSpell.value = spell;
    }

    // Return all reactive state and methods
    return {
      characterImages,
      displayedTalisman,
      displayedSpell,
      showTalisman,
      showSpell,
      videoNumber,
      display,
      isMobile,
      imagesToUrl,
      getVideoThumbnail,
      talismanSelected,
      spellSelected
    };
  }
}
</script>

<template>
    <div class="build-container">
        <v-row>
            <v-col lg="6" md="12" sm="12" xs="12">
                <img class="character-image" :src="characterImages[0]" alt="">
                <div class="centered">
                    <RankingBar 
                    :rankingData="buildData.talismans"
                    title="Talismans"
                    :hideTitle="isMobile"
                    @selected="talismanSelected"
                    />
                </div>
                <Transition>
                    <div 
                    class="desc-container"
                    v-if="showTalisman"
                    >
                        <p class="desc-title" v-if="isMobile">{{ displayedTalisman.name }}</p>
                        <p class="desc-paragraph">{{ displayedTalisman.description }}</p>
                    </div>
                </Transition>
                <div class="centered">
                    <RankingBar 
                    v-if="buildData.spells"
                    :rankingData="buildData.spells"
                    title="Spells"
                    :hideTitle="isMobile"
                    @selected="spellSelected"
                    />
                </div>
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
    max-height: 950px;
    overflow-y: auto;

    /*firefox only*/
    scrollbar-width: thin; 
    scrollbar-color: var(--main-hex) #000; 
}

@media(max-width: 1280px){
    .desc-container {max-height: 420px;}
}

/* Webkit browser scrollbar customizations (Chrome, Safari, Edge) */
.desc-container::-webkit-scrollbar {
    width: 8px; /* Vertical scrollbar width */
    height: 8px; /* Horizontal scrollbar height */
}

.desc-container::-webkit-scrollbar-track {
    background: #000; /* Black background for the track */
}

.desc-container::-webkit-scrollbar-thumb {
    background: #888; /* Grey color for the thumb */
    border-radius: 10px; /* Optional: Rounded corners for the thumb */
}

.desc-container::-webkit-scrollbar-thumb:hover {
    background: #555; /* Darker grey for thumb when hovered */
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