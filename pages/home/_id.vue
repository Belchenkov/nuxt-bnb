<template>
  <div v-if="home" class="app-container">
    <property-gallery :images="home.images" />
    <property-details :home="home" />
    <property-description :home="home" />
    <property-map :home="home" />
    <property-reviews :reviews="reviews" />
    <property-host :user="user" />
  </div>
</template>

<script>
import PropertyDetails from "../../components/PropertyDetails";
import PropertyDescription from "../../components/PropertyDescription";
import PropertyGallery from "../../components/PropertyGallery";
import PropertyMap from "../../components/PropertyMap";
import PropertyReviews from "../../components/PropertyReviews";
import PropertyHost from "../../components/PropertyHost";

export default {
  components: {
    PropertyDescription,
    PropertyDetails,
    PropertyGallery,
    PropertyMap,
    PropertyReviews,
    PropertyHost,
  },
  head() {
    return {
      title: this.home.title
    }
  },
  async asyncData({ params, $dataApi, error }) {
    const responses = await Promise.all([
      await $dataApi.getHome(params.id),
      await $dataApi.getReviewsByHomeId(params.id),
      await $dataApi.getUserByHomeId(params.id)
    ]);

    return {
      home: responses[0].data,
      reviews: responses[1].data.hits,
      user: responses[2].data.hits[0],
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
