<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <main
    class="min-h-[80vh] flex items-center justify-center p-8 bg-[linear-gradient(145deg,var(--vt-c-black),#161616)]"
  >
    <div class="text-center w-full max-w-[600px]">
      <div
        class="flex justify-center items-center gap-4 mb-8 text-[4rem] md:text-[5rem] lg:text-[8rem] font-bold leading-none"
      >
        <span
          class="bg-[linear-gradient(45deg,#646cff,#42b883)] bg-clip-text text-transparent animate-[pulse-404_2s_ease-in-out_infinite]"
          >4</span
        >
        <span class="text-[#646cff] animate-[rotate-404_3s_ease-in-out_infinite] inline-block"
          >0</span
        >
        <span
          class="bg-[linear-gradient(45deg,#646cff,#42b883)] bg-clip-text text-transparent animate-[pulse-404_2s_ease-in-out_infinite]"
          >4</span
        >
      </div>
      <h1 class="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-semibold mb-4 text-[#e0e0e0]">
        Page introuvable
      </h1>
      <p class="text-[1rem] lg:text-[1.2rem] text-[#d6d6d6] mb-8 leading-[1.6]">
        Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center flex-wrap">
        <button
          @click="goHome"
          class="inline-flex justify-center items-center gap-2 py-3 px-6 rounded-[10px] text-[1rem] font-medium no-underline transition-all duration-300 cursor-pointer border-none font-inherit bg-[linear-gradient(45deg,#646cff,#42b883)] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(100,108,255,0.4)] w-full md:w-auto"
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
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Retour à l'accueil
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
@keyframes pulse-404 {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes rotate-404 {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
}
</style>
