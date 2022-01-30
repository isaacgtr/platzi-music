<template>
  <div>
    <h1>Expresiones en vuejs {{}}</h1>
    <h1>
      {{ msg }}
      <strong>se pueden imprimir todas aquellas propiedades de data</strong>
    </h1>
    <p>{{ 1 + 1 }} <strong>pueden realizar calculos simples</strong></p>
    <p>
      {{ "Hola " + "Mundo "
      }}<strong>se pueden realizar concatenaciones</strong>
    </p>
    <p>
      {{ person.name
      }}<strong> se pueden llamar a propiedades de objetos</strong>
    </p>
    <p>
      {{ person.name.toUpperCase() }} <strong> se pueden usar metodos</strong>
    </p>
    <p>
      {{ JSON.stringify(person)
      }}<strong> estamos pasando un objeto a string</strong>
    </p>
    <p>
      {{ true ? "true" : "false"
      }}<strong>
        no se pueden usar condicionales puros pero si ternarios</strong
      >
    </p>

    <h2>Directivas</h2>
    <p v-show="showValue">{{ value }}</p>
    <p v-if="showValue">{{ value }}</p>
    <p v-else-if="false">{{ "algo mas" }}</p>
    <p v-else>{{ "lo ultimo" }}</p>

    <ul>
      <li v-for="i in items" :key="i">{{ i }}</li>
    </ul>

    <input v-model="name" type="text" />
    <p>{{ name }}</p>

    <a :href="url">Link</a>

    <input v-model="lastName" type="text" />
    <p>{{ fullName }}</p>

    <input v-model="nacimiento" type="date" />
    <p>{{ fechaNacimiento }} años tienes</p>

    <button @click="format">Format</button>
    <p>{{ formattedName }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Hola Vue!",
      name: "",
      nacimiento: "",
      url: "https://platzi.com",
      lastName: "",
      formattedName: "",
      showValue: true,
      value: "Algo",
      person: {
        name: "Juan",
      },
      items: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    format() {
      this.formattedName = this.name.split(" ").join("-").toUpperCase();

      /* $set es una función del framework

      this.$set(<objeto a agregar una propiedad>, <nombre de la propiedad>, <valor de esa propiedad>) 

      this.$set(this.person, 'lastName', 'Anaya') */
    },
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    },
    fechaNacimiento() {
      // console.log(this.nacimiento)
      let reto =
        parseInt(new Date().toISOString().slice(0, 4)) -
        parseInt(this.nacimiento.slice(0, 4));

      return reto;
    },
  },
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
