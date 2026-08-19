<template>
  <div class="legal-page">
    <!-- Hero Section -->
    <section class="legal-hero">
      <div class="container">
        <div class="hero-badge">Cadre Juridique</div>
        <h1>Mentions <span class="orange-text">Légales</span></h1>
        <p class="hero-sub">
          Informations légales, réglementaires et conditions d'utilisation de la plateforme TechRoot Group.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="legal-content-section">
      <div class="container legal-container">
        <div class="legal-card">
          <div class="legal-item">
            <div class="legal-icon-wrap">
              <span class="material-symbols-outlined">apartment</span>
            </div>
            <div class="legal-text-body">
              <h2>1. Éditeur de la plateforme</h2>
              <p>Le présent site web accessible à l'adresse <strong>techrootgroup.io</strong> est édité par la société <strong>TechRoot Group</strong>.</p>
              <ul>
                <li><strong>Dénomination sociale :</strong> TechRoot Group</li>
                <li><strong>Siège social :</strong> Songon Kassemblé, Cité Promogim, Abidjan, Côte d'Ivoire</li>
                <li><strong>Téléphone :</strong> +225 07 87 18 04 56</li>
                <li><strong>Email :</strong> <a href="mailto:info@techrootgroup.io">info@techrootgroup.io</a></li>
                <li><strong>Directeur de la publication :</strong> Mr Kouamé (Directeur Général)</li>
              </ul>
            </div>
          </div>

          <div class="legal-item">
            <div class="legal-icon-wrap">
              <span class="material-symbols-outlined">dns</span>
            </div>
            <div class="legal-text-body">
              <h2>2. Hébergement</h2>
              <p>Le site est hébergé sur une infrastructure de pointe mondiale :</p>
              <ul>
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener">https://vercel.com</a></li>
              </ul>
            </div>
          </div>

          <div class="legal-item">
            <div class="legal-icon-wrap">
              <span class="material-symbols-outlined">copyright</span>
            </div>
            <div class="legal-text-body">
              <h2>3. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, graphismes, logos, images, vidéos, icônes, logiciels, architectures techniques) 
                est la propriété exclusive de <strong>TechRoot Group</strong> ou de ses partenaires et fait l'objet d'une protection au titre des lois nationales et internationales 
                sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, transmission ou dénaturation totale ou partielle du site ou de son contenu, 
                par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans l'autorisation préalable et expresse de TechRoot Group.
              </p>
            </div>
          </div>

          <div class="legal-item">
            <div class="legal-icon-wrap">
              <span class="material-symbols-outlined">security</span>
            </div>
            <div class="legal-text-body">
              <h2>4. Conditions d'utilisation & Responsabilité</h2>
              <p>
                TechRoot Group s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le site. 
                Toutefois, TechRoot Group ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
              </p>
              <p>
                L'utilisateur reconnaît utiliser le site sous sa responsabilité exclusive. TechRoot Group ne pourra être tenu responsable des dommages directs ou indirects 
                pouvant résulter de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
              </p>
            </div>
          </div>

          <div class="legal-item">
            <div class="legal-icon-wrap">
              <span class="material-symbols-outlined">link</span>
            </div>
            <div class="legal-text-body">
              <h2>5. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites web tiers. TechRoot Group n'exerce aucun contrôle sur ces sites et décline toute responsabilité 
                quant à leur contenu, fonctionnement ou politiques de confidentialité.
              </p>
            </div>
          </div>

          <div class="legal-item">
            <div class="legal-icon-wrap">
              <span class="material-symbols-outlined">gavel</span>
            </div>
            <div class="legal-text-body">
              <h2>6. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes mentions légales sont régies par le droit en vigueur en République de Côte d'Ivoire. 
                En cas de litige relatif à l'interprétation ou à l'exécution des présentes, et à défaut de résolution amiable, 
                les tribunaux compétents d'Abidjan seront seuls habilités à en connaître.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page Mentions Légales
</script>

<style scoped>
.legal-page {
  background-color: var(--waymo-light);
  min-height: 100vh;
}

.legal-hero {
  background-color: var(--waymo-dark);
  padding: 150px 0 80px;
  color: white;
  text-align: center;
}

.hero-badge {
  color: var(--waymo-blue);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.legal-hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
}

.orange-text {
  color: var(--waymo-blue);
}

.hero-sub {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.15rem;
  max-width: 680px;
  margin: 0 auto;
  line-height: 1.6;
}

.legal-content-section {
  padding: 80px 0 120px;
}

.legal-container {
  max-width: 960px;
  margin: 0 auto;
}

.legal-card {
  background: white;
  border-radius: 28px;
  padding: 3.5rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
}

.legal-item {
  display: flex;
  gap: 2rem;
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.legal-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.legal-icon-wrap {
  width: 52px;
  height: 52px;
  background: rgba(255, 107, 0, 0.1);
  color: var(--waymo-blue);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.legal-icon-wrap .material-symbols-outlined {
  font-size: 26px;
}

.legal-text-body {
  flex: 1;
}

.legal-text-body h2 {
  font-size: 1.45rem;
  color: var(--waymo-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.legal-text-body p {
  color: #4b5563;
  line-height: 1.7;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.legal-text-body p:last-child {
  margin-bottom: 0;
}

.legal-text-body ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.legal-text-body li {
  color: #4b5563;
  line-height: 1.8;
  font-size: 0.95rem;
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.35rem;
}

.legal-text-body li::before {
  content: "•";
  color: var(--waymo-blue);
  font-weight: bold;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: -2px;
}

.legal-text-body a {
  color: var(--waymo-blue);
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2s;
}

.legal-text-body a:hover {
  text-decoration: underline;
  opacity: 0.85;
}

@media (max-width: 768px) {
  .legal-card {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
  .legal-item {
    flex-direction: column;
    gap: 1rem;
  }
  .legal-hero {
    padding: 120px 0 60px;
  }
}
</style>
