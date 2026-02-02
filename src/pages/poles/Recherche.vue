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
          <div class="internal-badge">PÔLE RECHERCHE & DÉVELOPPEMENT</div>
          <h1>
            Explorer le <span class="serif-text">futur</span> <br/>
            & <span class="highlight">inventer l'innovation</span>
          </h1>
          <p class="hero-lead">
            Au cœur de TechRoot, notre laboratoire R&D explore les technologies émergentes pour concevoir les solutions disruptives de demain.
          </p>
          <div class="hero-actions-v2">
            <a href="#lab" class="btn-primary-v2">
              Le DigiLab Innovation
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>

        <div class="hero-image-v2">
          <div class="image-continuous image-recherche"></div>
        </div>
      </div>
    </section>

    <!-- Areas Section -->
    <section class="areas-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Domaines de Recherche</span>
          <h2>Nos Axes <span class="gradient-text">d'Innovation</span></h2>
          <p>Nous explorons les technologies émergentes pour créer les solutions de demain.</p>
        </div>
        <div class="areas-grid">
          <div class="area-card" v-for="(area, index) in researchAreas" :key="index">
            <div class="area-icon">
              <span class="material-symbols-outlined">{{ area.icon }}</span>
            </div>
            <h3>{{ area.title }}</h3>
            <p>{{ area.description }}</p>
            <div class="area-tags">
              <span v-for="tag in area.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lab Section -->
    <section class="lab-section">
      <div class="container">
        <div class="lab-grid">
          <div class="lab-content">
            <span class="section-badge">Notre Laboratoire</span>
            <h2>DigiLab <span class="gradient-text">Innovation</span></h2>
            <p>Notre laboratoire de R&D est équipé des dernières technologies pour expérimenter, prototyper et innover.</p>
            <ul class="lab-features">
              <li><span class="material-symbols-outlined">computer</span> Stations de calcul haute performance</li>
              <li><span class="material-symbols-outlined">smart_toy</span> Équipements IoT et robotique</li>
              <li><span class="material-symbols-outlined">view_in_ar</span> Lab VR/AR immersif</li>
              <li><span class="material-symbols-outlined">print</span> Imprimantes 3D industrielles</li>
            </ul>
          </div>
          <div class="lab-image">
            <img src="https://tpw.ch/wp-content/uploads/2022/06/Lokstadt_FabLab.jpeg" alt="Laboratoire" />
          </div>
        </div>
      </div>
    </section>

    <!-- Publications Section -->
    <section class="publications-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Projets R&D</span>
          <h2>Nos <span class="gradient-text">Travaux</span> de Recherche</h2>
        </div>
        <div class="publications-grid">
          <div class="publication-card" v-for="(pub, index) in publications" :key="index" @click="openModal(pub)">
            <div class="publication-type">{{ pub.type }}</div>
            <h3>{{ pub.title }}</h3>
            <p>{{ pub.authors }}</p>
            <div class="publication-meta">
              <span :class="['status-badge', pub.status]">
                <span class="material-symbols-outlined">{{ pub.status === 'completed' ? 'check_circle' : pub.status === 'ongoing' ? 'sync' : 'hourglass_empty' }}</span>
                {{ pub.date }}
              </span>
            </div>
            <div class="card-hover-indicator">
              <span class="material-symbols-outlined">visibility</span>
              Voir détails
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
          <div class="modal-container">
            <button class="modal-close" @click="closeModal">
              <span class="material-symbols-outlined">close</span>
            </button>
            <div class="modal-header">
              <span :class="['modal-type', selectedProject?.status]">{{ selectedProject?.type }}</span>
              <h2>{{ selectedProject?.title }}</h2>
              <p class="modal-partners">{{ selectedProject?.authors }}</p>
            </div>
            <div class="modal-body">
              <div class="modal-section">
                <h4><span class="material-symbols-outlined">description</span> Description</h4>
                <p>{{ selectedProject?.description }}</p>
              </div>
              <div class="modal-section">
                <h4><span class="material-symbols-outlined">checklist</span> Objectifs</h4>
                <ul>
                  <li v-for="(obj, i) in selectedProject?.objectives" :key="i">{{ obj }}</li>
                </ul>
              </div>
              <div class="modal-section" v-if="selectedProject?.technologies?.length">
                <h4><span class="material-symbols-outlined">code</span> Technologies</h4>
                <div class="tech-tags">
                  <span v-for="tech in selectedProject?.technologies" :key="tech">{{ tech }}</span>
                </div>
              </div>
              <div class="modal-footer-info">
                <div class="info-item">
                  <span class="material-symbols-outlined">schedule</span>
                  <span><strong>Statut :</strong> {{ selectedProject?.date }}</span>
                </div>
                <div class="info-item" v-if="selectedProject?.impact">
                  <span class="material-symbols-outlined">trending_up</span>
                  <span><strong>Impact :</strong> {{ selectedProject?.impact }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Technology" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Un Projet de <span class="gradient-text">Recherche</span> ?</h2>
          <p>Collaborons ensemble sur des projets innovants et ambitieux.</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">arrow_forward</span>
            Proposer un Projet
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const researchAreas = ref([
  {
    icon: 'psychology',
    title: 'Intelligence Artificielle',
    description: 'Machine Learning, Deep Learning et traitement du langage naturel pour des solutions intelligentes.',
    tags: ['ML/DL', 'NLP', 'Computer Vision']
  },
  {
    icon: 'sensors',
    title: 'Internet des Objets',
    description: 'Développement de solutions IoT connectées pour l\'industrie et la ville intelligente.',
    tags: ['Smart City', 'Industrie 4.0', 'Capteurs']
  },
  {
    icon: 'currency_bitcoin',
    title: 'Blockchain',
    description: 'Recherche sur les technologies décentralisées et leurs applications.',
    tags: ['Smart Contracts', 'DeFi', 'Traçabilité']
  },
  {
    icon: 'view_in_ar',
    title: 'Réalité Augmentée/VR',
    description: 'Expériences immersives pour la formation, le commerce et l\'industrie.',
    tags: ['XR', 'Métavers', 'Formation']
  }
])

const publications = ref([
  {
    type: 'Projet R&D',
    title: 'AgRECA – Dispositif intelligent de phénotypage et détection des maladies des plantes par IA',
    authors: 'TechRoot & REVA University',
    date: 'Terminé',
    status: 'completed',
    description: 'Développement d\'un système embarqué intelligent capable d\'analyser en temps réel l\'état de santé des plantes, de détecter précocement les maladies et de fournir des recommandations de traitement grâce à l\'intelligence artificielle.',
    objectives: [
      'Conception d\'un dispositif portable de phénotypage',
      'Développement d\'algorithmes de détection de maladies par vision par ordinateur',
      'Création d\'une base de données de référence des pathologies végétales',
      'Mise en place d\'un système d\'alertes et recommandations automatisées'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'IoT'],
    impact: 'Agriculture de précision en Afrique de l\'Ouest'
  },
  {
    type: 'Projet R&D',
    title: 'Compteur électrique intelligent & plateforme web de gestion énergétique',
    authors: 'TechRoot & Eranove Academy / CIE',
    date: 'En cours',
    status: 'ongoing',
    description: 'Conception et développement de compteurs électriques intelligents avec communication à distance, couplés à une plateforme web permettant le suivi en temps réel de la consommation énergétique et la gestion optimisée des ressources.',
    objectives: [
      'Développement du hardware du compteur intelligent',
      'Mise en place de la communication IoT sécurisée',
      'Création du dashboard de visualisation temps réel',
      'Implémentation d\'algorithmes de prédiction de consommation'
    ],
    technologies: ['ESP32', 'LoRaWAN', 'Vue.js', 'Node.js', 'MongoDB'],
    impact: 'Transition énergétique et smart grid en Côte d\'Ivoire'
  },
  {
    type: 'Innovation',
    title: 'Gravity Power Generation – Système de production d\'énergie par gravité',
    authors: 'TechRoot & CIPREL / ATINKOU',
    date: 'En négociation',
    status: 'negotiation',
    description: 'Recherche et développement d\'un système innovant de production d\'énergie utilisant la force gravitationnelle comme source principale, une alternative écologique et durable aux énergies fossiles.',
    objectives: [
      'Étude de faisabilité et modélisation du système',
      'Conception du prototype mécanique',
      'Tests d\'efficacité et optimisation du rendement',
      'Préparation de la phase d\'industrialisation'
    ],
    technologies: ['CAO/FAO', 'Simulation énergétique', 'Électronique de puissance'],
    impact: 'Énergie renouvelable innovante pour l\'Afrique'
  },
  {
    type: 'Projet R&D',
    title: 'Balances connectées intelligentes pour traçabilité logistique',
    authors: 'TechRoot & DJOLI',
    date: 'En cours',
    status: 'ongoing',
    description: 'Développement de balances industrielles connectées permettant la pesée automatisée, la traçabilité complète des produits et l\'intégration avec les systèmes de gestion d\'entrepôt et de logistique.',
    objectives: [
      'Conception électronique des capteurs de poids haute précision',
      'Développement du firmware embarqué',
      'Création de l\'API d\'intégration avec les ERP',
      'Mise en place du système de traçabilité blockchain'
    ],
    technologies: ['STM32', 'MQTT', 'REST API', 'React', 'PostgreSQL'],
    impact: 'Digitalisation de la chaîne logistique en Afrique'
  },
  {
    type: 'Partenariat',
    title: 'Compteurs d\'eau intelligents – Production et assemblage',
    authors: 'TechRoot & HYDRODRIP (Afrique du Sud)',
    date: 'En cours',
    status: 'ongoing',
    description: 'Partenariat stratégique pour la production et l\'assemblage local de compteurs d\'eau intelligents, permettant une gestion optimisée des ressources hydriques avec détection de fuites et facturation automatisée.',
    objectives: [
      'Transfert de technologie et formation des équipes',
      'Mise en place de la ligne d\'assemblage locale',
      'Adaptation aux normes et réglementations locales',
      'Développement du réseau de distribution régional'
    ],
    technologies: ['NB-IoT', 'Capteurs ultrasoniques', 'Cloud computing'],
    impact: 'Gestion durable de l\'eau en Afrique de l\'Ouest'
  },
  {
    type: 'Innovation',
    title: 'TV on Wheel – Écrans publicitaires intelligents avec analyse comportementale IA',
    authors: 'TechRoot & ADGroupe',
    date: 'Incubation',
    status: 'incubation',
    description: 'Projet d\'écrans publicitaires mobiles intelligents intégrant des capteurs et de l\'IA pour analyser l\'audience en temps réel, adapter le contenu diffusé et mesurer l\'impact des campagnes publicitaires.',
    objectives: [
      'Développement du système de détection d\'audience',
      'Création des algorithmes d\'analyse comportementale',
      'Mise en place du système de diffusion adaptative',
      'Dashboard analytique pour les annonceurs'
    ],
    technologies: ['Computer Vision', 'Edge AI', 'Android', 'Cloud Analytics'],
    impact: 'Révolution de la publicité extérieure intelligente'
  }
])

const showModal = ref(false)
const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
}
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

.image-recherche {
  background-image: url('https://www.scidev.net/afrique-sub-saharienne/wp-content/uploads/sites/2/2019/08/young_researchers_visit_an_agriculture_research_station_in_kenya.jpg');
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

/* Areas Section */
.areas-section {
  background: #f8fafc;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.area-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.area-card:hover {
  transform: translateY(-8px);
  border-color: #0d9668;
}

.area-icon {
  width: 60px;
  height: 60px;
  background: #0d9668;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.area-icon .material-symbols-outlined {
  font-size: 1.75rem;
  color: white;
}

.area-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.area-card > p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.area-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.area-tags span {
  background: rgba(13, 150, 104, 0.12);
  color: #047857;
  border: 1px solid rgba(13, 150, 104, 0.35);
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Lab Section */
.lab-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.lab-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.lab-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.lab-content > p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.lab-features {
  list-style: none;
  padding: 0;
}

.lab-features li {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #334155;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.lab-features .material-symbols-outlined {
  font-size: 1.5rem;
  color: #10b981;
}

.lab-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.lab-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Publications Section */
.publications-section {
  background: #ffffff;
}

.publications-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.publication-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.publication-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
  box-shadow: 0 20px 40px -10px rgba(13, 150, 104, 0.2);
}

.card-hover-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #0d9668, #06b6d4);
  color: white;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.publication-card:hover .card-hover-indicator {
  transform: translateY(0);
}

.publication-type {
  display: inline-block;
  background: #0d9668;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.publication-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.publication-card > p {
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.publication-meta {
  display: flex;
  gap: 1rem;
}

.publication-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
}

.publication-meta .material-symbols-outlined {
  font-size: 1rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
}

.status-badge.completed {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge.ongoing {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge.negotiation {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge.incubation {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
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
  
  .areas-grid {
    grid-template-columns: 1fr;
  }
  
  .lab-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .publications-grid {
    grid-template-columns: 1fr;
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
  
  .area-card {
    padding: 1.5rem;
  }
  
  .area-icon {
    width: 50px;
    height: 50px;
  }
  
  .area-card h3 {
    font-size: 1.125rem;
  }
  
  .lab-content h2 {
    font-size: 1.5rem;
  }
  
  .lab-content > p {
    font-size: 1rem;
  }
  
  .lab-feature {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .lab-feature-icon {
    margin: 0 auto;
  }
  
  .lab-image {
    max-height: 300px;
  }
  
  .publication-card {
    padding: 1.5rem;
  }
  
  .publication-card h4 {
    font-size: 1rem;
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  padding: 2rem;
}

.modal-container {
  background: #ffffff;
  border-radius: 24px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: #e2e8f0;
  transform: rotate(90deg);
}

.modal-close .material-symbols-outlined {
  font-size: 1.25rem;
  color: #475569;
}

.modal-header {
  padding: 2.5rem 2.5rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.modal-type {
  display: inline-block;
  padding: 0.35rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.modal-type.completed {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.modal-type.ongoing {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.modal-type.negotiation {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.modal-type.incubation {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
}

.modal-header h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

.modal-partners {
  color: #0d9668;
  font-weight: 600;
  font-size: 0.95rem;
}

.modal-body {
  padding: 2rem 2.5rem 2.5rem;
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section:last-child {
  margin-bottom: 0;
}

.modal-section h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.modal-section h4 .material-symbols-outlined {
  color: #0d9668;
  font-size: 1.25rem;
}

.modal-section p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.95rem;
}

.modal-section ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.modal-section ul li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.5;
}

.modal-section ul li::before {
  content: '✓';
  color: #0d9668;
  font-weight: 700;
  flex-shrink: 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  background: linear-gradient(135deg, rgba(13, 150, 104, 0.1), rgba(6, 182, 212, 0.1));
  color: #0d9668;
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

.modal-footer-info {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.9rem;
}

.info-item .material-symbols-outlined {
  color: #0d9668;
  font-size: 1.25rem;
}

/* Modal Transitions */
.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container {
  animation: modalSlideIn 0.35s ease forwards;
}

.modal-leave-active .modal-container {
  animation: modalSlideOut 0.25s ease forwards;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes modalSlideOut {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(30px);
  }
}

@media (max-width: 640px) {
  .modal-overlay {
    padding: 1rem;
    align-items: flex-end;
  }
  
  .modal-container {
    max-height: 90vh;
    border-radius: 24px 24px 0 0;
  }
  
  .modal-header {
    padding: 2rem 1.5rem 1.25rem;
  }
  
  .modal-header h2 {
    font-size: 1.25rem;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
}
</style>
