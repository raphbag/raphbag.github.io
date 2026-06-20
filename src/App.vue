<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CyberBackground from '@/components/CyberBackground.vue'
</script>

<template>
  <CyberBackground />
  <Header />
  <RouterView />
  <Footer />
</template>
