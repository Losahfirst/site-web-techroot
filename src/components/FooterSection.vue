<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <router-link to="/" class="footer-logo">
              <img src="/assets/images/logo.png" alt="TechRoot Group" height="40">
            </router-link>
            <p class="footer-description">
              Groupe technologique africain de référence. Nous concevons des solutions innovantes, 
              fiables et adaptées aux réalités locales tout en respectant les standards internationaux.
            </p>
            <div class="footer-social">
              <a href="https://www.linkedin.com/company/techroot-group" target="_blank" class="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/techrootgroup" target="_blank" class="social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.facebook.com/techrootgroup" target="_blank" class="social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <!-- Pôles -->
          <div class="footer-links">
            <h4>Nos Pôles</h4>
            <ul>
              <li><router-link to="/poles/hardware">Hardware & IoT</router-link></li>
              <li><router-link to="/poles/software">Software</router-link></li>
              <li><router-link to="/poles/drones">Drones</router-link></li>
              <li><router-link to="/poles/events">Events</router-link></li>
              <li><router-link to="/poles/recherche">Recherche & R&D</router-link></li>
            </ul>
          </div>

          <!-- Entreprise -->
          <div class="footer-links">
            <h4>Entreprise</h4>
            <ul>
              <li><router-link to="/a-propos">À propos</router-link></li>
              <li><router-link to="/projets">Projets</router-link></li>
              <li><router-link to="/carrieres">Carrières</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>

          <!-- Produits -->
          <div class="footer-links">
            <h4>Nos Produits</h4>
            <ul>
              <li><router-link to="/projets">PROMED GCME</router-link></li>
              <li><router-link to="/projets">BoostCamp</router-link></li>
              <li><router-link to="/projets">Dimora</router-link></li>
              <li><router-link to="/projets">SysPoint</router-link></li>
              <li><router-link to="/projets">GeStock</router-link></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <span class="material-symbols-outlined">location_on</span>
                <span>Songon Kassemblé, Cité Promogim<br>Abidjan, Côte d'Ivoire</span>
              </li>
              <li>
                <span class="material-symbols-outlined">mail</span>
                <a href="mailto:info@techrootgroup.io">info@techrootgroup.io</a>
              </li>
              <li>
                <span class="material-symbols-outlined">phone</span>
                <a href="tel:+2250787180456">+225 07 87 18 04 56</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ currentYear }} TechRoot Group. Tous droits réservés.</p>
        <div class="footer-legal">
          <router-link to="/mentions-legales">Mentions légales</router-link>
          <router-link to="/politique-confidentialite">Politique de confidentialité</router-link>
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
.footer {
  background: linear-gradient(180deg, #0a0a14 0%, #000 100%);
  color: #fff;
  padding-top: 5rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 3rem;
}

.footer-brand {
  padding-right: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 1.5rem;
}

.footer-logo .accent {
  background: linear-gradient(135deg, #00d4aa, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-description {
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  transition: all 0.3s ease;
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: #00d4aa;
  color: #000;
  transform: translateY(-3px);
}

.footer-links h4,
.footer-contact h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #00d4aa;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-contact .material-symbols-outlined {
  color: #00d4aa;
  font-size: 1.25rem;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: #00d4aa;
}

.footer-bottom {
  margin-top: 4rem;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #00d4aa;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .footer-brand {
    grid-column: span 2;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .footer {
    padding-top: 2.5rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-brand {
    grid-column: span 1;
    padding-right: 0;
    text-align: center;
  }
  
  .footer-logo {
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .footer-logo img {
    height: 36px;
  }
  
  .footer-description {
    font-size: 0.85rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .footer-social {
    justify-content: center;
    gap: 0.75rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
  
  .footer-links {
    text-align: center;
  }
  
  .footer-links h4,
  .footer-contact h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  
  .footer-links ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-links li {
    margin-bottom: 0.5rem;
  }
  
  .footer-links a {
    font-size: 0.9rem;
  }
  
  .footer-contact {
    text-align: center;
  }
  
  .footer-contact ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-contact li {
    justify-content: center;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  .footer-contact .material-symbols-outlined {
    font-size: 1.1rem;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    padding: 1.25rem 0;
  }
  
  .footer-bottom .container {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
  
  .footer-bottom p {
    font-size: 0.8rem;
  }

  .footer-legal {
    gap: 1.5rem;
    justify-content: center;
  }
  
  .footer-legal a {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding-top: 2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .footer-grid {
    gap: 1.75rem;
  }
  
  .footer-logo img {
    height: 32px;
  }
  
  .footer-description {
    font-size: 0.8rem;
  }
  
  .social-link {
    width: 38px;
    height: 38px;
  }
  
  .social-link svg {
    width: 16px;
    height: 16px;
  }
  
  .footer-links h4,
  .footer-contact h4 {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
  
  .footer-links a {
    font-size: 0.85rem;
  }
  
  .footer-contact li {
    font-size: 0.85rem;
  }
  
  .footer-bottom {
    margin-top: 1.5rem;
    padding: 1rem 0;
  }
  
  .footer-bottom p {
    font-size: 0.75rem;
  }

  .footer-legal {
    gap: 1rem;
  }
  
  .footer-legal a {
    font-size: 0.75rem;
  }
}
</style>
