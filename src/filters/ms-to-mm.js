/* este filtro nos ayudara a convertir las canciones que vienen en milisegundos a minutos */
const msToMm = {}

function convertMsToMm(ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000) / 1000).toFixed(0)
  return `${min}:${sec}`
}

msToMm.install = function (Vue) {
  Vue.filter('msToMm', (val) => {
    // metodo filter para crear filtros
    return convertMsToMm(val)
  })
}

export default msToMm
