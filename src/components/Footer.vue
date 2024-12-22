<template>
  <div>
    <footer>
      <p>© {{ new Date().getFullYear() }}</p>
      <a href="https://github.com/raphbag" target="_blank">
        <img src="/src/assets/github.svg" width="26px " alt="Icon Github" />
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
}

p {
  margin-right: 10px;
}
</style>
