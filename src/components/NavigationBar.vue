<script>
export default {
    name: 'NavigationBar',
    data: () => ({
        drawer: null,
        items: [
            {name: 'Home', path: '/', icon: 'mdi-home'},
            {name: 'Showcase', path: '/showcase', icon: 'mdi-movie-filter'}
        ]
    }),
}
</script>

<template>
    <v-navigation-drawer 
        id="navbar" 
        color="white"
        mobile-breakpoint="md"
        expand-on-hover 
        rail>
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
</style>