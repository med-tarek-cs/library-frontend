<template>
  <div class="home">
    <BookForm/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import BookForm from "@/components/BookForm";

  export default {
    name: 'Home',
    components: {
      BookForm
    }
  }
</script>