<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="absolute top-0 left-0 w-full z-[100] flex justify-center bg-[#0a0a0f]/40 backdrop-blur-md border-b border-white/5"
  >
    <header class="flex items-center justify-between w-full max-w-7xl px-8 py-2">
      <RouterLink to="/" aria-label="Accueil - Raphael Baguelin" class="flex items-center">
        <img
          alt=""
          aria-hidden="true"
          class="drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] h-[50px] w-auto"
          src="/logo.svg"
        />
      </RouterLink>
      <nav aria-label="Navigation principale" class="flex gap-4">
        <RouterLink
          to="/"
          class="flex items-center no-underline text-[#9a9ab0] text-[0.95rem] font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-transparent hover:text-[#e0e0e0] hover:bg-[#646cff]/10 hover:border-[#646cff]/30"
          active-class="!text-[#42b883] bg-[#42b883]/10 !border-[#42b883]/30"
          >Home</RouterLink
        >
        <RouterLink
          to="/projets"
          class="flex items-center no-underline text-[#9a9ab0] text-[0.95rem] font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-transparent hover:text-[#e0e0e0] hover:bg-[#646cff]/10 hover:border-[#646cff]/30"
          active-class="!text-[#42b883] bg-[#42b883]/10 !border-[#42b883]/30"
          >Projets</RouterLink
        >
      </nav>
    </header>
  </div>
</template>
