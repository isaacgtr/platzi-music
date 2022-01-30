<template>
  <main>
    <transition name="move">
      <pm-notification :typeNotification="DataLength" v-show="showNotification">
        <p v-if="DataLength" slot="body">{{ $t('findResults') }}</p>
        <p v-else slot="body">{{ searchMessage }} {{ $t('results2') }}</p>
      </pm-notification>
    </transition>

    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>

    <section v-if="!isLoading" class="section">
      <nav class="navbar">
        <div class="container">
          <input
            v-model="searchQuery"
            class="input is-large"
            type="text"
            placeholder="Buscar canciones"
            @keyup.enter="search"
          />
          <!-- evento keyup que permite una accion al presionar una tecla, ".enter" es un modifiers (modificadores de eventos) para decirle al evento que solo se va a ejecutar con la tecla entre. en este caso es un modifiers del evento keyup -->
          <a class="button is-info is-large" @click="search">{{
            $t('search')
          }}</a>
          <a class="button is-danger is-large" href="">&times;</a>
        </div>
      </nav>
      <div class="container">
        <p>{{ searchMessage }}</p>
      </div>
      <div class="container results">
        <div class="columns is-multiline">
          <div
            class="column is-one-quarter"
            v-for="(track, t) in tracks"
            :key="t"
          >
            <pm-track
              v-blur="track.preview_url"
              :track="track"
              @select="setSelectedTrack"
              :class="{ 'is-active': track.id === selectedTrack }"
            >
            </pm-track>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track'
// import axios from 'axios'
/* El prefijo pm se usó porque el proyecto se llama “Platzi Music”. Por poner otro ejemplo si el proyecto se llamara “Chichona Barbosa” usariamos de prefijo “cb”. Eso es para indicar que el componente es propio del proyecto en el caso de que usemos componentes externos. */
import PmTrack from '../components/Track.vue'

import PmNotification from '../components/shared/Notification.vue'
import PmLoader from '../components/shared/Loader.vue'

export default {
  components: { PmTrack, PmLoader, PmNotification },
  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false,
      DataLength: false,
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return
      }

      this.isLoading = true

      trackService.search(this.searchQuery).then((res) => {
        this.tracks = res.tracks.items /* lista de canciones */
        this.showNotification = true /* activar notificacion */
        this.DataLength =
          res.tracks.total === 0 /* saber si hay o no resultados obtenidos */
        this.isLoading = false /* apago el loader una vez haya respondido */
      })
    },
    setSelectedTrack(id) {
      this.selectedTrack = id /* id de la cancion */
    },
  },
  computed: {
    searchMessage() {
      return `${this.$t('founds')}: ${this.tracks.length}`
    },
  },
  watch: {
    /* los watchers deben llamarse igual que las propiedades de data */
    /* en este caso vamos a observar la propiedad showNotification */
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    },
    /* los watchers no devuelven valores, solo ejecutan codigo */
  },
}
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #48c78e solid;
}
</style>
