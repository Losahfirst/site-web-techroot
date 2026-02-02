<template>
  <div class="pole-page">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section class="hero-v2 internal-hero">
      <div class="hero-bg-shapes">
        <div class="hero-grid-pattern"></div>
        <div class="africa-silhouette-v2"></div>
        <div class="orange-dot-focus"></div>
        <div class="dot-green"></div>
        <div class="dot-blue"></div>
      </div>
      
      <div class="container hero-container">
        <div class="hero-content-v2">
          <div class="internal-badge">PÔLE SOFTWARE</div>
          <h1>
            Développement <br/>
            & <span class="highlight">solutions intelligentes</span>
          </h1>
          <p class="hero-lead">
            Applications sur-mesure, plateformes cloud et solutions digitales innovantes conçues pour la performance et l'évolutivité.
          </p>
          <div class="hero-actions-v2">
            <a href="#services" class="btn-primary-v2">
              Nos Expertise
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>

        <div class="hero-image-v2">
          <div class="image-continuous image-software"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Nos Services</span>
          <h2>Solutions <span class="gradient-text">Logicielles</span> Complètes</h2>
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
                <span class="material-symbols-outlined">check_circle</span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Technologies</span>
          <h2>Notre Stack <span class="gradient-text">Technique</span></h2>
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
    <section class="process-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Notre Méthode</span>
          <h2>Processus de <span class="gradient-text">Développement</span></h2>
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Technology" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à <span class="gradient-text">Développer</span> Votre Solution ?</h2>
          <p>Discutons de votre projet et créons ensemble la solution parfaite.</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">arrow_forward</span>
            Démarrer un Projet
          </router-link>
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
/* New Hero Styles (Shared) */
.hero-v2 {
  position: relative;
  min-height: 80vh;
  background-color: #f0f7f4;
  padding-top: 120px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.internal-hero {
  min-height: 70vh;
  padding-bottom: 60px;
}

.hero-bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#064e3b 1.5px, transparent 1.5px);
  background-size: 60px 60px;
  opacity: 0.05;
}

.africa-silhouette-v2 {
  position: absolute;
  top: 10%;
  left: -5%;
  width: 90%;
  height: 90%;
  background-image: url('https://africadigitalalliance.com/wp-content/uploads/2023/04/Africa-Map-Big@3x.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.05;
  filter: sepia(1) saturate(0.5) brightness(1.2);
  pointer-events: none;
}

.orange-dot-focus {
  position: absolute;
  top: 25%;
  left: 3%;
  width: 20px;
  height: 20px;
  background: #f97316;
  border-radius: 50%;
}

.dot-green, .dot-blue {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-green { top: 30%; right: 40%; background: #10b981; }
.dot-blue { bottom: 35%; left: 45%; background: #0891b2; }

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.internal-badge {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #059669;
  margin-bottom: 1.5rem;
}

.hero-v2 h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  color: #111827;
  margin-bottom: 1.5rem;
}

.serif-text {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-style: italic;
  color: #064e3b;
}

.highlight {
  color: #10b981;
}

.hero-lead {
  font-size: 1.2rem;
  color: #374151;
  line-height: 1.5;
  max-width: 520px;
  margin-bottom: 2.5rem;
}

.hero-image-v2 {
  position: relative;
  height: 500px;
  width: 100%;
}

.image-continuous {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(-25 300 300)'%3E%3Crect x='30' y='50' width='100' height='500' rx='50' fill='black' /%3E%3Crect x='175' y='20' width='100' height='560' rx='50' fill='black' /%3E%3Crect x='320' y='80' width='100' height='520' rx='50' fill='black' /%3E%3Crect x='465' y='180' width='100' height='380' rx='50' fill='black' /%3E%3C/g%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(-25 300 300)'%3E%3Crect x='30' y='50' width='100' height='500' rx='50' fill='black' /%3E%3Crect x='175' y='20' width='100' height='560' rx='50' fill='black' /%3E%3Crect x='320' y='80' width='100' height='520' rx='50' fill='black' /%3E%3Crect x='465' y='180' width='100' height='380' rx='50' fill='black' /%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-size: contain;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.image-software {
  background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&q=80');
}

.btn-primary-v2 {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: #111827;
  color: white;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
}

.btn-primary-v2:hover {
  background: #059669;
  transform: translateY(-3px);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-lead { margin-inline: auto; }
  .hero-actions-v2 { justify-content: center; }
  .hero-image-v2 { height: 400px; }
}

@media (max-width: 768px) {
  .hero-v2 { padding-top: 100px; }
  .hero-image-v2 { height: 320px; }
}

/* Common */
section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

.section-header {
  margin-bottom: 3rem;
}

.section-header.center {
  text-align: center;
}

.section-header h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
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
.services-section {
  background: #f8fafc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
  transform: translateY(-8px);
  border-color: #0d9668;
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

.service-card > p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.service-features .material-symbols-outlined {
  font-size: 1rem;
  color: #22c55e;
}

/* Tech Section */
.tech-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.tech-category h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #0d9668;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.tech-item:hover {
  border-color: #0d9668;
  transform: translateX(5px);
}

.tech-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(1.1);
}

.tech-name {
  color: #1e293b;
  font-size: 0.9375rem;
  font-weight: 500;
}

/* Process Section */
.process-section {
  background: #ffffff;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.process-card {
  padding: 2rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.process-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
}

.process-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: #0d9668;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.process-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.process-card p {
  color: #64748b;
  line-height: 1.6;
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
  font-size: clamp(2rem, 4vw, 2.5rem);
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
}

.btn-primary {
  background: #f8fafc;
  color: #0d9668;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Responsive */
@media (max-width: 1024px) {
  section {
    padding: 4rem 0;
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  section {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .page-hero {
    min-height: 50vh;
  }
  
  .hero-content {
    padding: 1.5rem;
  }
  
  .hero-content h1 {
    font-size: 1.75rem;
  }
  
  .hero-content > p {
    font-size: 1rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-icon {
    width: 50px;
    height: 50px;
  }
  
  .service-card h3 {
    font-size: 1.125rem;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .tech-category h3 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  
  .tech-item {
    padding: 0.625rem 0.875rem;
  }
  
  .tech-logo {
    width: 32px;
    height: 32px;
  }
  
  .tech-name {
    font-size: 0.875rem;
  }
  
  .process-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .process-card {
    padding: 1.5rem;
  }
  
  .process-number {
    font-size: 2rem;
  }
  
  .process-card h3 {
    font-size: 1.125rem;
  }
  
  .cta-content h2 {
    font-size: 1.5rem;
  }
  
  .cta-content p {
    font-size: 1rem;
  }
  
  .btn-large {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .page-hero {
    min-height: 40vh;
  }
  
  .hero-content h1 {
    font-size: 1.5rem;
  }
  
  .hero-badge {
    font-size: 0.75rem;
    padding: 0.4rem 1rem;
  }
}
</style>
