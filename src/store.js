import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {},
  },

  /* se usan los getters cuando queremos retornar algo custom del state, por ejemplo si queremos mostrar en el componente alguna logica que se procesa en el state */
  getters: {
    trackTitle(state) {
      if (!state.track.name) {
        return ''
      }
      return `${state.track.name} - ${state.track.artists[0].name}`
    },
  },

  mutations: {
    setTrack(state, track) {
      state.track = track
    },
  },
  /* la principal diferencia entre una action y una mutation es que la mutation es sincronica y en la action puedo ejecutar codigo asincrono. Y, en la action puedo commitear a una mutation */
  actions: {
    async getTrackById(context, payload) {
      /* es buena practica siempre trabajar los payload con objetos y no con valores unicos */
      const track = await trackService.getById(payload.id)

      context.commit('setTrack', track)

      // return track

      // return .then((res) => {
      //   context.commit('setTrack', res)
      //   return res
      // })
    },
  },
})

export default store
