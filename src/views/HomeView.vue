<script setup></script>

<template>
  <main>
    <section class="hero">
      <h1 class="hero__title">Hi, I'm Raphaël</h1>
      <h2 class="hero__subtitle">Je m'entraine à développer des applications web</h2>
    </section>
    <section class="competences">
      <h2>Mes compétences</h2>
      <div class="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png?20110131171049"
          alt="Logo HTML5"
          title="HTML5"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1920px-CSS3_logo.svg.png"
          alt="Logo CSS3"
          title="CSS3"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821155028%21Python-logo-notext.svg"
          alt="Logo Python"
          title="Python"
        />
        <img
          src="https://avatars.githubusercontent.com/u/2739187?s=280&v=4"
          alt="Logo Logiciel GNS3"
          title="GNS3"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_2024_Logo.svg/langfr-1920px-VirtualBox_2024_Logo.svg.png"
          alt="Logo de Oracle VirtualBox"
          title="Oracle VirtualBox"
        />
      </div>
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

.competences {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
  background: linear-gradient(145deg, var(--vt-c-black), #161616);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
  background: linear-gradient(145deg, var(--vt-c-black), #161616);
}

.container img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  background-color: #242424;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.container img:hover {
  transform: scale(1.05);
  box-shadow: 2px 4px 20px rgba(100, 108, 255, 0.5);
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
