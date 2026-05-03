<template>
  <div class="home-waymo">
    <!-- Hero Section with Video Background -->
    <section class="hero-section">
      <video 
        autoplay 
        muted 
        loop 
        playsinline 
        class="hero-video-bg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      <div class="hero-overlay"></div>
      
      <div class="container hero-container">
        <div class="hero-content-uber">
          <h1>L'Afrique <br/> invente son <span class="primary-text">futur</span></h1>
          <p class="hero-sub">
            Solutions Hardware, Software et Drones adaptées au continent.
          </p>
          
          <div class="hero-search-bar">
            <div class="input-group">
              <span class="material-symbols-outlined icon">location_on</span>
              <input type="text" placeholder="Quel est votre projet ?" v-model="projectQuery">
            </div>
            <div class="select-group">
              <span class="material-symbols-outlined icon">category</span>
              <select v-model="selectedCategory">
                <option value="software">Software</option>
                <option value="hardware">Hardware</option>
                <option value="drones">Drones</option>
              </select>
            </div>
            <button class="search-btn" @click="startProject">
              Démarrer
            </button>
          </div>
          
          <div class="hero-helper">
            Ou <router-link to="/poles/software" class="helper-link">découvrez nos pôles d'expertise</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Tesla-style Showcase Section -->
    <section class="tesla-showcase">
      <div class="tesla-showcase-content">
        <h2>Le futur de la tech est en marche</h2>
        <p>Bâtissons ensemble un écosystème numérique durable. TechRoot met l'innovation au service de l'Afrique pour propulser votre entreprise vers de nouveaux sommets.</p>
        <div class="tesla-showcase-actions">
          <router-link to="/contact" class="btn-tesla-secondary">Nous trouver</router-link>
          <router-link to="/a-propos" class="btn-tesla-primary">En savoir plus</router-link>
        </div>
      </div>
    </section>


    <!-- Expertise Section (White) -->
    <section class="expertise-section">
      <div class="container">
        <div class="section-header-waymo">
          <span class="badge-waymo">Expertise</span>
          <h2>Des pôles d'excellence <br/> pour chaque défi</h2>
        </div>
        
        <div class="expertise-grid">
          <div v-for="(pole, index) in poles" :key="index" class="expertise-card">
            <div class="card-image">
              <img :src="pole.image" :alt="pole.title">
            </div>
            <div class="card-content">
              <h3>{{ pole.title }}</h3>
              <p>{{ pole.description }}</p>
              <router-link :to="pole.link" class="card-link">
                En savoir plus
                <span class="material-symbols-outlined">north_east</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section (Dark) -->
    <section class="projects-section-waymo">
      <div class="container">
        <div class="section-header-waymo light">
          <span class="badge-waymo">Réalisations</span>
          <h2>Nos projets phares</h2>
        </div>

        <div class="projects-showcase-v2">
          <div class="featured-project-display">
            <transition name="fade" mode="out-in">
              <img :src="projects[activeProjectIndex].image" :alt="projects[activeProjectIndex].title" :key="activeProjectIndex">
            </transition>
          </div>
          
          <div class="projects-selector-v2">
            <div v-for="(project, index) in projects" :key="index" 
                 class="selector-item" 
                 :class="{ active: activeProjectIndex === index }"
                 @click="activeProjectIndex = index">
              <div class="selector-line-box">
                <div class="selector-line"></div>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="final-cta">
      <div class="container">
        <div class="cta-box-waymo">
          <h2>Prêt à transformer <br/> votre entreprise ?</h2>
          <p>Contactez-nous pour discuter de vos besoins technologiques.</p>
          <router-link to="/contact" class="cta-white">
            <span>Discutons</span>
            <div class="icon-circle blue">
              <span class="material-symbols-outlined">arrow_forward</span>
            </div>
          </router-link>
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
          </div>
          <div class="modal-body">
            <span class="modal-category">{{ selectedProject.category }}</span>
            <h2>{{ selectedProject.title }}</h2>
            <p class="modal-description">{{ selectedProject.description }}</p>
            <div class="modal-info-grid">
              <div class="info-cell">
                <strong>Client</strong>
                <p>{{ selectedProject.client }}</p>
              </div>
              <div class="info-cell">
                <strong>Année</strong>
                <p>{{ selectedProject.year }}</p>
              </div>
            </div>
            <div class="modal-tags">
              <span v-for="tag in selectedProject.tags" :key="tag">#{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const poles = ref([
  {
    title: 'Pôle Hardware',
    description: 'Conception électronique, IoT et systèmes embarqués.',
    image: 'https://img.freepik.com/vecteurs-premium/carte-mere-disque-dur-processeur-ventilateur-carte-graphique-memoire-tournevis-etui-ensemble-materiel-informatique-personnel-icones-composants-pc_169241-2200.jpg?semt=ais_hybrid&w=740&q=80',
    link: '/poles/hardware'
  },
  {
    title: 'Pôle Software',
    description: 'Développement d\'applications web et mobiles sur-mesure.',
    image: 'https://img.freepik.com/vecteurs-premium/outils-essentiels-pour-professionnels-creatifs-kit-conception-complet-pour-flux-travail-modernes_1300528-18276.jpg',
    link: '/poles/software'
  },
  {
    title: 'Pôle Drones',
    description: 'Solutions aériennes, cartographie et inspection industrielle.',
    image: 'https://us.123rf.com/450wm/anatolir/anatolir1808/anatolir180800116/112307458-contr%C3%B4lez-le-drone-sur-l-arri%C3%A8re-plan-du-pad-illustration-plate-du-drone-de-contr%C3%B4le-sur-fond-de.jpg?ver=6',
    link: '/poles/drones'
  }
])

const projects = ref([
  {
    title: 'E-Commerce Marketplace',
    description: 'Solution complète multi-vendeurs avec logistique intégrée.',
    category: 'Digital',
    image: 'https://forbesafrique.com/wp-content/uploads/2024/03/E-Commerce-%C2%A9William-Potter_Shutterstock-Forbes-Afrique-Site-Web.jpg',
    client: 'Grand Distributeur CI',
    year: '2024',
    tags: ['Vue.js', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Mobile Banking App',
    description: 'Application sécurisée avec authentification biométrique.',
    category: 'Fintech',
    image: 'https://www.shutterstock.com/image-photo/lugbe-abujanigeria-april-22nd-2024-600nw-2462296697.jpg',
    client: 'Banque Régionale',
    year: '2023',
    tags: ['React Native', 'Firebase']
  },
  {
    title: 'Health Management',
    description: 'Digitalisation hospitalière et télémédecine.',
    category: 'Health',
    image: 'https://www.wearetech.africa/media/k2/items/cache/6ee02b14a3c53cc476fcf7c4ed73b5d0_XL.jpg',
    client: 'CHU Abidjan',
    year: '2024',
    tags: ['Angular', 'Python', 'WebRTC']
  }
])

const activeProjectIndex = ref(0)
const selectedProject = ref(null)
const projectQuery = ref('')
const selectedCategory = ref('software')

const startProject = () => {
  if (projectQuery.value) {
    console.log(`Starting project: ${projectQuery.value} in ${selectedCategory.value}`)
    // Logic to redirect or open contact form
  }
}

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
/* Base Sections */
section {
  padding: 100px 0;
  overflow: hidden;
}

/* Tesla Showcase Section */
.tesla-showcase {
  position: relative;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 8%;
  color: white;
  background-image: 
    linear-gradient(to bottom, #000000 0%, transparent 25%),
    linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
    url('/images/home-showcase-v2.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  margin-top: -2px; /* Overlap to prevent sub-pixel gaps */
}


.tesla-showcase-content {
  position: relative;
  z-index: 10;
  max-width: 600px;
  margin-top: 5vh;
  text-align: left;
}

.tesla-showcase-content h2 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
  color: white;
}

.tesla-showcase-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.tesla-showcase-actions {
  display: flex;
  gap: 1rem;
}

.btn-tesla-primary, .btn-tesla-secondary {
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s, background 0.3s;
  text-align: center;
  min-width: 160px;
}

.btn-tesla-primary {
  background: #f3f4f6;
  color: #111827;
}

.btn-tesla-secondary {
  border: 2px solid white;
  background: transparent;
  color: white;
}

.btn-tesla-primary:hover, .btn-tesla-secondary:hover {
  opacity: 0.8;
}

/* Hero Section with Video */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 140px;
  color: white;
  overflow: hidden;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25vh;
  background: linear-gradient(to bottom, transparent, #000000);
  pointer-events: none;
  z-index: 2;
}

.hero-video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,10,26,0.85) 0%, rgba(0,10,26,0.5) 100%);
}

.hero-container {
  position: relative;
  z-index: 10;
}

.hero-content-uber {
  max-width: 800px;
}

.hero-content-uber h1 {
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
}

.primary-text {
  color: var(--waymo-blue);
}

.hero-sub {
  color: rgba(255,255,255,0.9);
  font-size: 1.5rem;
  margin-bottom: 3rem;
  font-weight: 400;
}

/* Search Bar Styles (Uber Style) */
.hero-search-bar {
  display: flex;
  background: white;
  padding: 8px;
  border-radius: 4px; /* Sharp like Uber */
  gap: 2px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 1.5rem;
  align-items: stretch;
}

.input-group, .select-group {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: #f3f3f3;
  color: #000;
}

.input-group .icon, .select-group .icon {
  color: #000;
  font-size: 20px;
}

.input-group input, .select-group select {
  border: none;
  background: transparent;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  outline: none;
}

.search-btn {
  background: #000; /* Uber style black button */
  color: white;
  border: none;
  padding: 0 40px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.search-btn:hover {
  background: #333;
}

.hero-helper {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.8);
}

.helper-link {
  color: white;
  text-decoration: underline;
  font-weight: 600;
}

/* Mission Section (Blue) */
.mission-section {
  background-color: var(--waymo-blue);
  color: white;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-text h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 2rem;
}

.mission-text p {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
}

.mission-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.waymo-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
}

.icon-circle.small {
  width: 40px;
  height: 40px;
  background: white;
  color: var(--waymo-blue);
}

/* Expertise Section */
.expertise-section {
  background: white;
  color: #111827;
}

.section-header-waymo h2 {
  color: #111827;
}

.section-header-waymo {
  margin-bottom: 4rem;
}

.badge-waymo {
  display: inline-block;
  color: var(--waymo-blue);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.section-header-waymo h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.1;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.expertise-card {
  background: white;
  border-radius: 32px;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.expertise-card:hover {
  transform: translateY(-10px);
}

.card-image {
  height: 250px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 2.5rem;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-content p {
  color: #636366;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.card-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--waymo-blue);
  text-decoration: none;
  font-weight: 700;
}

/* Projects Showcase V2 (Tesla Style) */
.projects-showcase-v2 {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.featured-project-display {
  width: 100%;
  aspect-ratio: 21/9;
  background: #f4f4f4;
  border-radius: 24px;
  overflow: hidden;
}

.featured-project-display img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projects-selector-v2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.selector-item {
  cursor: pointer;
  padding-top: 1.5rem;
  opacity: 0.4;
  transition: opacity 0.3s;
}

.selector-item.active {
  opacity: 1;
}

.selector-line-box {
  width: 100%;
  height: 2px;
  background: #e5e7eb;
  margin-bottom: 1.5rem;
  position: relative;
}

.selector-line {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: #111827;
  transition: width 0.3s ease;
}

.selector-item.active .selector-line {
  width: 100%;
}

.selector-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #111827;
}

.selector-item p {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #4b5563;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.section-header-waymo.light h2 { color: #111827; }

/* Final CTA */
.final-cta {
  background: white;
  padding: 100px 0;
}

.cta-box-waymo {
  background: var(--waymo-light);
  border-radius: 48px;
  padding: 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.cta-box-waymo h2 { font-size: 3.5rem; }

.cta-white {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 0.75rem 0.75rem 0.75rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  color: var(--waymo-dark);
  font-weight: 700;
  transition: transform 0.3s;
}

.cta-white:hover { transform: scale(1.05); }

.icon-circle.blue {
  background: var(--waymo-blue);
  color: white;
  width: 44px;
  height: 44px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  background: white;
  width: 100%;
  max-width: 1000px;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.1);
  cursor: pointer;
  z-index: 10;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 4rem;
}

.modal-category {
  color: var(--waymo-blue);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.modal-body h2 {
  font-size: 2.5rem;
  margin: 1rem 0 2rem;
}

.modal-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.modal-tags {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-tags span {
  font-size: 0.85rem;
  color: #636366;
}

@media (max-width: 1024px) {
  section {
    padding: 60px 0;
  }
  .hero-section {
    padding-top: 100px;
    text-align: center;
  }
  .hero-content-uber {
    margin: 0 auto;
  }
  .hero-search-bar {
    flex-direction: column;
    background: transparent;
    box-shadow: none;
    padding: 0;
  }
  .input-group, .select-group {
    border-radius: 4px;
    margin-bottom: 8px;
  }
  .search-btn {
    width: 100%;
    padding: 16px;
    border-radius: 4px;
  }
  .expertise-grid, .projects-selector-v2, .modal-content {
    grid-template-columns: 1fr;
  }
  .featured-project-display {
    aspect-ratio: 16/10;
  }
  .selector-item {
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .selector-item:last-child {
    border-bottom: none;
  }
  .selector-line-box {
    margin-bottom: 1rem;
  }
}
</style>
