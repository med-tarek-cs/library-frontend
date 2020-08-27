<template>
  <v-app class="flex">
    <NavigationDrawer/>
  </v-app>
</template>

<script>
  import NavigationDrawer from "./components/NavigationDrawer";

  export default {
    name: 'App',

    components: {
      NavigationDrawer
    },

    data: () => ({
      //
    }),
  };
</script>
