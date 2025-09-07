<template>
  <section class="stats-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Pourquoi choisir Jafrey's Transit ?</h2>
        <p class="section-subtitle">
          Des chiffres qui parlent de notre expertise et de notre engagement
        </p>
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
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-description">{{ value.description }}</p>
        </div>
      </div>

      <div class="certifications">
        <h3 class="certifications-title">Nos certifications et agréments</h3>
        <div class="certifications-list">
          <div 
            v-for="certification in companyInfo.certifications" 
            :key="certification"
            class="certification-item"
          >
            <i class="fas fa-certificate"></i>
            <span>{{ certification }}</span>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <div class="cta-content">
          <h3>Prêt à nous faire confiance ?</h3>
          <p>Rejoignez nos {{ companyInfo.stats.clientsSatisfied }}+ clients satisfaits</p>
          <div class="cta-actions">
            <BaseButton to="/devis" variant="primary" size="large">
              <i class="fas fa-calculator"></i>
              Demander un devis
            </BaseButton>
            <BaseButton to="/contact" variant="outline" size="large">
              <i class="fas fa-phone"></i>
              Nous appeler
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { companyInfo } from '@/data/company.js'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'StatsSection',
  components: {
    BaseButton
  },
  setup() {
    return {
      companyInfo
    }
  }
}
</script>

<style scoped>
.stats-section {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  background: #f8f9fa;
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
  background: linear-gradient(90deg, #3498db, #e74c3c);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.value-card:hover::before {
  transform: scaleX(1);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  background: white;
}

.value-icon {
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  color: #e74c3c;
  transform: scale(1.1);
}

.value-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-description {
  color: #7f8c8d;
  line-height: 1.6;
  font-size: 1rem;
}

.certifications {
  background: #f8f9fa;
  padding: 3rem 2rem;
  border-radius: 15px;
  margin-bottom: 4rem;
  text-align: center;
}

.certifications-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 600;
}

.certifications-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.certification-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.certification-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.certification-item i {
  color: #f39c12;
  font-size: 1.2rem;
}

.certification-item span {
  color: #2c3e50;
  font-weight: 500;
}

.cta-section {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-section h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
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

.value-card {
  animation: fadeInUp 0.6s ease-out;
}

.value-card:nth-child(1) { animation-delay: 0.1s; }
.value-card:nth-child(2) { animation-delay: 0.2s; }
.value-card:nth-child(3) { animation-delay: 0.3s; }
.value-card:nth-child(4) { animation-delay: 0.4s; }

/* Responsive Design */
@media (max-width: 768px) {
  .stats-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .value-card {
    padding: 1.5rem;
  }
  
  .value-icon {
    font-size: 2.5rem;
  }
  
  .value-title {
    font-size: 1.3rem;
  }
  
  .certifications {
    padding: 2rem 1rem;
    margin-bottom: 3rem;
  }
  
  .certifications-title {
    font-size: 1.5rem;
  }
  
  .certifications-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .cta-section {
    padding: 3rem 1rem;
  }
  
  .cta-section h3 {
    font-size: 1.5rem;
  }
  
  .cta-section p {
    font-size: 1.1rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .value-card {
    padding: 1rem;
  }
  
  .value-icon {
    font-size: 2rem;
  }
  
  .value-title {
    font-size: 1.2rem;
  }
  
  .certifications {
    padding: 1.5rem 0.5rem;
  }
  
  .certification-item {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .cta-section {
    padding: 2rem 1rem;
    border-radius: 15px;
  }
}
</style>
