exports.ids = [2];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=template&id=21e7910e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.home)?_c('div',[_vm._ssrNode("<div class=\"display:flex\" data-v-21e7910e>"+(_vm._ssrList((_vm.home.images),function(image){return ("<img"+(_vm._ssrAttr("src",image))+(_vm._ssrAttr("alt",_vm.home.title))+" width=\"200\" height=\"150\" data-v-21e7910e>")}))+"</div>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.title)+"\n  $"+_vm._s(_vm.home.pricePerNight)+" / night ")+"<br data-v-21e7910e> <img src=\"/images/marker.svg\" alt=\"Marker\" width=\"20\" height=\"20\" data-v-21e7910e>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.location.address)+" "+_vm._s(_vm.home.location.city)+" "+_vm._s(_vm.home.location.state)+" "+_vm._s(_vm.home.location.country)+" ")+"<br data-v-21e7910e> <img src=\"/images/star.svg\" alt=\"Marker\" width=\"20\" height=\"20\" data-v-21e7910e>"+_vm._ssrEscape(" "+_vm._s(_vm.home.reviewValue)+" ")+"<br data-v-21e7910e>"+_vm._ssrEscape("\n  "+_vm._s(_vm.home.guests)+" guests, "+_vm._s(_vm.home.bedrooms)+" rooms, "+_vm._s(_vm.home.beds)+" beds, "+_vm._s(_vm.home.bathrooms)+" bathrooms\n  ")+"<p data-v-21e7910e>"+_vm._ssrEscape(_vm._s(_vm.home.description))+"</p> <div style=\"height: 800px;width: 800px\" data-v-21e7910e></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=template&id=21e7910e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    return {
      title: this.home.title
    };
  },

  async asyncData({
    params,
    $dataApi
  }) {
    const {
      data,
      status,
      statusText,
      ok
    } = await $dataApi.getHome(params.id);

    if (!ok) {
      return error({
        statusCode: status,
        message: statusText
      });
    }

    return {
      home: data
    };
  },

  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/home/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "21e7910e",
  "30ba434d"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map