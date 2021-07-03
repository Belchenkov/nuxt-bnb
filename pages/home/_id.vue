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
    <div style="height: 800px;width: 800px" ref="map"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title
    }
  },
  async asyncData({ params, $dataApi }) {
    const {
      data,
      status,
      statusText,
      ok
    } = await $dataApi.getHome(params.id);

    if (! ok) {
      return error({
        statusCode: status,
        message: statusText
      })
    }

    return {
      home: data,
    }
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
