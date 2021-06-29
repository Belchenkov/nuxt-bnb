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

    <div style="height: 800px;width: 800px" ref="map"></div>
  </div>
</template>

<script>
import homes from '~/data/homes';

export default {
  head() {
    return {
      title: this.home.title,
      script: [{
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDe7_F2ExQE6s4ZwwGNqCxSglaUCnL6SvY&libraries=places",
        hid: "map",
        defer: true
      }]
    }
  },
  data() {
    return {
      home: null
    }
  },
  created() {
    this.home = homes.find(home => home.objectID === this.$route.params.id);
  },
  mounted() {
    const mapOptions = {
      center: {
        lat: this.home._geoloc.lat,
        lng: this.home._geoloc.lng
      },
      zoom: 18,
      disableDefaultUI: true,
      zoomControl: true
    };

    const map = new window.google.maps.Map(this.$refs.map, mapOptions);
    const position = new window.google.maps.LatLng(this.$refs.map, mapOptions);
    const marker = new window.google.maps.Marker({ position });
    marker.setMap(map);
  }
}
</script>

<style scoped>

</style>