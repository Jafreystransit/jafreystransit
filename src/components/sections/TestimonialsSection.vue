<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Ce que disent nos clients</h2>
        <p class="section-subtitle">
          La satisfaction de nos clients est notre priorité
        </p>
      </div>

      <div class="testimonials-stats">
        <div class="stat-item">
          <div class="stat-number">{{ testimonialStats.averageRating }}/5</div>
          <div class="stat-label">Note moyenne</div>
          <div class="stars">
            <i v-for="n in 5" :key="n" 
               :class="n <= Math.floor(testimonialStats.averageRating) ? 'fas fa-star' : 'far fa-star'">
            </i>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ testimonialStats.totalReviews }}+</div>
          <div class="stat-label">Avis clients</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ testimonialStats.satisfactionRate }}%</div>
          <div class="stat-label">Satisfaction</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">{{ testimonialStats.repeatCustomers }}%</div>
          <div class="stat-label">Clients fidèles</div>
        </div>
      </div>

      <div class="testimonials-carousel">
        <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="testimonial-slide"
          >
            <BaseCard variant="shadow" class="testimonial-card">
              <div class="testimonial-content">
                <div class="quote-icon">
                  <i class="fas fa-quote-left"></i>
                </div>
                <p class="testimonial-text">{{ testimonial.content }}</p>
                <div class="testimonial-rating">
                  <i v-for="n in 5" :key="n" 
                     :class="n <= testimonial.rating ? 'fas fa-star' : 'far fa-star'">
                  </i>
                </div>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <img :src="testimonial.image" :alt="testimonial.name" />
                </div>
                <div class="author-info">
                  <h4 class="author-name">{{ testimonial.name }}</h4>
                  <p class="author-position">{{ testimonial.position }}</p>
                  <p class="author-company">{{ testimonial.company }}</p>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <button 
          @click="prevSlide" 
          class="carousel-btn prev"
          :disabled="currentSlide === 0"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="carousel-dots">
          <button 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id"
            @click="goToSlide(index)"
            :class="['dot', { active: currentSlide === index }]"
          ></button>
        </div>
        
        <button 
          @click="nextSlide" 
          class="carousel-btn next"
          :disabled="currentSlide === testimonials.length - 1"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { testimonials, testimonialStats } from '@/data/testimonials.js'
import BaseCard from '@/components/ui/BaseCard.vue'

export default {
  name: 'TestimonialsSection',
  components: {
    BaseCard
  },
  setup() {
    const currentSlide = ref(0)
    let autoSlideInterval = null

    const nextSlide = () => {
      if (currentSlide.value < testimonials.length - 1) {
        currentSlide.value++
      } else {
        currentSlide.value = 0
      }
    }

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
      } else {
        currentSlide.value = testimonials.length - 1
      }
    }

    const goToSlide = (index) => {
      currentSlide.value = index
    }

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval)
      }
    }

    onMounted(() => {
      startAutoSlide()
    })

    onUnmounted(() => {
      stopAutoSlide()
    })

    return {
      testimonials,
      testimonialStats,
      currentSlide,
      nextSlide,
      prevSlide,
      goToSlide
    }
  }
}
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #f39c12;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

.stars {
  margin-top: 0.5rem;
}

.stars i {
  color: #f39c12;
  margin: 0 2px;
}

.testimonials-carousel {
  overflow: hidden;
  margin-bottom: 3rem;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  min-width: 100%;
  padding: 0 1rem;
}

.testimonial-card {
  background: white;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.testimonial-content {
  margin-bottom: 2rem;
}

.quote-icon {
  font-size: 2rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-rating {
  margin-bottom: 1rem;
}

.testimonial-rating i {
  color: #f39c12;
  margin-right: 3px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #2c3e50;
}

.author-position {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.25rem;
}

.author-company {
  font-size: 0.9rem;
  color: #3498db;
  font-weight: 500;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.carousel-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.carousel-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .testimonials-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonial-author {
    flex-direction: column;
    text-align: center;
  }
  
  .carousel-controls {
    gap: 1rem;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .testimonials-stats {
    grid-template-columns: 1fr;
  }
  
  .testimonial-slide {
    padding: 0;
  }
  
  .testimonial-card {
    padding: 1rem;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
}
</style>
