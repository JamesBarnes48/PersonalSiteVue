<script>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
import {ref, watch} from 'vue';

export default {
    name: 'EmbeddedVideo',
    components: {LiteYouTubeEmbed},
    props: {
        video: {type: Object, required: true},
        thumbnail: {type: String, required: false}
    },
    setup(props){
        let id = ref(props.video.id),
        title = ref(props.video.title),
        thumbnail = ref(props.thumbnail);

        watch(() => props.video,
            (newVid) => {
                id.value = newVid.id;
                title.value = newVid.title;
                thumbnail.value = props.thumbnail;
            },
            {immediate: true}
        );


        return {
            id,
            title,
            thumbnail
        };
    }
}
</script>

<template>
    <div class="video-container">
        <LiteYouTubeEmbed
            :key="id"
            :id="id"
            :title="title"
            :thumbnail="thumbnail"
        />
    </div>
</template>

<style scoped>

.video-container {
    margin: 20px auto;
    width: 90%;
}

</style>