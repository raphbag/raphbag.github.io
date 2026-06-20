<template>
  <div class="footer-wrapper">
    <footer>
      <p class="footer-text">© {{ new Date().getFullYear() }} - Raphaël Baguelin</p>
      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/raphael-baguelin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Raphael Baguelin"
          class="social-link"
        >
          <img src="/linkedin.svg" width="22" height="22" alt="" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/raphbag"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub de Raphael Baguelin"
          class="social-link"
        >
          <img src="/github.svg" width="22" height="22" alt="" aria-hidden="true" />
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-wrapper {
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: auto;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.footer-text {
  color: #9a9ab0;
  font-size: 0.9rem;
  margin: 0;
}

.social-links {
  display: flex;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-link img {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-link:hover img {
  opacity: 1;
}

@media (max-width: 480px) {
  footer {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
  }
}
</style>
