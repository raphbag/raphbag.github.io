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
  <main class="relative w-full max-w-7xl mx-auto">
    <!-- Section Hero: plein écran, centré -->
    <section
      class="min-h-[100svh] flex flex-col items-center justify-center pt-[70px] pb-10 px-4 md:px-8 relative overflow-hidden"
      data-scroll-section
      aria-labelledby="hero-title"
    >
      <div class="flex flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-full">
        <div
          class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-[#42b883]/30 text-[#42b883] text-[0.7rem] md:text-[0.8rem] font-mono tracking-[0.08em] uppercase animate-[fadeIn_0.6s_ease_both]"
        >
          <span
            class="w-[7px] h-[7px] rounded-full bg-[#42b883] shrink-0 animate-[pulse-dot_2s_ease-in-out_infinite]"
          ></span>
          Étudiant en Cybersécurité
        </div>
        <h1
          id="hero-title"
          class="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-center m-0 tracking-[-0.02em] leading-[1.1] py-2 md:py-4 w-full wrap-break-words"
        >
          <span
            class="bg-[linear-gradient(135deg,#e0e0e0_20%,#646cff_55%,#42b883_100%)] bg-size-[length:200%_200%] bg-clip-text text-transparent animate-[fadeIn_0.8s_ease_0.1s_both,gradient-shift_6s_ease_infinite]"
          >
            Raphaël Baguelin
          </span>
        </h1>
        <p
          class="text-base sm:text-[clamp(1rem,2.2vw,1.2rem)] text-center m-0 font-light text-[#9a9ab0] max-w-[700px] leading-[1.7] animate-[fadeIn_0.9s_ease_0.2s_both] w-full px-2"
        >
          Étudiant passionné par l'informatique, la cybersécurité, les réseaux et les nouvelles
          technologies.
        </p>
        <div
          class="flex flex-wrap justify-center gap-3 sm:gap-4 animate-[fadeIn_1s_ease_0.35s_both] w-full px-2"
        >
          <RouterLink
            to="/projets"
            class="inline-flex justify-center items-center gap-2 rounded-[10px] py-[0.7rem] px-[1rem] sm:px-[1.4rem] font-semibold text-[0.9rem] sm:text-[0.95rem] text-[#e0e0e0] border border-[#646cff]/50 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-250 ease-in-out no-underline hover:-translate-y-0.5 bg-[linear-gradient(135deg,rgba(100,108,255,0.3),rgba(66,184,131,0.2))] hover:border-[#646cff] hover:shadow-[0_0_20px_rgba(100,108,255,0.35)] w-full sm:w-auto text-center"
            >Voir mes projets</RouterLink
          >
          <a
            href="#contact"
            class="inline-flex justify-center items-center gap-2 rounded-[10px] py-[0.7rem] px-[1rem] sm:px-[1.4rem] font-semibold text-[0.9rem] sm:text-[0.95rem] text-[#e0e0e0] border border-white/10 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-250 ease-in-out no-underline hover:-translate-y-0.5 bg-white/5 hover:border-[#42b883] hover:shadow-[0_0_20px_rgba(66,184,131,0.25)] w-full sm:w-auto text-center"
            rel="noopener noreferrer"
          >
            Me contacter
          </a>
        </div>
      </div>
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        aria-hidden="true"
      >
        <div
          class="w-[1px] h-[48px] bg-[linear-gradient(to_bottom,rgba(100,108,255,0.8),transparent)] animate-[scroll-line_1.6s_ease-in-out_infinite]"
        ></div>
      </div>
    </section>

    <!-- Section compétences avec glassmorphisme -->
    <section
      class="py-20 md:py-32 px-5 md:px-8 flex flex-col items-center gap-12 md:gap-16 bg-[#0a0a0f]/15 backdrop-blur-[5px]"
      data-scroll-section
      aria-labelledby="competences-title"
    >
      <div class="text-center flex flex-col gap-2">
        <h2
          id="competences-title"
          class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold m-0 bg-[linear-gradient(135deg,#e0e0e0,#646cff)] bg-clip-text text-transparent"
        >
          Mes compétences
        </h2>
        <p class="text-[#6a6a80] text-[0.95rem] font-mono tracking-[0.06em]">
          Technologies et outils maîtrisés
        </p>
      </div>

      <div
        class="w-full max-w-[900px] flex flex-col gap-6"
        v-for="category in ['language', 'tool', 'cloud', 'os']"
        :key="category"
      >
        <h3
          class="font-mono text-[0.85rem] font-normal text-[#42b883] tracking-[0.1em] uppercase m-0 pb-3 border-b border-[#42b883]/15"
        >
          //
          {{
            category === 'language'
              ? 'Langages'
              : category === 'tool'
                ? 'Outils'
                : category === 'cloud'
                  ? 'Cloud'
                  : "Systèmes d'exploitation"
          }}
        </h3>
        <div class="flex flex-wrap justify-center gap-4" role="list">
          <a
            v-for="competence in competences.filter((c) => c.type === category)"
            :key="competence.name"
            :href="competence.link"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            class="flex flex-col items-center gap-2.5 p-2! md:p-4! w-22.5 md:w-27.5 rounded-xl bg-white/5 border border-white/10 no-underline text-[#9a9ab0] text-[0.7rem] text-center transition-[border-color,box-shadow,transform] duration-250 ease hover:border-[#646cff] hover:shadow-[0_0_16px_rgba(100,108,255,0.25)] hover:-translate-y-[3px] hover:text-[#c0c0d0] group"
            :aria-label="`${competence.name} - ouvrir dans un nouvel onglet`"
          >
            <img
              :src="competence.img"
              :alt="competence.name"
              loading="lazy"
              class="w-[40px] h-[40px] md:w-[52px] md:h-[52px] object-contain brightness-90 transition-[filter,transform] duration-250 ease group-hover:brightness-110 group-hover:scale-105"
            />
            <span class="leading-[1.3] wrap-break-words">{{ competence.name }}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Section contact avec carte glassmorphisme -->
    <section
      class="py-20 md:py-32 px-5 md:px-8 flex items-center justify-center bg-[#0a0a0f]/15 backdrop-blur-[5px]"
      id="contact"
      data-scroll-section
      aria-labelledby="contact-title"
    >
      <div
        class="flex flex-col items-center gap-6 p-8 md:py-12 md:px-10 max-w-[720px] w-full rounded-[20px] bg-[#0a0a14]/80 border border-white/10 backdrop-blur-[20px] animate-[border-glow_4s_ease-in-out_infinite]"
      >
        <h2
          id="contact-title"
          class="text-[clamp(1.8rem,4vw,2.5rem)] font-bold m-0 bg-[linear-gradient(135deg,#e0e0e0,#646cff)] bg-clip-text text-transparent"
        >
          Me contacter
        </h2>
        <p class="text-center text-[#6a6a80] max-w-[560px] leading-[1.7] text-[0.95rem]">
          Une question ou simplement envie d'échanger ? N'hésitez pas à me contacter.
        </p>
        <div class="flex flex-col md:flex-row flex-wrap justify-center w-full md:w-auto gap-3">
          <a
            href="mailto:baguelinraphael@gmail.com"
            class="inline-flex justify-center md:justify-start items-center gap-2 py-2.5 px-5 rounded-full bg-white/5 border border-white/10 text-[#c0c0d0] font-medium text-[0.9rem] no-underline transition-[border-color,box-shadow,transform,color] duration-200 ease hover:border-[#646cff] hover:shadow-[0_0_16px_rgba(100,108,255,0.3)] hover:-translate-y-0.5 hover:text-[#e0e0e0]"
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
            class="inline-flex justify-center md:justify-start items-center gap-2 py-2.5 px-5 rounded-full bg-white/5 border border-white/10 text-[#c0c0d0] font-medium text-[0.9rem] no-underline transition-[border-color,box-shadow,transform,color] duration-200 ease hover:border-[#646cff] hover:shadow-[0_0_16px_rgba(100,108,255,0.3)] hover:-translate-y-0.5 hover:text-[#e0e0e0]"
          >
            <img src="/linkedin.svg" width="20" height="20" alt="LinkedIn" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://github.com/raphbag"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex justify-center md:justify-start items-center gap-2 py-2.5 px-5 rounded-full bg-white/5 border border-white/10 text-[#c0c0d0] font-medium text-[0.9rem] no-underline transition-[border-color,box-shadow,transform,color] duration-200 ease hover:border-[#646cff] hover:shadow-[0_0_16px_rgba(100,108,255,0.3)] hover:-translate-y-0.5 hover:text-[#e0e0e0]"
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
/* Smooth scroll */
:global(html) {
  scroll-behavior: smooth;
}
</style>
