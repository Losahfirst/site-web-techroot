<template>
  <div id="app-root">
    <NavBar />
    <main>
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1e293b;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

#app, #app-root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

#app-root {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin: 0;
  padding: 0;
}
</style>
