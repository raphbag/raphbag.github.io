<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <main class="not-found">
    <div class="container">
      <div class="error-code">
        <span class="four">4</span>
        <span class="zero">0</span>
        <span class="four">4</span>
      </div>
      <h1>Page introuvable</h1>
      <p>Oups ! La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <div class="actions">
        <button @click="goHome" class="btn-home">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          Retour à l'accueil
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(145deg, var(--vt-c-black), #161616);
}

.container {
  text-align: center;
  max-width: 600px;
}

.error-code {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  font-size: 8rem;
  font-weight: bold;
  line-height: 1;
}

.four {
  background: linear-gradient(45deg, #646cff, #42b883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: pulse 2s ease-in-out infinite;
}

.zero {
  color: #646cff;
  animation: rotate 3s ease-in-out infinite;
  display: inline-block;
}

h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

p {
  font-size: 1.2rem;
  color: #d6d6d6;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-family: inherit;
}

.btn-home {
  background: linear-gradient(45deg, #646cff, #42b883);
  color: white;
}

.btn-home:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(100, 108, 255, 0.4);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes rotate {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  .actions {
    flex-direction: column;
    width: 100%;
  }

  .btn-home,
  .btn-projects {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 4rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>