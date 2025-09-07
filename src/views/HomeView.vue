<template>
  <div class="home-view">
    <HeroSection />
    <ServicesGrid />
    <StatsSection />
    <TestimonialsSection />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue'
import ServicesGrid from '@/components/sections/ServicesGrid.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    ServicesGrid,
    StatsSection,
    TestimonialsSection
  }
}
</script>

<style scoped>
.home-view {
  min-height: 100vh;
}

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Global animations for sections */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Intersection Observer animations will be added via JavaScript */
.fade-in {
  animation: fadeIn 0.8s ease-out;
}
</style>
