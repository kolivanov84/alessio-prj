<template>
    <v-navigation-drawer permanent>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="@/assets/profile-icon.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{username || 'Username'}}
              </v-list-item-title>
              <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';

  export default {
    data () {
      return {
        tokenDecoded : jwt_decode( axios.defaults.headers.common['Authorization'] ),
        token: axios.defaults.headers.common['Authorization'],
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        username:this.$route.params.username
      }
    },
    beforeMount(){
      console.log(this.token);
      console.log(this.tokenDecoded.idUtente);
    },
    methods: {
      logout() {
        this.$router.replace({name:'login'})
      }
    }
  }
</script>