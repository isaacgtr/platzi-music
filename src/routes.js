import Search from '@/components/Search.vue'
import About from '@/components/About.vue'
import TrackDetail from '@/components/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  {
    path: '/track/:id',
    component: TrackDetail,
    name: 'track',
  } /* cuando es una ruta parametrizada, quiere decir que es dinamica y se le agrega /: para indicar su valor */,
]

export default routes
