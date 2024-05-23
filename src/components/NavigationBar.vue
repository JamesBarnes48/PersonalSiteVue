<template>
    <v-app-bar id="navbar" scroll-behavior="hide" collapse rounded>
        <v-app-bar-nav-icon />
        <v-navigation-drawer>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/showcase">Showcase</RouterLink>
        </v-navigation-drawer>
    </v-app-bar>
</template>

<style scoped>
#navbar {
    color: var(--main-hex);
}
</style>