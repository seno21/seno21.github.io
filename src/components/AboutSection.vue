<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>About Me</h2>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img src="/assets/img/author.png" class="img-fluid rounded-circle" style="box-shadow: 1px 3px 10px 5px #aaa;" alt="" />
        </div>
        <div class="col-lg-8 pt-4 p-5 pt-lg-0 content" data-aos="fade-left">
          <p class="text-lg mb-4 isi" style="text-align: justify;">
            Hi, my name is <span style="color: #191970;">Fega Suseno</span>, and I'm an IT enthusiast with over
            <u><span>{{ experience }}+ years</span></u> of experience. I have a strong passion for open-source
            technology, Linux administration, and programming. Currently, I work as an IT staff member at a hospital with the role of
            <span class="bg-secondary text-light px-2 py-1 rounded-1">DevOps Engineer</span>. My main responsibility is to
            ensure that servers and computer networks run smoothly. I handle server administration, set up and configure
            services, and manage server virtualization environments.
          </p>

          <p class="mb-2 isi" style="text-align: justify;">
            I'm also into automation to
            <span style="color: #191970;"><u>streamline operations and improve efficiency.</u></span>
            I have hands-on experience building on-premise servers from scratch—starting from assembling the hardware and
            installing the system to configuring services and maintaining everything. In short, I make sure everything on
            the tech side works seamlessly so the hospital can focus on what matters most <span
              class="bg-dark text-light px-2 rounded-1">saving lives!</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const startYear = 2017
const currentYear = new Date().getFullYear()
const experience = currentYear - startYear
</script>
