<template :class="$attrs.class">
    <q-card style="width: 100%" :class="classCSS + ' q-pa-lg'">
        <l-map
          style="height: 80%; width: 100%"
          :zoom="zoom"
          :center="center"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
        >
          <l-tile-layer :url="url"></l-tile-layer>
        </l-map>
    </q-card>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
    mounted () {
        console.log(this.$attrs)
    },
  components: {
    LMap,
    LTileLayer,
  },
  props: {
    url: {
      type: String,
    },
    zoom: {
      type: Number,
    },
    center: {
      type: Array,
    },
    classCSS: {
      type: String,
    },
    bounds: Object,
  },
  methods: {
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    }
  }
};
</script>