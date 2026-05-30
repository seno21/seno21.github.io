<template>
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="/assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle" />
        <h1 class="text-light">
          <a href="https://seno21.github.io/">Fega Suseno</a>
        </h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.youtube.com/@nzucode" target="_blank"><i class="bi bi-youtube"></i></a>
          <a href="https://github.com/seno21" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/fega.seno/" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="https://dev.to/seno21" target="_blank"><i class="bi bi-code-slash"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li>
            <a href="#about" class="nav-link scrollto" :class="{ active: activeSection === '#about' }" @click.prevent="$emit('navigate', '#about')">
              <i class="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" class="nav-link scrollto" :class="{ active: activeSection === '#resume' }" @click.prevent="$emit('navigate', '#resume')">
              <i class="bi bi-book"></i> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#services" class="nav-link scrollto" :class="{ active: activeSection === '#services' }" @click.prevent="$emit('navigate', '#services')">
              <i class="bi bi-terminal"></i> <span>Tech Experience</span>
            </a>
          </li>
          <li>
            <a href="#blog" class="nav-link scrollto" :class="{ active: activeSection === '#blog' }" @click.prevent="$emit('navigate', '#blog')">
              <i class="bi bi-globe"></i> <span>Articles</span>
            </a>
          </li>
          <li>
            <a href="#contact" class="nav-link scrollto" :class="{ active: activeSection === '#contact' }" @click.prevent="$emit('navigate', '#contact')">
              <i class="bi bi-person-lines-fill"></i><span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  activeSection: { type: String, default: '' }
})

defineEmits(['navigate'])
</script>
