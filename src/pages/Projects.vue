<template>
  <div class="projects-waymo">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">Nos Réalisations</div>
          <h1>Des solutions <span class="blue-text">concrètes</span> pour un impact réel</h1>
          <p class="hero-sub">
            Découvrez comment nous transformons les défis technologiques en opportunités de croissance pour nos partenaires.
          </p>
        </div>
        <div class="hero-image-wrapper">
          <div class="projects-hero-img"></div>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section-waymo">
      <div class="container">
        <div class="filters-waymo">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            :class="['filter-pill', { active: activeFilter === filter.id }]"
            @click="activeFilter = filter.id"
          >
            {{ filter.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="grid-section">
      <div class="container">
        <div class="projects-waymo-grid">
          <div 
            class="waymo-project-card" 
            v-for="(project, index) in filteredProjects" 
            :key="index"
            @click="openProjectModal(project)"
          >
            <div class="project-img-container">
              <img :src="project.image" :alt="project.title">
              <div class="project-category-tag">{{ project.category }}</div>
            </div>
            <div class="project-details">
              <div class="project-meta-top">
                <span>{{ project.client }}</span>
                <span>•</span>
                <span>{{ project.year }}</span>
              </div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tags-waymo">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
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
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = ref([
  { id: 'all', name: 'Tous' },
  { id: 'hardware', name: 'Hardware & IoT' },
  { id: 'software', name: 'Logiciels' },
  { id: 'energie', name: 'Énergie' },
  { id: 'sante', name: 'Santé' },
  { id: 'incubation', name: 'En Incubation' }
])

const projects = ref([
  {
    title: 'Balances Connectées Intelligentes',
    description: 'Adaptation de balances existantes pour transmission automatique des données de pesée vers le système de gestion des commandes.',
    category: 'Hardware & IoT',
    categoryId: 'hardware',
    client: 'DJOLI',
    year: '2024',
    image: 'https://image.pitchbook.com/uFEF0Rrz4GPOM9wx3i7VjnhCRCn1716284331796_200x200',
    tags: ['IoT', 'Électronique']
  },
  {
    title: 'Compteurs d\'Eau Intelligents',
    description: 'Production et assemblage de compteurs d\'eau connectés selon les spécifications industrielles.',
    category: 'Hardware & IoT',
    categoryId: 'hardware',
    client: 'HYDRODRIP',
    year: '2024',
    image: 'https://www.leaders.com.tn/uploads/content/thumbnails/172465920243_content.jpg',
    tags: ['IoT', 'Industrie']
  },
  {
    title: 'Compteurs Électriques',
    description: 'Conception d\'un compteur électrique communicant avec plateforme web pour recharge à distance.',
    category: 'Énergie',
    categoryId: 'energie',
    client: 'CIE',
    year: '2024',
    image: 'https://www.wearetech.africa/media/k2/items/cache/51fccc7d7519fea84c85898572d90843_XL.jpg',
    tags: ['Smart Grid', 'Web']
  },
  {
    title: 'AgRECA – IA Vision',
    description: 'Dispositif de phénotypage intégrant caméras RGB et thermique pour la détection des maladies par IA.',
    category: 'Hardware & IoT',
    categoryId: 'hardware',
    client: 'REVA University',
    year: '2023',
    image: 'https://img.freepik.com/free-photo/plant-green-growth-gardening-botany-natural_53876-15917.jpg?semt=ais_hybrid&w=740&q=80',
    tags: ['IA', 'Agriculture']
  },
  {
    title: 'Gravity Power Generation',
    description: 'Système innovant de production d\'énergie renouvelable par gravité.',
    category: 'Énergie',
    categoryId: 'energie',
    client: 'CIPREL',
    year: '2024',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXXlxs5GEccy5kgNx3l12PBA1vWKXxCZX81hZCCA9u27p4c9mZ7EcTa_6o0ChPh3rzCyd3gc1x5UiFNL3sCmFb21gVH078_cyBqYO-4CV0S56SBpt3nWyBBAxvO27Lqwcy5zMnPD7EFFoMAx1BPG9fYCh3tw=s800?key=UvOmNuZnMGu_bZFSvn2y4A',
    tags: ['Gravité', 'R&D']
  },
  {
    title: 'PROMED GCME',
    description: 'Plateforme complète de gestion des centres médicaux et dossiers patients.',
    category: 'Logiciels',
    categoryId: 'software',
    client: 'Clinique Le Grand Centre',
    year: '2024',
    image: 'https://www.wearetech.africa/media/k2/items/cache/6ee02b14a3c53cc476fcf7c4ed73b5d0_XL.jpg',
    tags: ['Santé', 'SaaS']
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter(p => p.categoryId === activeFilter.value)
})

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
section { padding: 100px 0; }

.hero-section {
  background-color: var(--waymo-dark);
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding-top: 140px;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: white;
  margin: 1.5rem 0;
  line-height: 1.1;
}

.blue-text { color: var(--waymo-blue); }

.hero-badge {
  display: inline-block;
  color: var(--waymo-blue);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
}

.hero-sub {
  color: rgba(255,255,255,0.7);
  font-size: 1.25rem;
  max-width: 500px;
}

.hero-image-wrapper {
  display: flex;
  justify-content: flex-end;
}

.projects-hero-img {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  background-image: url('https://img.freepik.com/vecteurs-premium/ingenieur-multimetre-verifie-carte-mere_169241-818.jpg?semt=ais_hybrid&w=740&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px; /* Subtle rounding for the image itself */
}

/* Filters */
.filters-section-waymo {
  background: var(--waymo-light);
  padding: 40px 0;
}

.filters-waymo {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-pill {
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  border: 1px solid rgba(0,0,0,0.1);
  background: white;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.filter-pill.active {
  background: var(--waymo-blue);
  color: white;
  border-color: var(--waymo-blue);
}

/* Grid */
.projects-waymo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.waymo-project-card {
  background: white;
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease;
}

.waymo-project-card:hover { transform: translateY(-10px); }

.project-img-container {
  height: 250px;
  position: relative;
}

.project-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-category-tag {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  padding: 0.4rem 1rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--waymo-dark);
}

.project-details {
  padding: 2.5rem;
}

.project-meta-top {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #636366;
  margin-bottom: 0.5rem;
}

.project-details h3 { font-size: 1.5rem; margin-bottom: 1rem; }
.project-details p { color: #636366; line-height: 1.6; margin-bottom: 1.5rem; }

.project-tags-waymo {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-tags-waymo span {
  background: var(--waymo-light);
  padding: 0.3rem 0.8rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Modal Shared Styles */
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

.modal-body { padding: 4rem; }
.modal-category { color: var(--waymo-blue); font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.modal-body h2 { font-size: 2.5rem; margin: 1rem 0 2rem; }
.modal-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 3rem; }
.modal-tags { margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap; }
.modal-tags span { font-size: 0.85rem; color: #636366; }

@media (max-width: 1024px) {
  .hero-container, .projects-waymo-grid, .modal-content { grid-template-columns: 1fr; }
  .circular-mask { width: 300px; }
  .hero-content { text-align: center; }
  .hero-image-wrapper { justify-content: center; margin-top: 3rem; }
  .modal-image { height: 300px; }
  .modal-body { padding: 2rem; }
}
</style>
