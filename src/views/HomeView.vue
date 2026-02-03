<script setup>
const competences = [
  {
    name: 'HTML5',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png?20110131171049',
    link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
  },
  {
    name: 'CSS3',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1920px-CSS3_logo.svg.png',
    link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
  },
  {
    name: 'Python',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821155028%21Python-logo-notext.svg',
    link: 'https://www.python.org/',
  },
  {
    name: 'Cisco Packet Tracer',
    type: 'tool',
    img: 'https://cryptrz.org/wordpress/wp-content/uploads/2025/09/image.png',
    link: 'https://www.netacad.com/cisco-packet-tracer',
  },
  {
    name: 'GNS3',
    type: 'tool',
    img: 'https://avatars.githubusercontent.com/u/2739187?s=280&v=4',
    link: 'https://www.gns3.com/',
  },
  {
    name: 'Oracle VirtualBox',
    type: 'tool',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/VirtualBox_2024_Logo.svg/langfr-1920px-VirtualBox_2024_Logo.svg.png',
    link: 'https://www.virtualbox.org/',
  },
  {
    name: 'Wireshark',
    type: 'tool',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/960px-Wireshark_icon_new.png',
    link: 'https://www.wireshark.org/',
  },
  {
    name: 'AWS',
    type: 'cloud',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Amazon_Web_Services_2025.svg/960px-Amazon_Web_Services_2025.svg.png',
    link: 'https://aws.amazon.com/fr/',
  },
  {
    name: 'Google Cloud',
    type: 'cloud',
    img: 'https://play-lh.googleusercontent.com/RyoQTmHnxsxPYabsETmWVXHtLorVh_yOO48hsdv2VmI-Uki4qt5c5vV1cicJODV56A4',
    link: 'https://cloud.google.com/',
  },
  {
    name: 'Debian',
    type: 'os',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/500px-Openlogo-debianV2.svg.png',
    link: 'https://www.debian.org/',
  },
  {
    name: 'Kali Linux',
    type: 'os',
    img: 'https://www.kali.org/docs/policy/trademark/kali-dragon-tm.png',
    link: 'https://www.kali.org/',
  },
  {
    name: 'Windows',
    type: 'os',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Windows_logo_-_2021.svg/960px-Windows_logo_-_2021.svg.png',
    link: 'https://www.microsoft.com/fr-fr/windows',
  },
]
</script>

<template>
  <main>
    <section class="hero">
      <h1 class="hero__title">Hi, I'm Raphaël</h1>
      <h2 class="hero__subtitle">
        Je suis passionné par l'informatique et les nouvelles technologies.<br />
        Je suis actuellement étudiant en cybersécurité.
      </h2>
    </section>
    <section class="competences">
      <h1>Mes compétences</h1>
      <h2>Langages</h2>
      <div class="container">
        <a
          v-for="competence in competences.filter((c) => c.type === 'language')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :key="competence.name"
            :src="competence.img"
            :alt="`Logo ${competence.name}`"
            :title="competence.name"
          />
        </a>
      </div>
      <h2>Outils</h2>
      <div class="container">
        <a
          v-for="competence in competences.filter((c) => c.type === 'tool')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :key="competence.name"
            :src="competence.img"
            :alt="`Logo ${competence.name}`"
            :title="competence.name"
          />
        </a>
      </div>
      <h2>Cloud</h2>
      <div class="container">
        <a
          v-for="competence in competences.filter((c) => c.type === 'cloud')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :key="competence.name"
            :src="competence.img"
            :alt="`Logo ${competence.name}`"
            :title="competence.name"
          />
        </a>
      </div>
      <h2>Systèmes d'exploitation</h2>
      <div class="container">
        <a
          v-for="competence in competences.filter((c) => c.type === 'os')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :key="competence.name"
            :src="competence.img"
            :alt="`Logo ${competence.name}`"
            :title="competence.name"
          />
        </a>
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
  gap: 1rem;
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
  font-size: 1.4rem;
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
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  gap: 1rem;
}

.container img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: contain;
  padding: 10px;
  background-color: #333333;
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
