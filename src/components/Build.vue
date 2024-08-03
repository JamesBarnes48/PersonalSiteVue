<script>

export default {
    name: 'Build',
    created() {
        
    },
    components: {},
    props: {
        buildData: {type: Object, required: true}
    },
    methods: {

    }
}
</script>

<template>
    <div class="build-container">

    </div>
</template>

<style scoped>
.build-container {
  width: 95%;
  height: 70%;
  position: relative;
  z-index: 2;
  margin: 25px auto;
  border: 1px solid var(--off-main-hex);
}
</style>