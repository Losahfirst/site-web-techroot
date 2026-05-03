<template>
  <div class="about-waymo">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">À propos de nous</div>
          <h1>L'Excellence <span class="blue-text">humaine</span> au service de la Tech</h1>
          <p class="hero-sub">
            Découvrez l'histoire, la vision et les valeurs qui font de TechRoot un leader panafricain de la transformation digitale.
          </p>
          <div class="hero-actions">
            <a href="#story" class="cta-circle-btn">
              <span>Histoire</span>
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="about-hero-img"></div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section id="story" class="story-section-waymo">
      <div class="container">
        <div class="story-layout">
          <div class="story-text">
            <h2>De la Vision à la Réalité</h2>
            <p>
              Basée à Abidjan, TechRoot est née d'une vision ambitieuse : accompagner 
              les entreprises ivoiriennes et africaines dans leur transformation numérique.
            </p>
            <p>
              Ce qui a commencé comme une petite équipe de passionnés est devenu en quelques 
              années l'un des acteurs majeurs de la tech en Côte d'Ivoire.
            </p>
          </div>
          <div class="story-stats">
            <div class="stat-item">
              <span class="stat-num">150+</span>
              <span class="stat-label">Projets réalisés</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">25+</span>
              <span class="stat-label">Experts dédiés</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-section-waymo">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card-waymo">
            <div class="icon-circle"><span class="material-symbols-outlined">visibility</span></div>
            <h3>Notre Vision</h3>
            <p>Être le partenaire technologique de référence en Afrique, en créant des solutions innovantes.</p>
          </div>
          <div class="mission-card-waymo">
            <div class="icon-circle"><span class="material-symbols-outlined">rocket_launch</span></div>
            <h3>Notre Mission</h3>
            <p>Accompagner les organisations dans leur transformation digitale avec des solutions sur-mesure.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section-waymo">
      <div class="container">
        <div class="section-header-waymo">
          <h2>Notre Direction</h2>
          <p>Des experts passionnés au service de votre réussite.</p>
        </div>
        <div class="team-waymo-grid">
          <div class="team-waymo-card" v-for="member in team" :key="member.name">
            <div class="team-img-wrap">
              <img :src="member.image" :alt="member.name">
              <a :href="member.linkedin" class="linkedin-btn" target="_blank">Li</a>
            </div>
            <h4>{{ member.name }}</h4>
            <p>{{ member.role }}</p>
          </div>
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
    role: 'CEO - Directeur Hardware', 
    image: '/images/team/dg.jpg',
    linkedin: 'https://www.linkedin.com/in/yann-olivier-akansie-kouame'
  },
  { 
    name: 'Yao Kouakou Wilfried', 
    role: 'CTO - Directeur Software', 
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
    role: 'COO - Directeur Drones', 
    image: '/images/team/coo.jpg',
    linkedin: 'https://www.linkedin.com/in/bi-nandi-pascal-axel-tra-b6ba84122'
  }
])
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
  margin-bottom: 3rem;
}

.cta-circle-btn {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--waymo-blue);
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: transform 0.3s;
}

.cta-circle-btn:hover { transform: scale(1.1); }

.hero-image-wrapper { display: flex; justify-content: flex-end; }

.about-hero-img {
  width: 500px;
  height: 500px;
  background-image: url('https://thumbs.dreamstime.com/b/construction-pc-avec-mat%C3%A9riel-%C3%A9lectronique-pi%C3%A8ces-et-composants-conception-bo%C3%AEtier-de-carte-m%C3%A8re-la-m%C3%A9moire-ram-l-ordinateur-260201391.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
}

@media (max-width: 768px) {
  .about-hero-img {
    width: 100%;
    height: 300px;
  }
}

/* Story */
.story-section-waymo { background: white; }
.story-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 4rem; align-items: center; }
.story-text h2 { font-size: 3.5rem; margin-bottom: 2rem; }
.story-text p { font-size: 1.25rem; color: #636366; line-height: 1.6; margin-bottom: 1.5rem; }

.story-stats { display: grid; gap: 2rem; }
.stat-item { border-left: 4px solid var(--waymo-blue); padding-left: 2rem; }
.stat-num { display: block; font-size: 3rem; font-weight: 800; color: var(--waymo-dark); }
.stat-label { color: #636366; font-weight: 600; }

/* Mission */
.mission-section-waymo { background: var(--waymo-blue); color: white; }
.mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
.mission-card-waymo { padding: 4rem; background: rgba(255,255,255,0.1); border-radius: 48px; backdrop-filter: blur(10px); }
.icon-circle { width: 64px; height: 64px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--waymo-blue); margin-bottom: 2rem; }
.mission-card-waymo h3 { font-size: 2rem; margin-bottom: 1rem; }
.mission-card-waymo p { font-size: 1.1rem; opacity: 0.9; }

/* Team */
.team-section-waymo { background: var(--waymo-light); }
.section-header-waymo { text-align: center; margin-bottom: 80px; }
.section-header-waymo h2 { font-size: 3rem; margin-bottom: 1rem; }

.team-waymo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.team-waymo-card { text-align: center; }
.team-img-wrap { position: relative; border-radius: 32px; overflow: hidden; margin-bottom: 1.5rem; }
.team-img-wrap img { width: 100%; aspect-ratio: 0.8; object-fit: cover; }
.linkedin-btn { position: absolute; bottom: 1rem; right: 1rem; width: 44px; height: 44px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--waymo-blue); font-weight: 800; text-decoration: none; }

.team-waymo-card h4 { font-size: 1.25rem; margin-bottom: 0.5rem; }
.team-waymo-card p { color: var(--waymo-blue); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }

@media (max-width: 1024px) {
  .hero-container, .story-layout, .mission-grid, .team-waymo-grid { grid-template-columns: 1fr; }
  .circular-mask { width: 300px; }
  .mission-card-waymo { padding: 2rem; }
}
</style>
