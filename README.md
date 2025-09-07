# Jafreys Transit - Site Vitrine

Site vitrine moderne et responsive pour une société de transport et logistique, développé avec Vue.js 3 et Vite.

## 🚀 Fonctionnalités

- **Page d'accueil** avec hero section, services, témoignages et statistiques
- **Pages de services** détaillées
- **Formulaire de contact** avec validation
- **Demande de devis** personnalisée
- **Suivi d'expéditions** en temps réel
- **Design responsive** pour tous les appareils
- **Architecture modulaire** avec composants réutilisables

## 📁 Structure du projet

```
src/
├── assets/                 # Ressources statiques
│   ├── images/            # Images organisées par catégorie
│   │   ├── hero/         # Images principales
│   │   ├── services/     # Images des services
│   │   ├── team/         # Photos de l'équipe
│   │   ├── logos/        # Logos et icônes
│   │   └── gallery/      # Galerie d'images
│   ├── styles/           # Styles CSS
│   │   └── variables.css # Variables CSS globales
│   └── fonts/            # Polices personnalisées
├── components/            # Composants Vue
│   ├── layout/           # Composants de mise en page
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── ui/               # Composants d'interface
│   │   ├── BaseButton.vue
│   │   └── BaseCard.vue
│   ├── sections/         # Sections de pages
│   │   ├── HeroSection.vue
│   │   ├── ServicesGrid.vue
│   │   ├── TestimonialsSection.vue
│   │   └── StatsSection.vue
│   └── index.js          # Export centralisé
├── views/                # Pages principales
│   ├── HomeView.vue      # Page d'accueil
│   ├── ServicesView.vue  # Page des services
│   ├── AboutView.vue     # À propos
│   ├── ContactView.vue   # Contact
│   ├── QuoteView.vue     # Demande de devis
│   └── NotFoundView.vue  # Page 404
├── composables/          # Logique réutilisable (Vue 3)
│   ├── useApi.js         # Gestion des appels API
│   ├── useForm.js        # Gestion des formulaires
│   └── index.js          # Export centralisé
├── data/                 # Données statiques
│   ├── services.js       # Données des services
│   ├── company.js        # Informations de l'entreprise
│   ├── testimonials.js   # Témoignages clients
│   └── index.js          # Export centralisé
├── utils/                # Utilitaires
│   ├── constants.js      # Constantes de l'application
│   ├── helpers.js        # Fonctions utilitaires
│   ├── validators.js     # Validateurs de formulaires
│   └── index.js          # Export centralisé
├── router/               # Configuration du routage
│   └── index.js
└── main.js               # Point d'entrée de l'application
```

## 🔧 Installation et développement

### Prérequis
- Node.js 20.19.0+ ou 22.12.0+
- npm ou yarn

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```

### Build de production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

### Formatage du code
```bash
npm run format
```

## 📦 Imports/Exports optimisés

Le projet utilise un système d'imports/exports centralisés pour une meilleure organisation :

### Composants
```javascript
// ✅ Import centralisé
import { BaseButton, BaseCard, HeroSection } from '@/components/index.js'

// ❌ Imports multiples
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
```

### Données
```javascript
// ✅ Import centralisé
import { companyInfo, services, testimonials } from '@/data/index.js'

// ❌ Imports multiples
import { companyInfo } from '@/data/company.js'
import { services } from '@/data/services.js'
import { testimonials } from '@/data/testimonials.js'
```

### Utilitaires
```javascript
// ✅ Import centralisé
import { formatNumber, validateEmail, COLORS } from '@/utils/index.js'

// ❌ Imports multiples
import { formatNumber } from '@/utils/helpers.js'
import { validateEmail } from '@/utils/validators.js'
import { COLORS } from '@/utils/constants.js'
```

### Composables
```javascript
// ✅ Import centralisé
import { useForm, useApi } from '@/composables/index.js'

// ❌ Imports multiples
import { useForm } from '@/composables/useForm.js'
import { useApi } from '@/composables/useApi.js'
```

## 🎨 Système de design

### Variables CSS
Le projet utilise des variables CSS personnalisées définies dans `src/assets/styles/variables.css` :

```css
:root {
  --color-primary: #3498db;
  --color-secondary: #2c3e50;
  --color-accent: #e74c3c;
  --spacing-md: 1rem;
  --border-radius-lg: 0.5rem;
  /* ... */
}
```

### Composants UI réutilisables
- **BaseButton** : Bouton avec variantes (primary, secondary, outline, ghost)
- **BaseCard** : Carte avec options de padding, shadow, hover effects
- Plus de composants à venir...

## 🔄 Composables Vue 3

### useForm
Gestion des formulaires avec validation :
```javascript
const { formData, errors, isValid, submit } = useForm(initialData, validationRules)
```

### useApi
Gestion des appels API :
```javascript
const { loading, error, execute } = useApi()
```



## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints définis :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

Le site peut être déployé sur diverses plateformes :
- **Netlify** : Déploiement automatique depuis Git
- **Vercel** : Optimisé pour les applications Vue.js
- **GitHub Pages** : Hébergement gratuit
- **Serveur traditionnel** : Upload des fichiers du dossier `dist/`

## 📄 Pages disponibles

- **/** : Page d'accueil avec hero, services, témoignages
- **/services** : Détail des services de transport
- **/about** : À propos de l'entreprise
- **/contact** : Formulaire de contact
- **/devis** : Demande de devis personnalisé

## 🛠️ Technologies utilisées

- **Vue.js 3** : Framework JavaScript progressif
- **Vite** : Build tool rapide et moderne
- **Vue Router** : Routage côté client
- **CSS3** : Styles modernes avec variables CSS
- **Font Awesome** : Icônes vectorielles
- **Composition API** : API moderne de Vue 3

## 📞 Support

Pour toute question ou support technique, contactez l'équipe de développement.
