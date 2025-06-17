<script setup>
import { ref, onMounted } from 'vue'

const projets = [
  {
    id: 1,
    titre: "IoT - Système surveillance température et humidité",
    images: [
      {
        src: "https://github.com/raphbag/IoT-Home-Weather-Station/raw/main/.github/preview.jpg",
        alt: "Photo du projet IoT"
      },
      {
        src: "https://github.com/raphbag/IoT-Home-Weather-Station/raw/main/.github/dashboard.jpg",
        alt: "Dashboard du projet IoT"
      }
    ],
    description: "Projet IoT de surveillance de la température et de l'humidité dans maison, utilisant un ESP32, un capteur DHT22 et la communication MQTT.",
    github: "https://github.com/raphbag/IoT-Home-Weather-Station"
  }
]

const visibleProjets = ref([])

onMounted(() => {
  projets.forEach((projet, idx) => {
    setTimeout(() => {
      visibleProjets.value.push(projet)
    }, idx * 250) // 250ms entre chaque projet
  })
})
</script>

<template>
  <main>
    <section class="projets">
      <TransitionGroup name="fade-projet" tag="div">
        <div
          class="projet"
          v-for="projet in visibleProjets"
          :key="projet.id"
        >
          <h2>{{ projet.titre }}</h2>
          <div class="images">
            <img v-for="img in projet.images" :src="img.src" :alt="img.alt" :key="img.src" />
          </div>
          <p>{{ projet.description }}</p>
          <div class="bottom">
            <a :href="projet.github" target="_blank">
              <img src="/src/assets/github.svg" width="26px" alt="Icon Github" />Github
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d6d6d6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg>
            </a>
            <span><img src="@/assets/Esme-sudria-logo.png" alt="Logo ESME Sudria"/> ESME</span>
          </div>
        </div>
      </TransitionGroup>
    </section>
  </main>
</template>

<style scoped>

main {
  padding: 0 20px;
}

.projets {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 10px;
}

.projet {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 20px;
  gap: 5px;
  background-color: #242424;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: #242424 1px solid;
  border-radius: 15px;
  transition: all 0.3s ease;
  max-width: 1000px;
  /* background: linear-gradient(145deg, var(--vt-c-black), #161616); */
}

h2 {
  background: linear-gradient(150deg, #333 70%, transparent 100%);
  background-size: 200% 100%;
  background-position: left center;
  padding: 4px 12px;
  border-radius: 6px;
  display: inline-block;
  font-weight: 600;
  color: #e0e0e0;
  transition: background-position 0.3s ease, color 0.3s ease;
}

h2:hover {
  background: linear-gradient(150deg, #4e54c8 60%, #8f94fb 100%);
  background-size: 200% 100%;
  background-position: right center;
  color: #fff;
  transition: background-position 0.3s ease, color 0.3s ease;
}

.projet:hover {
  transition: all 0.3s ease;
  border: #797979 1px solid;
}

.projet .images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
}

  .projet img {
    border-radius: 5px;
    max-width: 100%;
    height: 100%;
  }

.projet a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #d6d6d6;
  text-decoration: none;
  border: #797979 0.5px solid;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
}

.projet a:hover {
  background-color: #797979;
  color: #242424;
  transition: all 0.3s ease;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: #333 0.5px solid;
  color: #d6d6d6;
  text-decoration: none;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
}

span img {
  width: 30px;
  height: 30px;
}

.fade-projet-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.fade-projet-enter-active {
  transition: all 0.6s cubic-bezier(.5,1.5,.5,1);
}
.fade-projet-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

</style>