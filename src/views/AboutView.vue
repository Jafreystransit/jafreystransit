<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            À propos de
            <span class="company-name">
              <span class="company-jafreys">Jafreys</span>
              <span class="company-transit">Transit</span>
            </span>
          </h1>
          <p class="hero-subtitle">{{ companyInfo.tagline }}</p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">{{ companyInfo.stats.yearsExperience }}+</div>
              <div class="stat-label">Années d'expérience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ formatNumber(companyInfo.stats.clientsSatisfied) }}+</div>
              <div class="stat-label">Clients satisfaits</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ companyInfo.stats.countriesCovered }}+</div>
              <div class="stat-label">Pays desservis</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="company-story">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2>Notre Histoire</h2>
            <p>
              Fondée avec la vision de révolutionner le secteur du transport et de la logistique,
              {{ companyInfo.name }} a débuté ses activités avec une ambition claire : offrir des
              solutions de transport fiables, efficaces et adaptées aux besoins spécifiques de chaque client.
            </p>
            <p>
              Depuis nos débuts, nous avons construit notre réputation sur des valeurs solides :
              la fiabilité, la transparence, et un service client exceptionnel. Notre équipe
              passionnée travaille sans relâche pour garantir que vos marchandises arrivent
              à destination en parfait état et dans les délais convenus.
            </p>
            <p>
              Aujourd'hui, nous sommes fiers d'être reconnus comme un partenaire de confiance
              pour de nombreuses entreprises, des PME aux grandes corporations, qui nous font
              confiance pour leurs besoins de transport et de logistique.
            </p>
          </div>
          <div class="story-image">
            <div class="image-placeholder">
              <i class="fas fa-warehouse"></i>
              <p>Notre entrepôt moderne</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2>Nos Valeurs</h2>
          <p>Les principes qui guident notre action au quotidien</p>
        </div>
        <div class="values-grid">
          <div
            v-for="value in companyInfo.values"
            :key="value.title"
            class="value-card"
          >
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Notre Équipe</h2>
          <p>Des professionnels expérimentés à votre service</p>
        </div>
        <div class="team-grid">
          <div
            v-for="member in team"
            :key="member.id"
            class="team-card"
          >
            <div class="member-photo">
              <div class="member-placeholder">
                <i class="fas fa-user"></i>
                <span>{{ member.name.split(' ').map(n => n[0]).join('') }}</span>
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-position">{{ member.position }}</p>
              <p class="member-description">{{ member.description }}</p>
              <div class="member-contact">
                <a :href="`mailto:${member.email}`" class="contact-link">
                  <i class="fas fa-envelope"></i>
                </a>
                <a :href="`tel:${member.phone}`" class="contact-link">
                  <i class="fas fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision">
      <div class="container">
        <div class="mission-vision-grid">
          <div class="mission-card">
            <div class="card-icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3>Notre Mission</h3>
            <p>
              Faciliter les échanges commerciaux en offrant des solutions de transport
              et de logistique innovantes, fiables et durables. Nous nous engageons à
              accompagner nos clients dans leur croissance en leur fournissant des
              services de qualité supérieure.
            </p>
          </div>
          <div class="vision-card">
            <div class="card-icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3>Notre Vision</h3>
            <p>
              Devenir le leader régional du transport et de la logistique en Afrique
              de l'Ouest, reconnu pour notre excellence opérationnelle, notre innovation
              technologique et notre contribution au développement économique de la région.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="certifications-section">
      <div class="container">
        <div class="section-header">
          <h2>Nos Certifications</h2>
          <p>Gage de qualité et de professionnalisme</p>
        </div>
        <div class="certifications-grid">
          <div
            v-for="certification in companyInfo.certifications"
            :key="certification"
            class="certification-item"
          >
            <div class="certification-icon">
              <i class="fas fa-certificate"></i>
            </div>
            <span>{{ certification }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à nous faire confiance ?</h2>
          <p>Découvrez comment nous pouvons vous aider à optimiser vos opérations de transport</p>
          <div class="cta-actions">
            <BaseButton to="/services" variant="primary" size="large">
              <i class="fas fa-truck"></i>
              Nos Services
            </BaseButton>
            <BaseButton to="/contact" variant="outline" size="large">
              <i class="fas fa-envelope"></i>
              Nous Contacter
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { companyInfo, team } from '@/data/index.js'
import { BaseButton } from '@/components/index.js'
import { formatNumber } from '@/utils/index.js'

export default {
  name: 'AboutView',
  components: {
    BaseButton
  },
  setup() {
    return {
      companyInfo,
      team,
      formatNumber
    }
  }
}
</script>

<style scoped>
.about-view {
  min-height: 100vh;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 70%, #dc2626 100%);
  color: white;
  padding: 8rem 0 5rem 0; /* Plus de padding-top pour compenser le header */
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.company-name {
  display: inline-block;
}

.company-jafreys {
  color: #ffffff;
}

.company-transit {
  color: #dc2626;
  font-weight: 800;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.stat-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #dc2626;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* Company Story */
.company-story {
  padding: 5rem 0;
  background: white;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.story-text h2 {
  font-size: 2.5rem;
  color: #1e40af;
  margin-bottom: 2rem;
  font-weight: 700;
}

.story-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.story-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.story-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.story-image:hover .image-placeholder {
  transform: scale(1.05);
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #1e40af, #1e3a8a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
}

.image-placeholder i {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
}

.image-placeholder p {
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.9;
}

/* Values Section */
.values-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1e40af;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1e40af, #3b82f6);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.value-card:hover::before {
  transform: scaleX(1);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.value-icon {
  font-size: 3rem;
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  color: #dc2626;
  transform: scale(1.1);
}

.value-card h3 {
  font-size: 1.5rem;
  color: #1e40af;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  padding: 5rem 0;
  background: white;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.member-photo {
  height: 250px;
  overflow: hidden;
  position: relative;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-card:hover .member-placeholder {
  transform: scale(1.05);
}

.member-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e40af, #dc2626);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
  position: relative;
}

.member-placeholder i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
}

.member-placeholder span {
  font-size: 2rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.member-info {
  padding: 2rem;
  text-align: center;
}

.member-info h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.member-position {
  color: #3498db;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.member-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-contact {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.contact-link {
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}

/* Mission & Vision */
.mission-vision {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.mission-vision-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.mission-card,
.vision-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: all 0.3s ease;
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.card-icon {
  font-size: 3rem;
  color: #f39c12;
  margin-bottom: 1.5rem;
}

.mission-card h3,
.vision-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.mission-card p,
.vision-card p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
}

/* Certifications */
.certifications-section {
  padding: 5rem 0;
  background: white;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.certification-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.certification-item:hover {
  background: white;
  border-color: #3498db;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.certification-icon {
  font-size: 1.5rem;
  color: #f39c12;
}

.certification-item span {
  color: #2c3e50;
  font-weight: 500;
  text-align: center;
}

/* CTA Section */
.about-cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.value-card,
.team-card,
.certification-item {
  animation: fadeInUp 0.6s ease-out;
}

.value-card:nth-child(1) { animation-delay: 0.1s; }
.value-card:nth-child(2) { animation-delay: 0.2s; }
.value-card:nth-child(3) { animation-delay: 0.3s; }
.value-card:nth-child(4) { animation-delay: 0.4s; }

.team-card:nth-child(1) { animation-delay: 0.1s; }
.team-card:nth-child(2) { animation-delay: 0.2s; }
.team-card:nth-child(3) { animation-delay: 0.3s; }

/* Responsive Design */
@media (max-width: 768px) {
  .about-hero {
    padding: 6rem 0 3rem 0; /* Ajustement pour mobile */
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .stat-item {
    padding: 1.5rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .story-text h2 {
    font-size: 2rem;
  }

  .story-text p {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: 1.1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .value-card {
    padding: 2rem 1.5rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .mission-vision-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mission-card,
  .vision-card {
    padding: 2rem 1.5rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .about-hero {
    padding: 5rem 0 3rem 0; /* Garde un padding-top suffisant même sur mobile */
  }

  .hero-title {
    font-size: 2rem;
  }

  .company-story,
  .values-section,
  .team-section,
  .mission-vision,
  .certifications-section,
  .about-cta {
    padding: 3rem 0;
  }

  .image-placeholder {
    height: 250px;
  }

  .image-placeholder i {
    font-size: 3rem;
  }

  .image-placeholder p {
    font-size: 1rem;
  }

  .value-card {
    padding: 1.5rem 1rem;
  }

  .value-icon {
    font-size: 2.5rem;
  }

  .member-info {
    padding: 1.5rem;
  }

  .member-placeholder i {
    font-size: 2.5rem;
  }

  .member-placeholder span {
    font-size: 1.5rem;
    width: 50px;
    height: 50px;
  }

  .mission-card,
  .vision-card {
    padding: 1.5rem 1rem;
  }

  .card-icon {
    font-size: 2.5rem;
  }
}
</style>
