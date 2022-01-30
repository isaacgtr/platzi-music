import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About',
    searchTracks: 'Search tracks',
    results: 'Found:',
    title: 'Songs that are very good',
    with: 'with',
    by: 'by',
    alert: 'Found: 20 results',
    loading: 'Loading...',
    notification: 'Something went wrong',
    findResults: 'No results found',
    founds: 'Founds ',
    theyHave: 'They have',
    results2: 'results',
  },

  es: {
    search: 'Buscar',
    about: 'Nosotros',
    searchTracks: 'Buscar canciones',
    results: 'Found:',
    title: 'Canciones que estan Vue-nisimas',
    with: 'con',
    by: 'por',
    alert: 'Found: 20 results',
    loading: 'Cargando...',
    notification: 'Algo anduvo mal',
    findResults: 'No se encontraron resultados',
    founds: 'Encontrados ',
    theyHave: 'Se han',
    results2: 'resultados',
  },
}

const i18n = new VueI18n({
  messages,
  locale: 'en',
})

export default i18n
