<template>
  <v-data-table
    :headers="headers"
    :items="categories"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>



<script>
import { mapGetters,mapActions } from "vuex";

export default ({
   data () {
      return {
         headers: [
          {
            text: 'Id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Nome', value: 'name' },
          { text: 'Descrizione', value: 'description' }
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
