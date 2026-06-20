<template>
  <div class="mt-auto bg-[#0a0a0f]/60 backdrop-blur-md border-t border-white/5">
    <footer
      class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-5 py-5 sm:px-8 sm:py-6 max-w-7xl mx-auto"
    >
      <p class="text-[#9a9ab0] text-sm m-0">© {{ new Date().getFullYear() }} - Raphaël Baguelin</p>
      <div class="flex">
        <a
          href="https://www.linkedin.com/in/raphael-baguelin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Raphael Baguelin"
          class="flex items-center justify-center w-9 h-9 transition-all duration-300 hover:-translate-y-0.5 group"
        >
          <img
            src="/linkedin.svg"
            width="22"
            height="22"
            alt=""
            aria-hidden="true"
            class="w-[22px] h-[22px] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>
        <a
          href="https://github.com/raphbag"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil GitHub de Raphael Baguelin"
          class="flex items-center justify-center w-9 h-9 transition-all duration-300 hover:-translate-y-0.5 group"
        >
          <img
            src="/github.svg"
            width="22"
            height="22"
            alt=""
            aria-hidden="true"
            class="opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        </a>
      </div>
    </footer>
  </div>
</template>
