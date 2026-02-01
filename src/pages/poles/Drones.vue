<template>
  <div class="pole-page drones-page">
    <!-- Floating Drones Animation -->
    <div class="floating-drones">
      <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyaWZmbnNiZ3p4NXNiYTF5b2pvajI1a2ZuNjdkODVmamx5ZnZoZHZqciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/3STMjgr8dk6QVdYg9B/giphy.gif" alt="Drone" class="floating-drone drone-1" />
      <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyaWZmbnNiZ3p4NXNiYTF5b2pvajI1a2ZuNjdkODVmamx5ZnZoZHZqciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/3STMjgr8dk6QVdYg9B/giphy.gif" alt="Drone" class="floating-drone drone-2" />
    </div>

    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg">
        <img src="https://epic.org/wp-content/uploads/bis-images/23043/aerial-surveillance-drones-scaled-1200x630-f50_50.jpg" alt="Pôle Drones" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-badge">
          <span class="material-symbols-outlined">flight</span>
          Pôle Drones
        </span>
        <h1>Solutions <span class="gradient-text">Aériennes</span> Innovantes</h1>
        <p>Cartographie, surveillance et inspection par drones professionnels.</p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Nos Services</span>
          <h2>Applications <span class="gradient-text">Drones</span></h2>
          <p>Des solutions aériennes pour tous vos besoins professionnels.</p>
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

    <!-- Showcase Section -->
    <section class="showcase-section">
      <div class="container">
        <div class="showcase-grid">
          <div class="showcase-content">
            <span class="section-badge">Technologie de Pointe</span>
            <h2>Flotte de Drones <span class="gradient-text">Professionnels</span></h2>
            <p>Nous utilisons les drones les plus avancés du marché pour garantir des résultats de haute qualité.</p>
            <div class="stats-row">
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Missions réalisées</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10,000+</span>
                <span class="stat-label">Hectares couverts</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">4K</span>
                <span class="stat-label">Résolution vidéo</span>
              </div>
            </div>
          </div>
          <div class="showcase-images">
            <img src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=600&q=80" alt="Drone en vol" class="img-main" />
            <img src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=400&q=80" alt="Capture drone" class="img-secondary" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sectors Section -->
    <section class="sectors-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Secteurs d'Application</span>
          <h2>Industries <span class="gradient-text">Servies</span></h2>
        </div>
        <div class="sectors-grid">
          <div class="sector-card" v-for="(sector, index) in sectors" :key="index">
            <span class="material-symbols-outlined">{{ sector.icon }}</span>
            <h3>{{ sector.title }}</h3>
            <p>{{ sector.description }}</p>
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
          <h2>Besoin d'une <span class="gradient-text">Mission Drone</span> ?</h2>
          <p>Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">arrow_forward</span>
            Demander un Devis
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
    icon: 'map',
    title: 'Cartographie Aérienne',
    description: 'Création de cartes et modèles 3D précis à partir de prises de vues aériennes.',
    features: ['Orthophotographies HD', 'Modèles 3D & MNT', 'Relevés topographiques']
  },
  {
    icon: 'agriculture',
    title: 'Agriculture de Précision',
    description: 'Surveillance des cultures et analyse de la santé des végétaux.',
    features: ['Index de végétation NDVI', 'Détection de stress', 'Cartographie des parcelles']
  },
  {
    icon: 'engineering',
    title: 'Inspection Industrielle',
    description: 'Inspection visuelle d\'infrastructures difficiles d\'accès.',
    features: ['Lignes électriques', 'Toitures & Bâtiments', 'Panneaux solaires']
  },
  {
    icon: 'videocam',
    title: 'Captation Vidéo',
    description: 'Prises de vues aériennes pour événements et communication.',
    features: ['Films d\'entreprise', 'Événements', 'Immobilier']
  }
])

const sectors = ref([
  { icon: 'construction', title: 'BTP & Construction', description: 'Suivi de chantier et inspection' },
  { icon: 'agriculture', title: 'Agriculture', description: 'Monitoring des cultures' },
  { icon: 'solar_power', title: 'Énergie', description: 'Inspection d\'infrastructures' },
  { icon: 'forest', title: 'Environnement', description: 'Cartographie écologique' },
  { icon: 'local_police', title: 'Sécurité', description: 'Surveillance de zones' },
  { icon: 'apartment', title: 'Immobilier', description: 'Photos & vidéos aériennes' }
])
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

/* Showcase Section */
.showcase-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.showcase-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.showcase-content > p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.stats-row {
  display: flex;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #10b981;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

.showcase-images {
  position: relative;
}

.showcase-images .img-main {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.showcase-images .img-secondary {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 180px;
  border-radius: 16px;
  border: 4px solid #0f0f25;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

/* Sectors Section */
.sectors-section {
  background: #ffffff;
}

.sectors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.sector-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.sector-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
}

.sector-card .material-symbols-outlined {
  font-size: 2.5rem;
  color: #10b981;
  margin-bottom: 1rem;
}

.sector-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.sector-card p {
  color: #64748b;
  font-size: 0.875rem;
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
  
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .sectors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .showcase-images .img-secondary {
    right: 20px;
    bottom: -20px;
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
  
  .sectors-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .sector-card {
    padding: 1.25rem;
  }
  
  .stats-row {
    flex-direction: column;
    gap: 1rem;
  }
  
  .stat-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .showcase-images .img-secondary {
    display: none;
  }
  
  .showcase-content h2 {
    font-size: 1.5rem;
  }
  
  .showcase-content > p {
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
  
  .floating-drone {
    width: 80px;
  }
}

/* Floating Drones Animation */
.floating-drones {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
  overflow: hidden;
}

.floating-drone {
  position: absolute;
  width: 150px;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.drone-1 {
  top: 20%;
  left: -150px;
  animation: flyDrone1 18s ease-in-out infinite;
}

.drone-2 {
  top: 60%;
  right: -150px;
  animation: flyDrone2 22s ease-in-out infinite;
  animation-delay: -5s;
}

@keyframes flyDrone1 {
  0% {
    left: -150px;
    top: 20%;
    transform: rotate(0deg);
  }
  25% {
    left: 30%;
    top: 25%;
    transform: rotate(5deg);
  }
  50% {
    left: 70%;
    top: 15%;
    transform: rotate(-5deg);
  }
  75% {
    left: 90%;
    top: 28%;
    transform: rotate(3deg);
  }
  100% {
    left: calc(100% + 150px);
    top: 20%;
    transform: rotate(0deg);
  }
}

@keyframes flyDrone2 {
  0% {
    right: -150px;
    top: 60%;
    transform: rotate(0deg) scaleX(-1);
  }
  25% {
    right: 25%;
    top: 65%;
    transform: rotate(-5deg) scaleX(-1);
  }
  50% {
    right: 55%;
    top: 55%;
    transform: rotate(5deg) scaleX(-1);
  }
  75% {
    right: 85%;
    top: 68%;
    transform: rotate(-3deg) scaleX(-1);
  }
  100% {
    right: calc(100% + 150px);
    top: 60%;
    transform: rotate(0deg) scaleX(-1);
  }
}
</style>
