<template>
  <div>
    <!-- Mobile Overlay - Outside navbar for proper stacking -->
    <div class="mobile-overlay" :class="{ 'overlay-open': mobileMenuOpen }" @click="closeMenus"></div>
    
    <!-- Mobile Sidebar - Outside navbar for proper stacking -->
    <nav class="mobile-sidebar" :class="{ 'sidebar-open': mobileMenuOpen }">
      <div class="mobile-nav-header">
        <router-link to="/" class="mobile-logo" @click="closeMenus">
          <img src="/assets/images/logo.png" alt="TechRoot Group">
        </router-link>
        <button class="mobile-close" @click="closeMenus">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      
      <div class="mobile-nav-links">
        <router-link to="/" class="mobile-link" @click="closeMenus">
          <span class="material-symbols-outlined">home</span>
          Accueil
        </router-link>
        
        <div class="mobile-dropdown">
          <a href="#" class="mobile-link" @click.prevent="toggleDropdown">
            <span class="material-symbols-outlined">widgets</span>
            Nos Pôles
            <span class="material-symbols-outlined dropdown-arrow" :class="{ 'arrow-open': dropdownOpen }">expand_more</span>
          </a>
          <div class="mobile-dropdown-menu" :class="{ 'dropdown-open': dropdownOpen }">
            <router-link to="/poles/hardware" class="mobile-dropdown-item" @click="closeMenus">
              <span class="material-symbols-outlined">developer_board</span>
              Pôle Hardware
            </router-link>
            <router-link to="/poles/software" class="mobile-dropdown-item" @click="closeMenus">
              <span class="material-symbols-outlined">code</span>
              Pôle Software
            </router-link>
            <router-link to="/poles/drones" class="mobile-dropdown-item" @click="closeMenus">
              <span class="material-symbols-outlined">flight_takeoff</span>
              Pôle Drones
            </router-link>
            <router-link to="/poles/events" class="mobile-dropdown-item" @click="closeMenus">
              <span class="material-symbols-outlined">celebration</span>
              Pôle Events
            </router-link>
            <router-link to="/poles/recherche" class="mobile-dropdown-item" @click="closeMenus">
              <span class="material-symbols-outlined">science</span>
              Recherche & R&D
            </router-link>
          </div>
        </div>
        
        <router-link to="/a-propos" class="mobile-link" @click="closeMenus">
          <span class="material-symbols-outlined">info</span>
          À propos
        </router-link>
        <router-link to="/projets" class="mobile-link" @click="closeMenus">
          <span class="material-symbols-outlined">folder_open</span>
          Projets
        </router-link>
        <router-link to="/carrieres" class="mobile-link" @click="closeMenus">
          <span class="material-symbols-outlined">work</span>
          Carrières
        </router-link>
      </div>
      
      <div class="mobile-nav-footer">
        <router-link to="/contact" class="mobile-link" @click="closeMenus">
          <span class="material-symbols-outlined">mail</span>
          Contact
        </router-link>
      </div>
    </nav>

    <!-- Desktop Navbar -->
    <header class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <img src="/assets/images/logo.png" alt="TechRoot Group">
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

        <button class="mobile-toggle" @click="toggleMobileMenu" :class="{ 'toggle-active': mobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
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
  z-index: 9999;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 0.75rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
  gap: 0.5rem;
  text-decoration: none;
}

.navbar-logo img {
  height: 32px;
  width: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
}

.logo-text .accent {
  background: linear-gradient(135deg, #00d4aa, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #00d4aa;
}

/* When scrolled, navbar has white background - change link colors to dark */
.navbar-scrolled .nav-link {
  color: #1e293b;
}

.navbar-scrolled .nav-link:hover,
.navbar-scrolled .nav-link.router-link-active {
  color: #0d9668;
}

.nav-item {
  position: relative;
}

.dropdown-arrow {
  font-size: 1.25rem;
  transition: transform 0.3s ease;
}

.nav-item:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  min-width: 320px;
  background: #ffffff;
  backdrop-filter: blur(20px);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 0.75rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  color: #1e293b;
  transition: background 0.3s ease;
}

.dropdown-item:hover {
  background: rgba(13, 150, 104, 0.1);
}

.dropdown-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(13, 150, 104, 0.15), rgba(8, 145, 178, 0.15));
  border-radius: 12px;
  color: #0d9668;
  font-size: 1.5rem;
}

.dropdown-item strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
  color: #1e293b;
}

.dropdown-item small {
  color: #64748b;
  font-size: 0.8rem;
}

.navbar-cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #0d9668, #047857);
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.navbar-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(13, 150, 104, 0.4);
}

.navbar-cta .material-symbols-outlined {
  font-size: 1.25rem;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: #1e293b;
  border: 2px solid #1e293b;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
}

.mobile-toggle:hover {
  background: #0f172a;
  border-color: #0f172a;
}

.mobile-toggle span {
  width: 22px;
  height: 2.5px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar-scrolled .mobile-toggle {
  background: #0d9668;
  border-color: #0d9668;
}

.navbar-scrolled .mobile-toggle:hover {
  background: #047857;
  border-color: #047857;
}

.navbar-scrolled .mobile-toggle span {
  background: #ffffff;
}

.toggle-active span:nth-child(1) {
  transform: rotate(45deg) translateY(10px);
}

.toggle-active span:nth-child(2) {
  opacity: 0;
}

.toggle-active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-10px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay-open {
  opacity: 1;
  visibility: visible;
}

/* Mobile Sidebar */
.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 99999;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
  overflow-y: auto;
}

.sidebar-open {
  transform: translateX(0);
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
}

.mobile-logo img {
  height: 28px;
  width: auto;
}

.mobile-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  color: #64748b;
  transition: all 0.2s;
}

.mobile-close:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.mobile-close .material-symbols-outlined {
  font-size: 1.5rem;
}

.mobile-nav-links {
  flex: 1;
  padding: 0.5rem 0;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.mobile-link .material-symbols-outlined {
  font-size: 1.25rem;
  color: #6b7280;
}

.mobile-link:hover {
  background: #f3f4f6;
}

.mobile-link.router-link-active,
.mobile-link.router-link-exact-active {
  background: rgba(13, 150, 104, 0.1);
  color: #0d9668;
  border-left: 3px solid #0d9668;
}

.mobile-link.router-link-active .material-symbols-outlined,
.mobile-link.router-link-exact-active .material-symbols-outlined {
  color: #0d9668;
}

.mobile-link .dropdown-arrow {
  margin-left: auto;
  transition: transform 0.2s ease;
}

.arrow-open {
  transform: rotate(180deg);
}

.mobile-dropdown-menu {
  max-height: 0;
  overflow: hidden;
  background: #f8fafc;
  transition: max-height 0.3s ease;
}

.mobile-dropdown-menu.dropdown-open {
  max-height: 400px;
}

.mobile-dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem 0.75rem 3rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.mobile-dropdown-item .material-symbols-outlined {
  font-size: 1.1rem;
  color: #6b7280;
}

.mobile-dropdown-item:hover {
  background: #f1f5f9;
}

.mobile-dropdown-item.router-link-active {
  color: #0d9668;
  background: rgba(13, 150, 104, 0.08);
}

.mobile-dropdown-item.router-link-active .material-symbols-outlined {
  color: #0d9668;
}

.mobile-nav-footer {
  border-top: 1px solid #e2e8f0;
  padding: 0.5rem 0;
}

@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .navbar-nav {
    display: none;
  }

  .navbar-cta {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.5rem 0;
  }
  
  .navbar-scrolled {
    padding: 0.4rem 0;
  }
  
  .navbar-container {
    padding: 0 1rem;
  }
  
  .navbar-logo img {
    height: 26px;
  }
  
  .mobile-sidebar {
    width: 260px;
  }
  
  .mobile-nav-header {
    padding: 0.875rem 1rem;
  }
  
  .mobile-logo img {
    height: 24px;
  }
  
  .mobile-close .material-symbols-outlined {
    font-size: 1.25rem;
  }
  
  .mobile-link {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }
  
  .mobile-link .material-symbols-outlined {
    font-size: 1.15rem;
  }
  
  .mobile-dropdown-item {
    font-size: 0.85rem;
    padding: 0.65rem 1rem 0.65rem 2.5rem;
  }
  
  .mobile-toggle {
    padding: 6px;
  }
  
  .mobile-toggle span {
    width: 20px;
    height: 2px;
  }
}
</style>
