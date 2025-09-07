// Fonctions utilitaires pour l'application Jafrey's Transit

/**
 * Formate un numéro pour l'affichage (ex: 1000 -> 1K)
 * @param {number} num - Le numéro à formater
 * @returns {string} Le numéro formaté
 */
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K'
  }
  return num.toString()
}

/**
 * Formate une date selon le format français
 * @param {Date|string} date - La date à formater
 * @param {string} format - Le format souhaité ('short', 'long', 'withTime')
 * @returns {string} La date formatée
 */
export const formatDate = (date, format = 'short') => {
  const dateObj = new Date(date)
  
  if (isNaN(dateObj.getTime())) {
    return 'Date invalide'
  }

  const options = {
    short: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    withTime: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }
  }

  return new Intl.DateTimeFormat('fr-FR', options[format]).format(dateObj)
}

/**
 * Formate un numéro de téléphone
 * @param {string} phone - Le numéro de téléphone
 * @returns {string} Le numéro formaté
 */
export const formatPhone = (phone) => {
  if (!phone) return ''
  
  // Supprime tous les caractères non numériques sauf le +
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Format français
  if (cleaned.startsWith('+33')) {
    const number = cleaned.slice(3)
    return `+33 ${number.slice(0, 1)} ${number.slice(1, 3)} ${number.slice(3, 5)} ${number.slice(5, 7)} ${number.slice(7, 9)}`
  }
  
  // Format local français
  if (cleaned.length === 10 && cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8, 10)}`
  }
  
  return phone
}

/**
 * Valide une adresse email
 * @param {string} email - L'email à valider
 * @returns {boolean} True si l'email est valide
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valide un numéro de téléphone français
 * @param {string} phone - Le numéro à valider
 * @returns {boolean} True si le numéro est valide
 */
export const isValidPhone = (phone) => {
  if (!phone) return false
  
  const cleaned = phone.replace(/[^\d+]/g, '')
  
  // Format international français
  if (cleaned.startsWith('+33')) {
    return cleaned.length === 12
  }
  
  // Format local français
  if (cleaned.startsWith('0')) {
    return cleaned.length === 10
  }
  
  return false
}

/**
 * Génère un slug à partir d'une chaîne
 * @param {string} text - Le texte à convertir
 * @returns {string} Le slug généré
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Capitalise la première lettre d'une chaîne
 * @param {string} str - La chaîne à capitaliser
 * @returns {string} La chaîne capitalisée
 */
export const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Tronque un texte à une longueur donnée
 * @param {string} text - Le texte à tronquer
 * @param {number} length - La longueur maximale
 * @param {string} suffix - Le suffixe à ajouter (défaut: '...')
 * @returns {string} Le texte tronqué
 */
export const truncate = (text, length = 100, suffix = '...') => {
  if (!text || text.length <= length) return text
  return text.substring(0, length).trim() + suffix
}

/**
 * Débounce une fonction
 * @param {Function} func - La fonction à débouncer
 * @param {number} wait - Le délai d'attente en ms
 * @returns {Function} La fonction débouncée
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle une fonction
 * @param {Function} func - La fonction à throttler
 * @param {number} limit - La limite en ms
 * @returns {Function} La fonction throttlée
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Génère un ID unique
 * @returns {string} Un ID unique
 */
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

/**
 * Copie du texte dans le presse-papiers
 * @param {string} text - Le texte à copier
 * @returns {Promise<boolean>} True si la copie a réussi
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback pour les navigateurs plus anciens
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (err) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

/**
 * Scroll fluide vers un élément
 * @param {string|Element} target - Le sélecteur ou l'élément cible
 * @param {number} offset - Le décalage en pixels (défaut: 0)
 */
export const scrollToElement = (target, offset = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Vérifie si un élément est visible dans le viewport
 * @param {Element} element - L'élément à vérifier
 * @returns {boolean} True si l'élément est visible
 */
export const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Formate un prix avec la devise
 * @param {number} amount - Le montant
 * @param {string} currency - La devise (défaut: 'EUR')
 * @returns {string} Le prix formaté
 */
export const formatPrice = (amount, currency = 'EUR') => {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currency
  })
  return formatter.format(amount)
}

/**
 * Calcule la distance entre deux points géographiques
 * @param {number} lat1 - Latitude du point 1
 * @param {number} lon1 - Longitude du point 1
 * @param {number} lat2 - Latitude du point 2
 * @param {number} lon2 - Longitude du point 2
 * @returns {number} La distance en kilomètres
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

/**
 * Détecte le type d'appareil
 * @returns {string} Le type d'appareil ('mobile', 'tablet', 'desktop')
 */
export const getDeviceType = () => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

/**
 * Vérifie si l'utilisateur préfère le mode sombre
 * @returns {boolean} True si le mode sombre est préféré
 */
export const prefersDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Sauvegarde des données dans le localStorage
 * @param {string} key - La clé de stockage
 * @param {any} data - Les données à sauvegarder
 * @returns {boolean} True si la sauvegarde a réussi
 */
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error)
    return false
  }
}

/**
 * Récupère des données du localStorage
 * @param {string} key - La clé de stockage
 * @param {any} defaultValue - La valeur par défaut
 * @returns {any} Les données récupérées ou la valeur par défaut
 */
export const getFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Erreur lors de la récupération:', error)
    return defaultValue
  }
}
