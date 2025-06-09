<script>
import EmbeddedVideo from './EmbeddedVideo.vue';
import {ref, computed, watch} from 'vue';
import {useDisplay} from 'vuetify';

//this uses Vue3 syntax - need to use this in future
export default {
    name: 'ChivalryWeapon',
    components: {EmbeddedVideo},
    props: {
        weaponData: {type: Object, required: true}
    },
    setup(props) {
    const videoNumber = ref(0);

    //static
    const display = useDisplay();

    // Computed property for isMobile
    const isMobile = computed(() => {
        return ['xs', 'sm'].includes(display.name.value);
    });

    function imagesToUrl(images) {
      if (!images?.length) return ['temp'];
      return images.map((img) => new URL(img, import.meta.url).href);
    }

    function getVideoThumbnail() {
      const thumb = characterImages.value[videoNumber.value];
      return thumb ? thumb : characterImages.value[videoNumber.value - characterImages.value.length];
    }

    watch(
      () => props.weaponData, //watch() requires a function as its first arg - returning the val you want to watch
      (newWeapon) => {
        videoNumber.value = 0;
      }
    );

    return {
      videoNumber,
      display,
      isMobile,
      imagesToUrl,
      getVideoThumbnail
    };
  }
}
</script>

<template>
    <div class="weapon-container">
        <h2>{{ weaponData.name }}</h2>
        <div class="desc-container">
            <p class="desc-flavour">{{ weaponData.descriptionFlavour }}</p>
            <p class="desc-paragraph" v-for="desc in weaponData.descriptionParagraphs">{{ desc }}</p>
        </div>
        <EmbeddedVideo
            v-if="weaponData.videos?.length"
            :video="weaponData.videos[videoNumber]"
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
            :disabled="videoNumber >= weaponData.videos?.length - 1"
            @click="videoNumber++;"
            >
                Next Video
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.weapon-container {
  width: 95%;
  height: fit-content;
  position: relative;
  z-index: 2;
  margin: 25px auto;
  padding: 15px 20px;
  border: 1px solid var(--off-main-hex);
}

@media(max-width: 600px){
    .weapon-container{
        padding-left: 7px;
        padding-right: 7px;
    }
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