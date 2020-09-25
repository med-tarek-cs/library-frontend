<template>
  <div style="width: 80px">
    <v-icon
            class="mr-2"
            @click="editItem(item.id)"
            color="primary"
    >
      mdi-pencil
    </v-icon>
    |
    <v-icon
            @click="deleteItem(item.id)"
            color="warning"
    >
      mdi-delete
    </v-icon>
  </div>
</template>

<script>
  export default {
    name: "Actions",
    props: ['item'],
    methods: {
      editItem(id) {
        console.log('edit item: ', id)
        this.$emit('edit', id);
      },
      deleteItem(id) {
        console.log('delete item: ', id);
        this.$emit('delete', id)
      }
    }
  }
</script>

<style scoped>

</style>