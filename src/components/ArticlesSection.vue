<template>
  <section id="blog">
    <div class="container">
      <div class="section-title">
        <h2>My Article</h2>
      </div>
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else-if="error" class="alert alert-danger">{{ error }}</div>
      <div v-else>
        <div class="search-devto mb-5">
          <a href="https://dev.to/seno21" target="_blank" class="search-devto-link">
            <svg class="search-devto-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span>Cari artikel lainnya di Dev.to</span>
            <svg class="search-devto-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
        <div class="row g-4">
          <div v-for="article in articles" :key="article.id" class="col-md-6 col-lg-4">
            <a :href="article.url" target="_blank" class="text-decoration-none">
              <div class="card h-100 border-0 shadow-sm article-card">
                <div class="card-img-wrap">
                  <img :src="article.social_image || article.cover_image || '/assets/img/favicon.png'" class="card-img-top" :alt="article.title" loading="lazy" />
                </div>
                <div class="card-body d-flex flex-column">
                  <div class="mb-2">
                    <span v-for="tag in article.tag_list" :key="tag" class="badge bg-light text-dark me-1 fw-normal">#{{ tag }}</span>
                  </div>
                  <h5 class="card-title fw-bold text-dark">{{ article.title }}</h5>
                  <p class="card-text text-muted small flex-grow-1">{{ article.description || '' }}</p>
                  <div class="d-flex align-items-center mt-auto pt-2 border-top">
                    <img :src="article.user.profile_image_90" class="rounded-circle me-2" width="28" height="28" :alt="article.user.name" />
                    <div>
                      <div class="small fw-semibold text-dark">{{ article.user.name }}</div>
                      <div class="small text-muted">{{ article.readable_publish_date }}</div>
                    </div>
                    <span class="ms-auto text-primary small fw-semibold">Baca &rarr;</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const articles = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await fetch("https://dev.to/api/articles?username=seno21");
    const data = await res.json();
    articles.value = data.slice(0, 6);
  } catch (err) {
    error.value = "Error fetching articles: " + err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.article-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border-radius: 12px;
  overflow: hidden;
}
.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1) !important;
}
.card-img-wrap {
  height: 180px;
  overflow: hidden;
  background: #f0f0f0;
}
.card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.article-card:hover .card-img-wrap img {
  transform: scale(1.05);
}
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.search-devto {
  text-align: center;
}
.search-devto-link {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  background: #f8f9fc;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
}
.search-devto-link:hover {
  background: #fff;
  border-color: #191970;
  color: #191970;
  box-shadow: 0 4px 16px rgba(25, 25, 112, 0.1);
  transform: translateY(-1px);
}
.search-devto-icon {
  opacity: 0.6;
  transition: opacity 0.25s ease;
}
.search-devto-link:hover .search-devto-icon {
  opacity: 1;
}
.search-devto-arrow {
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.25s ease;
}
.search-devto-link:hover .search-devto-arrow {
  opacity: 1;
  transform: translateX(0);
}
</style>
