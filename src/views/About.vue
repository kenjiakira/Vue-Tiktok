<template>
  <div class="about">
    <h1>About Our Service</h1>
    <div class="content">
      <div class="section">
        <h2>What We Do</h2>
        <p>We provide a simple and efficient way to download TikTok videos. Our service is designed to be user-friendly and reliable.</p>
      </div>

      <div class="section">
        <h2>Features</h2>
        <ul>
          <li>Fast downloads</li>
          <li>No registration required</li>
          <li>High quality videos</li>
          <li>Simple interface</li>
        </ul>
      </div>

      <div class="section">
        <h2>Contact</h2>
        <p>If you have any questions or concerns, feel free to reach out to us:</p>
        <a href="mailto:kenjiakistudio@.com" class="contact-link">kenjiakistudio@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.content {
  margin-top: 32px;
  display: grid;
  gap: 24px;
}

.section {
  margin-bottom: 0;
  padding: 32px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.section h2 {
  color: #fff;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  background: linear-gradient(135deg, #ff3b8d 0%, #ff71b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 16px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
  font-size: 16px;
}

li::before {
  content: "★";
  position: absolute;
  left: 0;
  color: #ff3b8d;
}

.contact-link {
  color: #ff3b8d;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(255, 59, 141, 0.1);
  transition: all 0.3s ease;
  display: inline-block;
}

.contact-link:hover {
  background: rgba(255, 59, 141, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .about {
    margin: 24px auto;
  }

  .content {
    gap: 20px;
  }

  .section {
    padding: 24px;
    transition: none; 
  }

  .section:hover {
    transform: none;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .contact-link {
    transition: none;
  }

  .contact-link:hover {
    transform: none; 
  }
}
</style>
