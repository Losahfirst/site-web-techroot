<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" alt="Notre équipe" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="hero-badge">À Propos de Nous</span>
        <h1>Une Équipe Passionnée par <span class="gradient-text">l'Innovation</span></h1>
        <p>Découvrez l'histoire, la vision et les valeurs qui font de TechRoot un leader de la transformation digitale.</p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <span class="section-badge">Notre Histoire</span>
            <h2>De la Vision à la <span class="gradient-text">Réalité</span></h2>
            <p>
              Basée à Abidjan, TechRoot est née d'une vision ambitieuse : accompagner 
              les entreprises ivoiriennes et africaines dans leur transformation numérique.
            </p>
            <p>
              Ce qui a commencé comme une petite équipe de passionnés du digital est devenu en quelques 
              années l'un des acteurs majeurs de la tech en Côte d'Ivoire, avec plus de 150 projets 
              réalisés et une équipe de 25 experts dédiés.
            </p>
          </div>
          <div class="story-image">
            <img src="https://img.freepik.com/photos-gratuite/personnes-au-bureau-pendant-journee-travail_23-2150690154.jpg?semt=ais_hybrid&w=740&q=80" alt="Notre histoire" />
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-section">
      <div class="container">
        <div class="vision-grid">
          <div class="vision-card">
            <div class="vision-icon">
              <span class="material-symbols-outlined">visibility</span>
            </div>
            <h3>Notre Vision</h3>
            <p>
              Être le partenaire technologique de référence en Afrique, en créant des solutions 
              innovantes qui transforment les entreprises et impactent positivement la société.
            </p>
          </div>
          <div class="vision-card">
            <div class="vision-icon">
              <span class="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3>Notre Mission</h3>
            <p>
              Accompagner les organisations dans leur transformation digitale en leur fournissant 
              des solutions technologiques sur-mesure, fiables et adaptées au contexte africain.
            </p>
          </div>
          <div class="vision-card">
            <div class="vision-icon">
              <span class="material-symbols-outlined">diversity_3</span>
            </div>
            <h3>Nos Valeurs</h3>
            <p>
              Innovation, Excellence, Intégrité, Collaboration et Engagement client sont les 
              piliers qui guident chacune de nos actions au quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CEO Section -->
    <section class="ceo-section">
      <div class="container">
        <div class="ceo-grid">
          <div class="ceo-image">
            <img src="/images/team/dg.jpg" alt="CEO" />
            <div class="ceo-pattern"></div>
          </div>
          <div class="ceo-content">
            <span class="section-badge">Message du CEO</span>
            <blockquote>
              "Notre ambition est de faire de l'Afrique un hub technologique mondial. Chaque jour, 
              nous travaillons avec passion pour transformer les défis digitaux de nos clients en 
              opportunités de croissance."
            </blockquote>
            <div class="ceo-info">
              <h4>Kouame Yann</h4>
              <p>CEO & Directeur du Département Hardware</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Notre Équipe</span>
          <h2>Des Experts <span class="gradient-text">Passionnés</span></h2>
          <p>Une équipe multidisciplinaire au service de votre réussite digitale.</p>
        </div>
        <div class="team-grid">
          <div class="team-card" v-for="(member, index) in team" :key="index">
            <div class="team-image">
              <img :src="member.image" :alt="member.name" />
              <div class="team-social">
                <a :href="member.linkedin" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="team-info">
              <h4>{{ member.name }}</h4>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Nos Valeurs</span>
          <h2>Ce Qui Nous <span class="gradient-text">Guide</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-number">0{{ index + 1 }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
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
          <h2>Rejoignez l'Aventure <span class="gradient-text">TechRoot</span></h2>
          <p>Vous partagez nos valeurs et souhaitez contribuer à notre mission ?</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">arrow_forward</span>
            Nous Contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  { 
    name: 'Kouame Yann', 
    role: 'CEO - Directeur Dpt Hardware', 
    image: '/images/team/dg.jpg',
    linkedin: 'https://www.linkedin.com/in/yann-olivier-akansie-kouame'
  },
  { 
    name: 'Yao Kouakou Wilfried', 
    role: 'CTO - Directeur Dpt Software', 
    image: '/images/team/cto.jpg',
    linkedin: 'https://www.linkedin.com/in/kouakou-wilfried-jean-jores-yao-0503b593'
  },
  { 
    name: 'Kouassi Ange', 
    role: 'CFO', 
    image: '/images/team/cfo.jpg',
    linkedin: 'https://www.linkedin.com/in/ange-wilfried-kouassi-1a8079150'
  },
  { 
    name: 'Tra bi Axel', 
    role: 'COO - Directeur Dpt Drones', 
    image: '/images/team/coo.jpg',
    linkedin: 'https://www.linkedin.com/in/bi-nandi-pascal-axel-tra-b6ba84122'
  }
])

const values = ref([
  { title: 'Innovation', description: 'Nous repoussons constamment les limites de la technologie pour offrir des solutions avant-gardistes.' },
  { title: 'Excellence', description: 'Chaque projet est une opportunité de dépasser les attentes et de livrer un travail d\'exception.' },
  { title: 'Intégrité', description: 'La transparence et l\'honnêteté sont au cœur de toutes nos relations professionnelles.' },
  { title: 'Collaboration', description: 'Nous croyons en la force du travail d\'équipe et du partage des connaissances.' },
  { title: 'Engagement', description: 'La satisfaction de nos clients est notre priorité absolue et notre plus grande motivation.' }
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
  padding: 6rem 0;
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
  margin-bottom: 4rem;
}

.section-header.center {
  text-align: center;
}

.section-header h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
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

/* Story Section */
.story-section {
  background: #f8fafc;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

.story-content > p {
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.timeline {
  margin-top: 2rem;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-left: 2px solid rgba(16, 185, 129, 0.3);
  padding-left: 1.5rem;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 1.75rem;
  width: 10px;
  height: 10px;
  background: #10b981;
  border-radius: 50%;
}

.timeline-year {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #10b981;
  min-width: 60px;
}

.timeline-content h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
}

.timeline-content p {
  font-size: 0.875rem;
  color: #94a3b8;
}

.story-image {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Vision Section */
.vision-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.vision-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.vision-card:hover {
  transform: translateY(-8px);
  border-color: #0d9668;
}

.vision-icon {
  width: 80px;
  height: 80px;
  background: #0d9668;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.vision-icon .material-symbols-outlined {
  font-size: 2rem;
  color: white;
}

.vision-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.vision-card p {
  color: #64748b;
  line-height: 1.7;
}

/* CEO Section */
.ceo-section {
  background: #ffffff;
}

.ceo-grid {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 4rem;
  align-items: center;
}

.ceo-image {
  position: relative;
}

.ceo-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.ceo-pattern {
  position: absolute;
  inset: 20px;
  border: 2px solid #10b981;
  border-radius: 20px;
  z-index: -1;
  transform: translate(20px, 20px);
}

.ceo-content blockquote {
  font-size: 1.5rem;
  font-style: italic;
  color: #334155;
  line-height: 1.7;
  margin-bottom: 2rem;
  position: relative;
  padding-left: 2rem;
  border-left: 4px solid #10b981;
}

.ceo-info h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.ceo-info p {
  color: #10b981;
}

/* Team Section */
.team-section {
  background: #f8fafc;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.team-card {
  text-align: center;
}

.team-image {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.team-image img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-social {
  position: absolute;
  inset: 0;
  background: rgba(16, 185, 129, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .team-social {
  opacity: 1;
}

.team-social a {
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  transition: transform 0.3s ease;
}

.team-social a:hover {
  transform: scale(1.1);
}

.team-info h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.team-info p {
  color: #10b981;
  font-size: 0.875rem;
}

/* Values Section */
.values-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.values-grid .value-card:nth-child(4),
.values-grid .value-card:nth-child(5) {
  grid-column: span 1;
}

.values-grid::after {
  content: '';
  display: none;
}

@media (min-width: 769px) {
  .values-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .values-grid .value-card {
    width: calc(33.333% - 1.5rem);
  }
  
  .values-grid .value-card:nth-child(4),
  .values-grid .value-card:nth-child(5) {
    width: calc(33.333% - 1.5rem);
  }
}

.value-card {
  padding: 2rem;
  border-radius: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
}

.value-number {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background: #0d9668;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.value-card p {
  color: #64748b;
  font-size: 0.9375rem;
  line-height: 1.6;
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
  
  .story-grid,
  .ceo-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .vision-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .ceo-image {
    max-width: 350px;
    margin: 0 auto;
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
  
  .story-content h2 {
    font-size: 1.5rem;
  }
  
  .story-content > p {
    font-size: 1rem;
  }
  
  .story-image {
    max-height: 300px;
  }
  
  .vision-card {
    padding: 1.5rem;
  }
  
  .vision-icon {
    width: 60px;
    height: 60px;
  }
  
  .vision-icon .material-symbols-outlined {
    font-size: 1.5rem;
  }
  
  .vision-card h3 {
    font-size: 1.25rem;
  }
  
  .vision-card p {
    font-size: 0.9rem;
  }
  
  .ceo-content blockquote {
    font-size: 1.125rem;
    padding-left: 1.5rem;
  }
  
  .ceo-pattern {
    display: none;
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    max-width: none;
  }
  
  .team-info h4 {
    font-size: 0.9rem;
  }
  
  .team-info p {
    font-size: 0.75rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    display: grid;
  }
  
  .values-grid .value-card {
    width: 100% !important;
  }
  
  .value-card {
    padding: 1.5rem;
  }
  
  .value-number {
    font-size: 2rem;
  }
  
  .cta-content h2 {
    font-size: 1.5rem;
  }
  
  .cta-content p {
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
  
  .team-grid {
    grid-template-columns: 1fr;
    max-width: 280px;
    margin: 0 auto;
  }
  
  .cta-actions {
    flex-direction: column;
  }
  
  .cta-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
