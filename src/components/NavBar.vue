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
        <div class="menu-links-v3">
          <router-link to="/" class="menu-link-v3" @click="closeMenus">
            <span class="link-label">Accueil</span>
            <span class="link-hint">Page principale</span>
          </router-link>
          
          <div class="menu-dropdown-v3">
            <button class="menu-link-v3" @click="toggleDropdown">
              <span class="link-label">Nos Pôles</span>
              <span class="material-symbols-outlined arrow" :class="{ 'rotate': dropdownOpen }">expand_more</span>
            </button>
            <div class="sub-menu-v3" :class="{ 'show': dropdownOpen }">
              <router-link to="/poles/hardware" class="sub-link-v3" @click="closeMenus">Pôle Hardware</router-link>
              <router-link to="/poles/software" class="sub-link-v3" @click="closeMenus">Pôle Software</router-link>
              <router-link to="/poles/drones" class="sub-link-v3" @click="closeMenus">Pôle Drones</router-link>
              <router-link to="/poles/events" class="sub-link-v3" @click="closeMenus">Pôle Events</router-link>
              <router-link to="/poles/recherche" class="sub-link-v3" @click="closeMenus">Recherche & Innovation</router-link>
            </div>
          </div>
          
          <router-link to="/a-propos" class="menu-link-v3" @click="closeMenus">
            <span class="link-label">À Propos</span>
            <span class="link-hint">Notre vision & histoire</span>
          </router-link>
          
          <router-link to="/projets" class="menu-link-v3" @click="closeMenus">
            <span class="link-label">Projets</span>
            <span class="link-hint">Nos réalisations</span>
          </router-link>

          <router-link to="/contact" class="menu-link-v3" @click="closeMenus">
            <span class="link-label">Contact</span>
            <span class="link-hint">Démarrer un projet</span>
          </router-link>
        </div>

        <div class="menu-footer-v3">
          <div class="social-links-v3">
            <a href="#"><span class="material-symbols-outlined">share</span></a>
            <a href="#"><span class="material-symbols-outlined">forum</span></a>
            <a href="#"><span class="material-symbols-outlined">mail</span></a>
          </div>
          <p>© 2024 TechRoot Group. Tous droits réservés.</p>
        </div>
      </div>
    </nav>

    <!-- Desktop Navbar -->
    <header class="navbar" :class="{ 'navbar-scrolled': isScrolled, 'navbar-home-v2': isHome && !isScrolled }">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="/images/logo.png" alt="TechRoot Group">
        </router-link>

        <nav class="navbar-nav">
          <div class="nav-item has-dropdown">
            <a href="#" class="nav-link">
              Nos Pôles
              <span class="material-symbols-outlined dropdown-arrow">expand_more</span>
            </a>
            <div class="dropdown-menu">
              <router-link to="/poles/hardware" class="dropdown-item">
                <span class="dropdown-icon material-symbols-outlined">developer_board</span>
                <div>
                  <strong>Pôle Hardware</strong>
                  <small>Électronique, IoT & systèmes embarqués</small>
                </div>
              </router-link>
              <router-link to="/poles/software" class="dropdown-item">
                <span class="dropdown-icon material-symbols-outlined">code</span>
                <div>
                  <strong>Pôle Software</strong>
                  <small>Applications web, mobile & métiers</small>
                </div>
              </router-link>
              <router-link to="/poles/drones" class="dropdown-item">
                <span class="dropdown-icon material-symbols-outlined">flight_takeoff</span>
                <div>
                  <strong>Pôle Drones</strong>
                  <small>Inspection, cartographie & formation</small>
                </div>
              </router-link>
              <router-link to="/poles/events" class="dropdown-item">
                <span class="dropdown-icon material-symbols-outlined">celebration</span>
                <div>
                  <strong>Pôle Events</strong>
                  <small>Digitalisation événementielle</small>
                </div>
              </router-link>
              <router-link to="/poles/recherche" class="dropdown-item">
                <span class="dropdown-icon material-symbols-outlined">science</span>
                <div>
                  <strong>Recherche & R&D</strong>
                  <small>Innovation appliquée</small>
                </div>
              </router-link>
            </div>
          </div>
          <router-link to="/a-propos" class="nav-link">À propos</router-link>
          <router-link to="/projets" class="nav-link">Projets</router-link>
          <router-link to="/carrieres" class="nav-link">Carrières</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>

        <router-link to="/contact" class="navbar-cta">
          <span>Discutons</span>
          <span class="material-symbols-outlined">arrow_forward</span>
        </router-link>

        <button class="mobile-toggle-btn" @click="toggleMobileMenu" :class="{ 'toggle-active': mobileMenuOpen }">
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
      mobileMenuOpen: false,
      dropdownOpen: false
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
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    closeMenus() {
      this.mobileMenuOpen = false
      this.dropdownOpen = false
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
  padding: 1.5rem 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  padding: 1rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-logo img {
  height: 32px;
  width: auto;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  color: #1e293b;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #0d9668;
}

.nav-item {
  position: relative;
}

.dropdown-arrow {
  font-size: 1.2rem;
  vertical-align: middle;
  transition: transform 0.3s;
}

.nav-item:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(15px);
  min-width: 320px;
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 20px;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(5px);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem;
  border-radius: 12px;
  text-decoration: none;
  color: #1e293b;
  transition: background 0.3s;
}

.dropdown-item:hover {
  background: #f8fafc;
}

.dropdown-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border-radius: 12px;
  color: #0d9668;
  font-size: 1.25rem;
}

.dropdown-item strong {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 2px;
}

.dropdown-item small {
  color: #64748b;
  font-size: 0.75rem;
}

.navbar-cta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 1.75rem;
  background: #111827;
  color: #fff;
  text-decoration: none;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.navbar-cta:hover {
  background: #0d9668;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(13, 150, 104, 0.2);
}

.mobile-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1100;
}

.bar {
  display: block;
  width: 100%;
  height: 2px;
  background: #1e293b;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.toggle-active .bar:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
.toggle-active .bar:nth-child(2) { opacity: 0; }
.toggle-active .bar:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

/* Mobile Menu Styles */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: #ffffff;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  transform: translateY(-100%);
  transition: transform 0.6s cubic-bezier(0.85, 0, 0.15, 1);
}

.menu-open {
  transform: translateY(0);
}

.mobile-menu-header {
  height: 80px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f5f9;
}

.mobile-close-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: transparent;
  color: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mobile-menu-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  overflow-y: auto;
}

.menu-links-v3 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.menu-link-v3 {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border: none;
  background: none;
  text-align: left;
  padding: 0.5rem 0;
}

.link-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  color: #111827;
  line-height: 1;
}

.link-hint {
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: 0.5rem;
  font-weight: 700;
}

.menu-link-v3.router-link-active .link-label {
  color: #0d9668;
}

.menu-link-v3 .arrow {
  font-size: 2rem;
  color: #cbd5e1;
  margin-left: 0.5rem;
  transition: transform 0.3s;
}

.sub-menu-v3 {
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sub-menu-v3.show {
  max-height: 500px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.sub-link-v3 {
  text-decoration: none;
  color: #475569;
  font-size: 1.25rem;
  font-weight: 700;
  transition: color 0.3s;
}

.sub-link-v3.router-link-active {
  color: #0d9668;
}

.menu-footer-v3 {
  margin-top: auto;
  padding: 2.5rem 0;
  border-top: 1px solid #f1f5f9;
  text-align: center;
}

.social-links-v3 {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.social-links-v3 a {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #475569;
  text-decoration: none;
}

.menu-footer-v3 p {
  font-size: 0.75rem;
  color: #94a3b8;
}

@media (max-width: 1024px) {
  .navbar-container { padding: 0 1.5rem; }
  .navbar-nav, .navbar-cta { display: none; }
  .mobile-toggle-btn { display: flex; }
}

@media (max-width: 480px) {
  .link-label { font-size: 1.75rem; }
  .sub-link-v3 { font-size: 1.1rem; }
}
</style>
