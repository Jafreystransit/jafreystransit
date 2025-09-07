export const services = [
  {
    id: 1,
    title: 'Transport Routier',
    description: 'Transport de marchandises par voie routière, national et international',
    icon: 'fas fa-truck',
    image: '/src/assets/images/services/transport-routier.jpg',
    features: [
      'Livraison express',
      'Suivi en temps réel',
      'Assurance complète',
      'Transport sécurisé'
    ],
    details: {
      capacity: 'Jusqu\'à 40 tonnes',
      coverage: 'Europe et Afrique du Nord',
      delivery: '24h à 72h selon destination'
    }
  },
  {
    id: 2,
    title: 'Logistique & Entreposage',
    description: 'Solutions de stockage et gestion logistique complète',
    icon: 'fas fa-warehouse',
    image: '/src/assets/images/services/logistique.jpg',
    features: [
      'Stockage sécurisé',
      'Gestion des stocks',
      'Préparation de commandes',
      'Distribution'
    ],
    details: {
      capacity: '10 000 m² d\'entrepôt',
      security: 'Surveillance 24h/24',
      temperature: 'Zones climatisées disponibles'
    }
  },
  {
    id: 3,
    title: 'Transport Express',
    description: 'Livraisons urgentes et express pour vos besoins critiques',
    icon: 'fas fa-shipping-fast',
    image: '/src/assets/images/services/transport-express.jpg',
    features: [
      'Livraison 24h/48h',
      'Service prioritaire',
      'Suivi GPS',
      'Confirmation de livraison'
    ],
    details: {
      speed: 'Livraison même jour possible',
      tracking: 'Suivi GPS en temps réel',
      confirmation: 'Preuve de livraison digitale'
    }
  },
  {
    id: 4,
    title: 'Dédouanement',
    description: 'Services douaniers et formalités administratives',
    icon: 'fas fa-file-contract',
    image: '/src/assets/images/services/dedouanement.jpg',
    features: [
      'Déclarations douanières',
      'Gestion administrative',
      'Conseil réglementaire',
      'Suivi des procédures'
    ],
    details: {
      expertise: 'Experts en réglementation',
      countries: 'Tous pays d\'Afrique',
      support: 'Accompagnement complet'
    }
  }
]

export const serviceCategories = [
  {
    id: 'transport',
    name: 'Transport',
    services: [1, 3]
  },
  {
    id: 'logistics',
    name: 'Logistique',
    services: [2, 4]
  }
]
