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
