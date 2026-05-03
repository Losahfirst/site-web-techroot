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
          <div class="internal-badge">PÔLE EVENTS</div>
          <h1>
            Expériences <span class="serif-text">mémorables</span> <br/>
            & <span class="highlight">digitalisation</span>
          </h1>
          <p class="hero-lead">
            Optimisez l'impact de vos événements grâce à des solutions technologiques innovantes : billetterie intelligente, streaming et gestion connectée.
          </p>
          <div class="hero-actions-v2">
            <a href="#services" class="btn-primary-v2">
              Solutions Événementielles
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>

        <div class="hero-image-v2">
          <div class="image-continuous image-events"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Nos Services</span>
          <h2>Gestion <span class="gradient-text">Événementielle</span> Complète</h2>
          <p>Améliorer l'expérience utilisateur, la sécurité et l'efficacité logistique de vos événements.</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section">
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <span class="section-badge">Notre Valeur Ajoutée</span>
            <h2>L'Excellence <span class="gradient-text">Digitale</span></h2>
            <p>Une expertise technologique au service de vos événements.</p>
            <div class="why-list">
              <div class="why-item" v-for="(item, index) in whyUs" :key="index">
                <span class="material-symbols-outlined">{{ item.icon }}</span>
                <div>
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="why-image">
            <img src="https://africarenewal.un.org/sites/default/files/styles/articles_main_page_image/public/images/4741837744592606339204696341965209800108767n0.jpg?itok=fLiDQ7n2" alt="Événement tech" />
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
          <h2>Un <span class="gradient-text">Événement</span> à Digitaliser ?</h2>
          <p>Contactez-nous pour optimiser la gestion de votre prochain événement.</p>
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
    icon: 'confirmation_number', 
    title: 'Plateformes Événementielles', 
    description: 'Billetterie en ligne, inscriptions, gestion des accès et solutions de streaming pour vos événements.' 
  },
  { 
    icon: 'videocam', 
    title: 'Création de Contenu & Média', 
    description: 'Couverture médiatique complète, captation vidéo, photos et diffusion en direct de vos événements.' 
  },
  { 
    icon: 'contactless', 
    title: 'RFID & Contrôle d\'Accès', 
    description: 'Solutions de sécurité et traçabilité : badges RFID, portiques d\'accès et gestion des équipements.' 
  },
  { 
    icon: 'analytics', 
    title: 'Analyse & Reporting', 
    description: 'Statistiques détaillées, mesure de performance et rapports post-événement pour optimiser vos futurs événements.' 
  },
  { 
    icon: 'support_agent', 
    title: 'Support Opérationnel', 
    description: 'Accompagnement complet avant, pendant et après l\'événement pour garantir son succès.' 
  },
  { 
    icon: 'devices', 
    title: 'Équipements Techniques', 
    description: 'Fourniture et installation d\'équipements : écrans, son, éclairage et matériel de diffusion.' 
  }
])

const whyUs = ref([
  { icon: 'transform', title: 'Digitalisation Complète', description: 'Transformation numérique de bout en bout de vos événements' },
  { icon: 'lock', title: 'Sécurité & Traçabilité', description: 'Contrôle d\'accès RFID et suivi en temps réel des participants' },
  { icon: 'thumb_up', title: 'Expérience Optimisée', description: 'Parcours fluide et intuitif pour participants et organisateurs' },
  { icon: 'bar_chart', title: 'Pilotage Data-Driven', description: 'Tableaux de bord et analytics pour des décisions éclairées' }
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
