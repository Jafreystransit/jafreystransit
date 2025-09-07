// Composable pour la gestion des formulaires
import { ref, reactive, computed, readonly } from 'vue'
import { validateForm, isFormValid } from '@/utils/validators.js'

/**
 * Composable pour gérer les formulaires avec validation
 * @param {Object} initialData - Données initiales du formulaire
 * @param {Object} validationRules - Règles de validation
 * @returns {Object} Méthodes et propriétés réactives pour le formulaire
 */
export function useForm(initialData = {}, validationRules = {}) {
  // État du formulaire
  const formData = reactive({ ...initialData })
  const errors = ref({})
  const isSubmitting = ref(false)
  const hasBeenSubmitted = ref(false)

  // Validation en temps réel
  const validate = () => {
    errors.value = validateForm(formData, validationRules)
    return isFormValid(errors.value)
  }

  // Validation d'un champ spécifique
  const validateField = (fieldName) => {
    if (validationRules[fieldName]) {
      const fieldRules = { [fieldName]: validationRules[fieldName] }
      const fieldData = { [fieldName]: formData[fieldName] }
      const fieldErrors = validateForm(fieldData, fieldRules)
      
      if (fieldErrors[fieldName]) {
        errors.value[fieldName] = fieldErrors[fieldName]
      } else {
        delete errors.value[fieldName]
      }
    }
  }

  // Propriétés calculées
  const isValid = computed(() => isFormValid(errors.value))
  const hasErrors = computed(() => Object.keys(errors.value).length > 0)
  const canSubmit = computed(() => isValid.value && !isSubmitting.value)

  // Réinitialiser le formulaire
  const reset = () => {
    Object.keys(formData).forEach(key => {
      formData[key] = initialData[key] || ''
    })
    errors.value = {}
    isSubmitting.value = false
    hasBeenSubmitted.value = false
  }

  // Définir les données du formulaire
  const setFormData = (data) => {
    Object.keys(data).forEach(key => {
      if (key in formData) {
        formData[key] = data[key]
      }
    })
  }

  // Obtenir les erreurs pour un champ
  const getFieldError = (fieldName) => {
    return errors.value[fieldName] || null
  }

  // Vérifier si un champ a une erreur
  const hasFieldError = (fieldName) => {
    return !!errors.value[fieldName]
  }

  // Soumettre le formulaire
  const submit = async (submitHandler) => {
    hasBeenSubmitted.value = true
    
    if (!validate()) {
      return false
    }

    isSubmitting.value = true
    
    try {
      const result = await submitHandler(formData)
      return result
    } catch (error) {
      console.error('Erreur lors de la soumission:', error)
      throw error
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    // État
    formData,
    errors: readonly(errors),
    isSubmitting: readonly(isSubmitting),
    hasBeenSubmitted: readonly(hasBeenSubmitted),
    
    // Propriétés calculées
    isValid,
    hasErrors,
    canSubmit,
    
    // Méthodes
    validate,
    validateField,
    reset,
    setFormData,
    getFieldError,
    hasFieldError,
    submit
  }
}
