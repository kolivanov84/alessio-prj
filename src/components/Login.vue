
<template>
   <v-app >
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form ref="form" @submit.prevent="login()">
                            <v-text-field
                              v-model="loginRequest.username"
                              name="username"
                              label="Username"
                              type="text"
                              placeholder="username"
                              required
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="loginRequest.password"
                              name="password"
                              label="Password"
                              type="password"
                              placeholder="password"
                              required
                           ></v-text-field>
                           <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
                      </form>
                      <loader :loading="loading" loaderText="Loading ..." ></loader>
                     </v-card-text>
                  </v-card>
                
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>



<script>
import axios from 'axios';
import loader from '@/components/util/Loader';

export default {
  components:{
     loader
  },
  name: "Login",
  data () {
    return  {
       loading : false,
       loginRequest:{ 
          username: "",
          password: ""
         }
    }
  },
  methods: {
   login() {
    this.loading = true;
    console.log('LOADER = '+this.loading);
    var url = "auth/login"
    var payload = this.loginRequest;
    axios.post(url,payload)
    .then((response) => {

         console.log("Login Success");

         //setto il token di autenticazione nelle variabili di axios
         axios.defaults.headers.common['Authorization'] = 'Bearer'+response.data;

         const { loginRequest } = this;
         this.loading = false;
         this.$router.replace({ name: "dashboard", params:{ username: loginRequest.username} });
      })
    .catch((error) =>{
       console.log(error);
       this.loading = false;
    });
    }
  }
};
</script>