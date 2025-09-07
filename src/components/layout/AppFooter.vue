<template>
  <footer class="app-footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <h3>Jafrey's Transit</h3>
              <p>Votre partenaire de confiance pour tous vos besoins de transport et logistique.</p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="Facebook">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-link" aria-label="Instagram">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-section">
            <h4>Services</h4>
            <ul class="footer-links">
              <li><router-link to="/services">Transport Routier</router-link></li>
              <li><router-link to="/services">Transport Express</router-link></li>
              <li><router-link to="/services">Logistique</router-link></li>
              <li><router-link to="/services">Dédouanement</router-link></li>
              <li><router-link to="/devis">Demander un devis</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Entreprise</h4>
            <ul class="footer-links">
              <li><router-link to="/about">À propos</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
              <li><router-link to="/suivi">Suivi d'expédition</router-link></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Actualités</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Contact</h4>
            <div class="contact-info">
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>123 Avenue du Transport<br>75001 Paris, France</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>+33 1 23 45 67 89</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>contact@jafreys-transit.com</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-clock"></i>
                <span>Lun-Ven: 8h-18h<br>Sam: 9h-12h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; {{ currentYear }} Jafrey's Transit. Tous droits réservés.</p>
          </div>
          <div class="footer-bottom-links">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions générales</a>
            <a href="#">Plan du site</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
    }
  }
}
</script>

<style scoped>
.app-footer {
  background: #2c3e50;
  color: white;
  margin-top: auto;
}

.footer-main {
  padding: 3rem 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1.5rem;
  color: white;
}

.footer-section h3 {
  color: #3498db;
  font-size: 1.5rem;
}

.footer-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-brand p {
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #34495e;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #3498db;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #3498db;
}

.contact-info {
  color: #bdc3c7;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0.75rem;
}

.contact-item i {
  color: #3498db;
  margin-top: 0.25rem;
  width: 16px;
}

.contact-item span {
  line-height: 1.5;
}

.footer-bottom {
  background: #1a252f;
  padding: 1.5rem 0;
  border-top: 1px solid #34495e;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  margin: 0;
  color: #bdc3c7;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #3498db;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .footer-main {
    padding: 2rem 0 1.5rem;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
