<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" alt="Nos Projets" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-badge">Nos Réalisations</span>
        <h1>Des Projets qui <span class="gradient-text">Transforment</span></h1>
        <p>Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs grâce à des solutions digitales innovantes.</p>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
      <div class="container">
        <div class="filters">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            :class="['filter-btn', { active: activeFilter === filter.id }]"
            @click="activeFilter = filter.id"
          >
            {{ filter.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <div 
            class="project-card" 
            v-for="(project, index) in filteredProjects" 
            :key="index"
            :style="{ '--delay': (index % 6) * 0.1 + 's' }"
            @click="openProjectModal(project)"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <span class="project-category">{{ project.category }}</span>
              </div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-meta">
                <div class="project-client">
                  <span class="material-symbols-outlined">business</span>
                  {{ project.client }}
                </div>
                <div class="project-year">
                  <span class="material-symbols-outlined">calendar_month</span>
                  {{ project.year }}
                </div>
              </div>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <a href="#" class="project-link">
                Voir le projet
                <span class="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" v-for="(stat, index) in stats" :key="index">
            <div class="stat-icon">
              <span class="material-symbols-outlined">{{ stat.icon }}</span>
            </div>
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
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
          <h2>Vous Avez un <span class="gradient-text">Projet</span> en Tête ?</h2>
          <p>Discutons de votre vision et transformons-la en réalité.</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">arrow_forward</span>
            Démarrer un Projet
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
            <span class="modal-category">{{ selectedProject.category }}</span>
          </div>
          <div class="modal-body">
            <h2>{{ selectedProject.title }}</h2>
            <p class="modal-description">{{ selectedProject.description }}</p>
            <div class="modal-info">
              <div class="info-item" v-if="selectedProject.client">
                <span class="material-symbols-outlined">business</span>
                <div>
                  <strong>Client</strong>
                  <p>{{ selectedProject.client }}</p>
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
    description: 'Adaptation de balances existantes pour transmission automatique des données de pesée vers le système de gestion des commandes et dispatching.',
    category: 'Hardware & IoT',
    categoryId: 'hardware',
    client: 'DJOLI',
    year: 'En cours',
    image: 'https://image.pitchbook.com/uFEF0Rrz4GPOM9wx3i7VjnhCRCn1716284331796_200x200',
    tags: ['Électronique embarquée', 'IoT', 'API', 'Pesage intelligent']
  },
  {
    title: 'Compteurs d\'Eau Intelligents',
    description: 'Production et assemblage de compteurs d\'eau connectés selon les spécifications du client. Approvisionnement, tests fonctionnels et livraison.',
    category: 'Hardware & IoT',
    categoryId: 'hardware',
    client: 'HYDRODRIP (Afrique du Sud)',
    year: 'En cours',
    image: 'https://www.leaders.com.tn/uploads/content/thumbnails/172465920243_content.jpg',
    tags: ['IoT', 'Assemblage', 'Tests', 'Eau']
  },
  {
    title: 'Compteurs Électriques Intelligents',
    description: 'Conception d\'un compteur électrique communicant avec plateforme web pour recharge à distance, suivi de consommation et gestion par les gestionnaires CIE.',
    category: 'Énergie',
    categoryId: 'energie',
    client: 'Eranove Academy / CIE',
    year: 'En cours',
    image: 'https://www.wearetech.africa/media/k2/items/cache/51fccc7d7519fea84c85898572d90843_XL.jpg',
    tags: ['Smart Grid', 'IoT', 'Plateforme web', 'Énergie']
  },
  {
    title: 'AgRECA – Détection IA des Maladies des Plantes',
    description: 'Dispositif intelligent de phénotypage intégrant caméras RGB, thermique et multispectrale pour la détection des maladies des cultures par intelligence artificielle.',
    category: 'Hardware & IoT',
    categoryId: 'hardware',
    client: 'REVA University',
    year: 'Terminé',
    image: 'https://img.freepik.com/free-photo/plant-green-growth-gardening-botany-natural_53876-15917.jpg?semt=ais_hybrid&w=740&q=80',
    tags: ['IA', 'Vision', 'Agriculture', 'Capteurs multispectraux']
  },
  {
    title: 'Gravity Power Generation',
    description: 'Système innovant de production d\'énergie renouvelable par gravité. Étude de faisabilité et modélisation énergétique pour intégration industrielle.',
    category: 'Énergie',
    categoryId: 'energie',
    client: 'CIPREL / ATINKOU',
    year: 'Négociation',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXXlxs5GEccy5kgNx3l12PBA1vWKXxCZX81hZCCA9u27p4c9mZ7EcTa_6o0ChPh3rzCyd3gc1x5UiFNL3sCmFb21gVH078_cyBqYO-4CV0S56SBpt3nWyBBAxvO27Lqwcy5zMnPD7EFFoMAx1BPG9fYCh3tw=s800?key=UvOmNuZnMGu_bZFSvn2y4A',
    tags: ['Énergie renouvelable', 'Gravité', 'R&D', 'Innovation']
  },
  {
    title: 'PROMED GCME – Gestion Centres Médicaux',
    description: 'Plateforme complète de gestion des centres médicaux : patients, rendez-vous, dossiers médicaux, facturation et tableaux de bord décisionnels.',
    category: 'Logiciels',
    categoryId: 'software',
    client: 'Clinique Le Grand Centre',
    year: 'Déployé',
    image: 'https://www.wearetech.africa/media/k2/items/cache/6ee02b14a3c53cc476fcf7c4ed73b5d0_XL.jpg',
    tags: ['Santé', 'Gestion', 'Web', 'Tableaux de bord']
  },
  {
    title: 'BoostCamp – Plateforme de Formation',
    description: 'Solution de gestion pédagogique complète : contenus, inscriptions, évaluations, suivi de progression et certification des apprenants.',
    category: 'Logiciels',
    categoryId: 'software',
    client: 'TechRoot Academy',
    year: 'Déployé',
    image: 'https://digitalmag.ci/wp-content/uploads/2023/10/E-learning-5-plateformes-pour-les-formation-gratuites-en-ligne-a-savoir.jpg',
    tags: ['E-learning', 'Formation', 'Pédagogie', 'Web']
  },
  {
    title: 'Dimora – Gestion Immobilière',
    description: 'Logiciel de gestion immobilière : suivi des biens, locations, paiements, relations occupants et reporting financier.',
    category: 'Logiciels',
    categoryId: 'software',
    client: 'Gestionnaires immobiliers',
    year: 'Déployé',
    image: 'https://media.licdn.com/dms/image/v2/D4E12AQFGOTkwj2jD2w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683823326224?e=2147483647&v=beta&t=vsb9AkO8mnj3fXkfd6QZn0QXDNgA6hsNIEV5H1x1gVI',
    tags: ['Immobilier', 'Gestion', 'Paiements', 'Reporting']
  },
  {
    title: 'TV on Wheel – Écrans Publicitaires Intelligents',
    description: 'Réseau d\'écrans intelligents dans transports et commerces avec capteurs IA pour analyser le comportement des consommateurs et optimiser les campagnes.',
    category: 'En Incubation',
    categoryId: 'incubation',
    client: 'ADGroupe',
    year: 'Incubation',
    image: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeBzzd7EPtfFGY3kAHNmCl8r5ZtmWOWmdufu8oxQMmLki7b1fqbRXspA7MuR8_PT0UaUR6o2OVUcpPD5DYyDevjGW052r8P0z5yKyOYtKRgGuhlMLYO4sglxVyALDzqfPtI6dRoIS_sByKa6pbIPI5ZM6Mvsg=s800?key=UvOmNuZnMGu_bZFSvn2y4A',
    tags: ['Publicité', 'IA', 'Écrans LED', 'Analytics']
  },
  {
    title: 'SysPoint – Pointage Électronique',
    description: 'Solution de gestion du temps et pointage du personnel avec badges RFID, biométrie et interface de supervision RH.',
    category: 'Logiciels',
    categoryId: 'software',
    client: 'Entreprises',
    year: 'Déployé',
    image: 'https://www.wearetech.africa/media/k2/items/cache/05ae28592704ec4523f3f668751fa5ce_Generic.jpg',
    tags: ['RH', 'RFID', 'Biométrie', 'Gestion temps']
  },
  {
    title: 'GeStock – Gestion de Stock',
    description: 'Plateforme de gestion des stocks : entrées, sorties, niveaux, approvisionnements et traçabilité des flux logistiques.',
    category: 'Logiciels',
    categoryId: 'software',
    client: 'PME & Industries',
    year: 'Déployé',
    image: 'https://assets.telnetafrica.com/galerie/plateformes/stocksage.webp',
    tags: ['Stock', 'Logistique', 'Traçabilité', 'Gestion']
  },
  {
    title: 'GPS & Tracking d\'Équipements',
    description: 'Solution de géolocalisation et suivi en temps réel des équipements et véhicules avec alertes et historique.',
    category: 'En Incubation',
    categoryId: 'incubation',
    client: 'ADGroupe',
    year: 'Incubation',
    image: 'https://tramcomsite.s3.eu-west-1.amazonaws.com/wp-content/uploads/sites/48/2023/12/27132836/fct-drc.png',
    tags: ['GPS', 'Tracking', 'IoT', 'Flotte']
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter(p => p.categoryId === activeFilter.value)
})

const stats = ref([
  { icon: 'check_circle', number: '12+', label: 'Projets Réalisés' },
  { icon: 'groups', number: '10+', label: 'Clients & Partenaires' },
  { icon: 'category', number: '5', label: 'Pôles d\'Expertise' },
  { icon: 'public', number: '3', label: 'Pays Couverts' }
])

const testimonials = ref([
  {
    quote: 'TechRoot a transformé notre processus de dispatching. Les balances connectées nous permettent un suivi précis et automatisé de toutes nos commandes.',
    name: 'Responsable Logistique',
    role: 'Direction',
    company: 'DJOLI',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80'
  },
  {
    quote: 'La qualité d\'assemblage des compteurs et le respect des délais font de TechRoot un partenaire industriel fiable pour nos déploiements en Afrique.',
    name: 'Directeur Technique',
    role: 'Production',
    company: 'HYDRODRIP',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    quote: 'Le système de gestion médicale PROMED a modernisé notre centre. La digitalisation a amélioré notre efficacité et la prise en charge des patients.',
    name: 'Dr. Directeur',
    role: 'Direction Médicale',
    company: 'Clinique Le Grand Centre',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&q=80'
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
/* Page Hero */
.page-hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
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
  max-width: 800px;
  padding: 2rem;
}

.hero-badge {
  display: inline-block;
  background: rgba(13, 150, 104, 0.15);
  border: 1px solid rgba(13, 150, 104, 0.25);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.875rem;
  color: #a7f3d0;
  margin-bottom: 1.5rem;
}

.hero-content h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #0d9668, #0891b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-content > p {
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.7;
}

/* Common */
section {
  padding: 4rem 0;
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

/* Filters Section */
.filters-section {
  background: #f8fafc;
  padding: 2rem 0;
}

.filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 0.625rem 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 50px;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #0d9668;
  color: #0d9668;
}

.filter-btn.active {
  background: #0d9668;
  border-color: transparent;
  color: white;
}

/* Projects Section */
.projects-section {
  background: #f8fafc;
  padding-top: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
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

.project-card:hover {
  transform: translateY(-8px);
  border-color: #0d9668;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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

.project-content > p {
  color: #64748b;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.project-client,
.project-year {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
}

.project-meta .material-symbols-outlined {
  font-size: 1rem;
  color: #10b981;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-tags span {
  background: rgba(13, 150, 104, 0.12);
  color: #047857;
  border: 1px solid rgba(13, 150, 104, 0.35);
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #0d9668;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  gap: 0.75rem;
  color: #047857;
}

/* Stats Section */
.stats-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: #0d9668;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.stat-icon .material-symbols-outlined {
  font-size: 1.75rem;
  color: white;
}

.stat-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #64748b;
  font-size: 0.9375rem;
}

/* Testimonials Section */
.testimonials-section {
  background: #ffffff;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
}

.testimonial-quote {
  margin-bottom: 1rem;
}

.testimonial-quote .material-symbols-outlined {
  font-size: 2.5rem;
  color: #10b981;
  opacity: 0.5;
}

.testimonial-card > p {
  color: #334155;
  font-size: 1rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-author h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.125rem;
}

.testimonial-author span {
  font-size: 0.875rem;
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
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-grid {
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
  
  .filter-tabs {
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
  
  .filter-tab {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 0;
  }
  
  .project-image {
    height: 200px;
  }
  
  .project-content {
    padding: 1.25rem;
  }
  
  .project-content h3 {
    font-size: 1.125rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: none;
    gap: 1rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
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
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-card {
    padding: 1.25rem;
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

.modal-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    padding: 0.75rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
  
  .modal-content {
    max-height: calc(100vh - 3rem);
  }
  
  .modal-image {
    height: 180px;
  }
  
  .modal-body {
    padding: 1.25rem;
  }
  
  .modal-body h2 {
    font-size: 1.25rem;
  }
  
  .modal-description {
    font-size: 0.9rem;
  }
  
  .modal-details {
    padding: 1rem;
  }
  
  .modal-info {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .tags-list {
    gap: 0.375rem;
  }
  
  .tags-list span {
    padding: 0.25rem 0.65rem;
    font-size: 0.75rem;
  }
}
</style>
