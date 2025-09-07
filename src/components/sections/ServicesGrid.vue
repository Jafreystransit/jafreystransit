<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Nos Services</h2>
        <p class="section-subtitle">
          Des solutions complètes pour tous vos besoins de transport et logistique
        </p>
      </div>

      <div class="services-grid">
        <BaseCard
          v-for="service in services"
          :key="service.id"
          variant="shadow"
          hoverable
          clickable
          @click="goToServices"
          class="service-card"
        >
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          
          <ul class="service-features">
            <li v-for="feature in service.features.slice(0, 3)" :key="feature">
              <i class="fas fa-check"></i>
              {{ feature }}
            </li>
          </ul>
          
          <div class="service-action">
            <BaseButton variant="ghost" size="small">
              En savoir plus
              <i class="fas fa-arrow-right"></i>
            </BaseButton>
          </div>
        </BaseCard>
      </div>

      <div class="services-cta">
        <h3>Besoin d'une solution personnalisée ?</h3>
        <p>Contactez-nous pour discuter de vos besoins spécifiques</p>
        <BaseButton to="/contact" variant="primary" size="large">
          <i class="fas fa-phone"></i>
          Nous contacter
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'
import { services } from '@/data/services.js'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'ServicesGrid',
  components: {
    BaseCard,
    BaseButton
  },
  setup() {
    const router = useRouter()

    const goToServices = () => {
      router.push('/services')
    }

    return {
      services,
      goToServices
    }
  }
}
</script>

<style scoped>
.services-section {
  padding: 5rem 0;
  background: #f8f9fa;
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
  color: #1e40af;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 3.5rem;
  color: #1e40af;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  color: #dc2626;
  transform: scale(1.1);
}

.service-title {
  font-size: 1.5rem;
  color: #1e40af;
  margin-bottom: 1rem;
  font-weight: 600;
}

.service-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
}

.service-features li {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: #1e40af;
  font-size: 0.95rem;
}

.service-features i {
  color: #dc2626;
  margin-right: 0.75rem;
  font-size: 0.8rem;
}

.service-action {
  margin-top: auto;
}

.services-cta {
  text-align: center;
  background: white;
  padding: 3rem 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.services-cta h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.services-cta p {
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card {
  animation: slideInUp 0.6s ease-out;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }

/* Responsive Design */
@media (max-width: 768px) {
  .services-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .service-icon {
    font-size: 3rem;
  }
  
  .services-cta {
    padding: 2rem 1rem;
  }
  
  .services-cta h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-header {
    margin-bottom: 2rem;
  }
  
  .services-grid {
    margin-bottom: 2rem;
  }
  
  .service-card {
    padding: 1rem;
  }
  
  .service-icon {
    font-size: 2.5rem;
  }
  
  .service-title {
    font-size: 1.3rem;
  }
}

/* Hover effects for better UX */
.service-card::before {
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

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card {
  position: relative;
  overflow: hidden;
}
</style>
