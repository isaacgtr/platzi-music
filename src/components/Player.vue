<template>
  <div v-if="track && track.album" class="content">
    <p>
      <img :src="track.album.images[0].url" alt="" />
    </p>
    <p>
      <strong>{{ track.name }}</strong>
      <small> [{{ track.duration_ms | msToMm }}]</small>
      <!-- aplicacion de filter -->
    </p>
    <p>
      <audio :src="track.preview_url" controls></audio>
      <!-- etiqueta audio de html -->
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track']),
  },

  /* data y created se reemplazo por vuex */
  // data() {
  //   return {
  //     track: {},
  //   }
  // },
  // created() {
  //   this.$bus.$on('set-track', (track) => {
  //     this.track = track
  //   })
  //   /* evento on()  que escucha el evento emit, 'set-track' mismo nombre que se emite*/
  // },
}
</script>
<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 50%;
}
</style>
