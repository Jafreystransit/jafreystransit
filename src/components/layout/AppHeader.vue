<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="brand-link">
            <div class="brand-logo-placeholder">JT</div>
            <span class="brand-text">
              <span class="brand-jafreys">Jafreys</span>
              <span class="brand-transit">Transit</span>
            </span>
          </router-link>
        </div>

        <button 
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="navbar-menu" :class="{ 'active': isMobileMenuOpen }">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeMobileMenu">
                Accueil
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" class="nav-link" @click="closeMobileMenu">
                Services
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeMobileMenu">
                À propos
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeMobileMenu">
                Contact
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/devis" class="nav-link nav-cta" @click="closeMobileMenu">
                Devis gratuit
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isMobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    return {
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style scoped>
.app-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1e40af;
}

.brand-logo-placeholder {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #1e40af, #1e3a8a);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
}

.brand-jafreys {
  color: #1e40af;
}

.brand-transit {
  color: #dc2626;
  font-weight: 800;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #1e40af;
  margin: 3px 0;
  transition: 0.3s;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.navbar-menu {
  display: flex;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-item {
  margin-left: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #1e40af;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #dc2626;
}

.nav-link.router-link-active {
  color: #1e40af;
  font-weight: 600;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #1e40af;
}

.nav-cta {
  background: #dc2626;
  color: white !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 25px;
  transition: background-color 0.3s ease;
}

.nav-cta:hover {
  background: #2980b9 !important;
  color: white !important;
}

.nav-cta.router-link-active::after {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .navbar-nav {
    flex-direction: column;
    padding: 1rem 0;
  }

  .nav-item {
    margin: 0;
    width: 100%;
  }

  .nav-link {
    display: block;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ecf0f1;
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .nav-cta {
    margin: 1rem 2rem;
    text-align: center;
    border-radius: 5px;
  }
}
</style>
