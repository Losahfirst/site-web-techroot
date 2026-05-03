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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap');

:root {
  --waymo-dark: #0f172a;
  --waymo-blue: #0d9668; /* Brand Green */
  --waymo-light: #f8fafc;
  --waymo-text-dark: #1e293b;
  --waymo-text-light: #ffffff;
  --font-main: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Outfit', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--waymo-text-dark);
  background-color: var(--waymo-light);
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
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
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 6%;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--waymo-light);
}

::-webkit-scrollbar-thumb {
  background: #d1d1d6;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a6;
}
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }
}
</style>

