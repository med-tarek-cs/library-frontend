<template>
  <v-card class="mt-5 mx-10 ">
    <v-card-title>
      <h2>add new Book</h2>
    </v-card-title>
    <v-card-text>
      <v-text-field label="Title"></v-text-field>
      <v-text-field label="Author"></v-text-field>
      <v-text-field label="ISBN"></v-text-field>
      <v-text-field label="Language"></v-text-field>
      <v-select
              :items="items"
              label="Category"
      ></v-select>

      <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Pick an avatar"
              prepend-icon="mdi-image"
              label="Avatar"
      ></v-file-input>

    </v-card-text>
    <v-card-actions class="flex justify-end ">
      <v-btn color="error">Cancel</v-btn>
      <v-btn color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "BookForm",
    data: () => ({
      items: ['Web Development', 'Networking', 'Security', 'Operating Systems', 'Crypto'],
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    })
  }
</script>

<style scoped>

</style>