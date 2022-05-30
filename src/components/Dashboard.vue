<template>
<v-app>
    <v-toolbar color="primary" dark fixed app>
        <v-toolbar-title>Application di Alessio</v-toolbar-title>
    </v-toolbar>
    <navigation-menu></navigation-menu>
</v-app>
</template>

<script>
import NavigationMenu from '@/components/navigation/NavigationMenu.vue'

export default {
    name: 'dashboard',
    components: {
        NavigationMenu
    }
}
</script>