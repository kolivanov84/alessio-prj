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

<template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <CategoryFormVue v-on:close-dialog="closeDialog" :formTitle="title" :category="category"></CategoryFormVue>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

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
import CategoryFormVue from "./CategoryForm.vue";

export default ({
   components: {
        CategoryFormVue
    },
   data () {
      return {
         title: "Nuova Categoria",
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
        return 'Nuova Categoria';
      },
      ...mapGetters({
         'categories' : 'category/getCategories',
         'category' : 'category/getCategory',
      })
   },
   methods: { 
      editItem (item) {
       this.title = 'Modifica Categoria'
       this.dialog = true
       console.log(item.id);
        this.fetchCategory(item.id);
      },
      closeDialog(){
            this.dialog = false;
      } ,
      ...mapActions({
         'fetchCategorie' : 'category/fetchCategories',
         'fetchCategory' : 'category/fetchCategory'
       }
   )}
  
})


</script>
