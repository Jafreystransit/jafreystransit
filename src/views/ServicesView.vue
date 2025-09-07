<template>
  <div class="services-view">
    <div class="container">
      <header class="page-header">
        <h1>Nos Services de Transit</h1>
        <p class="lead">
          Solutions complètes de transport et logistique pour tous vos besoins
        </p>
      </header>

      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>

      <section class="cta-section">
        <h2>Besoin d'un devis personnalisé ?</h2>
        <p>Contactez-nous pour obtenir une estimation gratuite adaptée à vos besoins</p>
        <router-link to="/devis" class="btn btn-primary">
          Demander un devis
        </router-link>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ServicesView',
  setup() {
    const services = ref([
      {
        id: 1,
        title: 'Transport Routier',
        description: 'Transport de marchandises par voie routière, national et international',
        icon: 'fas fa-truck',
        features: [
          'Livraison express',
          'Suivi en temps réel',
          'Assurance complète',
          'Transport sécurisé'
        ]
      },
      {
        id: 2,
        title: 'Logistique & Entreposage',
        description: 'Solutions de stockage et gestion logistique complète',
        icon: 'fas fa-warehouse',
        features: [
          'Stockage sécurisé',
          'Gestion des stocks',
          'Préparation de commandes',
          'Distribution'
        ]
      },
      {
        id: 3,
        title: 'Transport Express',
        description: 'Livraisons urgentes et express pour vos besoins critiques',
        icon: 'fas fa-shipping-fast',
        features: [
          'Livraison 24h/48h',
          'Service prioritaire',
          'Suivi GPS',
          'Confirmation de livraison'
        ]
      },
      {
        id: 4,
        title: 'Dédouanement',
        description: 'Services douaniers et formalités administratives',
        icon: 'fas fa-file-contract',
        features: [
          'Déclarations douanières',
          'Gestion administrative',
          'Conseil réglementaire',
          'Suivi des procédures'
        ]
      }
    ])

    return {
      services
    }
  }
}
</script>

<style scoped>
.services-view {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-icon {
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.service-features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #ecf0f1;
}

.service-features li:last-child {
  border-bottom: none;
}

.cta-section {
  text-align: center;
  background: #f8f9fa;
  padding: 3rem 2rem;
  border-radius: 10px;
}

.cta-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
