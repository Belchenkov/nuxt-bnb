<template>
  <div>
    <div :key="home.objectID" v-for="home in homes" style="float: left;margin: 10px">
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home"></home-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  head() {
    return {
      title: 'Homepage',
      meta: [{
        name: 'description',
        content: 'This is a homepage!',
        hid: 'description'
      }]
    }
  },
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