<template>
  <div class="pole-page-modern">
    <!-- Minimalist Split Hero Section -->
    <section class="hero-modern-split">
      <div class="container hero-split-container">
        <div class="hero-content">
          <div class="hero-badge">PÔLE SOFTWARE</div>
          <h1>Développement & <br/> <span class="primary-text">solutions intelligentes</span></h1>
          <p class="hero-lead">
            Applications sur-mesure, plateformes cloud et solutions digitales innovantes conçues pour la performance et l'évolutivité.
          </p>
          <a href="#services" class="cta-modern">
            Découvrir nos services
            <span class="material-symbols-outlined">arrow_downward</span>
          </a>
        </div>
        <div class="hero-image-right">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" alt="Software Development" />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-modern">
      <div class="container">
        <div class="section-header">
          <h2>Solutions Logicielles <span class="primary-text">Complètes</span></h2>
          <p>De la conception à la maintenance, nous développons des solutions adaptées à vos besoins.</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                <span class="material-symbols-outlined">check</span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-modern">
      <div class="container">
        <div class="section-header center">
          <h2>Notre Stack <span class="primary-text">Technique</span></h2>
          <p>Les technologies les plus modernes pour des solutions performantes.</p>
        </div>
        <div class="tech-grid">
          <div class="tech-category" v-for="(category, index) in techStack" :key="index">
            <h3>{{ category.name }}</h3>
            <div class="tech-items">
              <div class="tech-item" v-for="tech in category.items" :key="tech.name">
                <img :src="tech.logo" :alt="tech.name" class="tech-logo" />
                <span class="tech-name">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-modern">
      <div class="container">
        <div class="section-header center">
          <h2>Processus de <span class="primary-text">Développement</span></h2>
        </div>
        <div class="process-grid">
          <div class="process-card" v-for="(step, index) in process" :key="index">
            <div class="process-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    icon: 'web',
    title: 'Développement Web',
    description: 'Sites web modernes, applications web progressives et portails d\'entreprise.',
    features: ['Sites vitrines & institutionnels', 'Applications web (SPA/PWA)', 'Portails & Intranets']
  },
  {
    icon: 'smartphone',
    title: 'Applications Mobiles',
    description: 'Applications natives et hybrides pour iOS et Android.',
    features: ['Apps natives iOS/Android', 'Applications hybrides', 'Applications métier']
  },
  {
    icon: 'shopping_cart',
    title: 'E-Commerce',
    description: 'Solutions de commerce en ligne complètes et performantes.',
    features: ['Boutiques en ligne', 'Marketplaces', 'Paiements intégrés']
  },
  {
    icon: 'api',
    title: 'API & Backend',
    description: 'Services backend robustes et APIs sécurisées.',
    features: ['APIs RESTful & GraphQL', 'Microservices', 'Intégrations tierces']
  }
])

const techStack = ref([
  {
    name: 'Frontend',
    items: [
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ]
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
    ]
  },
  {
    name: 'Mobile',
    items: [
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    items: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
    ]
  }
])

const process = ref([
  { title: 'Découverte', description: 'Analyse de vos besoins et définition des objectifs du projet.' },
  { title: 'Conception', description: 'Design UX/UI et architecture technique de la solution.' },
  { title: 'Développement', description: 'Développement agile avec des sprints et des livraisons régulières.' },
  { title: 'Tests', description: 'Tests approfondis pour garantir qualité et performance.' },
  { title: 'Déploiement', description: 'Mise en production et accompagnement au lancement.' },
  { title: 'Support', description: 'Maintenance évolutive et support technique continu.' }
])
</script>

<style scoped>
/* Hero Section Split Layout */
.hero-modern-split {
  position: relative;
  min-height: 70vh;
  background-color: var(--waymo-dark);
  padding-top: 100px;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;
}

.hero-split-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.hero-image-right {
  position: relative;
  height: 500px;
  width: 100%;
}

.hero-image-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(-25 300 300)'%3E%3Crect x='30' y='50' width='100' height='500' rx='50' fill='black' /%3E%3Crect x='175' y='20' width='100' height='560' rx='50' fill='black' /%3E%3Crect x='320' y='80' width='100' height='520' rx='50' fill='black' /%3E%3Crect x='465' y='180' width='100' height='380' rx='50' fill='black' /%3E%3C/g%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(-25 300 300)'%3E%3Crect x='30' y='50' width='100' height='500' rx='50' fill='black' /%3E%3Crect x='175' y='20' width='100' height='560' rx='50' fill='black' /%3E%3Crect x='320' y='80' width='100' height='520' rx='50' fill='black' /%3E%3Crect x='465' y='180' width='100' height='380' rx='50' fill='black' /%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-size: contain;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

@media (max-width: 1024px) {
  .hero-split-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-image-right {
    height: 350px;
    order: -1;
  }
  .hero-lead {
    margin-left: auto;
    margin-right: auto;
  }
}


.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.hero-content h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.primary-text {
  color: var(--waymo-blue);
}

.hero-lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-modern {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--waymo-blue);
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta-modern:hover {
  background: #0a7350;
}

/* Sections Common */
section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  margin-bottom: 3rem;
  max-width: 700px;
}

.section-header.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--waymo-text-dark);
  margin-bottom: 1rem;
}

.section-header p {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Services Grid */
.services-modern {
  background: var(--waymo-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: rgba(13, 150, 104, 0.1);
  color: var(--waymo-blue);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--waymo-text-dark);
}

.service-card p {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.service-features .material-symbols-outlined {
  font-size: 16px;
  color: var(--waymo-blue);
}

/* Tech Section */
.tech-modern {
  background: white;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.tech-category h3 {
  font-family: var(--font-heading);
  color: var(--waymo-text-dark);
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 1.5rem;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.tech-item:hover {
  background: #e2e8f0;
}

.tech-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.tech-name {
  font-weight: 500;
  color: #334155;
}

/* Process Section */
.process-modern {
  background: var(--waymo-light);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.process-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f5f9;
}

.process-number {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 800;
  color: #f1f5f9;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 0;
}

.process-card h3, .process-card p {
  position: relative;
  z-index: 1;
}

.process-card h3 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: var(--waymo-text-dark);
}

.process-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Mobile Adjustments */
@media (max-width: 768px) {
  .hero-modern {
    padding-top: 80px;
  }
  .hero-content h1 {
    font-size: 2.2rem;
  }
  .section-header h2 {
    font-size: 2rem;
  }
}

/* Additional Grids and Cards Fixes */
.sectors-grid, .showcase-grid, .process-timeline, .tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.sector-card, .showcase-card, .process-step, .tool-card, .feature-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease;
}

.sector-card:hover, .process-step:hover, .feature-item:hover {
  transform: translateY(-5px);
}

.sector-card .material-symbols-outlined, .feature-icon .material-symbols-outlined {
  font-size: 2.5rem;
  color: var(--waymo-blue);
  margin-bottom: 1rem;
}

.sector-card h3, .process-step h4, .feature-text h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--waymo-text-dark);
}

.sector-card p, .process-step p, .feature-text p {
  color: #64748b;
  line-height: 1.6;
}

.showcase-images img, .features-image img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.stats-row {
  display: flex; gap: 2rem; margin-top: 2rem;
}
.stat-item {
  display: flex; flex-direction: column;
}
.stat-number { font-size: 2rem; font-weight: bold; color: var(--waymo-blue); }
.stat-label { color: #64748b; }
.step-number { font-size: 3rem; font-weight: bold; color: var(--waymo-blue); opacity: 0.2; margin-bottom: -1rem; }

.internal-badge, .hero-badge { color: #10b981 !important; background: rgba(16, 185, 129, 0.15) !important; border: 1px solid rgba(16, 185, 129, 0.3) !important; }
</style>
