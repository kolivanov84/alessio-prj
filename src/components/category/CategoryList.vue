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
  >
  <template v-slot:[`item.actions`]="{ item }">
     
     <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
      
    </template>
  </v-data-table>
  </div>
</template>



<script>
import { mapGetters,mapActions } from "vuex";

export default ({
   data () {
      return {
         dialog: false,
         dialogDelete: false,
         search: '',
         headers: [
          { text: 'Id',  align: 'start', value: 'id'},
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
      formTitle () {
        return this.editedId === 0 ? 'Nuova Categoria' : 'Modifica Categoria'
      },
      ...mapGetters({
         'categories' : 'category/getCategories'
      })
   },
   methods: { 
      editItem (item) {
       console.log(item);
      },
      ...mapActions({
      'fetchCategorie' : 'category/fetchCategories'
   })}
  
})


</script>
