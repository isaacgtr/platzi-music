const trackMixin = {
  /* lo que se escribe dentro de este objeto es lo mismo que se escribe en el script de un componente normal de vue */
  methods: {
    selectTrack() {
      /* este if nos permite cortar le ejecucion del codigo con un return */
      if (!this.track.preview_url) {
        return
      }

      /* $emit metodo propio de vue para emitir eventos entre componentes this.$emit('nombre-evento', valor que se le pasa) */
      /* aqui estamos comunicandonos con el componente padre y solo se puede hacer atraves de eventos */
      this.$emit('select', this.track.id)

      // this.$bus.$emit('set-track', this.track)
      /* se dejo de usar el eventBus para usar Vuex como mejor practica, ya que si la aplicacion se hace mas grande, es mas tedioso tener tantos eventos entre componentes */
      this.$store.commit('setTrack', this.track)
    },
  },
}

export default trackMixin
