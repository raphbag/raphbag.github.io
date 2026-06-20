<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header-wrapper">
    <header>
      <RouterLink to="/" aria-label="Accueil - Raphael Baguelin">
        <img alt="" aria-hidden="true" class="logo" src="/logo.svg" height="50" />
      </RouterLink>
      <nav aria-label="Navigation principale">
        <RouterLink to="/" active-class="active">Home</RouterLink>
        <RouterLink to="/projets" active-class="active">Projets</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.header-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  background: rgba(10, 10, 15, 0.4);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  padding: 0.5rem 2rem;
}

nav {
  display: flex;
  gap: 1rem;
}

nav > a {
  text-decoration: none;
  color: #9a9ab0;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

nav > a:hover {
  color: #e0e0e0;
  background: rgba(100, 108, 255, 0.1);
  border-color: rgba(100, 108, 255, 0.3);
}

.active {
  color: #42b883 !important;
  background: rgba(66, 184, 131, 0.1);
  border-color: rgba(66, 184, 131, 0.3) !important;
}

a {
  display: flex;
  align-items: center;
}

img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.1));
}
</style>
