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
    <v-app-bar id="navbar" collapse rounded>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
        <v-list dense nav>
            <v-list-item
                v-for="item in items"
                :key="item.name"
                :prepend-icon="item.icon"
                :title="item.name"
                dense
                router :to="item.path"
            >
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
#navbar {
    color: var(--main-hex);
}
</style>