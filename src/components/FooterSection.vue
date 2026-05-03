<template>
  <footer class="footer-waymo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <img src="/images/logo.png" alt="TechRoot Group" class="invert-logo">
          </router-link>
          <div class="footer-social">
            <a href="#" class="social-icon">Li</a>
            <a href="#" class="social-icon">X</a>
            <a href="#" class="social-icon">Fb</a>
          </div>
        </div>

        <div class="footer-nav">
          <div class="nav-col">
            <h4>Pôles</h4>
            <router-link to="/poles/hardware">Hardware</router-link>
            <router-link to="/poles/software">Software</router-link>
            <router-link to="/poles/drones">Drones</router-link>
            <router-link to="/poles/recherche">R&D</router-link>
          </div>
          <div class="nav-col">
            <h4>Entreprise</h4>
            <router-link to="/a-propos">À propos</router-link>
            <router-link to="/projets">Projets</router-link>
            <router-link to="/carrieres">Carrières</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>

        <div class="footer-contact-info">
          <h4>Contact</h4>
          <p>Songon Kassemblé, Cité Promogim<br>Abidjan, Côte d'Ivoire</p>
          <a href="mailto:info@techrootgroup.io">info@techrootgroup.io</a>
          <a href="tel:+2250787180456">+225 07 87 18 04 56</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} TechRoot Group. Tous droits réservés.</p>
        <div class="legal-links">
          <router-link to="/mentions-legales">Mentions légales</router-link>
          <router-link to="/politique-confidentialite">Confidentialité</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer-waymo {
  background-color: #000000;
  color: white;
  padding: 100px 0 50px;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: 4rem;
  margin-bottom: 80px;
}

.footer-logo img {
  height: 28px;
  width: auto;
  margin-bottom: 2rem;
}

.invert-logo {
  /* No hardcoded width to prevent stretching */
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
  transition: background 0.3s;
}

.social-icon:hover {
  background: white;
  color: var(--waymo-dark);
}

.footer-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.nav-col h4, .footer-contact-info h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 1.5rem;
}

.nav-col a, .footer-contact-info a, .footer-contact-info p {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.nav-col a:hover, .footer-contact-info a:hover {
  opacity: 1;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.05);
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr; gap: 3rem; }
  .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
}
</style>
