<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')

  let animationFrameId
  let particles = []

  // Couleurs du thème : Bleu et Vert
  const colors = ['#646cff', '#42b883']

  let mouse = { x: null, y: null, radius: 150 }
  let lastScrollY = window.scrollY

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initParticles()
  }

  window.addEventListener('resize', resize)

  const handleMouseMove = (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  const handleMouseOut = () => {
    mouse.x = null
    mouse.y = null
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    const delta = currentScrollY - lastScrollY
    lastScrollY = currentScrollY

    // Déplacement parallax des particules
    particles.forEach((p) => {
      p.y -= delta * 0.4 // Facteur de parallaxe
    })
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseout', handleMouseOut)
  window.addEventListener('scroll', handleScroll)

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 1.0
      this.vy = (Math.random() - 0.5) * 1.0
      this.radius = Math.random() * 1.5 + 1
      this.color = colors[Math.floor(Math.random() * colors.length)]
    }

    update() {
      this.x += this.vx
      this.y += this.vy

      // Effet de bordure (wrap-around)
      if (this.x < 0) this.x = canvas.width
      if (this.x > canvas.width) this.x = 0
      if (this.y < 0) this.y = canvas.height
      if (this.y > canvas.height) this.y = 0

      // Interaction avec la souris
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouse.radius - distance) / mouse.radius

          // Repousse légèrement les particules
          this.x -= forceDirectionX * force * 1.5
          this.y -= forceDirectionY * force * 1.5
        }
      }
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  const initParticles = () => {
    particles = []
    // Ajuste le nombre de particules selon la taille de l'écran
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000)
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle())
    }
  }

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()

      // Dessine les lignes entre les particules
      for (let j = i; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          ctx.beginPath()
          // Ligne légèrement bleue
          ctx.strokeStyle = `rgba(100, 108, 255, ${0.3 - distance / 333})`
          ctx.lineWidth = 1
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }

      // Lignes connectées à la souris
      if (mouse.x != null && mouse.y != null) {
        const dx = mouse.x - particles[i].x
        const dy = mouse.y - particles[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          ctx.beginPath()
          // Ligne légèrement verte
          ctx.strokeStyle = `rgba(66, 184, 131, ${0.5 - distance / (mouse.radius * 2)})`
          ctx.lineWidth = 1.2
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    }
  }

  resize()
  animate()

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseout', handleMouseOut)
    window.removeEventListener('scroll', handleScroll)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,#101018_0%,#050508_100%)]"
  ></canvas>
</template>
