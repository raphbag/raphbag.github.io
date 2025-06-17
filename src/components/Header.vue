<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <RouterLink to="/">
        <img alt="Logo RB" class="logo" src="@/assets/logo.svg" height="50" />
      </RouterLink>
      <nav>
        <RouterLink to="/" active-class="active">Home</RouterLink>
        <RouterLink to="/projets" active-class="active">Projets</RouterLink>
      </nav>
    </header>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
}

nav {
  padding: 20px;
}

nav > a {
  margin-right: 10px;
  text-decoration: none;
}

nav > a:hover {
  background-color: hsla(223, 100%, 50%, 0.2);
}

.active {
  text-decoration: underline rgba(255, 255, 255, 0.8);
}

img {
  padding: 0px 20px;
  border-right: 2px dotted gray;
}
</style>
