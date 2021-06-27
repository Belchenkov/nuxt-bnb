<template>
  <div v-if="home">
    <div class="display:flex">
      <img
          v-for="image in home.images"
          :key="image"
          :src="image"
          :alt="home.title"
          width="200"
          height="150"
      />
    </div>
    {{ home.title }}
    ${{ home.pricePerNight }} / night <br/>
    <img src="/images/marker.svg" alt="Marker" width="20" height="20" />
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }} <br />
    <img src="/images/star.svg" alt="Marker" width="20" height="20" /> {{ home.reviewValue }} <br />
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bathrooms
  </div>
</template>

<script>
import homes from '~/data/homes';

export default {
  head() {
    return {
      title: this.home.title
    }
  },
  data() {
    return {
      home: null
    }
  },
  created() {
    this.home = homes.find(home => home.objectID === this.$route.params.id);
  }
}
</script>

<style scoped>

</style>