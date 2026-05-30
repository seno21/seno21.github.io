<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-title">
        <h2>Tech Experience</h2>
      </div>

      <div class="row g-4">
        <div v-for="(item, index) in techItems" :key="index"
             class="col-lg-4 col-md-6"
             data-aos="fade-up"
             :data-aos-delay="index * 100">
          <div class="tech-card">
            <div class="tech-icon-wrap">
              <img :src="item.icon" alt="" class="tech-icon" />
            </div>
            <h4 class="tech-name">{{ item.name }}</h4>
            <p class="tech-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const color = '4a5568'
const techItems = [
  { icon: `https://cdn.simpleicons.org/jenkins/${color}`, name: 'Jenkins', description: 'Automate daily production database backups and router config backups' },
  { icon: `https://cdn.simpleicons.org/grafana/${color}`, name: 'Grafana', description: 'Monitor production server resources and database resources' },
  { icon: `https://cdn.simpleicons.org/gitlab/${color}`, name: 'Gitlab', description: 'Source control management, CI/CD, and local production scripts' },
  { icon: `https://cdn.simpleicons.org/linux/${color}`, name: 'Linux OS', description: 'Bash scripting, service management and server maintenance' },
  { icon: `https://cdn.simpleicons.org/ansible/${color}`, name: 'Ansible', description: 'Install and configure production server services' },
  { icon: `https://cdn.simpleicons.org/proxmox/${color}`, name: 'Proxmox VE', description: 'On-premise server virtualization architecture' },
  { icon: `https://cdn.simpleicons.org/docker/${color}`, name: 'Docker', description: 'Containerized development environments' },
  { icon: `https://cdn.simpleicons.org/terraform/${color}`, name: 'Terraform', description: 'Infrastructure as code for environment setup' },
  { icon: `https://cdn.simpleicons.org/amazonwebservices/${color}`, name: 'Amazon Web Services', description: 'Cloud platform for web services' },
]
</script>

<style scoped>
.tech-card {
  background: #fff;
  border: 1px solid #e8edf5;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;
}
.tech-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}
.tech-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin: 0 auto 1.25rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8edf5 100%);
  transition: background 0.25s ease;
}
.tech-card:hover .tech-icon-wrap {
  background: linear-gradient(135deg, #e0e8ff 0%, #d0d8f0 100%);
}
.tech-icon {
  width: 28px;
  height: 28px;
}
.tech-name {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a1a2e;
}
.tech-desc {
  font-size: 0.875rem;
  color: #6c757d;
  line-height: 1.5;
  margin: 0;
}
</style>
