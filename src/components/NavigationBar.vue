<script>
import { ref, computed } from 'vue';
import {useDisplay} from 'vuetify';

export default {
    name: 'NavigationBar',
    setup(props){
        //static
        const items = [
            {name: 'Home', path: '/', icon: 'mdi-home'},
            {name: 'Showcase', path: '/showcase', icon: 'mdi-movie-filter'},
            {name: 'Elden Ring Armoury', path: '/armoury/eldenring', icon: 'mdi-sword-cross'},
            {name: 'Chivalry 2 Armoury', path: '/armoury/chiv2', icon: 'mdi-sword-cross'}
        ];
        const display = useDisplay();

        //reactive state
        let drawer = ref(true);

        //computed methods
        const isMobile = computed(() => {
            return ['xs', 'sm'].includes(display.name.value);
        });

        //methods
        const updateDrawer = () => {drawer.value = !drawer.value}

        return {
            items,
            drawer,
            display,
            isMobile,
            updateDrawer
        };
    }
}
</script>

<template>
    <v-navigation-drawer 
        id="navbar" 
        v-model="drawer"
        color="white"
        mobile-breakpoint="md"
        expand-on-hover 
        :rail="isMobile? false: true">
        <v-list dense nav>
            <v-list-item
                v-for="item in items"
                :key="item.name"
                :prepend-icon="item.icon"
                :title="item.name"
                dense
                router :to="item.path"
            >
                <template v-slot:prepend>        
                    <v-icon class="navbar-icon"> {{ item.icon }} </v-icon> 
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-fab
        class="hidden-md-and-up mobile-btn"
        icon="mdi-menu"
        location="top start"
        size="44"
        app
        color="orange"
        position="sticky"
        @click="updateDrawer"
        appear
      ></v-fab>
</template>

<style scoped>
#navbar {
    color: var(--main-hex);
    color: black;
    font-weight: bold;
}

.navbar-icon  {
    color: var(--main-hex);
    font-size: 25px;
}

.mobile-btn {
    font-size: 20px;
}
</style>