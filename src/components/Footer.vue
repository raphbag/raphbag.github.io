<template>
  <div>
    <footer>
      <p>© {{ new Date().getFullYear() }} - Raphaël Baguelin</p>
      <a
        href="https://www.linkedin.com/in/raphael-baguelin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil LinkedIn de Raphael Baguelin"
      >
        <img src="/linkedin.svg" width="26" height="26" alt="" aria-hidden="true" />
      </a>
      <a
        href="https://github.com/raphbag"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil GitHub de Raphael Baguelin"
      >
        <img src="/github.svg" width="26" height="26" alt="" aria-hidden="true" />
      </a>
    </footer>
  </div>
</template>

<style scoped>
div {
  background-color: #333;
  color: white;
  border-top: 1px solid #ccc;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  height: 100%;
}

footer a {
  display: flex;
  align-items: center;
}

img {
  margin-left: 6px;
}
</style>
