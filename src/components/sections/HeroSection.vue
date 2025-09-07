<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="company-name">
                <span class="company-jafreys">Jafreys</span>
                <span class="company-transit">Transit</span>
              </span>
            </h1>
            <p class="hero-subtitle">
              {{ companyInfo.tagline }}
            </p>
            <div class="hero-actions">
              <BaseButton 
                to="/devis" 
                variant="primary" 
                size="large"
                class="hero-cta"
              >
                <i class="fas fa-calculator"></i>
                Demander un devis gratuit
              </BaseButton>
              <BaseButton 
                to="/services" 
                variant="outline" 
                size="large"
                class="hero-secondary"
              >
                Découvrir nos services
              </BaseButton>
            </div>
          </div>
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
              <div class="stat-number">{{ formatNumber(companyInfo.stats.deliveriesCompleted) }}+</div>
              <div class="stat-label">Livraisons réalisées</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ companyInfo.stats.countriesCovered }}+</div>
              <div class="stat-label">Pays desservis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { companyInfo } from '@/data/index.js'
import { BaseButton } from '@/components/index.js'
import { formatNumber } from '@/utils/index.js'

export default {
  name: 'HeroSection',
  components: {
    BaseButton
  },
  setup() {
    return {
      companyInfo,
      formatNumber
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  padding: 120px 0 60px 0; /* Plus d'espace en haut et en bas */
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 70%, #dc2626 100%);
  background-image: url('/src/assets/images/hero/hero-transport.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 64, 175, 0.85);
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(30, 58, 138, 0.8) 70%, rgba(220, 38, 38, 0.6) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-text {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-cta {
  background: linear-gradient(45deg, #1e40af, #1e3a8a);
  border: none;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
  transition: all 0.3s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(30, 64, 175, 0.4);
  background: linear-gradient(45deg, #3b82f6, #1e40af);
}

.hero-secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(220, 38, 38, 0.8);
}

.hero-secondary:hover {
  background: #dc2626;
  color: white;
  border-color: #dc2626;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  color: white;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #dc2626;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
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

.hero-title {
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-actions {
  animation: fadeInUp 1s ease-out 0.4s both;
}

.hero-stats {
  animation: fadeInUp 1s ease-out 0.6s both;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 40px 0; /* Ajustement pour mobile */
    min-height: auto; /* Hauteur automatique sur mobile */
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-text {
    margin-bottom: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }

  .stat-item {
    padding: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 80px 0 30px 0; /* Optimisé pour très petits écrans */
    min-height: auto;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .hero-text {
    margin-bottom: 1.5rem;
  }

  .hero-actions {
    margin-bottom: 1.5rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .stat-item {
    padding: 1rem;
  }

  .stat-number {
    font-size: 1.8rem;
  }

  .hero-background {
    background-attachment: scroll;
  }
}

/* Scroll indicator */
.hero-section::after {
  content: '';
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 30px;
  background: white;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}
</style>
