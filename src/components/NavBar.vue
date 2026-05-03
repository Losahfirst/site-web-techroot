<template>
  <div>
    <!-- Mobile Full Screen Menu -->
    <nav class="mobile-menu" :class="{ 'menu-open': mobileMenuOpen }">
      <div class="mobile-menu-header">
        <router-link to="/" class="navbar-logo" @click="closeMenus">
          <img src="/images/logo.png" alt="TechRoot Group">
        </router-link>
        <button class="mobile-close-btn" @click="closeMenus">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      
      <div class="mobile-menu-body">
        <div class="menu-links-waymo">
          <router-link to="/" class="menu-link-waymo" @click="closeMenus">Accueil</router-link>
          <router-link to="/a-propos" class="menu-link-waymo" @click="closeMenus">À Propos</router-link>
          <router-link to="/projets" class="menu-link-waymo" @click="closeMenus">Projets</router-link>
          <router-link to="/carrieres" class="menu-link-waymo" @click="closeMenus">Carrières</router-link>
          <router-link to="/contact" class="menu-link-waymo" @click="closeMenus">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Desktop Navbar -->
    <header class="navbar" :class="{ 'navbar-scrolled': isScrolled, 'navbar-home-transparent': isHome && !isScrolled }">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="/images/logo.png" alt="TechRoot Group" :class="{ 'invert-logo': isHome && !isScrolled }">
        </router-link>

        <nav class="navbar-nav">
          <router-link to="/a-propos" class="nav-link">À propos</router-link>
          <router-link to="/projets" class="nav-link">Projets</router-link>
          <router-link to="/carrieres" class="nav-link">Carrières</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
          
          <router-link to="/contact" class="nav-cta-circle">
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </nav>

        <button class="mobile-toggle-btn" @click="toggleMobileMenu" :class="{ 'toggle-active': mobileMenuOpen, 'toggle-white': isHome && !isScrolled }">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isScrolled: false,
      mobileMenuOpen: false
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : ''
    },
    closeMenus() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  background: var(--waymo-light);
}

.navbar-home-transparent {
  background: transparent;
}

.navbar-home-transparent .nav-link {
  color: #ffffff;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  padding: 0.85rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo img {
  height: 28px;
  width: auto;
  transition: filter 0.3s ease;
}

.invert-logo {
  /* Removed filter that caused white box */
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav-link {
  color: var(--waymo-text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.3s;
  letter-spacing: -0.01em;
}

.nav-link:hover {
  opacity: 0.7;
}

.nav-cta-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--waymo-blue);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s;
}

.nav-cta-circle:hover {
  transform: scale(1.1);
}

.mobile-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--waymo-text-dark);
  transition: all 0.3s ease;
}

.toggle-white .bar {
  background: #ffffff;
}

.toggle-active .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); background: var(--waymo-text-dark); }
.toggle-active .bar:nth-child(2) { opacity: 0; }
.toggle-active .bar:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); background: var(--waymo-text-dark); }

/* Mobile Menu Styles */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: #ffffff;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-open {
  transform: translateX(0);
}

.mobile-menu-header {
  height: 80px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-close-btn {
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  color: var(--waymo-text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mobile-menu-body {
  flex: 1;
  padding: 4rem 6%;
}

.menu-links-waymo {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.menu-link-waymo {
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--waymo-text-dark);
  font-family: var(--font-heading);
}

@media (max-width: 1024px) {
  .navbar-nav { display: none; }
  .mobile-toggle-btn { display: flex; }
}
</style>

