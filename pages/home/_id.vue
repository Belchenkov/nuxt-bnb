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
    <p>{{ home.description }}</p>

    <!-- Map  -->
    <div style="height: 800px;width: 800px" ref="map"></div>

    <!-- Reviews   -->
    <div v-for="review in reviews" :key="review.objectID">
      <img :src="review.reviewer.image" :alt="review.title"><br>
      {{ formatDate(review.date) }}<br>
      <short-text :text="review.comment" :target="150"/><br>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title
    }
  },
  async asyncData({ params, $dataApi, error }) {
    const homeResponse = await $dataApi.getHome(params.id);
    const reviewResponse = await $dataApi.getReviewsByHomeId(params.id);

    return {
      home: homeResponse.data,
      reviews: reviewResponse.data.hits,
    }
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    }
  }
}
</script>

<style scoped>

</style>
