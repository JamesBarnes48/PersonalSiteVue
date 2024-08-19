<script>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

export default {
    name: 'EmbeddedVideo',
    created() {

    },
    components: {LiteYouTubeEmbed},
    props: {
        id: {type: String, required: true},
        title: {type: String, required: true},
        thumbnail: {type: String, required: false}
    },
    data() {
        return {
            
        };
    },
    methods: {

    }
}
</script>

<template>
    <div class="video-container">
        <LiteYouTubeEmbed
            :id="this.id"
            :title="this.title"
            :thumbnail="this.thumbnail"
        />
    </div>
</template>

<style scoped>

.video-container {
    margin: 20px auto;
    padding: 10px;
    background-color: var(--off-main-hex);
    width: 90%;
}

</style>