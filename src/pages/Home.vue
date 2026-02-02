<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&q=70&auto=format" alt="Transformation digitale en Afrique" loading="eager" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          Groupe Technologique Africain de Référence
        </div>
        <h1>Solutions <span class="gradient-text">Technologiques</span> <br class="mobile-break"/><span class="hero-line2">Innovantes pour l'Afrique</span></h1>
        <p class="hero-subtitle">
          TechRoot conçoit des solutions Hardware, Software, IoT et Drones adaptées aux réalités africaines. 
          Nous transformons les défis locaux en opportunités d'innovation.
        </p>
        <div class="hero-actions">
          <router-link to="/contact" class="btn btn-primary">
            Démarrer un Projet
          </router-link>
          <router-link to="/projets" class="btn btn-outline">
            Nos Réalisations
          </router-link>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">5</span>
            <span class="stat-label">Pôles d'Expertise</span>
          </div>
          <div class="stat">
            <span class="stat-number">12+</span>
            <span class="stat-label">Projets en Cours</span>
          </div>
          <div class="stat">
            <span class="stat-number">6</span>
            <span class="stat-label">Partenaires Clés</span>
          </div>
          <div class="stat">
            <span class="stat-number">3</span>
            <span class="stat-label">Pays d'Impact</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <span class="material-symbols-outlined">expand_more</span>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Nos Expertises</span>
          <h2>Des Solutions <span class="gradient-text">Complètes</span> pour Votre Transformation</h2>
          <p>Une gamme complète de services technologiques pour propulser votre entreprise vers l'excellence digitale.</p>
        </div>
        <div class="services-grid">
          <div class="service-card" :class="{ 'hide-mobile': service.hideOnMobile }" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <router-link :to="service.link" class="service-link">
              En savoir plus
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-images">
            <div class="img-main">
              <img src="https://africadigitalalliance.com/wp-content/uploads/2023/04/Africa-Map-Big@3x.png" alt="Notre équipe" />
            </div>
          </div>
          <div class="about-content">
            <span class="section-badge">À Propos de Nous</span>
            <h2>Votre Partenaire de <span class="gradient-text">Confiance</span> en Innovation</h2>
            <p class="about-lead">
              TechRoot s'impose comme le leader de la transformation digitale en Côte d'Ivoire, 
              accompagnant les entreprises et institutions dans leur évolution numérique.
            </p>
            <div class="about-features">
              <div class="feature">
                <span class="material-symbols-outlined">verified</span>
                <div>
                  <h4>Expertise Reconnue</h4>
                  <p>Une équipe de professionnels certifiés et passionnés</p>
                </div>
              </div>
              <div class="feature">
                <span class="material-symbols-outlined">handshake</span>
                <div>
                  <h4>Accompagnement Sur-Mesure</h4>
                  <p>Des solutions adaptées à vos besoins spécifiques</p>
                </div>
              </div>
              <div class="feature">
                <span class="material-symbols-outlined">trending_up</span>
                <div>
                  <h4>Résultats Mesurables</h4>
                  <p>Un impact concret sur votre performance</p>
                </div>
              </div>
            </div>
            <router-link to="/a-propos" class="btn btn-primary">
              Découvrir Notre Histoire
              <span class="material-symbols-outlined">arrow_forward</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Pôles Section -->
    <section class="poles-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Nos Pôles d'Excellence</span>
          <h2>Une Organisation <span class="gradient-text">Multi-Expertise</span></h2>
          <p>Cinq pôles spécialisés pour répondre à tous vos besoins technologiques.</p>
        </div>
        <div class="poles-grid">
          <router-link v-for="(pole, index) in poles" :key="index" :to="pole.link" class="pole-card" :style="{ '--delay': index * 0.1 + 's' }">
            <div class="pole-image">
              <img :src="pole.image" :alt="pole.title" />
              <div class="pole-overlay"></div>
            </div>
            <div class="pole-content">
              <h3>{{ pole.title }}</h3>
              <p>{{ pole.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Réalisations</span>
          <h2>Nos Projets <span class="gradient-text">Phares</span></h2>
          <p>Découvrez quelques-unes de nos réalisations qui ont transformé nos clients.</p>
        </div>
        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index" @click="openProjectModal(project)">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <span class="project-category">{{ project.category }}</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="projects-cta">
          <router-link to="/projets" class="btn btn-primary">
            Voir Tous Nos Projets
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="partners-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Ils Nous Font Confiance</span>
          <h2>Nos <span class="gradient-text">Partenaires & Clients</span></h2>
        </div>
        <div class="partners-slider">
          <div class="partners-track">
            <div class="partner" v-for="partner in partners" :key="partner.id">
              <img :src="partner.logo" :alt="partner.name" />
            </div>
            <!-- Dupliquer pour l'animation infinie -->
            <div class="partner" v-for="partner in partners" :key="'dup-' + partner.id">
              <img :src="partner.logo" :alt="partner.name" />
            </div>
          </div>
        </div>
        <!-- Version mobile scrollable -->
        <div class="partners-mobile">
          <div class="partner" v-for="partner in partners" :key="'mobile-' + partner.id">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Technology" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à <span class="gradient-text">Transformer</span> Votre Entreprise ?</h2>
          <p>Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous accompagner.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary btn-large">
              <span class="material-symbols-outlined">mail</span>
              Contactez-Nous
            </router-link>
            <a href="tel:+2250787180456" class="btn btn-secondary btn-large">
              <span class="material-symbols-outlined">call</span>
              +225 07 87 18 04 56
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Teleport to="body">
      <div class="modal-overlay" v-if="selectedProject" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">
            <span class="material-symbols-outlined">close</span>
          </button>
          <div class="modal-image">
            <img :src="selectedProject.image" :alt="selectedProject.title" />
            <span class="modal-category">{{ selectedProject.category }}</span>
          </div>
          <div class="modal-body">
            <h2>{{ selectedProject.title }}</h2>
            <p class="modal-description">{{ selectedProject.description }}</p>
            <div class="modal-details" v-if="selectedProject.details">
              <h4>Détails du projet</h4>
              <p>{{ selectedProject.details }}</p>
            </div>
            <div class="modal-info">
              <div class="info-item" v-if="selectedProject.client">
                <span class="material-symbols-outlined">business</span>
                <div>
                  <strong>Client</strong>
                  <p>{{ selectedProject.client }}</p>
                </div>
              </div>
              <div class="info-item" v-if="selectedProject.duration">
                <span class="material-symbols-outlined">schedule</span>
                <div>
                  <strong>Durée</strong>
                  <p>{{ selectedProject.duration }}</p>
                </div>
              </div>
              <div class="info-item" v-if="selectedProject.year">
                <span class="material-symbols-outlined">calendar_month</span>
                <div>
                  <strong>Année</strong>
                  <p>{{ selectedProject.year }}</p>
                </div>
              </div>
            </div>
            <div class="modal-tags">
              <h4>Technologies utilisées</h4>
              <div class="tags-list">
                <span v-for="tag in selectedProject.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const partners = ref([
  { id: 1, name: 'Partenaire 1', logo: '/images/partners/1.png' },
  { id: 2, name: 'Partenaire 2', logo: '/images/partners/2.png' },
  { id: 3, name: 'Partenaire 3', logo: '/images/partners/3.png' },
  { id: 4, name: 'Partenaire 4', logo: '/images/partners/4.png' },
  { id: 5, name: 'Partenaire 5', logo: '/images/partners/5.png' },
  { id: 6, name: 'Partenaire 6', logo: '/images/partners/6.png' },
  { id: 7, name: 'Partenaire 7', logo: '/images/partners/7.png' }
])

const services = ref([
  {
    icon: 'code',
    title: 'Développement Web & Mobile',
    description: 'Applications sur-mesure, sites web modernes et solutions mobiles natives ou hybrides.',
    link: '/poles/software'
  },
  {
    icon: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Migration cloud, hébergement sécurisé et gestion d\'infrastructure IT.',
    link: '/poles/software'
  },
  {
    icon: 'smart_toy',
    title: 'Intelligence Artificielle',
    description: 'Solutions IA, machine learning et automatisation des processus métier.',
    link: '/poles/recherche'
  },
  {
    icon: 'security',
    title: 'Cybersécurité',
    description: 'Audit de sécurité, protection des données et conformité RGPD.',
    link: '/poles/software',
    hideOnMobile: true
  },
  {
    icon: 'flight_takeoff',
    title: 'Solutions Drones',
    description: 'Cartographie aérienne, surveillance et inspection industrielle par drones.',
    link: '/poles/drones'
  },
  {
    icon: 'school',
    title: 'Formation & Conseil',
    description: 'Programmes de formation et accompagnement stratégique en transformation digitale.',
    link: '/a-propos',
    hideOnMobile: true
  }
])

const poles = ref([
  {
    icon: 'developer_board',
    title: 'Pôle Hardware',
    description: 'Conception électronique, IoT et systèmes embarqués',
    image: 'https://afriqueitnews.com/wp-content/uploads/telecommunications-1024x683.jpg',
    link: '/poles/hardware'
  },
  {
    icon: 'terminal',
    title: 'Pôle Software',
    description: 'Développement et solutions logicielles',
    image: 'https://localhost-digital.com/wp-content/uploads/2020/11/hike-hardware-1.png',
    link: '/poles/software'
  },
  {
    icon: 'flight',
    title: 'Pôle Drones',
    description: 'Solutions aériennes et cartographie',
    image: 'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1280,height=720,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2021/01/05/jad20210105-eco-securite-drone.jpg',
    link: '/poles/drones'
  },
  {
    icon: 'celebration',
    title: 'Pôle Events',
    description: 'Événementiel tech et digital',
    image: 'https://theacbf.org/wp-content/uploads/2025/07/events.jpg',
    link: '/poles/events'
  },
  {
    icon: 'biotech',
    title: 'Pôle Recherche',
    description: 'R&D et innovation technologique',
    image: 'https://sgciafrica.org/wp-content/uploads/2024/04/scientist-in-lab.jpg',
    link: '/poles/recherche'
  }
])

const projects = ref([
  {
    title: 'Plateforme E-Commerce Multi-vendeurs',
    description: 'Développement d\'une marketplace complète avec gestion des vendeurs, paiements intégrés et logistique.',
    details: 'Cette plateforme permet à des centaines de vendeurs de gérer leurs boutiques en ligne de manière autonome. Elle intègre un système de paiement sécurisé, une gestion automatisée des stocks, et un module de livraison connecté aux principaux transporteurs locaux.',
    category: 'E-Commerce',
    image: 'https://forbesafrique.com/wp-content/uploads/2024/03/E-Commerce-%C2%A9William-Potter_Shutterstock-Forbes-Afrique-Site-Web.jpg',
    tags: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
    client: 'Grand Distributeur CI',
    duration: '8 mois',
    year: '2024'
  },
  {
    title: 'Application Mobile Bancaire',
    description: 'Solution mobile banking sécurisée avec authentification biométrique et transactions en temps réel.',
    details: 'Application mobile complète permettant aux clients d\'effectuer toutes leurs opérations bancaires depuis leur smartphone. Inclut l\'authentification biométrique, les virements instantanés, la gestion des cartes virtuelles et un système de notifications en temps réel.',
    category: 'Fintech',
    image: 'https://www.shutterstock.com/image-photo/lugbe-abujanigeria-april-22nd-2024-600nw-2462296697.jpg',
    tags: ['React Native', 'API REST', 'Sécurité', 'Firebase', 'Biométrie'],
    client: 'Banque Régionale',
    duration: '12 mois',
    year: '2023'
  },
  {
    title: 'Système de Gestion Hospitalière',
    description: 'Digitalisation complète d\'un centre hospitalier avec gestion des patients et télémédecine.',
    details: 'Solution intégrée de gestion hospitalière couvrant l\'ensemble du parcours patient : prise de rendez-vous en ligne, dossiers médicaux électroniques, module de télémédecine, gestion des stocks pharmaceutiques et facturation automatisée.',
    category: 'Santé',
    image: 'https://www.wearetech.africa/media/k2/items/cache/6ee02b14a3c53cc476fcf7c4ed73b5d0_XL.jpg',
    tags: ['Angular', 'Python', 'IA', 'PostgreSQL', 'WebRTC'],
    client: 'Centre Hospitalier d\'Abidjan',
    duration: '18 mois',
    year: '2024'
  }
])

// Modal state
const selectedProject = ref(null)

const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(5, 30, 25, 0.97) 0%, rgba(8, 20, 35, 0.95) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  padding: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(13, 150, 104, 0.15);
  border: 1px solid rgba(13, 150, 104, 0.25);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #a7f3d0;
  margin-bottom: 1.5rem;
}

.hero-badge .material-symbols-outlined {
  font-size: 1.125rem;
}

.hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
}

.hero h1 .mobile-break {
  display: none;
}

.gradient-text {
  background: linear-gradient(135deg, #0d9668, #0891b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #0d9668;
  color: white;
  box-shadow: 0 2px 8px rgba(13, 150, 104, 0.25);
}

.btn-primary:hover {
  background: #0b8459;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(13, 150, 104, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: #e2e8f0;
  border: 1px solid rgba(13, 150, 104, 0.6);
}

.btn-outline:hover {
  background: rgba(13, 150, 104, 0.15);
  border-color: #0d9668;
  transform: translateY(-1px);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.hero-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.hero-scroll .material-symbols-outlined {
  font-size: 2rem;
  color: #10b981;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

/* Sections Common */
section {
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  margin-bottom: 4rem;
}

.section-header.center {
  text-align: center;
}

.section-badge {
  display: inline-block;
  background: rgba(13, 150, 104, 0.1);
  color: #0d9668;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
}

.section-header.center p {
  margin: 0 auto;
}

/* Services Section */
.services {
  background-color: #f8fafc;
  background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
  background-size: 24px 24px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.service-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: #0d9668;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.service-icon .material-symbols-outlined {
  font-size: 1.75rem;
  color: white;
}

.service-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.service-card p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #0d9668;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.service-link:hover {
  gap: 0.75rem;
  color: #047857;
}

/* About Section */
.about-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-images {
  position: relative;
}

.img-main {
  overflow: hidden;
}

.img-main img {
  width: 100%;
  height: 400px;
  object-fit: contain;
}

.img-secondary {
  position: absolute;
  bottom: -40px;
  right: -40px;
  width: 200px;
  border-radius: 16px;
  overflow: hidden;
  border: 4px solid #0f0f25;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.img-secondary img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.experience-badge {
  position: absolute;
  top: -20px;
  left: -20px;
  background: #0d9668;
  padding: 1.25rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.exp-number {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: white;
}

.exp-text {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
}

.about-content .section-badge {
  display: inline-block;
}

.about-lead {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature .material-symbols-outlined {
  font-size: 1.5rem;
  color: #10b981;
  background: rgba(16, 185, 129, 0.15);
  padding: 0.75rem;
  border-radius: 12px;
}

.feature h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.feature p {
  font-size: 0.875rem;
  color: #64748b;
}

/* Poles Section */
.poles-section {
  background-color: #f8fafc;
  background-image: 
    linear-gradient(rgba(13, 150, 104, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(13, 150, 104, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  position: relative;
}

.poles-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://media.istockphoto.com/id/1161828321/vector/blue-world-map-on-white-background.jpg?s=612x612&w=0&k=20&c=5j5GP-EgA_dRfvPrHvfAuWSsrg0bMyptZvNiA25xKls=');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
  pointer-events: none;
}

.poles-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
}

.poles-grid .pole-card {
  grid-column: span 2;
}

.poles-grid .pole-card:nth-child(4) {
  grid-column: 2 / span 2;
}

.poles-grid .pole-card:nth-child(5) {
  grid-column: 4 / span 2;
}

.pole-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  aspect-ratio: 1;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pole-image {
  position: absolute;
  inset: 0;
}

.pole-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.pole-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 30, 0.9) 100%);
}

.pole-card:hover .pole-image img {
  transform: scale(1.1);
}

.pole-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  z-index: 1;
}

.pole-content .material-symbols-outlined {
  font-size: 2rem;
  color: #10b981;
  margin-bottom: 0.75rem;
}

.pole-content h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.pole-content p {
  font-size: 0.875rem;
  color: #94a3b8;
}

/* Projects Section */
.projects-section {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(10, 10, 30, 0.8) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.project-category {
  background: #0d9668;
  padding: 0.375rem 0.875rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.project-content p {
  color: #64748b;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tags span {
  background: rgba(13, 150, 104, 0.12);
  color: #047857;
  border: 1px solid rgba(13, 150, 104, 0.35);
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.project-tags span:hover {
  background: rgba(13, 150, 104, 0.2);
  border-color: #0d9668;
}

.projects-cta {
  text-align: center;
}

/* Partners Section */
.partners-section {
  background: #ffffff;
  overflow: hidden;
  padding: 5rem 0;
}

.partners-slider {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
}

.partners-mobile {
  display: none;
}

.partners-track {
  display: flex;
  align-items: center;
  gap: 3rem;
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.partner {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  transition: all 0.3s ease;
  min-width: 180px;
  min-height: 100px;
}

.partner:hover {
  background: #ffffff;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.partner img {
  height: 100px;
  width: auto;
  max-width: 220px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner:hover img {
  opacity: 1;
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: 8rem 0;
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
}

.cta-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.9) 0%, rgba(6, 182, 212, 0.85) 100%);
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.cta-content .gradient-text {
  background: linear-gradient(135deg, #ffffff, #d1fae5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-primary {
  background: #f8fafc;
  color: #0d9668;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.cta-section .btn-primary:hover {
  background: #f1f5f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cta-section .btn-secondary {
  border-color: rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 1024px) {
  section {
    padding: 4rem 0;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .img-secondary {
    right: 20px;
    bottom: -20px;
  }
}

@media (max-width: 768px) {
  section {
    padding: 2.5rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero {
    min-height: auto;
    padding-top: 80px;
    padding-bottom: 2rem;
  }
  
  .hero-content {
    padding: 1rem;
  }
  
  .hero-content h1 {
    font-size: 1.4rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  .hero-content h1 .mobile-break {
    display: block;
  }
  
  .hero-subtitle {
    display: block;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    opacity: 0.85;
  }
  
  .hero-badge {
    display: none;
  }
  
  .hero-actions {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    flex-direction: row !important;
    justify-content: center;
    flex-wrap: nowrap;
  }
  
  .hero-actions .btn {
    padding: 0.5rem 1rem !important;
    font-size: 0.75rem !important;
    width: auto !important;
    min-width: auto !important;
    max-width: 140px;
    flex: 0 0 auto;
  }
  
  .hero-stats {
    display: none;
  }
  
  .hero-scroll {
    display: none;
  }
  
  .hide-mobile {
    display: none !important;
  }
  
  .section-badge,
  .hero-badge {
    display: none !important;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.35rem;
  }
  
  .section-header p {
    font-size: 0.9rem;
  }
  
  .section-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.75rem;
  }
  
  .services-grid,
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .service-card,
  .project-card {
    padding: 1.25rem;
  }
  
  .service-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  
  .service-icon .material-symbols-outlined {
    font-size: 1.5rem;
  }
  
  .service-card h3 {
    font-size: 1.1rem;
  }
  
  .service-card p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }
  
  .poles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  
  .pole-card {
    min-height: 160px;
    border-radius: 12px;
  }
  
  .pole-content {
    padding: 0.75rem;
  }
  
  .pole-content h3 {
    font-size: 0.85rem;
  }
  
  .pole-content p {
    font-size: 0.65rem;
    display: none;
  }
  
  .img-secondary,
  .experience-badge {
    display: none;
  }
  
  .about-content {
    padding: 0;
  }
  
  .about-lead {
    font-size: 0.95rem;
  }
  
  .about-features {
    gap: 0.75rem;
  }
  
  .feature {
    flex-direction: row;
    text-align: left;
    gap: 0.75rem;
    padding: 0.75rem;
    background: #f8fafc;
    border-radius: 10px;
  }
  
  .feature .material-symbols-outlined {
    font-size: 1.25rem;
    min-width: 32px;
  }
  
  .feature h4 {
    font-size: 0.9rem;
  }
  
  .feature p {
    font-size: 0.75rem;
  }
  
  .cta-content h2 {
    font-size: 1.35rem;
  }
  
  .cta-content p {
    font-size: 0.9rem;
  }
  
  .img-main img {
    height: 250px;
  }
  
  /* Partners mobile - scrollable */
  .partners-slider {
    display: none;
  }
  
  .partners-mobile {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0;
    scrollbar-width: none;
  }
  
  .partners-mobile::-webkit-scrollbar {
    display: none;
  }
  
  .partners-mobile .partner {
    flex-shrink: 0;
    scroll-snap-align: center;
    min-width: 140px;
    padding: 1rem;
  }
  
  .partners-mobile .partner img {
    height: 60px;
    max-width: 120px;
  }
}

@media (max-width: 480px) {
  section {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 0.75rem;
  }
  
  .hero {
    min-height: auto;
    padding-top: 70px;
    padding-bottom: 1.5rem;
  }
  
  .hero-content {
    padding: 0.75rem;
  }
  
  .hero-content h1 {
    font-size: 1.25rem;
    line-height: 1.25;
  }
  
  .hero-badge {
    font-size: 0.6rem;
    padding: 0.3rem 0.6rem;
  }
  
  .hero-subtitle {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 0.5rem;
  }
  
  .hero-actions .btn {
    width: 100%;
    justify-content: center;
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
  
  .hero-stats {
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
  
  .stat {
    flex: 1 1 45%;
    padding: 0.35rem;
  }
  
  .stat-number {
    font-size: 1.25rem;
  }
  
  .stat-label {
    font-size: 0.55rem;
    line-height: 1.2;
  }
  
  .section-header {
    margin-bottom: 1.5rem;
  }
  
  .section-header h2 {
    font-size: 1.2rem;
  }
  
  .section-header p {
    font-size: 0.8rem;
  }
  
  .section-badge {
    font-size: 0.65rem;
    padding: 0.35rem 0.65rem;
  }
  
  .service-card {
    padding: 1rem;
  }
  
  .service-icon {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    margin-bottom: 0.75rem;
  }
  
  .service-icon .material-symbols-outlined {
    font-size: 1.25rem;
  }
  
  .service-card h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .service-card p {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }
  
  .service-link {
    font-size: 0.8rem;
  }
  
  .poles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .pole-card {
    min-height: 130px;
    border-radius: 10px;
  }
  
  .pole-content {
    padding: 0.5rem;
  }
  
  .pole-content h3 {
    font-size: 0.75rem;
  }
  
  .cta-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
  
  .btn-large {
    padding: 0.75rem 1.25rem;
    font-size: 0.85rem;
  }
  
  .about-lead {
    font-size: 0.85rem;
  }
  
  .feature {
    padding: 0.6rem;
  }
  
  .feature .material-symbols-outlined {
    font-size: 1.1rem;
    min-width: 28px;
  }
  
  .feature h4 {
    font-size: 0.8rem;
  }
  
  .feature p {
    font-size: 0.7rem;
  }
  
  .img-main img {
    height: 200px;
  }
}

/* Project Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  color: #1e293b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-close:hover {
  background: #ffffff;
}

.modal-image {
  position: relative;
  height: 280px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-category {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: #0d9668;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.modal-body {
  padding: 2rem;
}

.modal-body h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.modal-description {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.modal-details {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
}

.modal-details h4 {
  color: #0d9668;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.modal-details p {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
}

.modal-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.info-item .material-symbols-outlined {
  color: #0d9668;
  font-size: 1.25rem;
  margin-top: 2px;
}

.info-item strong {
  display: block;
  color: #64748b;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-item p {
  color: #1e293b;
  font-size: 0.95rem;
  margin: 0;
}

.modal-tags h4 {
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tags-list span {
  background: rgba(13, 150, 104, 0.1);
  border: 1px solid rgba(13, 150, 104, 0.3);
  color: #047857;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-card {
  cursor: pointer;
}

@media (max-width: 600px) {
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-image {
    height: 200px;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-info {
    grid-template-columns: 1fr;
  }
}
</style>
