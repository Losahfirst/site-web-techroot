<template>
  <div class="pole-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80" alt="Pôle Events" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-badge">
          <span class="material-symbols-outlined">celebration</span>
          Pôle Events
        </span>
        <h1>Solutions <span class="gradient-text">Événementielles</span> Digitales</h1>
        <p>Digitaliser et optimiser l'organisation et la gestion de vos événements.</p>
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

/* Services Section */
.services-section {
  background: #f8fafc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
}

/* Why Section */
.why-section {
  background: #ffffff;
}

.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.why-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.why-content > p {
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.why-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.why-item {
  display: flex;
  gap: 1rem;
}

.why-item .material-symbols-outlined {
  font-size: 1.5rem;
  color: #10b981;
  background: rgba(16, 185, 129, 0.15);
  padding: 0.75rem;
  border-radius: 12px;
}

.why-item h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.why-item p {
  color: #64748b;
  font-size: 0.875rem;
}

.why-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.why-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .why-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
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
  
  .why-content h2 {
    font-size: 1.5rem;
  }
  
  .why-list {
    gap: 1rem;
  }
  
  .why-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .why-icon {
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
}
</style>
