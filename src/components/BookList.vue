<template>
  <v-card>
    <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="5"
            class="elevation-1"

    >
      <template #item.image="{ item }">
        <v-img
                :src="item.image"
                class="my-3"
                contain
                height="60"
                width="60"
        />

      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon

                class="mr-2"
                @click="editItem(item)"
                color="primary"
        >
          mdi-pencil
        </v-icon>
        |
        <v-icon

                @click="deleteItem(item)"
                color="warning"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    name: "BookList",
    data() {
      return {
        headers: [
          {
            text: 'image',
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
        items: [
          {
            image: require('@/assets/Practical-Test-Automation.jpg'),
            title: 'Practical Test Automation',
            author: 'Panos Matsinopoulos',
            isbn: '1484261402',
            lang: 'English',
            category: 'javascript'
          }
        ],
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