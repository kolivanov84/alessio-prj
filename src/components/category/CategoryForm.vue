<template>
    <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="category.id" label="Id"  disabled ></v-text-field>
                  </v-col>  
                  <v-col cols="12" sm="6" md="6" >
                    <v-text-field v-model="category.name" label="Nome"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field  v-model="category.description" label="Descrizione"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close" > Cancella </v-btn>
              <v-btn color="blue darken-1"  text  @click="save" >  Salva </v-btn>
            </v-card-actions>
          </v-card>
</template>

<script>

export default ({
   data () {
      return {};
   },
   props:[
       {
        formTitle: String
       },
       {
        category: { type: Object}
       }],
   computed:{
      closeDialog: false
   },
   methods:{
    close () {
       this.$emit('close-dialog');
    }
   }
   
  
  
})


</script>