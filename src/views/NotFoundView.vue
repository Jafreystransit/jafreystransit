<template>
  <div class="not-found-view">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1 class="error-title">Page non trouvée</h1>
        <p class="error-description">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div class="error-actions">
          <BaseButton to="/" variant="primary" size="large">
            <i class="fas fa-home"></i>
            Retour à l'accueil
          </BaseButton>
          <BaseButton to="/contact" variant="outline" size="large">
            <i class="fas fa-envelope"></i>
            Nous contacter
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'NotFoundView',
  components: {
    BaseButton
  }
}
</script>

<style scoped>
.not-found-view {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}

.not-found-content {
  text-align: center;
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #3498db;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.error-description {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-description {
    font-size: 1.1rem;
  }
  
  .not-found-content {
    padding: 3rem 1.5rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
