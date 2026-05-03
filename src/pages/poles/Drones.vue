<template>
  <div class="pole-page drones-page">
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
          <div class="internal-badge">PÔLE DRONES</div>
          <h1>
            Solutions <span class="serif-text">aériennes</span> <br/>
            & <span class="highlight">innovations drones</span>
          </h1>
          <p class="hero-lead">
            Cartographie de précision, surveillance industrielle et inspection technique par drones professionnels de dernière génération.
          </p>
          <div class="hero-actions-v2">
            <a href="#services" class="btn-primary-v2">
              Missions & Services
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>

        <div class="hero-image-v2">
          <div class="image-continuous image-drones"></div>
        </div>
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
  background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%);
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
  background: rgba(255, 107, 0, 0.1);
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
.modal-icon { width: 60px; height: 60px; background: rgba(255, 107, 0, 0.1); color: var(--waymo-blue); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
.modal-body h2 { font-family: var(--font-heading); font-size: 2rem; color: var(--waymo-text-dark); margin-bottom: 1rem; }
.modal-description { color: #64748b; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; }

/* Responsive */
@media (max-width: 768px) {
  .hero-modern, .hero-v2 { padding-top: 80px; }
  .hero-content h1, .hero-content-v2 h1 { font-size: 2.2rem; }
  .section-header h2 { font-size: 2rem; }
  .modal-content, .hero-container { grid-template-columns: 1fr; }
  .modal-image { height: 200px; }
}

/* Overrides for Legacy Templates */
.hero-v2, .internal-hero { min-height: 80vh; background-color: var(--waymo-dark); padding-top: 140px; display: flex; align-items: center; }
.hero-bg-shapes { display: block; opacity: 0.3; }
.hero-image-v2 { 
  display: block; 
  position: relative;
  z-index: 2;
}
.hero-container { 
  display: grid;
  grid-template-columns: 1.2fr 0.8fr; 
  gap: 4rem;
  align-items: center;
}

.image-continuous {
  width: 100%;
  aspect-ratio: 1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
}

.image-drones {
  background-image: url('https://us.123rf.com/450wm/anatolir/anatolir1808/anatolir180800116/112307458-contr%C3%B4lez-le-drone-sur-l-arri%C3%A8re-plan-du-pad-illustration-plate-du-drone-de-contr%C3%B4le-sur-fond-de.jpg?ver=6');
}
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


.internal-badge, .hero-badge { color: #FF6B00 !important; background: rgba(255, 107, 0, 0.15) !important; border: 1px solid rgba(255, 107, 0, 0.3) !important; }
</style>
