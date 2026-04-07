<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const emailCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('baguelinraphael@gmail.com')
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
  }
}

const competences = [
  {
    name: 'HTML5',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg',
    link: 'https://developer.mozilla.org/fr/docs/Web/HTML',
  },
  {
    name: 'CSS3',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    link: 'https://developer.mozilla.org/fr/docs/Web/CSS',
  },
  {
    name: 'Python',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    link: 'https://www.python.org/',
  },
  {
    name: 'Java',
    type: 'language',
    img: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    link: 'https://www.java.com/fr/',
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
    <section class="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" class="hero__title">Raphael Baguelin</h1>
      <h2 class="hero__subtitle">
        Etudiant en cybersécurité passionné par l'informatique et les nouvelles technologies.
      </h2>
      <p class="hero__objective">
        Je recherche actuellement une alternance en cybersécurité / réseau.
      </p>
      <div class="hero__actions">
        <RouterLink to="/projets" class="hero__cta hero__cta--primary">Voir mes projets</RouterLink>
        <a
          href="https://www.linkedin.com/in/raphael-baguelin/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BATSQ6lFjQ6qTg7Q78ccMPA%3D%3D"
          class="hero__cta hero__cta--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Me contacter
        </a>
      </div>
    </section>
    <section class="competences" aria-labelledby="competences-title">
      <h1 id="competences-title">Mes compétences</h1>
      <h2>Langages</h2>
      <div class="container" role="list">
        <a
          v-for="competence in competences.filter((c) => c.type === 'language')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
        >
          <img
            :src="competence.img"
            :alt="competence.name"
            loading="lazy"
          />
        </a>
      </div>
      <h2>Outils</h2>
      <div class="container" role="list">
        <a
          v-for="competence in competences.filter((c) => c.type === 'tool')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
        >
          <img
            :src="competence.img"
            :alt="competence.name"
            loading="lazy"
          />
        </a>
      </div>
      <h2>Cloud</h2>
      <div class="container" role="list">
        <a
          v-for="competence in competences.filter((c) => c.type === 'cloud')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
        >
          <img
            :src="competence.img"
            :alt="competence.name"
            loading="lazy"
          />
        </a>
      </div>
      <h2>Systèmes d'exploitation</h2>
      <div class="container" role="list">
        <a
          v-for="competence in competences.filter((c) => c.type === 'os')"
          :key="competence.name"
          :href="competence.link"
          target="_blank"
          rel="noopener noreferrer"
          role="listitem"
          :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
        >
          <img
            :src="competence.img"
            :alt="competence.name"
            loading="lazy"
          />
        </a>
      </div>
    </section>

    <section class="contact" id="contact" aria-labelledby="contact-title">
      <h1 id="contact-title">Me contacter</h1>
      <p class="contact__intro">
        Une opportunité d'alternance, une question ou simplement envie d'échanger ? N'hésitez pas à
        me contacter.
      </p>
      <div class="contact__links">
        <a href="mailto:baguelinraphael@gmail.com" class="contact__link" @click.prevent="copyEmail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          {{ emailCopied ? 'Copié !' : 'baguelinraphael@gmail.com' }}
        </a>
        <a
          href="https://www.linkedin.com/in/raphael-baguelin"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__link"
        >
          <img src="/linkedin.svg" width="24" height="24" alt="LinkedIn" />
          LinkedIn
        </a>
        <a
          href="https://github.com/raphbag"
          target="_blank"
          rel="noopener noreferrer"
          class="contact__link"
        >
          <img src="/github.svg" width="24" height="24" alt="GitHub" />
          GitHub
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
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
  max-width: 950px;
}

.hero__objective {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(45deg, rgba(100, 108, 255, 0.2), rgba(66, 184, 131, 0.2));
  border: 1px solid rgba(100, 108, 255, 0.35);
  border-radius: 5px;
  padding: 0.6rem 1rem;
  margin: 0.4rem 0;
  text-align: center;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.hero__cta {
  border-radius: 10px;
  padding: 0.65rem 1rem;
  font-weight: 600;
  color: #f2f2f2;
  border: 1px solid #4f4f4f;
  background-color: #2d2d2d;
}

.hero__cta:hover {
  opacity: 0.9;
  border-color: #646cff;
  transform: translateY(-2px);
  transition: all 0.2s ease;
}

.hero__cta--primary {
  border: 1px solid rgba(100, 108, 255, 0.7);
  background: linear-gradient(45deg, #646cff, #42b883);
}

.hero__cta--secondary {
  border: 1px solid #666666;
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

  .hero__objective {
    font-size: 1rem;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  background: linear-gradient(145deg, #1e1e1e, #242424);
  border-radius: 20px;
  max-width: 900px;
  margin: 2rem auto;
  margin-bottom: 6rem;
}

.contact h1 {
  margin-bottom: 0.5rem;
}

.contact__intro {
  text-align: center;
  color: #b0b0b0;
  max-width: 600px;
  margin-bottom: 1.5rem;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.contact__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  background-color: #2d2d2d;
  border: 1px solid #444;
  color: #e0e0e0;
  font-weight: 500;
  transition: all 0.2s ease;
}

.contact__link:hover {
  background-color: #3a3a3a;
  border-color: #646cff;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .contact__links {
    flex-direction: column;
    width: 100%;
  }

  .contact__link {
    justify-content: center;
  }
}
</style>
