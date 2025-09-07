export const companyInfo = {
  name: "Jafreys Transit",
  tagline: "Votre partenaire de confiance pour le transport et la logistique",
  description: "Jafrey's Transit est une entreprise spécialisée dans le transport de marchandises et les solutions logistiques. Nous offrons des services fiables et efficaces pour répondre à tous vos besoins de transport.",
  
  contact: {
    address: {
      street: "123 Avenue du Transport",
      city: "Paris",
      postalCode: "75001",
      country: "France",
      full: "123 Avenue du Transport, 75001 Paris, France"
    },
    phone: "+33 1 23 45 67 89",
    email: "contact@jafreys-transit.com",
    website: "www.jafreys-transit.com"
  },
  
  hours: {
    weekdays: "Lundi - Vendredi: 8h00 - 18h00",
    saturday: "Samedi: 9h00 - 12h00",
    sunday: "Fermé le dimanche"
  },
  
  social: {
    facebook: "https://facebook.com/jafreys-transit",
    linkedin: "https://linkedin.com/company/jafreys-transit",
    twitter: "https://twitter.com/jafreys_transit",
    instagram: "https://instagram.com/jafreys_transit"
  },
  
  stats: {
    yearsExperience: 5,
    clientsSatisfied: 500,
    deliveriesCompleted: 10000,
    countriesCovered: 15
  },
  
  certifications: [
    "ISO 9001:2015",
    "Licence de transport",
    "Certification douanière",
    "Assurance marchandises"
  ],
  
  values: [
    {
      title: "Fiabilité",
      description: "Nous respectons nos engagements et nos délais",
      icon: "fas fa-handshake"
    },
    {
      title: "Sécurité",
      description: "Vos marchandises sont entre de bonnes mains",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Rapidité",
      description: "Des solutions express pour vos urgences",
      icon: "fas fa-bolt"
    },
    {
      title: "Transparence",
      description: "Suivi en temps réel et communication claire",
      icon: "fas fa-eye"
    }
  ]
}

export const team = [
  {
    id: 1,
    name: "Jafrey Kouassi",
    position: "Directeur Général",
    description: "Fort de 10 ans d'expérience dans le transport, Jafrey dirige l'entreprise avec passion et expertise.",
    image: "/src/assets/images/team/team-member-1.jpg",
    email: "jafrey@jafreys-transit.com",
    phone: "+33 1 23 45 67 89"
  },
  {
    id: 2,
    name: "Marie Dubois",
    position: "Responsable Logistique",
    description: "Marie coordonne toutes les opérations logistiques avec précision et efficacité.",
    image: "/src/assets/images/team/team-member-2.jpg",
    email: "marie.dubois@jafreys-transit.com",
    phone: "+33 1 23 45 67 90"
  },
  {
    id: 3,
    name: "Ahmed Ben Ali",
    position: "Chef d'équipe Transport",
    description: "Ahmed supervise notre équipe de chauffeurs et garantit la qualité de nos livraisons.",
    image: "/src/assets/images/team/team-member-3.jpg",
    email: "ahmed.benali@jafreys-transit.com",
    phone: "+33 1 23 45 67 91"
  }
]
