<template>
  <div>
    <i class="bi bi-list mobile-nav-toggle d-xl-none" @click="toggleMobileNav"></i>

    <AppHeader :activeSection="activeSection" @navigate="scrollTo" />

    <main id="main">
      <AboutSection />
      <ResumeSection />
      <TechExperience />
      <ArticlesSection />
      <ContactSection />
    </main>

    <AppFooter />

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center" :class="{ active: showBackToTop }" @click.prevent="scrollToTop">
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AboutSection from './components/AboutSection.vue'
import ResumeSection from './components/ResumeSection.vue'
import TechExperience from './components/TechExperience.vue'
import ArticlesSection from './components/ArticlesSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const activeSection = ref('')
const showBackToTop = ref(false)

function toggleMobileNav() {
  document.body.classList.toggle('mobile-nav-active')
  const toggle = document.querySelector('.mobile-nav-toggle')
  if (toggle) {
    toggle.classList.toggle('bi-list')
    toggle.classList.toggle('bi-x')
  }
}

function scrollTo(sectionId) {
  const el = document.querySelector(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
  document.body.classList.remove('mobile-nav-active')
  const toggle = document.querySelector('.mobile-nav-toggle')
  if (toggle) {
    toggle.classList.remove('bi-x')
    toggle.classList.add('bi-list')
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showBackToTop.value = window.scrollY > 100

  const sections = document.querySelectorAll('section[id]')
  let current = ''
  sections.forEach(section => {
    const top = section.offsetTop - 200
    if (window.scrollY >= top) {
      current = '#' + section.id
    }
  })
  activeSection.value = current
}

function initVendorScripts() {
  if (window.AOS) {
    window.AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false })
  }
  if (window.PureCounter) {
    new window.PureCounter()
  }
  if (window.GLightbox) {
    window.GLightbox({ selector: '.portfolio-lightbox' })
  }
  if (window.Swiper) {
    new window.Swiper('.portfolio-details-slider', {
      speed: 400, loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }
    })
    new window.Swiper('.testimonials-slider', {
      speed: 600, loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      slidesPerView: 'auto',
      pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
      breakpoints: { 320: { slidesPerView: 1, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 20 } }
    })
  }
  if (window.Typed && document.querySelector('.typed')) {
    let typedStrings = document.querySelector('.typed').getAttribute('data-typed-items')
    typedStrings = typedStrings.split(',')
    new window.Typed('.typed', { strings: typedStrings, loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 })
  }
  if (window.Waypoint && document.querySelector('.skills-content')) {
    new window.Waypoint({
      element: document.querySelector('.skills-content'),
      offset: '80%',
      handler: function () {
        document.querySelectorAll('.progress .progress-bar').forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        })
      }
    })
  }
  if (window.Isotope && document.querySelector('.portfolio-container')) {
    let portfolioIsotope = new window.Isotope('.portfolio-container', { itemSelector: '.portfolio-item' })
    document.querySelectorAll('#portfolio-flters li').forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelectorAll('#portfolio-flters li').forEach(l => l.classList.remove('filter-active'))
        this.classList.add('filter-active')
        portfolioIsotope.arrange({ filter: this.getAttribute('data-filter') })
        portfolioIsotope.on('arrangeComplete', () => { if (window.AOS) window.AOS.refresh() })
      })
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  if (window.location.hash) {
    setTimeout(() => scrollTo(window.location.hash), 300)
  }

  nextTick(initVendorScripts)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
