<template>
  <div class="contact-waymo">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-content">
          <div class="hero-badge">Contactez-nous</div>
          <h1>Commençons <span class="blue-text">ensemble</span> votre révolution</h1>
          <p class="hero-sub">
            Notre équipe est là pour répondre à vos questions et vous accompagner dans vos ambitions digitales les plus audacieuses.
          </p>
          <div class="hero-actions">
            <a href="#contact-form" class="cta-circle-btn">
              <span>Message</span>
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="contact-hero-img"></div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info-section-waymo">
      <div class="container">
        <div class="info-waymo-grid">
          <div class="info-waymo-card" v-for="info in contactInfos" :key="info.title">
            <div class="info-icon">
              <span class="material-symbols-outlined">{{ info.icon }}</span>
            </div>
            <h3>{{ info.title }}</h3>
            <p v-html="info.content"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact-form" class="form-section-waymo">
      <div class="container">
        <div class="form-waymo-container">
          <div class="form-waymo-header">
            <h2>Parlons de votre projet</h2>
            <p>Remplissez le formulaire et nous vous répondrons sous 24h.</p>
          </div>
          
          <form 
            action="https://formsubmit.co/info@techrootgroup.io" 
            method="POST"
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
                <input type="tel" name="telephone" placeholder="+225 ...">
              </div>
            </div>

            <div class="input-group full">
              <label>Sujet</label>
              <select name="sujet" required>
                <option value="">Choisissez un sujet</option>
                <option v-for="sub in subjects" :key="sub" :value="sub">{{ sub }}</option>
              </select>
            </div>

            <div class="input-group full">
              <label>Message</label>
              <textarea name="message" required rows="5" placeholder="Décrivez votre besoin..."></textarea>
            </div>

            <button type="submit" class="submit-btn-waymo">
              Envoyer le message
            </button>
          </form>

          <div v-if="submitSuccess" class="success-banner">
            Message envoyé avec succès !
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section-waymo">
      <div class="container">
        <div class="section-header-waymo">
          <h2>Questions Fréquentes</h2>
        </div>
        <div class="faq-waymo-grid">
          <div 
            class="faq-waymo-item" 
            v-for="(faq, index) in faqs" 
            :key="index"
            :class="{ active: activeFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-q">
              <h4>{{ faq.question }}</h4>
              <span class="material-symbols-outlined">{{ activeFaq === index ? 'remove' : 'add' }}</span>
            </div>
            <div class="faq-a" v-if="activeFaq === index">
              <p>{{ faq.answer }}</p>
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
const activeFaq = ref(null)

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('success') === 'true') {
    submitSuccess.value = true
    window.history.replaceState({}, document.title, window.location.pathname)
  }
})

const contactInfos = [
  { icon: 'location_on', title: 'Adresse', content: 'Songon Kassemblé, Cité Promogim<br>Abidjan, Côte d\'Ivoire' },
  { icon: 'mail', title: 'Email', content: 'info@techrootgroup.io' },
  { icon: 'call', title: 'Téléphone', content: '+225 07 87 18 04 56' },
  { icon: 'schedule', title: 'Horaires', content: 'Lun - Ven : 08h - 18h' }
]

const subjects = ['Nouveau projet', 'Demande de devis', 'Partenariat', 'Autre']

const faqs = ref([
  { question: 'Quels types de projets réalisez-vous ?', answer: 'Sites web, apps mobiles, e-commerce, IoT, drones et plus.' },
  { question: 'Quel est le délai moyen ?', answer: 'De 2 semaines à 6 mois selon la complexité.' },
  { question: 'Comment se déroule un projet ?', answer: 'Analyse, conception, développement agile et tests.' },
  { question: 'Proposez-vous un support ?', answer: 'Oui, nous offrons maintenance et évolutions.' },
  { question: 'Travaillez-vous à l\'international ?', answer: 'Oui, dans toute l\'Afrique et au-delà.' }
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

.hero-image-wrapper { 
  display: flex; 
  justify-content: flex-end;
}

.contact-hero-img {
  width: 500px;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
}

/* Info */
.info-section-waymo { background: white; }
.info-waymo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
.info-waymo-card { padding: 3rem; background: var(--waymo-light); border-radius: 40px; }
.info-icon { color: var(--waymo-blue); margin-bottom: 1.5rem; }
.info-icon .material-symbols-outlined { font-size: 2.5rem; }
.info-waymo-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }
.info-waymo-card p { color: #636366; line-height: 1.5; }

/* Form */
.form-section-waymo { background: var(--waymo-light); }
.form-waymo-container { max-width: 800px; margin: 0 auto; background: white; padding: 4rem; border-radius: 48px; box-shadow: 0 20px 60px rgba(0,0,0,0.05); }
.form-waymo-header { text-align: center; margin-bottom: 3rem; }
.form-waymo-header h2 { font-size: 3rem; margin-bottom: 1rem; }
.form-waymo-header p { color: #636366; font-size: 1.1rem; }

.waymo-form { display: grid; gap: 2rem; }
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

.input-group label { display: block; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; color: #8e8e93; }
.input-group input, .input-group select, .input-group textarea { width: 100%; padding: 1.25rem; border-radius: 16px; border: 1px solid rgba(0,0,0,0.1); background: #f5f5f7; font-size: 1rem; transition: border-color 0.3s; }
.input-group input:focus, .input-group select:focus, .input-group textarea:focus { outline: none; border-color: var(--waymo-blue); }

.submit-btn-waymo { background: var(--waymo-dark); color: white; border: none; padding: 1.5rem; border-radius: 100px; font-weight: 700; font-size: 1.1rem; cursor: pointer; transition: background 0.3s; }
.submit-btn-waymo:hover { background: var(--waymo-blue); }

/* FAQ */
.faq-section-waymo { background: white; }
.section-header-waymo { text-align: center; margin-bottom: 60px; }
.section-header-waymo h2 { font-size: 3rem; }
.faq-waymo-grid { max-width: 800px; margin: 0 auto; display: grid; gap: 1rem; }
.faq-waymo-item { border: 1px solid #eaeaec; border-radius: 24px; padding: 1.5rem 2rem; cursor: pointer; transition: background 0.3s; }
.faq-waymo-item:hover { background: var(--waymo-light); }
.faq-waymo-item.active { border-color: var(--waymo-blue); }
.faq-q { display: flex; justify-content: space-between; align-items: center; }
.faq-q h4 { font-size: 1.1rem; margin: 0; }
.faq-a { margin-top: 1.5rem; color: #636366; line-height: 1.6; }

@media (max-width: 1024px) {
  .hero-container, .info-waymo-grid, .form-grid { grid-template-columns: 1fr; }
  .form-waymo-container { padding: 2rem; }
}
</style>
