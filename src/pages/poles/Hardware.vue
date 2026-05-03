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
/* Modern Minimalist Styles for Poles */
.hero-modern {
  position: relative;
  min-height: 60vh;
  background-color: var(--waymo-dark);
  background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding-top: 100px;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%);
}

.hero-container {
  position: relative;
  z-index: 1;
}

.hero-badge, .internal-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.hero-content h1, .hero-content-v2 h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
}

.primary-text, .highlight, .gradient-text {
  color: var(--waymo-blue);
  background: none;
  -webkit-text-fill-color: initial;
}

.hero-lead {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-modern, .btn-primary-v2 {
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

/* Base Sections */
section { padding: 5rem 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

.section-header { margin-bottom: 3rem; max-width: 700px; }
.section-header.center { text-align: center; margin-left: auto; margin-right: auto; }
.section-header h2 { font-family: var(--font-heading); font-size: 2.5rem; color: var(--waymo-text-dark); margin-bottom: 1rem; }
.section-header p { color: #64748b; font-size: 1.1rem; line-height: 1.6; }

/* Grid Systems */
.services-grid, .tech-grid, .process-grid, .applications-grid, .features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Cards */
.service-card, .process-card, .application-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease;
}

.service-card:hover, .application-card:hover { transform: translateY(-5px); }

.service-icon, .feature-icon {
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

.service-card h3, .process-card h3, .application-card h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--waymo-text-dark);
}

.service-card p, .process-card p, .application-card p {
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Features List */
.service-features { list-style: none; padding: 0; }
.service-features li { display: flex; align-items: center; gap: 8px; color: #475569; margin-bottom: 8px; font-size: 0.95rem; }
.service-features .material-symbols-outlined { font-size: 16px; color: var(--waymo-blue); }

/* Modals */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(15,23,42,0.8); backdrop-filter: blur(5px);
  z-index: 1000; display: flex; align-items: center; justify-content: center;
}
.modal-content {
  background: white; border-radius: 16px; width: 90%; max-width: 800px;
  max-height: 90vh; overflow-y: auto; display: grid; grid-template-columns: 1fr 1fr;
}
.modal-close { position: absolute; top: 20px; right: 20px; background: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.modal-image img { width: 100%; height: 100%; object-fit: cover; }
.modal-body { padding: 3rem; }
.modal-icon { width: 60px; height: 60px; background: rgba(13, 150, 104, 0.1); color: var(--waymo-blue); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
.modal-body h2 { font-family: var(--font-heading); font-size: 2rem; color: var(--waymo-text-dark); margin-bottom: 1rem; }
.modal-description { color: #64748b; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }

/* Responsive */
@media (max-width: 768px) {
  .hero-modern, .hero-v2 { padding-top: 80px; }
  .hero-content h1, .hero-content-v2 h1 { font-size: 2.2rem; }
  .section-header h2 { font-size: 2rem; }
  .modal-content { grid-template-columns: 1fr; }
  .modal-image { height: 200px; }
}

/* Overrides for Legacy Templates */
.hero-v2, .internal-hero { min-height: 60vh; background-color: var(--waymo-dark); padding-top: 100px; }
.hero-bg-shapes { display: none; }
.hero-image-v2 { display: none; }
.hero-container { grid-template-columns: 1fr; }
.services-section, .features-section { background: var(--waymo-light); }
.tech-section, .process-section { background: white; }
.cta-section { display: none; }

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
