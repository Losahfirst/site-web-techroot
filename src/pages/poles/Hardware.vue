<template>
  <div class="pole-page hardware-page">
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
          <div class="internal-badge">PÔLE HARDWARE</div>
          <h1>
            Systèmes <span class="serif-text">physiques</span> <br/>
            & <span class="highlight">électromécaniques</span>
          </h1>
          <p class="hero-lead">
            Conception, fabrication et assemblage de solutions matérielles robustes adaptées aux contraintes environnementales africaines.
          </p>
          <div class="hero-actions-v2">
            <a href="#services" class="btn-primary-v2">
              Nos Expertise
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>

        <div class="hero-image-v2">
          <div class="image-continuous image-hardware"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Nos Domaines</span>
          <h2>Expertise <span class="gradient-text">Matérielle</span> Complète</h2>
          <p>Tout le cycle de vie d'une solution matérielle : conception, fabrication, assemblage, installation et maintenance.</p>
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

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Notre Processus</span>
          <h2>Du Concept au <span class="gradient-text">Produit Fini</span></h2>
        </div>
        <div class="process-timeline">
          <div class="process-step" v-for="(step, index) in processSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="container">
        <div class="features-grid">
          <div class="features-content">
            <span class="section-badge">Notre Valeur Ajoutée</span>
            <h2>Le Socle <span class="gradient-text">Technique</span> de TechRoot</h2>
            <p>Le pôle Hardware est la base sur laquelle reposent les solutions IoT, logicielles et intelligentes du groupe.</p>
            <div class="features-list">
              <div class="feature-item" v-for="(feature, index) in features" :key="index">
                <div class="feature-icon">
                  <span class="material-symbols-outlined">{{ feature.icon }}</span>
                </div>
                <div class="feature-text">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="features-image">
            <img src="https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80" alt="Circuit électronique IoT" />
          </div>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="applications-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Applications</span>
          <h2>Secteurs <span class="gradient-text">d'Application</span></h2>
        </div>
        <div class="applications-grid">
          <div class="application-card" v-for="(app, index) in applications" :key="index" @click="openModal(app)">
            <div class="app-image">
              <img :src="app.image" :alt="app.title" />
            </div>
            <div class="app-content">
              <span class="material-symbols-outlined">{{ app.icon }}</span>
              <h4>{{ app.title }}</h4>
              <p>{{ app.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <Teleport to="body">
      <div class="modal-overlay" v-if="selectedApp" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">
            <span class="material-symbols-outlined">close</span>
          </button>
          <div class="modal-image">
            <img :src="selectedApp.image" :alt="selectedApp.title" />
          </div>
          <div class="modal-body">
            <div class="modal-icon">
              <span class="material-symbols-outlined">{{ selectedApp.icon }}</span>
            </div>
            <h2>{{ selectedApp.title }}</h2>
            <p class="modal-description">{{ selectedApp.description }}</p>
            <div class="modal-details">
              <h3>Nos Solutions</h3>
              <ul>
                <li v-for="(solution, idx) in selectedApp.solutions" :key="idx">
                  <span class="material-symbols-outlined">check_circle</span>
                  {{ solution }}
                </li>
              </ul>
            </div>
            <div class="modal-technologies" v-if="selectedApp.technologies">
              <h3>Technologies Utilisées</h3>
              <div class="tech-tags">
                <span v-for="tech in selectedApp.technologies" :key="tech">{{ tech }}</span>
              </div>
            </div>
            <router-link to="/contact" class="btn btn-primary" @click="closeModal">
              <span class="material-symbols-outlined">arrow_forward</span>
              Discuter de ce Projet
            </router-link>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Technology" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Un Projet <span class="gradient-text">Électronique</span> en Tête ?</h2>
          <p>Discutons de votre idée et transformons-la en solution concrète.</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">arrow_forward</span>
            Parlons de Votre Projet
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
    icon: 'developer_board',
    title: 'Électronique Embarquée',
    description: 'Conception et développement de cartes électroniques et systèmes embarqués sur-mesure.',
    features: ['Design PCB & Schématique', 'Firmware & Logiciel embarqué', 'Prototypage rapide']
  },
  {
    icon: 'precision_manufacturing',
    title: 'Mécatronique',
    description: 'Intégration de mécanique, électronique et informatique pour des systèmes intelligents.',
    features: ['Conception mécanique', 'Actionneurs & capteurs', 'Systèmes de contrôle']
  },
  {
    icon: 'bolt',
    title: 'Électricité & Automatisme',
    description: 'Installation électrique, automatisation et contrôle de processus industriels.',
    features: ['Armoires électriques', 'Automates programmables', 'Supervision SCADA']
  },
  {
    icon: 'smart_toy',
    title: 'Robotique',
    description: 'Conception et intégration de solutions robotiques pour l\'industrie et les services.',
    features: ['Robots industriels', 'Cobots & AGV', 'Programmation robot']
  },
  {
    icon: 'sensors',
    title: 'Systèmes Intelligents & IoT',
    description: 'Objets connectés et systèmes intelligents avec communication sans fil.',
    features: ['LoRa, WiFi, Bluetooth, 4G', 'Capteurs & actionneurs', 'Intégration cloud']
  },
  {
    icon: 'build',
    title: 'Maintenance & Évolution',
    description: 'Support technique, maintenance préventive et évolution de vos systèmes existants.',
    features: ['Diagnostic & réparation', 'Mise à niveau', 'Adaptation de systèmes']
  }
])

const processSteps = ref([
  { title: 'Analyse & Conception', description: 'Étude des besoins et conception de la solution matérielle' },
  { title: 'Prototypage', description: 'Fabrication et validation du prototype fonctionnel' },
  { title: 'Fabrication & Assemblage', description: 'Production et intégration des composants' },
  { title: 'Installation', description: 'Déploiement et mise en service sur site' },
  { title: 'Maintenance & Évolution', description: 'Support continu et améliorations' }
])

const features = ref([
  { icon: 'foundation', title: 'Socle Technique', description: 'Base sur laquelle reposent les solutions IoT et logicielles du groupe' },
  { icon: 'public', title: 'Adapté au Terrain', description: 'Solutions conçues pour les contraintes locales et environnementales' },
  { icon: 'sync', title: 'Cycle Complet', description: 'De la conception à la maintenance, un accompagnement de bout en bout' },
  { icon: 'lightbulb', title: 'Innovation Continue', description: 'Veille technologique et adaptation des systèmes existants' }
])

const applications = ref([
  {
    icon: 'agriculture',
    title: 'AgriTech',
    description: 'Capteurs connectés pour l\'agriculture intelligente : irrigation, météo, surveillance des cultures.',
    image: 'https://www.agroressources.com/wp-content/uploads/20180427_1011560.jpg',
    solutions: [
      'Stations météo connectées avec capteurs de température, humidité et pluviométrie',
      'Systèmes d\'irrigation automatisés basés sur l\'analyse des sols',
      'Surveillance des cultures par capteurs et drones',
      'Suivi du bétail avec colliers GPS et capteurs de santé',
      'Gestion centralisée via dashboards et applications mobiles'
    ],
    technologies: ['LoRa', 'ESP32', 'Capteurs analogiques', 'MQTT', 'Solaire']
  },
  {
    icon: 'factory',
    title: 'Industrie 4.0',
    description: 'Automatisation, monitoring et maintenance prédictive pour l\'industrie.',
    image: 'https://www.shutterstock.com/image-photo/team-african-american-industrial-worker-600nw-2633530171.jpg',
    solutions: [
      'Capteurs de vibration et température pour maintenance prédictive',
      'Systèmes de comptage et monitoring de production',
      'Contrôle qualité automatisé par vision industrielle',
      'Automatisation de lignes de production',
      'Tableaux de bord temps réel pour superviseurs'
    ],
    technologies: ['PLC', 'Modbus', 'OPC-UA', 'Vision IA', 'SCADA']
  },
  {
    icon: 'solar_power',
    title: 'Énergie & Environnement',
    description: 'Gestion intelligente de l\'énergie solaire et surveillance environnementale.',
    image: 'https://www.aip.ci/wp-content/uploads/2025/08/pollution-plastique.jpg',
    solutions: [
      'Monitoring de panneaux solaires et onduleurs',
      'Gestion intelligente de la consommation énergétique',
      'Capteurs de qualité de l\'air (CO2, particules, COV)',
      'Surveillance de la qualité de l\'eau',
      'Systèmes d\'alerte pollution et environnement'
    ],
    technologies: ['Capteurs environnementaux', 'LoRaWAN', 'Solaire', 'RS485', 'Cloud']
  },
  {
    icon: 'local_shipping',
    title: 'Logistique & Tracking',
    description: 'Solutions de géolocalisation et traçabilité pour la supply chain.',
    image: 'https://img.freepik.com/photos-gratuite/employe-depot-verifiant-logistique-paquets-etageres-verifiant-expedition-commandes-pour-magasin-detail-femme-responsable-employee-regardant-boites-produits-controle-qualite-prise-vue-main-levee_482257-63405.jpg?semt=ais_hybrid&w=740&q=80',
    solutions: [
      'Trackers GPS pour véhicules et conteneurs',
      'Capteurs de température pour chaîne du froid',
      'Gestion d\'inventaire par RFID et codes-barres',
      'Suivi en temps réel des livraisons',
      'Alertes intrusion et ouverture non autorisée'
    ],
    technologies: ['GPS', '4G/LTE', 'RFID', 'NFC', 'Bluetooth']
  }
])

// Modal state
const selectedApp = ref(null)

const openModal = (app) => {
  selectedApp.value = app
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedApp.value = null
  document.body.style.overflow = ''  
}
</script>

<style scoped>
/* Hardware Page Theme - Couleurs TechRoot (Vert/Turquoise) */
.hardware-page .gradient-text {
  background: linear-gradient(135deg, #0d9668, #0891b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hardware-page .hero-badge {
  background: rgba(13, 150, 104, 0.15);
  border: 1px solid rgba(13, 150, 104, 0.25);
  color: #a7f3d0;
}

.hardware-page .section-badge {
  background: rgba(13, 150, 104, 0.1);
  color: #0d9668;
}

.hardware-page .service-icon {
  background: #0d9668;
}

.hardware-page .service-card:hover {
  border-color: rgba(16, 185, 129, 0.4);
}

.hardware-page .feature-icon {
  background: rgba(16, 185, 129, 0.15);
}

.hardware-page .feature-icon .material-symbols-outlined {
  color: #10b981;
}

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

.image-hardware {
  background-image: url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80');
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
  .hero-image-v2 { 
    height: 400px; 
    order: -1;
  }
  .hero-lead { margin-inline: auto; }
  .hero-actions-v2 { justify-content: center; }
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
}

.service-icon {
  width: 60px;
  height: 60px;
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
  color: #10b981;
}

/* Process Section */
.process-section {
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
}

.process-timeline {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  top: 25px;
  left: 5%;
  right: 5%;
  height: 2px;
  background: linear-gradient(90deg, #10b981, #06b6d4);
  opacity: 0.3;
}

.process-step {
  flex: 1;
  min-width: 180px;
  text-align: center;
  position: relative;
}

.step-number {
  width: 50px;
  height: 50px;
  background: #0d9668;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin: 0 auto 1rem;
  position: relative;
  z-index: 1;
}

.step-content h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #64748b;
  font-size: 0.875rem;
}

/* Features Section */
.features-section {
  background: #f8fafc;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.features-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.features-content > p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon .material-symbols-outlined {
  font-size: 1.5rem;
}

.feature-text h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.feature-text p {
  color: #64748b;
  font-size: 0.875rem;
}

.features-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.features-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Applications Section */
.applications-section {
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.application-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.application-card:hover {
  transform: translateY(-8px);
  border-color: #0d9668;
}

.app-image {
  height: 180px;
  overflow: hidden;
}

.app-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.application-card:hover .app-image img {
  transform: scale(1.1);
}

.app-content {
  padding: 1.5rem;
}

.app-content .material-symbols-outlined {
  font-size: 2rem;
  color: #10b981;
  margin-bottom: 0.75rem;
}

.app-content h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.app-content p {
  color: #64748b;
  font-size: 0.875rem;
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
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .features-image {
    order: -1;
    max-height: 350px;
  }

  .process-timeline::before {
    display: none;
  }

  .process-timeline {
    flex-direction: column;
    align-items: center;
  }

  .process-step {
    width: 100%;
    max-width: 300px;
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
  
  .applications-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .application-card {
    flex-direction: column;
  }
  
  .app-image {
    width: 100%;
    height: 200px;
  }
  
  .app-content {
    padding: 1.5rem;
  }
  
  .features-content h2 {
    font-size: 1.5rem;
  }
  
  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .feature-icon {
    margin: 0 auto;
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
  
  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  padding: 1rem;
}

.modal-content {
  background: #ffffff;
  border-radius: 24px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-close:hover {
  background: #ffffff;
  transform: scale(1.1);
}

.modal-close .material-symbols-outlined {
  font-size: 1.5rem;
  color: #1e293b;
}

.modal-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2rem;
}

.modal-icon {
  width: 60px;
  height: 60px;
  background: rgba(13, 150, 104, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.modal-icon .material-symbols-outlined {
  font-size: 1.75rem;
  color: #0d9668;
}

.modal-body h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.modal-description {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.modal-details {
  margin-bottom: 1.5rem;
}

.modal-details h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.modal-details ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-details li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
  color: #475569;
  font-size: 0.95rem;
}

.modal-details li .material-symbols-outlined {
  color: #0d9668;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.modal-technologies {
  margin-bottom: 1.5rem;
}

.modal-technologies h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  background: rgba(13, 150, 104, 0.1);
  color: #0d9668;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
}

.modal-body .btn {
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
}

/* Cursor pointer on application cards */
.application-card {
  cursor: pointer;
}

@media (max-width: 640px) {
  .modal-content {
    max-height: 95vh;
    border-radius: 16px;
  }
  
  .modal-image {
    height: 180px;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-body h2 {
    font-size: 1.5rem;
  }
}
</style>
