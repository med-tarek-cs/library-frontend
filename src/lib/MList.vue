<template>
  <v-data-table :headers="headers" :items="items" :items-per-page="5" class="e">
    <template #item.actions="{item}">
      <slot name="actions" :item="item"></slot>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "MList",
  props: ["headers", "items"],
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style scoped>
.v-input--is-focused {
  background-color: red;
}
</style>
