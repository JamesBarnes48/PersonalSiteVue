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
</style>