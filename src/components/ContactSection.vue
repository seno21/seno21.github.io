<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contact</h2>
      </div>

      <div class="row g-4 justify-content-center" data-aos="fade-in">
        <div class="col-md-5">
          <div class="contact-card">
            <div class="contact-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h4 class="contact-label">Location</h4>
            <p class="contact-text">Small town on the north coast, known for its hot temperatures.</p>
          </div>
        </div>

        <div class="col-md-5">
          <div class="contact-card">
            <div class="contact-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.5 2v6M17.5 5h8"/>
                <path d="M3 7l7.89 5.26a2 2 0 0 0 2.22 0L21 7"/>
                <path d="M21 12v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/>
              </svg>
            </div>
            <h4 class="contact-label">Let's Collaborate</h4>
            <p class="contact-text">I really hope to work with you.</p>
            <a class="contact-btn" target="_blank" href="https://wa.link/fp78e9">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  background: #fff;
  border: 1px solid #e8edf5;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;
}
.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}
.contact-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f4ff 0%, #e8edf5 100%);
  transition: background 0.25s ease;
}
.contact-card:hover .contact-icon-wrap {
  background: linear-gradient(135deg, #e0e8ff 0%, #d0d8f0 100%);
}
.contact-label {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a1a2e;
}
.contact-text {
  font-size: 0.9rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  background: #25D366;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.contact-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  color: #fff;
}
</style>
