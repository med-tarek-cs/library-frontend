<template>
  <v-card>
    <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            class="elevation-1"
    >
      <template #item.image="{ item }">
        <Thumbnail :src="item.image"></Thumbnail>
      </template>

      <template #item.lang="{ item }" >
          <span style="padding: 5px 15px;" > {{ item.lang }} </span>
      </template>

      <template v-slot:item.actions="{ item }" >
       <div style="width: 80px">
         <v-icon
                 class="mr-2"
                 @click="editItem(item)"
                 color="primary"
         >
           mdi-pencil
         </v-icon>|
         <v-icon

                 @click="deleteItem(item)"
                 color="warning"
         >
           mdi-delete
         </v-icon>
       </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import Items from '../../data.json';
  import Thumbnail from "./Thumbnail";
  export default {
    name: "BookList",
    components: {
      Thumbnail
    },
    data() {
      return {
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
          {text: 'Actions', value: 'actions'},
        ],
        items: Items.books
      }
    },
    methods: {
      editItem(id) {
        console.log('edit item: ', id)
      },
      deleteItem(id) {
        console.log('delete item: ', id)
      }
    }
  }
</script>

<style scoped>

</style>