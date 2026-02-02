<template>
  <div class="careers-page">
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
          <div class="internal-badge">CARRIÈRES & TALENTS</div>
          <h1>
            Bâtir l'avenir <span class="serif-text">ensemble</span> <br/>
            & <span class="highlight">innover en Afrique</span>
          </h1>
          <p class="hero-lead">
            Rejoignez une équipe de passionnés et contribuez à des projets technologiques qui transforment durablement notre continent.
          </p>
          <div class="hero-actions-v2">
            <a href="#form" class="btn-primary-v2">
              Postuler Maintenant
              <span class="material-symbols-outlined">south</span>
            </a>
          </div>
        </div>

        <div class="hero-image-v2">
          <div class="image-continuous image-careers"></div>
        </div>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section class="why-join-section">
      <div class="container">
        <div class="section-header center">
          <span class="section-badge">Pourquoi Nous Rejoindre</span>
          <h2>Votre Carrière <span class="gradient-text">Commence Ici</span></h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
            <div class="benefit-icon">
              <span class="material-symbols-outlined">{{ benefit.icon }}</span>
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="values-grid">
          <div class="values-content">
            <span class="section-badge">Notre Culture</span>
            <h2>Des Valeurs Qui <span class="gradient-text">Nous Unissent</span></h2>
            <p>Chez TechRoot, nous croyons en l'innovation, l'excellence et la collaboration. Notre équipe est composée de talents passionnés qui partagent une vision commune : transformer le paysage technologique africain.</p>
            <ul class="values-list">
              <li><span class="material-symbols-outlined">lightbulb</span> Innovation constante</li>
              <li><span class="material-symbols-outlined">groups</span> Travail d'équipe</li>
              <li><span class="material-symbols-outlined">trending_up</span> Croissance personnelle</li>
              <li><span class="material-symbols-outlined">diversity_3</span> Diversité et inclusion</li>
            </ul>
          </div>
          <div class="values-image">
            <img src="https://itsocial.fr/wp-content/uploads/2017/06/iStock-639221050.jpg" alt="Notre équipe" />
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form Section -->
    <section class="application-section">
      <div class="container">
        <div class="application-wrapper">
          <div class="application-info">
            <span class="section-badge">Candidature Spontanée</span>
            <h2>Postulez <span class="gradient-text">Maintenant</span></h2>
            <p>Vous êtes motivé(e) et passionné(e) par la technologie ? Même si aucune offre ne correspond à votre profil, envoyez-nous votre candidature. Nous sommes toujours à la recherche de talents exceptionnels.</p>
            
            <div class="application-tips">
              <h4>Conseils pour votre candidature :</h4>
              <ul>
                <li><span class="material-symbols-outlined">check_circle</span> Personnalisez votre lettre de motivation</li>
                <li><span class="material-symbols-outlined">check_circle</span> Mettez en avant vos projets personnels</li>
                <li><span class="material-symbols-outlined">check_circle</span> Partagez vos liens GitHub/Portfolio</li>
                <li><span class="material-symbols-outlined">check_circle</span> Soyez authentique et passionné</li>
              </ul>
            </div>
          </div>
          
          <div class="application-form-wrapper">
            <div class="form-header">
              <div class="form-icon">
                <span class="material-symbols-outlined">person_add</span>
              </div>
              <h3>Formulaire de Candidature</h3>
              <p>Remplissez le formulaire ci-dessous pour postuler</p>
            </div>
            
            <form 
              action="https://formsubmit.co/rh@techrootgroup.io" 
              method="POST"
              enctype="multipart/form-data"
              class="application-form"
            >
              <!-- FormSubmit Configuration -->
              <input type="hidden" name="_subject" value="Nouvelle candidature - TechRoot">
              <input type="hidden" name="_captcha" value="false">
              <input type="hidden" name="_template" value="table">
              <input type="hidden" name="_next" :value="currentUrl + '?success=true'">
              <input type="text" name="_honey" style="display:none">
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">
                    <span class="material-symbols-outlined">person</span>
                    Prénom *
                  </label>
                  <input type="text" id="firstName" name="prenom" v-model="form.firstName" required placeholder="Votre prénom" />
                </div>
                <div class="form-group">
                  <label for="lastName">
                    <span class="material-symbols-outlined">badge</span>
                    Nom *
                  </label>
                  <input type="text" id="lastName" name="nom" v-model="form.lastName" required placeholder="Votre nom" />
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">
                    <span class="material-symbols-outlined">alternate_email</span>
                    Email *
                  </label>
                  <input type="email" id="email" name="email" v-model="form.email" required placeholder="votre@email.com" />
                </div>
                <div class="form-group">
                  <label for="phone">
                    <span class="material-symbols-outlined">call</span>
                    Téléphone *
                  </label>
                  <input type="tel" id="phone" name="telephone" v-model="form.phone" required placeholder="+225 XX XX XX XX XX" />
                </div>
              </div>
              
              <div class="form-group">
                <label for="position">
                  <span class="material-symbols-outlined">work</span>
                  Poste souhaité *
                </label>
                <select id="position" name="poste" v-model="form.position" required>
                  <option value="">Sélectionnez un domaine</option>
                  <option value="Développeur Frontend">Développeur Frontend</option>
                  <option value="Développeur Backend">Développeur Backend</option>
                  <option value="Développeur Full Stack">Développeur Full Stack</option>
                  <option value="Développeur Mobile">Développeur Mobile</option>
                  <option value="Ingénieur Hardware/IoT">Ingénieur Hardware/IoT</option>
                  <option value="Ingénieur DevOps">Ingénieur DevOps</option>
                  <option value="Designer UI/UX">Designer UI/UX</option>
                  <option value="Chef de Projet">Chef de Projet</option>
                  <option value="Data Scientist/IA">Data Scientist/IA</option>
                  <option value="Technicien Drones">Technicien Drones</option>
                  <option value="Commercial/Marketing">Commercial/Marketing</option>
                  <option value="Stage/Alternance">Stage/Alternance</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="experience">
                    <span class="material-symbols-outlined">timeline</span>
                    Années d'expérience
                  </label>
                  <select id="experience" name="experience" v-model="form.experience">
                    <option value="">Sélectionnez</option>
                    <option value="Débutant (0-1 an)">Débutant (0-1 an)</option>
                    <option value="Junior (1-3 ans)">Junior (1-3 ans)</option>
                    <option value="Confirmé (3-5 ans)">Confirmé (3-5 ans)</option>
                    <option value="Senior (5+ ans)">Senior (5+ ans)</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="availability">
                    <span class="material-symbols-outlined">event_available</span>
                    Disponibilité
                  </label>
                  <select id="availability" name="disponibilite" v-model="form.availability">
                    <option value="">Sélectionnez</option>
                    <option value="Immédiate">Immédiate</option>
                    <option value="1 mois">1 mois</option>
                    <option value="2-3 mois">2-3 mois</option>
                    <option value="Plus de 3 mois">Plus de 3 mois</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="portfolio">
                  <span class="material-symbols-outlined">link</span>
                  LinkedIn / Portfolio / GitHub
                </label>
                <input type="url" id="portfolio" name="portfolio" v-model="form.portfolio" placeholder="https://linkedin.com/in/votre-profil" />
              </div>
              
              <div class="form-group">
                <label for="motivation">
                  <span class="material-symbols-outlined">edit_note</span>
                  Lettre de motivation *
                </label>
                <textarea id="motivation" name="motivation" v-model="form.motivation" required rows="5" placeholder="Présentez-vous et expliquez pourquoi vous souhaitez rejoindre TechRoot..."></textarea>
              </div>
              
              <div class="form-group">
                <label for="cv">
                  <span class="material-symbols-outlined">attach_file</span>
                  CV (PDF recommandé)
                </label>
                <div class="file-upload">
                  <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" @change="handleFileChange" />
                  <div class="file-upload-label">
                    <span class="material-symbols-outlined">cloud_upload</span>
                    <span v-if="!fileName">Cliquez pour télécharger votre CV</span>
                    <span v-else>{{ fileName }}</span>
                  </div>
                </div>
                <p class="file-hint">Formats acceptés : PDF, DOC, DOCX (max 5MB)</p>
              </div>
              
              <div class="form-group checkbox-group">
                <input type="checkbox" id="consent" v-model="form.consent" required />
                <label for="consent">J'accepte que mes données soient traitées pour ma candidature conformément à la politique de confidentialité</label>
              </div>
              
              <button type="submit" class="btn btn-primary btn-large btn-submit">
                <span class="material-symbols-outlined">send</span>
                Envoyer ma Candidature
              </button>
            </form>
            
            <div v-if="submitSuccess" class="success-message">
              <div class="success-icon">
                <span class="material-symbols-outlined">check_circle</span>
              </div>
              <h4>Candidature envoyée avec succès !</h4>
              <p>Merci pour votre intérêt. Notre équipe RH examinera votre candidature et vous contactera si votre profil correspond à nos besoins.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80" alt="Équipe TechRoot" />
        <div class="cta-overlay"></div>
      </div>
      <div class="container">
        <div class="cta-content">
          <h2>Des Questions sur les <span class="gradient-text">Carrières</span> ?</h2>
          <p>Notre équipe RH est disponible pour répondre à toutes vos questions.</p>
          <a href="mailto:rh@techrootgroup.io" class="btn btn-primary btn-large">
            <span class="material-symbols-outlined">mail</span>
            Contacter les RH
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  availability: '',
  portfolio: '',
  motivation: '',
  consent: false
})

const fileName = ref('')
const submitSuccess = ref(false)
const currentUrl = computed(() => typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '')

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  if (urlParams.get('success') === 'true') {
    submitSuccess.value = true
    window.history.replaceState({}, document.title, window.location.pathname)
  }
})

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
  }
}

const benefits = ref([
  {
    icon: 'rocket_launch',
    title: 'Projets Innovants',
    description: 'Travaillez sur des projets technologiques de pointe : IoT, IA, drones, énergie et plus encore.'
  },
  {
    icon: 'school',
    title: 'Formation Continue',
    description: 'Développez vos compétences avec des formations régulières et un accès aux dernières technologies.'
  },
  {
    icon: 'diversity_2',
    title: 'Équipe Dynamique',
    description: 'Rejoignez une équipe jeune, passionnée et multiculturelle dans un environnement stimulant.'
  },
  {
    icon: 'workspace_premium',
    title: 'Évolution de Carrière',
    description: 'Des opportunités de croissance et d\'évolution au sein d\'une entreprise en pleine expansion.'
  },
  {
    icon: 'balance',
    title: 'Équilibre Vie Pro/Perso',
    description: 'Flexibilité, télétravail partiel et respect de votre vie personnelle.'
  },
  {
    icon: 'handshake',
    title: 'Impact Réel',
    description: 'Contribuez à la transformation digitale de l\'Afrique et ayez un impact concret.'
  }
])
</script>

<style scoped>
/* New Hero Styles (Shared) */
.hero-v2 {
  position: relative;
  min-height: 80vh;
  background-color: #f0f7f4;
  padding-top: 120px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.internal-hero {
  min-height: 70vh;
  padding-bottom: 60px;
}

.hero-bg-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#064e3b 1.5px, transparent 1.5px);
  background-size: 60px 60px;
  opacity: 0.05;
}

.africa-silhouette-v2 {
  position: absolute;
  top: 10%;
  left: -5%;
  width: 90%;
  height: 90%;
  background-image: url('https://africadigitalalliance.com/wp-content/uploads/2023/04/Africa-Map-Big@3x.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.05;
  filter: sepia(1) saturate(0.5) brightness(1.2);
  pointer-events: none;
}

.orange-dot-focus {
  position: absolute;
  top: 25%;
  left: 3%;
  width: 20px;
  height: 20px;
  background: #f97316;
  border-radius: 50%;
}

.dot-green, .dot-blue {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-green { top: 30%; right: 40%; background: #10b981; }
.dot-blue { bottom: 35%; left: 45%; background: #0891b2; }

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;
}

.internal-badge {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #059669;
  margin-bottom: 1.5rem;
}

.hero-v2 h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1;
  color: #111827;
  margin-bottom: 1.5rem;
}

.serif-text {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-style: italic;
  color: #064e3b;
}

.highlight {
  color: #10b981;
}

.hero-lead {
  font-size: 1.2rem;
  color: #374151;
  line-height: 1.5;
  max-width: 520px;
  margin-bottom: 2.5rem;
}

.hero-image-v2 {
  position: relative;
  height: 500px;
  width: 100%;
}

.image-continuous {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(-25 300 300)'%3E%3Crect x='30' y='50' width='100' height='500' rx='50' fill='black' /%3E%3Crect x='175' y='20' width='100' height='560' rx='50' fill='black' /%3E%3Crect x='320' y='80' width='100' height='520' rx='50' fill='black' /%3E%3Crect x='465' y='180' width='100' height='380' rx='50' fill='black' /%3E%3C/g%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg transform='rotate(-25 300 300)'%3E%3Crect x='30' y='50' width='100' height='500' rx='50' fill='black' /%3E%3Crect x='175' y='20' width='100' height='560' rx='50' fill='black' /%3E%3Crect x='320' y='80' width='100' height='520' rx='50' fill='black' /%3E%3Crect x='465' y='180' width='100' height='380' rx='50' fill='black' /%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-size: contain;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.image-careers {
  background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1280&q=80');
}

.btn-primary-v2 {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: #111827;
  color: white;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
}

.btn-primary-v2:hover {
  background: #059669;
  transform: translateY(-3px);
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-lead { margin-inline: auto; }
  .hero-actions-v2 { justify-content: center; }
  .hero-image-v2 { height: 400px; }
}

@media (max-width: 768px) {
  .hero-v2 { padding-top: 100px; }
  .hero-image-v2 { height: 320px; }
}

/* Section Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  margin-bottom: 3rem;
}

.section-header.center {
  text-align: center;
}

.section-badge {
  display: inline-block;
  background: rgba(16, 185, 129, 0.1);
  color: #0d9668;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

/* Why Join Section */
.why-join-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.benefit-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.benefit-card:hover {
  transform: translateY(-5px);
  border-color: #0d9668;
  box-shadow: 0 20px 40px -10px rgba(13, 150, 104, 0.15);
}

.benefit-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(13, 150, 104, 0.1), rgba(6, 182, 212, 0.1));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.benefit-icon .material-symbols-outlined {
  font-size: 2rem;
  color: #0d9668;
}

.benefit-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.benefit-card p {
  color: #64748b;
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* Values Section */
.values-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.values-content h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.values-content > p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.values-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.values-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #334155;
  font-weight: 500;
}

.values-list .material-symbols-outlined {
  color: #0d9668;
  font-size: 1.25rem;
}

.values-image {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.values-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

/* Application Section */
.application-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.application-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.application-info h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
}

.application-info > p {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.application-tips {
  background: rgba(13, 150, 104, 0.05);
  border: 1px solid rgba(13, 150, 104, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
}

.application-tips h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #0d9668;
  margin-bottom: 1rem;
}

.application-tips ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.application-tips li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #475569;
  font-size: 0.9375rem;
}

.application-tips .material-symbols-outlined {
  color: #0d9668;
  font-size: 1.25rem;
}

/* Application Form */
.application-form-wrapper {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.application-form-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0d9668, #06b6d4);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #0d9668, #06b6d4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow: 0 8px 20px rgba(13, 150, 104, 0.3);
}

.form-icon .material-symbols-outlined {
  font-size: 2rem;
  color: white;
}

.form-header h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: #64748b;
  font-size: 0.95rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

.form-group label .material-symbols-outlined {
  font-size: 1.1rem;
  color: #0d9668;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  color: #1e293b;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #94a3b8;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0d9668;
  box-shadow: 0 0 0 4px rgba(13, 150, 104, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.file-upload {
  position: relative;
}

.file-upload input[type="file"] {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  color: #64748b;
  transition: all 0.3s ease;
}

.file-upload:hover .file-upload-label {
  border-color: #0d9668;
  background: rgba(13, 150, 104, 0.05);
}

.file-upload-label .material-symbols-outlined {
  font-size: 2rem;
  color: #0d9668;
}

.file-hint {
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.checkbox-group input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #0d9668;
}

.checkbox-group label {
  font-size: 0.875rem;
  color: #64748b;
  cursor: pointer;
  font-weight: normal;
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
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #0d9668;
  color: white;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.0625rem;
}

.btn-submit {
  width: 100%;
  justify-content: center;
  background: linear-gradient(135deg, #0d9668, #06b6d4);
  font-size: 1.1rem;
  padding: 1rem 2rem;
  margin-top: 0.5rem;
  box-shadow: 0 8px 20px rgba(13, 150, 104, 0.3);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(13, 150, 104, 0.4);
}

.success-message {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1));
  border: 2px solid #10b981;
  border-radius: 16px;
  margin-top: 1.5rem;
}

.success-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  animation: successPop 0.5s ease;
}

.success-icon .material-symbols-outlined {
  font-size: 2.5rem;
  color: white;
}

.success-message h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #10b981;
  margin-bottom: 0.5rem;
}

.success-message p {
  color: #475569;
  font-size: 0.95rem;
}

@keyframes successPop {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: 5rem 0;
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
  font-size: clamp(1.75rem, 4vw, 2.5rem);
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

.cta-content .btn-primary {
  background: white;
  color: #0d9668;
}

.cta-content .btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .values-grid,
  .application-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .values-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .values-list {
    grid-template-columns: 1fr;
  }
  
  .application-form-wrapper {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .page-hero {
    min-height: 45vh;
  }
  
  .hero-content h1 {
    font-size: 1.75rem;
  }
  
  .benefit-card {
    padding: 1.5rem;
  }
}
</style>
