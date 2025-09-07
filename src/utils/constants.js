// Constants pour l'application Jafrey's Transit

// Configuration de l'entreprise
export const COMPANY_CONFIG = {
  NAME: "Jafreys Transit",
  TAGLINE: "Votre partenaire de confiance pour le transport et la logistique",
  PHONE: "+33 1 23 45 67 89",
  EMAIL: "contact@jafreys-transit.com",
  ADDRESS: {
    STREET: "123 Avenue du Transport",
    CITY: "Paris",
    POSTAL_CODE: "75001",
    COUNTRY: "France"
  }
}

// Types de services
export const SERVICE_TYPES = {
  ROAD_TRANSPORT: 'transport-routier',
  EXPRESS_TRANSPORT: 'transport-express',
  LOGISTICS: 'logistique',
  CUSTOMS: 'dedouanement'
}



// Types de marchandises
export const GOODS_TYPES = {
  GENERAL: 'general',
  FRAGILE: 'fragile',
  DANGEROUS: 'dangerous',
  PERISHABLE: 'perishable',
  VALUABLE: 'valuable'
}

// Labels des types de marchandises
export const GOODS_TYPE_LABELS = {
  [GOODS_TYPES.GENERAL]: 'Marchandise générale',
  [GOODS_TYPES.FRAGILE]: 'Fragile',
  [GOODS_TYPES.DANGEROUS]: 'Matières dangereuses',
  [GOODS_TYPES.PERISHABLE]: 'Périssable',
  [GOODS_TYPES.VALUABLE]: 'Objets de valeur'
}

// Niveaux d'urgence
export const URGENCY_LEVELS = {
  STANDARD: 'standard',
  EXPRESS: 'express',
  URGENT: 'urgent'
}

// Labels des niveaux d'urgence
export const URGENCY_LABELS = {
  [URGENCY_LEVELS.STANDARD]: 'Standard',
  [URGENCY_LEVELS.EXPRESS]: 'Express (24-48h)',
  [URGENCY_LEVELS.URGENT]: 'Urgent (même jour)'
}

// Sujets de contact
export const CONTACT_SUBJECTS = {
  QUOTE: 'devis',
  INFO: 'info',
  COMPLAINT: 'reclamation',
  OTHER: 'autre'
}

// Labels des sujets de contact
export const CONTACT_SUBJECT_LABELS = {
  [CONTACT_SUBJECTS.QUOTE]: 'Demande de devis',
  [CONTACT_SUBJECTS.INFO]: 'Demande d\'information',
  [CONTACT_SUBJECTS.COMPLAINT]: 'Réclamation',
  [CONTACT_SUBJECTS.OTHER]: 'Autre'
}

// Configuration des réseaux sociaux
export const SOCIAL_NETWORKS = {
  FACEBOOK: {
    name: 'Facebook',
    icon: 'fab fa-facebook-f',
    url: 'https://facebook.com/jafreys-transit'
  },
  LINKEDIN: {
    name: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
    url: 'https://linkedin.com/company/jafreys-transit'
  },
  TWITTER: {
    name: 'Twitter',
    icon: 'fab fa-twitter',
    url: 'https://twitter.com/jafreys_transit'
  },
  INSTAGRAM: {
    name: 'Instagram',
    icon: 'fab fa-instagram',
    url: 'https://instagram.com/jafreys_transit'
  }
}

// Configuration des horaires
export const BUSINESS_HOURS = {
  WEEKDAYS: {
    OPEN: '08:00',
    CLOSE: '18:00',
    LABEL: 'Lundi - Vendredi: 8h00 - 18h00'
  },
  SATURDAY: {
    OPEN: '09:00',
    CLOSE: '12:00',
    LABEL: 'Samedi: 9h00 - 12h00'
  },
  SUNDAY: {
    CLOSED: true,
    LABEL: 'Fermé le dimanche'
  }
}

// Configuration des animations
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500
  },
  EASING: {
    EASE_IN_OUT: 'ease-in-out',
    EASE_OUT: 'ease-out',
    EASE_IN: 'ease-in'
  }
}

// Configuration des breakpoints
export const BREAKPOINTS = {
  XS: 480,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400
}

// Configuration des couleurs - Bleu Dominant, Rouge Secondaire, Blanc Tertiaire
export const COLORS = {
  PRIMARY: '#1e40af',      // Bleu dominant
  PRIMARY_DARK: '#1e3a8a', // Bleu plus foncé
  PRIMARY_LIGHT: '#3b82f6', // Bleu clair
  SECONDARY: '#dc2626',    // Rouge secondaire
  SECONDARY_DARK: '#b91c1c', // Rouge foncé
  ACCENT: '#ffffff',       // Blanc tertiaire
  SUCCESS: '#059669',      // Vert (gardé pour les messages de succès)
  WARNING: '#d97706',      // Orange (gardé pour les alertes)
  DANGER: '#dc2626',       // Rouge (cohérent avec secondary)
  INFO: '#1e40af',         // Bleu (cohérent avec primary)
  LIGHT: '#f8fafc',        // Blanc cassé
  DARK: '#1f2937'          // Gris foncé
}

// Configuration des tailles
export const SIZES = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl'
}

// Configuration des variantes
export const VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info',
  LIGHT: 'light',
  DARK: 'dark',
  OUTLINE: 'outline',
  GHOST: 'ghost'
}

// Messages d'erreur
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Ce champ est obligatoire',
  INVALID_EMAIL: 'Adresse email invalide',
  INVALID_PHONE: 'Numéro de téléphone invalide',
  MIN_LENGTH: (min) => `Minimum ${min} caractères requis`,
  MAX_LENGTH: (max) => `Maximum ${max} caractères autorisés`,
  NETWORK_ERROR: 'Erreur de connexion. Veuillez réessayer.',
  SERVER_ERROR: 'Erreur serveur. Veuillez réessayer plus tard.',
  NOT_FOUND: 'Élément non trouvé',
  UNAUTHORIZED: 'Accès non autorisé'
}

// Messages de succès
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Formulaire envoyé avec succès',
  QUOTE_REQUESTED: 'Demande de devis envoyée avec succès',
  CONTACT_SENT: 'Message envoyé avec succès',
  DATA_SAVED: 'Données sauvegardées avec succès'
}

// Configuration des formats de date
export const DATE_FORMATS = {
  SHORT: 'DD/MM/YYYY',
  LONG: 'DD MMMM YYYY',
  WITH_TIME: 'DD/MM/YYYY HH:mm',
  TIME_ONLY: 'HH:mm'
}

// Configuration des devises
export const CURRENCIES = {
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro'
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'Dollar américain'
  },
  XOF: {
    code: 'XOF',
    symbol: 'CFA',
    name: 'Franc CFA'
  }
}

// Configuration des pays
export const COUNTRIES = {
  FRANCE: {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷'
  },
  SENEGAL: {
    code: 'SN',
    name: 'Sénégal',
    flag: '🇸🇳'
  },
  COTE_IVOIRE: {
    code: 'CI',
    name: 'Côte d\'Ivoire',
    flag: '🇨🇮'
  },
  MALI: {
    code: 'ML',
    name: 'Mali',
    flag: '🇲🇱'
  },
  BURKINA_FASO: {
    code: 'BF',
    name: 'Burkina Faso',
    flag: '🇧🇫'
  }
}
