// Fonctions de validation pour les formulaires

import { ERROR_MESSAGES } from './constants.js'

/**
 * Valide si un champ est requis
 * @param {any} value - La valeur à valider
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateRequired = (value) => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return ERROR_MESSAGES.REQUIRED_FIELD
  }
  return null
}

/**
 * Valide une adresse email
 * @param {string} email - L'email à valider
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateEmail = (email) => {
  if (!email) return null
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return ERROR_MESSAGES.INVALID_EMAIL
  }
  return null
}

/**
 * Valide un numéro de téléphone
 * @param {string} phone - Le numéro à valider
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validatePhone = (phone) => {
  if (!phone) return null
  
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Format international français
  if (cleaned.startsWith('+33')) {
    if (cleaned.length !== 12) {
      return ERROR_MESSAGES.INVALID_PHONE
    }
    return null
  }
  
  // Format local français
  if (cleaned.startsWith('0')) {
    if (cleaned.length !== 10) {
      return ERROR_MESSAGES.INVALID_PHONE
    }
    return null
  }
  
  return ERROR_MESSAGES.INVALID_PHONE
}

/**
 * Valide la longueur minimale d'un champ
 * @param {string} value - La valeur à valider
 * @param {number} minLength - La longueur minimale
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateMinLength = (value, minLength) => {
  if (!value) return null
  
  if (value.length < minLength) {
    return ERROR_MESSAGES.MIN_LENGTH(minLength)
  }
  return null
}

/**
 * Valide la longueur maximale d'un champ
 * @param {string} value - La valeur à valider
 * @param {number} maxLength - La longueur maximale
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateMaxLength = (value, maxLength) => {
  if (!value) return null
  
  if (value.length > maxLength) {
    return ERROR_MESSAGES.MAX_LENGTH(maxLength)
  }
  return null
}

/**
 * Valide un numéro de suivi
 * @param {string} trackingNumber - Le numéro de suivi
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateTrackingNumber = (trackingNumber) => {
  if (!trackingNumber) return ERROR_MESSAGES.REQUIRED_FIELD
  
  // Format: JT + 8 chiffres (ex: JT12345678)
  const trackingRegex = /^JT\d{8}$/
  if (!trackingRegex.test(trackingNumber.toUpperCase())) {
    return 'Format de numéro de suivi invalide (ex: JT12345678)'
  }
  return null
}

/**
 * Valide un poids
 * @param {number|string} weight - Le poids à valider
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateWeight = (weight) => {
  if (!weight) return null
  
  const numWeight = parseFloat(weight)
  if (isNaN(numWeight) || numWeight <= 0) {
    return 'Le poids doit être un nombre positif'
  }
  
  if (numWeight > 50000) { // 50 tonnes max
    return 'Le poids ne peut pas dépasser 50 tonnes'
  }
  
  return null
}

/**
 * Valide des dimensions
 * @param {string} dimensions - Les dimensions (format: L x l x H)
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateDimensions = (dimensions) => {
  if (!dimensions) return null
  
  const dimensionRegex = /^\d+\s*x\s*\d+\s*x\s*\d+$/i
  if (!dimensionRegex.test(dimensions)) {
    return 'Format de dimensions invalide (ex: 100 x 50 x 30)'
  }
  
  return null
}

/**
 * Valide un code postal français
 * @param {string} postalCode - Le code postal
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validatePostalCode = (postalCode) => {
  if (!postalCode) return null
  
  const postalRegex = /^\d{5}$/
  if (!postalRegex.test(postalCode)) {
    return 'Code postal invalide (5 chiffres requis)'
  }
  
  return null
}

/**
 * Valide une date
 * @param {string|Date} date - La date à valider
 * @param {boolean} futureOnly - Si true, seules les dates futures sont acceptées
 * @returns {string|null} Message d'erreur ou null si valide
 */
export const validateDate = (date, futureOnly = false) => {
  if (!date) return null
  
  const dateObj = new Date(date)
  if (isNaN(dateObj.getTime())) {
    return 'Date invalide'
  }
  
  if (futureOnly && dateObj < new Date()) {
    return 'La date doit être dans le futur'
  }
  
  return null
}

/**
 * Valide un formulaire complet
 * @param {Object} formData - Les données du formulaire
 * @param {Object} rules - Les règles de validation
 * @returns {Object} Objet contenant les erreurs par champ
 */
export const validateForm = (formData, rules) => {
  const errors = {}
  
  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field]
    const value = formData[field]
    
    for (const rule of fieldRules) {
      let error = null
      
      switch (rule.type) {
        case 'required':
          error = validateRequired(value)
          break
        case 'email':
          error = validateEmail(value)
          break
        case 'phone':
          error = validatePhone(value)
          break
        case 'minLength':
          error = validateMinLength(value, rule.value)
          break
        case 'maxLength':
          error = validateMaxLength(value, rule.value)
          break
        case 'weight':
          error = validateWeight(value)
          break
        case 'dimensions':
          error = validateDimensions(value)
          break
        case 'postalCode':
          error = validatePostalCode(value)
          break
        case 'date':
          error = validateDate(value, rule.futureOnly)
          break
        case 'trackingNumber':
          error = validateTrackingNumber(value)
          break
        case 'custom':
          error = rule.validator(value)
          break
      }
      
      if (error) {
        errors[field] = error
        break // Arrêter à la première erreur pour ce champ
      }
    }
  })
  
  return errors
}

/**
 * Vérifie si un formulaire est valide
 * @param {Object} errors - Les erreurs de validation
 * @returns {boolean} True si le formulaire est valide
 */
export const isFormValid = (errors) => {
  return Object.keys(errors).length === 0
}

// Règles de validation prédéfinies pour les formulaires courants
export const VALIDATION_RULES = {
  CONTACT_FORM: {
    name: [
      { type: 'required' },
      { type: 'minLength', value: 2 },
      { type: 'maxLength', value: 50 }
    ],
    email: [
      { type: 'required' },
      { type: 'email' }
    ],
    phone: [
      { type: 'phone' }
    ],
    subject: [
      { type: 'required' }
    ],
    message: [
      { type: 'required' },
      { type: 'minLength', value: 10 },
      { type: 'maxLength', value: 1000 }
    ]
  },
  
  QUOTE_FORM: {
    company: [
      { type: 'required' },
      { type: 'minLength', value: 2 },
      { type: 'maxLength', value: 100 }
    ],
    contactName: [
      { type: 'required' },
      { type: 'minLength', value: 2 },
      { type: 'maxLength', value: 50 }
    ],
    email: [
      { type: 'required' },
      { type: 'email' }
    ],
    phone: [
      { type: 'required' },
      { type: 'phone' }
    ],
    serviceType: [
      { type: 'required' }
    ],
    origin: [
      { type: 'required' },
      { type: 'minLength', value: 2 }
    ],
    destination: [
      { type: 'required' },
      { type: 'minLength', value: 2 }
    ],
    weight: [
      { type: 'weight' }
    ],
    dimensions: [
      { type: 'dimensions' }
    ],
    description: [
      { type: 'required' },
      { type: 'minLength', value: 10 },
      { type: 'maxLength', value: 2000 }
    ]
  },
  
  TRACKING_FORM: {
    trackingNumber: [
      { type: 'required' },
      { type: 'trackingNumber' }
    ]
  }
}
