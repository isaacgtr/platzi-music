/* este plugin se crea para comunicarse entre componentes que no tienen niguna relacion pdre-hijo */
/* Instalar plugins de manera manual */
const eventBus = {};

/* se crea el metodo install */
eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue();
};

export default eventBus;
