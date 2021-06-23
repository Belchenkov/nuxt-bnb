<template>
  <div>
    <h1>NuxtBnB</h1>

    <div :key="home.objectID" v-for="home in homes" style="float: left;margin: 10px">
      <home-card :home="home"></home-card>
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  name: "index",
  data() {
    return {
      homes: homes.slice(0,3)
    }
  }
}
</script>

<style scoped>

</style>