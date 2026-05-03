<template>
  <div class="careers-waymo">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">Carrières & Talents</div>
          <h1>Bâtir l'avenir <span class="blue-text">ensemble</span> & innover en Afrique</h1>
          <p class="hero-sub">
            Rejoignez une équipe de passionnés et contribuez à des projets technologiques qui transforment durablement notre continent.
          </p>
          <div class="hero-actions">
            <a href="#apply" class="cta-circle-btn">
              <span>Postuler</span>
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="circular-mask">
            <div class="mask-image careers-hero-img"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits-section-waymo">
      <div class="container">
        <div class="section-header-waymo">
          <h2>Pourquoi nous rejoindre ?</h2>
          <p>Un environnement stimulant pour des talents exceptionnels.</p>
        </div>
        <div class="benefits-waymo-grid">
          <div class="benefit-waymo-card" v-for="(benefit, index) in benefits" :key="index">
            <div class="benefit-icon">
              <span class="material-symbols-outlined">{{ benefit.icon }}</span>
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form Section -->
    <section id="apply" class="apply-section-waymo">
      <div class="container">
        <div class="apply-container">
          <div class="apply-info">
            <h2>Candidature spontanée</h2>
            <p>Vous êtes motivé(e) et passionné(e) par la technologie ? Envoyez-nous votre candidature.</p>
            <div class="tips-waymo">
              <div class="tip-item" v-for="tip in tips" :key="tip">
                <span class="material-symbols-outlined">check_circle</span>
                <span>{{ tip }}</span>
              </div>
            </div>
          </div>

          <div class="form-wrapper-waymo">
            <form 
              action="https://formsubmit.co/rh@techrootgroup.io" 
              method="POST"
              enctype="multipart/form-data"
              class="waymo-form"
            >
              <input type="hidden" name="_next" :value="currentUrl + '?success=true'">
              
              <div class="form-grid">
                <div class="input-group">
                  <label>Prénom</label>
                  <input type="text" name="prenom" required placeholder="Jean">
                </div>
                <div class="input-group">
                  <label>Nom</label>
                  <input type="text" name="nom" required placeholder="Dupont">
                </div>
                <div class="input-group">
                  <label>Email</label>
                  <input type="email" name="email" required placeholder="jean@example.com">
                </div>
                <div class="input-group">
                  <label>Téléphone</label>
                  <input type="tel" name="telephone" required placeholder="+225 ...">
                </div>
              </div>

              <div class="input-group full">
                <label>Poste souhaité</label>
                <select name="poste" required>
                  <option value="">Sélectionnez un domaine</option>
                  <option v-for="pos in positions" :key="pos" :value="pos">{{ pos }}</option>
                </select>
              </div>

              <div class="input-group full">
                <label>Message de motivation</label>
                <textarea name="motivation" required rows="4" placeholder="Parlez-nous de vous..."></textarea>
              </div>

              <div class="input-group full">
                <label>CV (PDF)</label>
                <input type="file" name="cv" accept=".pdf" required>
              </div>

              <button type="submit" class="submit-btn-waymo">
                Envoyer ma candidature
              </button>
            </form>

            <div v-if="submitSuccess" class="success-banner">
              Candidature envoyée avec succès !
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const submitSuccess = ref(false)
const currentUrl = computed(() => typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '')

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('success') === 'true') {
    submitSuccess.value = true
    window.history.replaceState({}, document.title, window.location.pathname)
  }
})

const benefits = ref([
  { icon: 'rocket_launch', title: 'Projets Innovants', description: 'IoT, IA, drones et plus encore.' },
  { icon: 'school', title: 'Formation Continue', description: 'Accès aux dernières technologies.' },
  { icon: 'diversity_2', title: 'Équipe Dynamique', description: 'Environnement stimulant et multiculturel.' },
  { icon: 'workspace_premium', title: 'Évolution de Carrière', description: 'Opportunités de croissance réelles.' },
  { icon: 'balance', title: 'Équilibre Pro/Perso', description: 'Flexibilité et respect de la vie privée.' },
  { icon: 'handshake', title: 'Impact Réel', description: 'Transformation digitale du continent.' }
])

const tips = [
  'Personnalisez votre message',
  'Mettez en avant vos projets',
  'Partagez votre GitHub/Portfolio',
  'Soyez authentique'
]

const positions = [
  'Développeur Software',
  'Ingénieur Hardware/IoT',
  'Ingénieur Drones',
  'UI/UX Designer',
  'Chef de Projet',
  'Commercial/Marketing',
  'Stage/Alternance'
]
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

.circular-mask {
  width: 400px;
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
}

.careers-hero-img {
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80');
  background-size: cover;
}

/* Benefits */
.benefits-section-waymo { background: white; }
.section-header-waymo { text-align: center; margin-bottom: 80px; }
.section-header-waymo h2 { font-size: 3rem; margin-bottom: 1rem; }
.section-header-waymo p { color: #636366; font-size: 1.2rem; }

.benefits-waymo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.benefit-waymo-card {
  padding: 3rem;
  background: var(--waymo-light);
  border-radius: 40px;
  transition: background 0.3s;
}

.benefit-waymo-card:hover { background: #eaeaec; }

.benefit-icon { color: var(--waymo-blue); margin-bottom: 1.5rem; }
.benefit-icon .material-symbols-outlined { font-size: 2.5rem; }

.benefit-waymo-card h3 { font-size: 1.5rem; margin-bottom: 1rem; }
.benefit-waymo-card p { color: #636366; line-height: 1.6; }

/* Apply Section */
.apply-section-waymo { background: var(--waymo-light); }
.apply-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 6rem;
  align-items: start;
}

.apply-info h2 { font-size: 3.5rem; margin-bottom: 2rem; }
.apply-info p { font-size: 1.25rem; color: #636366; margin-bottom: 3rem; }

.tips-waymo { display: grid; gap: 1.5rem; }
.tip-item { display: flex; align-items: center; gap: 1rem; font-weight: 600; }
.tip-item .material-symbols-outlined { color: var(--waymo-blue); }

.form-wrapper-waymo {
  background: white;
  padding: 4rem;
  border-radius: 48px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.05);
}

.waymo-form { display: grid; gap: 2rem; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

.input-group label {
  display: block;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  color: #8e8e93;
}

.input-group input, .input-group select, .input-group textarea {
  width: 100%;
  padding: 1.25rem;
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.1);
  background: #f5f5f7;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input-group input:focus, .input-group select:focus, .input-group textarea:focus {
  outline: none;
  border-color: var(--waymo-blue);
}

.submit-btn-waymo {
  background: var(--waymo-dark);
  color: white;
  border: none;
  padding: 1.5rem;
  border-radius: 100px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn-waymo:hover { background: var(--waymo-blue); }

.success-banner {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #e1f5fe;
  color: #01579b;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .hero-container, .benefits-waymo-grid, .apply-container, .form-grid { grid-template-columns: 1fr; }
  .apply-info h2 { font-size: 2.5rem; }
  .form-wrapper-waymo { padding: 2rem; }
}
</style>
