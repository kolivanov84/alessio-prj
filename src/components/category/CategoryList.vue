<template>
   <div>
   <v-card>
      <v-card-title>
         Categorie
         <v-spacer></v-spacer>
         <v-text-field
         v-model="search"
         append-icon="mdi-magnify"
         label="Search"
         single-line
         hide-details
         ></v-text-field>
      </v-card-title>
   </v-card>
  <v-data-table
    :headers="headers"
    :sort-by="['name', 'description']"
    :items="categories"
    :items-per-page="5"
    class="elevation-1"
    :search="search"
    multi-sort
  ></v-data-table>
  </div>
</template>



<script>
import { mapGetters,mapActions } from "vuex";

export default ({
   data () {
      return {
         search: '',
         headers: [
          {
            text: 'Id',
            align: 'start',
           
            value: 'id',
          },
          { text: 'Nome', value: 'name' },
          { text: 'Descrizione', value: 'description' },
          { text: 'Actions', value: 'actions', sortable: false },
        ]
      };
   },
   beforeMount() {
      this.fetchCategorie();
   },
   computed:{
   ...mapGetters({
      'categories' : 'category/getCategories'
   })
   },
   methods: { 
      ...mapActions({
      'fetchCategorie' : 'category/fetchCategories'
   })}
  
})


</script>
