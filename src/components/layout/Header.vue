<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item">
              <router-link class="navbar-item" to="search"
                >🎞 Platzi Music</router-link
              >
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <a class="navbar-item" @click="selectLang('en')">English</a>
            <a class="navbar-item" @click="selectLang('es')">Spanish</a>
            <router-link class="navbar-item" :to="{ name: 'search' }">{{
              $t('search')
            }}</router-link>
            <router-link class="navbar-item" to="about">{{
              $t('about')
            }}</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Platzi Music</h1>
        <h2 class="subtitle">{{ $t('title') }}</h2>
        <pm-player></pm-player>
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '../Player.vue'
export default {
  components: { PmPlayer },

  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang
    },
  },
}
</script>
