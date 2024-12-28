<script setup></script>

<template>
  <main>
    <section class="hero">
      <h1 class="hero__title">Hi, I'm Raphaël</h1>
      <h2 class="hero__subtitle">Je m'entraine à développer des applications web</h2>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
  background: linear-gradient(145deg, var(--vt-c-black), #161616);
}

.hero__title {
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  animation: fadeIn 1s ease-in;
  transition: transform 0.3s ease;
}

.hero__title:hover {
  transform: scale(1.05);
  background: linear-gradient(45deg, #646cff, #42b883);
}

.hero__subtitle {
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
  font-weight: 300;
  color: #d6d6d6;
}

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

@media (max-width: 768px) {
  .hero__title {
    font-size: 2.5rem;
  }

  .hero__subtitle {
    font-size: 1.2rem;
  }
}
</style>
