<template>
  <v-card>
     <v-card-title>
      <MToolbar :title="title" @filter="filterKey"></MToolbar>
     </v-card-title>

    <v-divider></v-divider>
    <v-card-text>
      <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="5"
      >

        <template #item.image="{ item }">
          <Thumbnail :src="item.image" />
        </template>

        <template #item.lang="{ item }" >
          <span style="padding: 5px 15px;" > {{ item.lang }} </span>
        </template>

        <template #item.actions="{item}" >
          <Actions :item="item"
                   @edit="editItem"
                   @delete="deleteItem"
          />
        </template>

      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import MToolbar from './MToolbar'
  import Thumbnail from "./Thumbnail";
  import Actions from "./Actions";
  export default {
    name: "BookList",
    components: {
      MToolbar,
      Thumbnail,
      Actions
    },
    data() {
      return {
        title: 'List of Books',
        filterKey: '',
        headers: [
          {
            text: 'Image',
            align: 'start',
            sortable: false,
            value: 'image',
          },
          {text: 'Title', value: 'title'},
          {text: 'Author', value: 'author'},
          {text: 'ISBN', value: 'isbn'},
          {text: 'Language', value: 'lang'},
          {text: 'Category', value: 'category'},
          {text: 'Actions', value: 'actions', sortable: false},
        ]
      }
    },
    async created(){
      await this.$store.dispatch('books/getAllItems');
    },
    computed: {
      items() {
        return this.$store.state.books.all;
      },
      filteredItems() {
        console.log(this.filterKey)
        return this.filterKey
      }
    },
    methods: {
      editItem(id) {
        console.log('edit item: ', id)

      },
      deleteItem(id) {
        console.log('delete item: ', id);
      },

    }
  }
</script>

<style scoped>

</style>