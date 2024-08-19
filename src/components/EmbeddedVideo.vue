<script>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

export default {
    name: 'EmbeddedVideo',
    created() {
    },
    components: {LiteYouTubeEmbed},
    props: {
        video: {type: Object, required: true},
        thumbnail: {type: String, required: false}
    },
    watch: { 
        video: function(newVid, oldVid) { // watch it
          this.id = newVid.id;
          this.title = newVid.title;
        }
    },
    data() {
        return {
            id: this.video.id,
            title: this.video.title,
        };
    },
    methods: {

    }
}
</script>

<template>
    <div class="video-container">
        <LiteYouTubeEmbed
            :key="this.id"
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