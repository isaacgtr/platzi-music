<template>
  <div v-if="track && track.album" class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt="" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt="" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong>{{ track.name }}</strong>
          </p>
          <p class="subtitle is-6">{{ track.artists[0].name }}</p>
        </div>
      </div>
      <div class="content">
        <small>
          {{ track.duration_ms | msToMm }}
          <!-- utilizacion de un filter usando "|" -->
        </small>
        <nav class="level">
          <div class="level-left">
            <button class="level-item button is-primary" href="#">
              <span @click="selectTrack" class="icon is-small">🎧</span>
            </button>
            <button class="level-item button is-warning" href="#">
              <span @click="goToTrack(track.id)" class="icon is-small">🌎</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from '../mixins/track'

export default {
  /* propiedad mixin recibe un array */
  mixins: [trackMixin],
  props: {
    /* estamos recibiendo una prop de un componente padre, y esta es de tipo objeto y es requerida (esto quiere decir que si o si se le de debe pasar un valor) */
    track: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToTrack(id) {
      if (!this.track.preview_url) {
        return
      }

      this.$router.push({ name: 'track', params: { id } })
      /* para navegar de una ruta a otra se usa $router, le pasamos un objeto, con el nombre de la ruta y el parametro de la ruta */
      /* $router es para navegar programaticamente y para acceder a funcionalidad del router, $route es para obtener informacion de la ruta, parametros, etc  */
    },
  },
}
</script>

<style lang="scss"></style>
