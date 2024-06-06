<script>
export default {
    name: 'SkillsPanel',
    props: {
        skillName: {type: String, default: 'A Skill'},
        skillDesc: {type: String, default: 'Skill Description'},
        listDescription: {type: String},
        listItems: {type: Array, default() {return []}}
    }

    /*
    listItems html - getting rid for now as looks ugly
                <div v-if="listItems.length">
                    <p>{{ listDescription }}</p>
                    <ul class="list_items">
                        <li v-for="item in listItems">{{ item }}</li>
                    </ul>
                </div>
    */
}
</script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title class="skillName" >{{ skillName }}</v-expansion-panel-title>
        <v-expansion-panel-text>
            <p>{{ skillDesc }}</p>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped>
.skillName {
    color: var(--main-hex);
    font-size: 24px;
}

.list_items {
    margin: auto;
    margin-top: 20px;
    max-width: 40%;
    font-size: 16px;
}

@media (max-width: 1280px) {
    .list_items {
        max-width: 65%;
    }

    .skillName {
        font-size: 18px;
    }
}
</style>