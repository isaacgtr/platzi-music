/* Directiva personalizada que se encarga de hacer un blur sobre el track que no tenga preview */
const blur = {}

function setBlur(el, binding) {
  // "el" representa al dom, binding representa al valor bindeado en el dom
  el.style.filter = !binding.value ? 'blur(3px)' : 'none' // es por eso que podemos acceder a la propiedad style del dom
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'

  // funcion de js vanilla que nos permite selecionar elementos dentro de todo el dom o de un elemento especifico. en este caso estamos selecionando todos los selectores a (links)
  el.querySelectorAll('button').forEach((a) => {
    if (!binding.value) {
      a.setAttribute('disabled', true)
    } else {
      a.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind(el, binding) {
      setBlur(el, binding)
    },
  }) // metodo directive para crear directivas globales en vue
}

export default blur
