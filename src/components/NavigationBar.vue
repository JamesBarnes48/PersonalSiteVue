<script>
export default {
    name: 'NavigationBar',
    data: () => ({
        drawer: false,
        items: [
            {name: 'Home', path: '/', icon: 'mdi-home'},
            {name: 'Showcase', path: '/showcase', icon: 'mdi-movie-filter'}
        ]
    }),
    computed: {
        isMobile(){
            return ['xs', 'sm', 'md'].includes(this.$vuetify.display.name)? true: false;
        }
    },
    methods: {
        updateDrawer() {
            this.drawer = !this.drawer
        }
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