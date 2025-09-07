<template>
  <div class="quote-view">
    <div class="container">
      <header class="page-header">
        <h1>Demande de Devis</h1>
        <p class="lead">
          Obtenez un devis personnalisé pour vos besoins de transport et logistique
        </p>
      </header>

      <div class="quote-form-container">
        <form @submit.prevent="submitQuote" class="quote-form">
          <div class="form-section">
            <h2>Informations de contact</h2>
            <div class="form-row">
              <div class="form-group">
                <label for="company">Entreprise *</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="quote.company" 
                  required
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="contactName">Nom du contact *</label>
                <input 
                  type="text" 
                  id="contactName" 
                  v-model="quote.contactName" 
                  required
                  class="form-control"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="quote.email" 
                  required
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="phone">Téléphone *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="quote.phone" 
                  required
                  class="form-control"
                >
              </div>
            </div>
          </div>

          <div class="form-section">
            <h2>Détails de l'expédition</h2>
            <div class="form-row">
              <div class="form-group">
                <label for="serviceType">Type de service *</label>
                <select id="serviceType" v-model="quote.serviceType" required class="form-control">
                  <option value="">Sélectionnez un service</option>
                  <option value="transport-routier">Transport Routier</option>
                  <option value="transport-express">Transport Express</option>
                  <option value="logistique">Logistique & Entreposage</option>
                  <option value="dedouanement">Dédouanement</option>
                </select>
              </div>
              <div class="form-group">
                <label for="urgency">Urgence</label>
                <select id="urgency" v-model="quote.urgency" class="form-control">
                  <option value="standard">Standard</option>
                  <option value="express">Express (24-48h)</option>
                  <option value="urgent">Urgent (même jour)</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="origin">Lieu de départ *</label>
                <input 
                  type="text" 
                  id="origin" 
                  v-model="quote.origin" 
                  required
                  class="form-control"
                  placeholder="Ville, Code postal"
                >
              </div>
              <div class="form-group">
                <label for="destination">Lieu de destination *</label>
                <input 
                  type="text" 
                  id="destination" 
                  v-model="quote.destination" 
                  required
                  class="form-control"
                  placeholder="Ville, Code postal"
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="weight">Poids approximatif (kg)</label>
                <input 
                  type="number" 
                  id="weight" 
                  v-model="quote.weight"
                  class="form-control"
                  min="0"
                  step="0.1"
                >
              </div>
              <div class="form-group">
                <label for="dimensions">Dimensions (L x l x H en cm)</label>
                <input 
                  type="text" 
                  id="dimensions" 
                  v-model="quote.dimensions"
                  class="form-control"
                  placeholder="ex: 100 x 50 x 30"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="goodsType">Type de marchandise</label>
              <select id="goodsType" v-model="quote.goodsType" class="form-control">
                <option value="">Sélectionnez le type</option>
                <option value="general">Marchandise générale</option>
                <option value="fragile">Fragile</option>
                <option value="dangerous">Matières dangereuses</option>
                <option value="perishable">Périssable</option>
                <option value="valuable">Objets de valeur</option>
              </select>
            </div>

            <div class="form-group">
              <label for="description">Description détaillée *</label>
              <textarea 
                id="description" 
                v-model="quote.description" 
                required
                rows="4"
                class="form-control"
                placeholder="Décrivez votre demande, contraintes particulières, dates souhaitées..."
              ></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else>Demander un devis</span>
            </button>
          </div>
        </form>

        <div class="quote-info">
          <h3>Pourquoi choisir Jafrey's Transit ?</h3>
          <ul class="benefits-list">
            <li><i class="fas fa-check"></i> Devis gratuit sous 24h</li>
            <li><i class="fas fa-check"></i> Tarifs compétitifs</li>
            <li><i class="fas fa-check"></i> Suivi en temps réel</li>
            <li><i class="fas fa-check"></i> Assurance complète</li>
            <li><i class="fas fa-check"></i> Service client dédié</li>
          </ul>

          <div class="contact-urgent">
            <h4>Besoin urgent ?</h4>
            <p>Appelez-nous directement au</p>
            <a href="tel:+33123456789" class="phone-number">+33 1 23 45 67 89</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'QuoteView',
  setup() {
    const isSubmitting = ref(false)
    
    const quote = reactive({
      company: '',
      contactName: '',
      email: '',
      phone: '',
      serviceType: '',
      urgency: 'standard',
      origin: '',
      destination: '',
      weight: '',
      dimensions: '',
      goodsType: '',
      description: ''
    })

    const submitQuote = async () => {
      isSubmitting.value = true
      
      try {
        // Simulation d'envoi de devis
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        alert('Votre demande de devis a été envoyée avec succès ! Nous vous répondrons sous 24h.')
        
        // Reset du formulaire
        Object.keys(quote).forEach(key => {
          if (key === 'urgency') {
            quote[key] = 'standard'
          } else {
            quote[key] = ''
          }
        })
      } catch (error) {
        alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      quote,
      isSubmitting,
      submitQuote
    }
  }
}
</script>

<style scoped>
.quote-view {
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

.quote-form-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.quote-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ecf0f1;
}

.form-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.form-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #3498db;
}

.form-actions {
  text-align: center;
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.quote-info {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  height: fit-content;
}

.quote-info h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.benefits-list li {
  padding: 0.5rem 0;
  color: #2c3e50;
}

.benefits-list i {
  color: #27ae60;
  margin-right: 0.5rem;
}

.contact-urgent {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.contact-urgent h4 {
  color: #e74c3c;
  margin-bottom: 0.5rem;
}

.phone-number {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  color: #3498db;
  text-decoration: none;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .quote-form-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
