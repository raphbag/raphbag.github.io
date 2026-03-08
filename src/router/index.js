import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjetView from '@/views/ProjectView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const DEFAULT_SEO = {
  title: 'Raphael Baguelin - Portfolio',
  description:
    'Portfolio de Raphael Baguelin, étudiant en cybersécurité. Découvrez mes projets en développement web, IoT, réseau et sécurité offensive/défensive.',
  robots: 'index, follow, max-image-preview:large',
}

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://raphaelbaguelin.fr').replace(/\/$/, '')

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const upsertCanonical = (href) => {
  let canonical = document.head.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', href)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Raphael Baguelin - Portfolio',
        description:
          'Accueil du portfolio de Raphael Baguelin, étudiant en cybersécurité. Retrouvez ses compétences.',
      },
    },
    {
      path: '/projets',
      name: 'projets',
      component: ProjetView,
      meta: {
        title: 'Projets de Raphael Baguelin - Portfolio',
        description:
          'Explorez les projets de Raphael Baguelin : cybersécurité offensive et défensive, applications web, IoT et infrastructures réseau.',
      },
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
      meta: {
        title: 'Page introuvable - Raphael Baguelin',
        description: 'La page demandée est introuvable sur le portfolio de Raphael Baguelin.',
        robots: 'noindex, nofollow',
      },
    }
  ],
})

router.afterEach((to) => {
  const title = to.meta.title || DEFAULT_SEO.title
  const description = to.meta.description || DEFAULT_SEO.description
  const robots = to.meta.robots || DEFAULT_SEO.robots
  const canonicalUrl = `${SITE_URL}${to.path}`

  document.title = title

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: description,
  })

  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: robots,
  })

  upsertMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: 'website',
  })

  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: 'Raphael Baguelin - Portfolio',
  })

  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: title,
  })

  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description,
  })

  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: canonicalUrl,
  })

  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: title,
  })

  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  })

  upsertCanonical(canonicalUrl)
})

export default router
