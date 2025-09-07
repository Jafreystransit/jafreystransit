# Guide d'ajout des images - Jafrey's Transit

Ce guide vous explique comment ajouter vos propres images au site vitrine.

## 📁 Structure des dossiers d'images

```
src/assets/images/
├── hero/                    # Images principales (1920x1080px)
│   ├── hero-transport.jpg   # Image principale de transport
│   ├── hero-logistics.jpg   # Image de logistique
│   └── hero-delivery.jpg    # Image de livraison
├── services/                # Images des services (600x400px)
│   ├── transport-routier.jpg
│   ├── transport-express.jpg
│   ├── logistique.jpg
│   └── dedouanement.jpg
├── team/                    # Photos de l'équipe (300x300px)
│   ├── team-member-1.jpg    # Photo du dirigeant
│   ├── team-member-2.jpg    # Photo responsable logistique
│   └── team-member-3.jpg    # Photo chef d'équipe
├── logos/                   # Logos et icônes
│   ├── logo-main.svg        # Logo principal
│   ├── logo-white.svg       # Logo blanc
│   └── favicon.ico          # Icône du site
└── gallery/                 # Galerie d'images (800x600px)
    ├── warehouse-1.jpg      # Photo de l'entrepôt
    ├── fleet-1.jpg          # Photo de la flotte
    └── loading-1.jpg        # Photo de chargement
```

## 🖼️ Images actuellement en placeholder

### Page À propos
- **src/assets/images/gallery/warehouse-1.jpg** : Photo de votre entrepôt/bureau
- **src/assets/images/team/team-member-1.jpg** : Photo de Jafrey Kouassi
- **src/assets/images/team/team-member-2.jpg** : Photo de Marie Dubois
- **src/assets/images/team/team-member-3.jpg** : Photo d'Ahmed Ben Ali

### Page d'accueil
- **src/assets/images/hero/hero-transport.jpg** : Image principale du hero

### Pages de services
- **src/assets/images/services/transport-routier.jpg**
- **src/assets/images/services/transport-express.jpg**
- **src/assets/images/services/logistique.jpg**
- **src/assets/images/services/dedouanement.jpg**

## 📐 Spécifications techniques

### Formats acceptés
- **JPG/JPEG** : Pour les photos
- **PNG** : Pour les images avec transparence
- **SVG** : Pour les logos et icônes
- **WebP** : Format moderne (optionnel)

### Tailles recommandées
- **Hero images** : 1920x1080px (16:9)
- **Service images** : 600x400px (3:2)
- **Team photos** : 300x300px (1:1)
- **Gallery images** : 800x600px (4:3)
- **Logo** : Format vectoriel SVG de préférence

### Optimisation
- **Poids max** : 500KB par image
- **Compression** : Utilisez des outils comme TinyPNG
- **Qualité** : 80-90% pour les JPG

## 🔄 Comment remplacer les placeholders

### 1. Ajouter vos images
Placez vos images dans les dossiers correspondants avec les noms exacts.

### 2. Remplacer les placeholders dans le code

#### Pour l'image de l'entrepôt (AboutView.vue)
```vue
<!-- Remplacer -->
<div class="image-placeholder">
  <i class="fas fa-warehouse"></i>
  <p>Notre entrepôt moderne</p>
</div>

<!-- Par -->
<img src="/src/assets/images/gallery/warehouse-1.jpg" alt="Notre entrepôt" />
```

#### Pour les photos d'équipe (AboutView.vue)
```vue
<!-- Remplacer -->
<div class="member-placeholder">
  <i class="fas fa-user"></i>
  <span>{{ member.name.split(' ').map(n => n[0]).join('') }}</span>
</div>

<!-- Par -->
<img :src="member.image" :alt="member.name" />
```

### 3. Mettre à jour les données (src/data/company.js)
```javascript
export const team = [
  {
    id: 1,
    name: "Jafrey Kouassi",
    position: "Directeur Général",
    description: "...",
    image: "/src/assets/images/team/team-member-1.jpg", // ✅ Chemin correct
    email: "jafrey@jafreys-transit.com",
    phone: "+33 1 23 45 67 89"
  },
  // ...
]
```

## 🎨 Sources d'images recommandées

### Images gratuites
- **Unsplash** : https://unsplash.com/
- **Pexels** : https://pexels.com/
- **Pixabay** : https://pixabay.com/

### Mots-clés de recherche
- "truck transport logistics"
- "warehouse storage facility"
- "delivery van shipping"
- "african business team"
- "logistics center operations"
- "freight transportation"

### Images payantes (qualité supérieure)
- **Shutterstock** : https://shutterstock.com/
- **Getty Images** : https://gettyimages.com/
- **Adobe Stock** : https://stock.adobe.com/

## ⚠️ Important

### Droits d'utilisation
- Vérifiez toujours les licences des images
- Préférez les images libres de droits
- Gardez les attributions si nécessaires

### Performance
- Optimisez vos images avant de les ajouter
- Utilisez des formats modernes (WebP) si possible
- Considérez le lazy loading pour les grandes images

### Cohérence visuelle
- Gardez un style cohérent (couleurs, luminosité)
- Utilisez des images de qualité similaire
- Respectez l'identité visuelle de votre marque

## 🔧 Outils recommandés

### Optimisation d'images
- **TinyPNG** : Compression en ligne
- **ImageOptim** : Outil Mac
- **GIMP** : Éditeur gratuit
- **Photoshop** : Éditeur professionnel

### Redimensionnement
- **Canva** : Outil en ligne simple
- **GIMP** : Gratuit et complet
- **Photoshop** : Professionnel

Une fois vos images ajoutées, les placeholders seront automatiquement remplacés et votre site aura un aspect professionnel ! 🚀
