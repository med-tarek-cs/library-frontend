<template>
  <v-card>
     <v-card-title>
      <MToolbar :title="title"
                @filter="filter"
                @addNew="newItem"
      ></MToolbar>
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
        return this.$store.getters['books/filteredItems']
      }
    },
    methods: {
      newItem(){
        this.$router.push('/books/new')
      },
      editItem(id) {
        console.log('edit item: ', id)
        this.$router.push('/books/edit/' + id )

      },
      deleteItem(id) {
        console.log('delete item: ', id);
      },

      filter(v) {
        this.$store.commit('books/setFilterKey', v)
      }
    }
  }
</script>

<style scoped>

</style>