<template>
  <v-toolbar
          flat
  >
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-text-field
            class="px-5"
            hide-details
            append-icon="mdi-magnify"
            placeholder="Search by title"
            single-line
            @keyup="input"
            v-model="filterKey"
    ></v-text-field>

    <v-btn rounded outlined color="primary">
      <v-icon class="pr-3">mdi-plus-circle</v-icon>
      add
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "MToolbar",
    props: ['title'],
    data() {
      return {
        filterKey: '',
      }
    },
    methods: {
      input() {
        this.$emit('filter', this.filterKey)
      }
    }
  }
</script>

<style scoped>

</style>