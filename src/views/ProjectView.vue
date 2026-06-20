<script setup>
import { ref, onMounted } from 'vue'
import cyberImage from '@/assets/Typo-Projet-cyber.png'

const projets = [
  {
    id: 1,
    titre: 'IoT - Système surveillance température et humidité',
    annee: '2025',
    technos: ['MQTT', 'Python', 'Node-Red'],
    images: [
      {
        src: 'https://github.com/raphbag/IoT-Home-Weather-Station/raw/main/.github/preview.jpg',
        alt: 'Photo du projet IoT',
      },
      {
        src: 'https://github.com/raphbag/IoT-Home-Weather-Station/raw/main/.github/dashboard.jpg',
        alt: 'Dashboard du projet IoT',
      },
    ],
    description:
      "Projet IoT de surveillance de la température et de l'humidité dans maison, utilisant un ESP32, un capteur DHT22 et la communication MQTT.",
    liens: [
      {
        url: 'https://github.com/raphbag/IoT-Home-Weather-Station',
        label: 'Github',
        icon: '/github.svg',
        newTab: true,
      },
    ],
    type: 'ESME',
  },
  {
    id: 2,
    titre: 'WEB - Maquette Omnifood',
    annee: '2025',
    technos: ['HTML', 'CSS'],
    images: [
      {
        src: 'https://github.com/raphbag/maquette-omnifood/raw/master/.github/preview-omnifood-raphbag.png',
        alt: 'Aperçu de ma version de Omnifood',
      },
    ],
    description:
      'Refonte de la maquette Omnifood (omnifood.dev) en utilisant HTML et CSS pour créer un site web responsive et attrayant.',
    liens: [
      {
        url: 'https://github.com/raphbag/maquette-omnifood',
        label: 'Github',
        icon: '/github.svg',
        newTab: true,
      },
      {
        url: 'https://raphbag.github.io/maquette-omnifood',
        label: 'Ma version',
        icon: 'https://github.com/raphbag/maquette-omnifood/raw/master/assets/images/icon.png',
        newTab: true,
      },
    ],
    type: 'ESME',
  },
  {
    id: 3,
    titre: 'WEB - Webtrain',
    annee: '2026',
    technos: ['Astro', 'Tailwind', 'Google Maps API', 'IDFM API'],
    images: [
      {
        src: 'https://github.com/raphbag/webtrain/raw/master/.github/overview_webtrain.png',
        alt: 'Aperçu du site Webtrain',
      },
      {
        src: 'https://github.com/raphbag/webtrain/raw/master/.github/overview_horaires.png',
        alt: 'Aperçu de la page horaires du site Webtrain',
      },
    ],
    description:
      "Webtrain est un projet personnel visant à créer une application web pour consulter les horaires de train en Ile de france, en utilisant les données de l'API d'Ile de France mobilité et en développant une interface utilisateur moderne et responsive.",
    liens: [
      {
        url: 'https://github.com/raphbag/webtrain',
        label: 'Github',
        icon: '/github.svg',
        newTab: true,
      },
      {
        url: 'https://webtrain.raphbag.workers.dev/',
        label: 'Webtrain',
        icon: 'https://github.com/raphbag/webtrain/raw/master/public/favicon.svg',
        newTab: true,
      },
    ],
    type: 'Perso',
  },
  {
    id: 4,
    titre: "Cyber - Sécurisation Offensive et Défensive d'un réseau privé LAN",
    annee: '2026',
    technos: ['VirtualBox', 'Kali Linux', 'Wireshark', 'Nmap'],
    images: [
      {
        src: cyberImage,
        alt: 'Aperçu du la typologie réseau du projet de cybersécurité',
      },
    ],
    description:
      "Ce projet vise à évaluer et renforcer la résilience d'une infrastructure virtuelle via des tests d'intrusion sous Kali Linux, ciblant les vulnérabilités réseau et applicatives (MITM, injection SQL, ARP spoofing). L'objectif est de sécuriser les données sensibles incluant un audit technique, le déploiement de contre-mesures et le développement de solutions de chiffrement.",
    type: 'ESME',
  },
]

const visibleProjets = ref([])

onMounted(() => {
  const projetsTries = [...projets].sort((a, b) => b.id - a.id)

  projetsTries.forEach((projet, idx) => {
    setTimeout(() => {
      visibleProjets.value.push(projet)
    }, idx * 250) // 250ms entre chaque projet
  })
})
</script>

<template>
  <main class="pt-25 px-5 pb-0 w-full max-w-7xl mx-auto">
    <section
      class="flex flex-col items-center justify-center p-[15px]"
      aria-labelledby="projets-title"
    >
      <h1 id="projets-title" class="text-[2.5rem] font-bold text-[#e0e0e0] mb-5!">Mes projets</h1>
      <TransitionGroup name="fade-projet" tag="div" class="w-full flex flex-col items-center gap-8">
        <article
          class="flex flex-col items-start justify-center p-5 gap-[5px] bg-[#0a0a0f]/60 backdrop-blur-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 rounded-[15px] transition-all duration-300 max-w-[1000px] mb-2.5 hover:border-[#646cff]/40 hover:shadow-[0_4px_25px_rgba(100,108,255,0.15)] hover:-translate-y-0.5 w-full"
          v-for="projet in visibleProjets"
          :key="projet.id"
        >
          <div class="flex flex-wrap items-center justify-between w-full gap-2">
            <h2
              class="bg-[linear-gradient(150deg,rgba(255,255,255,0.05)_0%,transparent_100%)] bg-[length:200%_100%] bg-left-center py-1 px-3 rounded-md inline-block font-semibold text-[#e0e0e0] border border-white/5 transition-all duration-300 hover:bg-[linear-gradient(150deg,rgba(100,108,255,0.2)_0%,rgba(66,184,131,0.2)_100%)] hover:border-[#646cff]/30 hover:text-white"
            >
              {{ projet.titre }}
            </h2>
            <div class="flex gap-2 flex-wrap">
              <span
                class="text-[0.8rem] py-1 px-2.5 rounded-full border"
                :class="
                  projet.annee === 'En cours'
                    ? 'bg-[#ffc107]/15 text-[#ffc107] border-[#ffc107]/30'
                    : 'bg-[#42b883]/15 text-[#6fd9a6] border-[#42b883]/30'
                "
              >
                {{ projet.annee }}
              </span>
            </div>
          </div>
          <div
            class="flex flex-wrap gap-[0.4rem] mt-1"
            v-if="projet.technos"
            role="list"
            aria-label="Technologies utilisées"
          >
            <span
              v-for="tech in projet.technos"
              :key="tech"
              class="text-[0.75rem] py-[0.2rem] px-2 rounded bg-white/5 text-[#c9c9c9] border border-white/10 mt-0"
              role="listitem"
              >{{ tech }}</span
            >
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center justify-items-center gap-[15px] w-full py-[15px]"
          >
            <img
              v-for="img in projet.images"
              :key="img.src"
              :src="img.src"
              :alt="img.alt"
              loading="lazy"
              class="rounded-lg w-auto max-w-full h-auto max-h-[400px] object-contain shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-[transform,box-shadow] duration-300 hover:shadow-[0_8px_25px_rgba(100,108,255,0.2)]"
            />
          </div>
          <p>{{ projet.description }}</p>
          <div class="flex items-center justify-between w-full mt-2.5!">
            <div
              class="flex items-center gap-2.5 flex-wrap"
              role="list"
              aria-label="Liens du projet"
            >
              <a
                v-for="lien in projet.liens"
                :key="lien.url"
                :href="lien.url"
                :target="lien.newTab ? '_blank' : '_self'"
                :rel="lien.newTab ? 'noopener noreferrer' : undefined"
                role="listitem"
                :aria-label="`${lien.label}${lien.newTab ? ' - ouvrir dans un nouvel onglet' : ''}`"
                class="flex items-center justify-center gap-[5px] text-[#d6d6d6] no-underline border border-white/10 bg-white/5 rounded-[10px] py-[5px] px-[12px] transition-all duration-300 hover:bg-[#646cff]/15 hover:border-[#646cff]/40 hover:text-white"
              >
                <img :src="lien.icon" width="26" height="26" alt="" aria-hidden="true" />
                {{ lien.label }}
                <svg
                  v-if="lien.newTab"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d6d6d6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <span
              v-if="projet.type === 'ESME'"
              class="flex items-center justify-center gap-[5px] border border-white/10 bg-white/5 text-[#d6d6d6] rounded-[10px] mt-2.5 py-[5px] px-[12px]"
            >
              <img
                src="@/assets/Esme-sudria-logo.png"
                alt=""
                aria-hidden="true"
                width="30"
                height="30"
              />
              ESME
            </span>
            <span
              v-else-if="projet.type === 'Perso'"
              class="flex items-center justify-center gap-[5px] border border-white/10 bg-white/5 text-[#d6d6d6] rounded-[10px] mt-2.5 py-[5px] px-[12px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Perso
            </span>
            <span
              v-else
              class="flex items-center justify-center gap-[5px] border border-white/10 bg-white/5 text-[#d6d6d6] rounded-[10px] mt-2.5 py-[5px] px-[12px]"
              >{{ projet.type }}</span
            >
          </div>
        </article>
      </TransitionGroup>
    </section>
  </main>
</template>

<style scoped>
.fade-projet-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}
.fade-projet-enter-active {
  transition: all 0.6s cubic-bezier(0.5, 1.5, 0.5, 1);
}
.fade-projet-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
