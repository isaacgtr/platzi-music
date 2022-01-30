<template>
  <div>
    <pm-header></pm-header>
    <!-- aqui se inserta router vue para que funcione -->
    <router-view></router-view>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
/* El prefijo pm se usó porque el proyecto se llama “Platzi Music”. Por poner otro ejemplo si el proyecto se llamara “Chichona Barbosa” usariamos de prefijo “cb”. Eso es para indicar que el componente es propio del proyecto en el caso de que usemos componentes externos. */
import PmFooter from "./components/layout/Footer.vue";
import PmHeader from "./components/layout/Header.vue";

export default {
  name: "App",
  components: { PmFooter, PmHeader },
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #48c78e solid;
}
</style>
