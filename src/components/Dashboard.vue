<template>
<v-app id="inspire">
       
        <NavigationMenu></NavigationMenu>
    
        <v-app-bar app>
           
                <v-toolbar color="primary" dark fixed app>
                    <v-toolbar-title>Application di Alessio</v-toolbar-title>
                </v-toolbar>
        </v-app-bar>
       
        <v-main>
            <router-view></router-view>
        </v-main>
            
        
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