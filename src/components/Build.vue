<script>

export default {
    name: 'Build',
    created() {
        this.characterImages = this.imagesToUrl(this.buildData.characterImages);
    },
    components: {},
    props: {
        buildData: {type: Object, required: true}
    },
    data() {
        return {
            characterImages: []
        };
    },
    methods: {
        imagesToUrl(images){
            if(!images?.length) return ['temp'];
            return images.map((img) => {return new URL(img,import.meta.url).href});
        }
    }
}
</script>

<template>
    <div class="build-container">
        <v-row>
            <v-col cols="6">
                <img class="character-image" :src="this.characterImages[0]" alt="">
            </v-col>
            <v-col cols="6">
                <div class="desc-container">
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
    padding: 8px 10px;
    background-color: var(--off-main-hex);
}

.desc-paragraph {
    font-size: 15px;
    margin: 10px 0;
}

</style>