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
        title: {type: String, required: true}
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
        />
    </div>
</template>

<style scoped>

</style>