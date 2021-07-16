<template>
  <div class="center">
    <h1>Error!</h1>
    {{ error.message }}
    {{ error.statusCode }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Error'
    }
  },
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  name: "error"
}
</script>

<style scoped>
.center {
  text-align: center;
}
</style>