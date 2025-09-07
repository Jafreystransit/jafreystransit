// Composable pour les appels API
import { ref, readonly } from 'vue'

/**
 * Composable pour gérer les appels API
 * @returns {Object} Méthodes et propriétés réactives pour les API
 */
export function useApi() {
  const loading = ref(false)
  const error = ref(null)

  /**
   * Effectue un appel API générique
   * @param {Function} apiCall - La fonction d'appel API
   * @param {Object} options - Options pour l'appel
   * @returns {Promise} Résultat de l'appel API
   */
  const execute = async (apiCall, options = {}) => {
    const { 
      showLoading = true, 
      throwError = true,
      onSuccess = null,
      onError = null 
    } = options

    if (showLoading) {
      loading.value = true
    }
    error.value = null

    try {
      const result = await apiCall()
      
      if (onSuccess) {
        onSuccess(result)
      }
      
      return result
    } catch (err) {
      error.value = err.message || 'Une erreur est survenue'
      
      if (onError) {
        onError(err)
      }
      
      if (throwError) {
        throw err
      }
      
      return null
    } finally {
      if (showLoading) {
        loading.value = false
      }
    }
  }

  /**
   * Simule un appel API (pour le développement)
   * @param {any} data - Données à retourner
   * @param {number} delay - Délai en millisecondes
   * @param {boolean} shouldFail - Si true, simule une erreur
   * @returns {Promise} Données simulées
   */
  const mockApiCall = (data, delay = 1000, shouldFail = false) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Erreur simulée'))
        } else {
          resolve(data)
        }
      }, delay)
    })
  }

  /**
   * Envoie un formulaire de contact
   * @param {Object} contactData - Données du formulaire de contact
   * @returns {Promise} Résultat de l'envoi
   */
  const sendContactForm = async (contactData) => {
    return execute(() => mockApiCall(
      { success: true, message: 'Message envoyé avec succès' },
      2000
    ))
  }

  /**
   * Envoie une demande de devis
   * @param {Object} quoteData - Données du formulaire de devis
   * @returns {Promise} Résultat de l'envoi
   */
  const sendQuoteRequest = async (quoteData) => {
    return execute(() => mockApiCall(
      { 
        success: true, 
        message: 'Demande de devis envoyée avec succès',
        quoteId: 'QT' + Date.now()
      },
      2500
    ))
  }

  /**
   * Récupère les informations de suivi
   * @param {string} trackingNumber - Numéro de suivi
   * @returns {Promise} Informations de suivi
   */
  const getTrackingInfo = async (trackingNumber) => {
    // Simulation de données de suivi
    const mockTrackingData = {
      number: trackingNumber,
      status: 'in_transit',
      origin: 'Paris, France',
      destination: 'Lyon, France',
      shipDate: new Date('2024-01-15'),
      estimatedDelivery: new Date('2024-01-17'),
      events: [
        {
          date: new Date('2024-01-15T08:00:00'),
          type: 'pickup',
          title: 'Colis pris en charge',
          description: 'Votre colis a été récupéré chez l\'expéditeur',
          location: 'Paris, France'
        },
        {
          date: new Date('2024-01-15T14:30:00'),
          type: 'transit',
          title: 'En transit',
          description: 'Colis en cours de transport vers le centre de tri',
          location: 'Centre de tri Paris Nord'
        },
        {
          date: new Date('2024-01-16T09:15:00'),
          type: 'transit',
          title: 'Arrivé au centre de tri',
          description: 'Colis arrivé et en cours de traitement',
          location: 'Centre de tri Lyon'
        }
      ]
    }

    return execute(() => {
      // Simule une erreur si le numéro ne contient pas "test"
      if (!trackingNumber.toLowerCase().includes('test')) {
        return mockApiCall(null, 1500, true)
      }
      return mockApiCall(mockTrackingData, 1500)
    })
  }

  /**
   * Récupère la liste des services
   * @returns {Promise} Liste des services
   */
  const getServices = async () => {
    return execute(() => mockApiCall([
      {
        id: 1,
        name: 'Transport Routier',
        description: 'Transport de marchandises par voie routière',
        price: 'À partir de 50€'
      },
      {
        id: 2,
        name: 'Transport Express',
        description: 'Livraisons urgentes et express',
        price: 'À partir de 80€'
      }
    ]))
  }

  /**
   * Récupère les témoignages clients
   * @returns {Promise} Liste des témoignages
   */
  const getTestimonials = async () => {
    return execute(() => mockApiCall([
      {
        id: 1,
        name: 'Sophie Martin',
        company: 'Import Export SA',
        rating: 5,
        comment: 'Service excellent, très professionnel'
      }
    ]))
  }

  /**
   * Nettoie les erreurs
   */
  const clearError = () => {
    error.value = null
  }

  /**
   * Nettoie l'état de chargement
   */
  const clearLoading = () => {
    loading.value = false
  }

  return {
    // État
    loading: readonly(loading),
    error: readonly(error),
    
    // Méthodes génériques
    execute,
    mockApiCall,
    clearError,
    clearLoading,
    
    // Méthodes spécifiques
    sendContactForm,
    sendQuoteRequest,
    getTrackingInfo,
    getServices,
    getTestimonials
  }
}
