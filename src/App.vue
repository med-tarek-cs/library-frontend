<template>
  <v-app class="flex">
    <NavigationDrawer />

    <!-- back to top left button -->
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      class="md-5 mr-3 elevation-21"
      dark
      fab
      bottom
      right
      color="primary darken-3"
      fixed
      @click="top"
    >
      <v-icon>mdi-arrow-up-bold-circle-outline</v-icon>
    </v-btn>

    <!-- Add Footer -->
    <Footer />
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
    return {
      fab: false,
    };
  },
  components: {
    NavigationDrawer,
    Footer,
  },
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
  },
};
</script>
