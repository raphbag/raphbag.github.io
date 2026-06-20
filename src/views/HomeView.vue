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
  <main class="home">
    <!-- Section Hero: plein écran, centré -->
    <section class="hero" data-scroll-section aria-labelledby="hero-title">
      <div class="hero__badge">
        <span class="hero__badge-dot"></span>
        Étudiant en Cybersécurité
      </div>
      <h1 id="hero-title" class="hero__title">Raphaël Baguelin</h1>
      <p class="hero__subtitle">
        Étudiant passionné par l'informatique, la cybersécurité, les réseaux et les nouvelles
        technologies.
      </p>
      <div class="hero__actions">
        <RouterLink to="/projets" class="hero__cta hero__cta--primary">Voir mes projets</RouterLink>
        <a href="#contact" class="hero__cta hero__cta--secondary" rel="noopener noreferrer">
          Me contacter
        </a>
      </div>
      <div class="scroll-indicator" aria-hidden="true">
        <div class="scroll-indicator__line"></div>
      </div>
    </section>

    <!-- Section compétences avec glassmorphisme -->
    <section class="competences" data-scroll-section aria-labelledby="competences-title">
      <div class="competences__header">
        <h2 id="competences-title" class="section-title">Mes compétences</h2>
        <p class="section-subtitle">Technologies et outils maîtrisés</p>
      </div>

      <div class="competences__group">
        <h3 class="competences__category">// Langages</h3>
        <div class="competences__grid" role="list">
          <a
            v-for="competence in competences.filter((c) => c.type === 'language')"
            :key="competence.name"
            :href="competence.link"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            class="competence-card"
            :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
          >
            <img :src="competence.img" :alt="competence.name" loading="lazy" />
            <span class="competence-card__name">{{ competence.name }}</span>
          </a>
        </div>
      </div>

      <div class="competences__group">
        <h3 class="competences__category">// Outils</h3>
        <div class="competences__grid" role="list">
          <a
            v-for="competence in competences.filter((c) => c.type === 'tool')"
            :key="competence.name"
            :href="competence.link"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            class="competence-card"
            :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
          >
            <img :src="competence.img" :alt="competence.name" loading="lazy" />
            <span class="competence-card__name">{{ competence.name }}</span>
          </a>
        </div>
      </div>

      <div class="competences__group">
        <h3 class="competences__category">// Cloud</h3>
        <div class="competences__grid" role="list">
          <a
            v-for="competence in competences.filter((c) => c.type === 'cloud')"
            :key="competence.name"
            :href="competence.link"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            class="competence-card"
            :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
          >
            <img :src="competence.img" :alt="competence.name" loading="lazy" />
            <span class="competence-card__name">{{ competence.name }}</span>
          </a>
        </div>
      </div>

      <div class="competences__group">
        <h3 class="competences__category">// Systèmes d'exploitation</h3>
        <div class="competences__grid" role="list">
          <a
            v-for="competence in competences.filter((c) => c.type === 'os')"
            :key="competence.name"
            :href="competence.link"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            class="competence-card"
            :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
          >
            <img :src="competence.img" :alt="competence.name" loading="lazy" />
            <span class="competence-card__name">{{ competence.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Section contact avec carte glassmorphisme -->
    <section class="contact" id="contact" data-scroll-section aria-labelledby="contact-title">
      <div class="contact__card">
        <h2 id="contact-title" class="section-title">Me contacter</h2>
        <p class="contact__intro">
          Une opportunité d'alternance, une question ou simplement envie d'échanger ? N'hésitez pas
          à me contacter.
        </p>
        <div class="contact__links">
          <a
            href="mailto:baguelinraphael@gmail.com"
            class="contact__link"
            @click.prevent="copyEmail"
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
            <img src="/linkedin.svg" width="20" height="20" alt="LinkedIn" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/raphbag"
            target="_blank"
            rel="noopener noreferrer"
            class="contact__link"
          >
            <img src="/github.svg" width="20" height="20" alt="GitHub" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ─── Smooth scroll ─────────────────────────────────────────── */
:global(html) {
  scroll-behavior: smooth;
}

/* ─── Keyframes ─────────────────────────────────────────────── */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
}

@keyframes scroll-line {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes border-glow {
  0%,
  100% {
    box-shadow:
      0 0 20px rgba(100, 108, 255, 0.15),
      inset 0 0 20px rgba(100, 108, 255, 0.03);
  }
  50% {
    box-shadow:
      0 0 40px rgba(66, 184, 131, 0.2),
      inset 0 0 30px rgba(66, 184, 131, 0.05);
  }
}

/* ─── Home wrapper ──────────────────────────────────────────── */
.home {
  position: relative;
}

/* ─── Hero ──────────────────────────────────────────────────── */
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 2rem;
  position: relative;
  /* transparent — laisse apparaître la scène 3D */
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(66, 184, 131, 0.3);
  color: #42b883;
  font-size: 0.8rem;
  font-family: monospace;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  animation: fadeIn 0.6s ease both;
}

.hero__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #42b883;
  animation: pulse-dot 2s ease-in-out infinite;
  flex-shrink: 0;
}

.hero__title {
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 800;
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
  /* gradient text */
  background: linear-gradient(135deg, #e0e0e0 20%, #646cff 55%, #42b883 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation:
    fadeIn 0.8s ease 0.1s both,
    gradient-shift 6s ease infinite;
  padding: 2rem 0;
}

.hero__subtitle {
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  text-align: center;
  margin: 0;
  font-weight: 300;
  color: #9a9ab0;
  max-width: 700px;
  line-height: 1.7;
  animation: fadeIn 0.9s ease 0.2s both;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  animation: fadeIn 1s ease 0.35s both;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 10px;
  padding: 0.7rem 1.4rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #e0e0e0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;
  text-decoration: none;
}

.hero__cta:hover {
  transform: translateY(-2px);
}

.hero__cta--primary {
  background: linear-gradient(135deg, rgba(100, 108, 255, 0.3), rgba(66, 184, 131, 0.2));
  border-color: rgba(100, 108, 255, 0.5);
}

.hero__cta--primary:hover {
  border-color: #646cff;
  box-shadow: 0 0 20px rgba(100, 108, 255, 0.35);
}

.hero__cta--secondary {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
}

.hero__cta--secondary:hover {
  border-color: #42b883;
  box-shadow: 0 0 20px rgba(66, 184, 131, 0.25);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroll-indicator__line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(100, 108, 255, 0.8), transparent);
  animation: scroll-line 1.6s ease-in-out infinite;
}

/* ─── Compétences ───────────────────────────────────────────── */
.competences {
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  /* semi-transparent pour laisser voir la scène 3D */
  background: rgba(10, 10, 15, 0.15);
  backdrop-filter: blur(5px);
}

.competences__header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.section-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #e0e0e0, #646cff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: #6a6a80;
  font-size: 0.95rem;
  font-family: monospace;
  letter-spacing: 0.06em;
}

.competences__group {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.competences__category {
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: 400;
  color: #42b883;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(66, 184, 131, 0.15);
}

.competences__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.competence-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 0.75rem;
  width: 110px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  color: #9a9ab0;
  font-size: 0.7rem;
  text-align: center;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;
}

.competence-card:hover {
  border-color: #646cff;
  box-shadow: 0 0 16px rgba(100, 108, 255, 0.25);
  transform: translateY(-3px);
  color: #c0c0d0;
}

.competence-card img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  filter: brightness(0.9);
  transition:
    filter 0.25s ease,
    transform 0.25s ease;
}

.competence-card:hover img {
  filter: brightness(1.1);
  transform: scale(1.05);
}

.competence-card__name {
  line-height: 1.3;
  word-break: break-word;
}

/* ─── Contact ───────────────────────────────────────────────── */
.contact {
  padding: 8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 15, 0.15);
  backdrop-filter: blur(5px);
}

.contact__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem 2.5rem;
  max-width: 720px;
  width: 100%;
  border-radius: 20px;
  background: rgba(10, 10, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  animation: border-glow 4s ease-in-out infinite;
}

.contact__intro {
  text-align: center;
  color: #6a6a80;
  max-width: 560px;
  line-height: 1.7;
  font-size: 0.95rem;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.contact__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #c0c0d0;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease,
    color 0.2s ease;
}

.contact__link:hover {
  border-color: #646cff;
  box-shadow: 0 0 16px rgba(100, 108, 255, 0.3);
  transform: translateY(-2px);
  color: #e0e0e0;
}

/* ─── Responsive ────────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    padding: 0 1.25rem;
    gap: 1.5rem;
  }

  .competences {
    padding: 5rem 1.25rem;
    gap: 3rem;
  }

  .contact {
    padding: 5rem 1.25rem;
  }

  .contact__card {
    padding: 2rem 1.5rem;
  }

  .contact__links {
    flex-direction: column;
    width: 100%;
  }

  .contact__link {
    justify-content: center;
  }

  .competences__grid {
    justify-content: center;
  }

  .competence-card {
    width: 90px;
    padding: 0.75rem 0.5rem;
  }

  .competence-card img {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .hero__badge {
    font-size: 0.7rem;
  }
}
</style>
