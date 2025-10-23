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
    };
  }
}
</script>

<template>
    <div class="weapon-container">
        <h2>{{ weaponData.name }}</h2>
        <div class="stats-container">
            <div 
            v-for="key in Object.keys(weaponData.stats)"
            class="stat-container"
            >
                <h3>{{ key }}:</h3>
                <h2>{{ weaponData.stats[key] }}</h2>
            </div>
        </div>
        <div :class="{'side-by-side-container': !isMobile}">
            <div class="desc-container">
                <p class="desc-paragraph" v-for="desc in weaponData.descriptionParagraphs">{{ desc }}</p>
            </div>
            <div>
                <EmbeddedVideo
                    v-if="weaponData.videos?.length"
                    :video="weaponData.videos[videoNumber]"
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

.weapon-container .desc-container {
    border: 1px solid var(--off-main-hex);
    padding: 14px 12px;
    background-color: var(--off-main-hex);
    font-size: 15px;
    max-height: 70vh;
    overflow-y: auto;

    /*firefox only*/
    scrollbar-width: thin; 
    scrollbar-color: var(--main-hex) #000; 
}

.weapon-container .stats-container{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 25px;
}

.weapon-container .stat-container{
    width: 27%;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    border: 1px solid white;
    padding: 10px 14px;
}

.weapon-container .side-by-side-container{
    display: grid;
    grid-template-columns: 2fr 3fr;
}

.stat-container > h2{
    font-size: 1.7rem;
}

.stat-container > h3{
    font-size: 1.5rem;
}

@media(max-width: 1280px){
    .weapon-container .desc-container {max-height: 420px;}

    .weapon-container .stat-container > h2 {    
        font-size: 1.4rem;
    }

    .weapon-container .stat-container > h2 {    
        font-size: 1.2rem;
    }
}

@media(max-width: 600px){
    .weapon-container .stat-container{
        width: 30%;
    }

    .weapon-container .stat-container > h2{
        font-size: 1.1rem;
    }

    .weapon-container .stat-container > h3{
        font-size: 1.1rem;
    }

    .weapon-container{
        padding-left: 7px;
        padding-right: 7px;
    }

    .weapon-container .desc-container{
        max-height: 55vh;
    }
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
    color: black;
    margin: 10px 0;
}

.video-nav-container {
    margin: 10px auto;
    display: flex;
    width: 97%;
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