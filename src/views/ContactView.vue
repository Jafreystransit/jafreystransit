<template>
  <div class="contact-view">
    <div class="container">
      <header class="page-header">
        <h1>Contactez-nous</h1>
        <p class="lead">
          Notre équipe est à votre disposition pour répondre à toutes vos questions
        </p>
      </header>

      <div class="contact-content">
        <div class="contact-info">
          <h2>Informations de contact</h2>
          
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h3>Adresse</h3>
              <p>123 Avenue du Transport<br>75001 Paris, France</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h3>Téléphone</h3>
              <p>+33 1 23 45 67 89</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3>Email</h3>
              <p>contact@jafreys-transit.com</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="contact-details">
              <h3>Horaires d'ouverture</h3>
              <p>Lundi - Vendredi: 8h00 - 18h00<br>Samedi: 9h00 - 12h00</p>
            </div>
          </div>
        </div>

        <div class="contact-form-section">
          <h2>Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Nom complet *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                class="form-control"
              >
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                class="form-control"
              >
            </div>

            <div class="form-group">
              <label for="phone">Téléphone</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone"
                class="form-control"
              >
            </div>

            <div class="form-group">
              <label for="subject">Sujet *</label>
              <select id="subject" v-model="form.subject" required class="form-control">
                <option value="">Sélectionnez un sujet</option>
                <option value="devis">Demande de devis</option>
                <option value="info">Demande d'information</option>
                <option value="suivi">Suivi d'expédition</option>
                <option value="reclamation">Réclamation</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                rows="5"
                class="form-control"
                placeholder="Décrivez votre demande en détail..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <span v-if="isSubmitting">Envoi en cours...</span>
              <span v-else>Envoyer le message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'ContactView',
  setup() {
    const isSubmitting = ref(false)
    
    const form = reactive({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const submitForm = async () => {
      isSubmitting.value = true
      
      try {
        // Simulation d'envoi de formulaire
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
        
        // Reset du formulaire
        Object.keys(form).forEach(key => {
          form[key] = ''
        })
      } catch (error) {
        alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      isSubmitting,
      submitForm
    }
  }
}
</script>

<style scoped>
.contact-view {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-info h2,
.contact-form-section h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.contact-icon {
  font-size: 1.5rem;
  color: #3498db;
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.contact-details h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-details p {
  color: #7f8c8d;
  line-height: 1.6;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
