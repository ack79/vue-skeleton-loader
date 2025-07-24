<template>
  <div class="container">
    <h1>Vue Skeleton Loader Demo</h1>
    
    <div class="demo-section">
      <h2>Text Loading</h2>
      <div class="demo-box">
        <skeleton-loader type="text" />
        <skeleton-loader type="text" width="80%" />
        <skeleton-loader type="text" width="60%" />
      </div>
    </div>

    <div class="demo-section">
      <h2>Profile Card</h2>
      <div class="demo-box">
        <div class="profile-card">
          <skeleton-loader type="circle" width="80px" height="80px" />
          <div class="profile-info">
            <skeleton-loader type="heading" width="60%" />
            <skeleton-loader type="text" width="80%" />
            <skeleton-loader type="text" width="40%" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Social Media Post</h2>
      <div class="demo-box">
        <div class="social-post">
          <div class="post-header">
            <skeleton-loader type="circle" width="40px" height="40px" />
            <div class="post-header-info">
              <skeleton-loader type="text" width="120px" />
              <skeleton-loader type="text" width="80px" />
            </div>
          </div>
          <skeleton-loader type="rect" height="300px" />
          <div class="post-actions">
            <skeleton-loader type="text" width="60px" />
            <skeleton-loader type="text" width="60px" />
            <skeleton-loader type="text" width="60px" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Custom Animations</h2>
      <div class="demo-box animation-grid">
        <div class="animation-item">
          <h3>Default</h3>
          <skeleton-loader type="rect" height="100px" />
        </div>
        <div class="animation-item">
          <h3>Pulse</h3>
          <skeleton-loader 
            type="rect" 
            height="100px"
            :style="{ '--skeleton-animation': 'pulse 1.5s ease-in-out infinite' }"
          />
        </div>
        <div class="animation-item">
          <h3>Wave</h3>
          <skeleton-loader 
            type="rect" 
            height="100px"
            :style="{ '--skeleton-animation': 'wave 1.5s ease-in-out infinite' }"
          />
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>Custom Colors</h2>
      <div class="demo-box color-grid">
        <div class="color-item">
          <h3>Blue Theme</h3>
          <skeleton-loader 
            type="rect" 
            height="100px"
            backgroundColor="#2196F3"
            highlightColor="#64B5F6"
          />
        </div>
        <div class="color-item">
          <h3>Dark Theme</h3>
          <skeleton-loader 
            type="rect" 
            height="100px"
            backgroundColor="#424242"
            highlightColor="#616161"
          />
        </div>
        <div class="color-item">
          <h3>Gradient</h3>
          <skeleton-loader 
            type="rect" 
            height="100px"
            backgroundColor="linear-gradient(45deg, #FF9800, #F44336)"
            highlightColor="rgba(255, 255, 255, 0.2)"
          />
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h2>E-commerce Product Card</h2>
      <div class="demo-box">
        <div class="product-grid">
          <div class="product-card" v-for="i in 3" :key="i">
            <skeleton-loader type="rect" height="200px" />
            <skeleton-loader type="heading" width="80%" style="margin-top: 12px" />
            <skeleton-loader type="text" width="60%" />
            <div class="product-footer">
              <skeleton-loader type="text" width="40%" />
              <skeleton-loader type="rect" width="80px" height="32px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SkeletonLoader } from './index'

export default defineComponent({
  name: 'App',
  components: {
    SkeletonLoader
  }
})
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-section {
  margin: 40px 0;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
}

h2 {
  color: #34495e;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #34495e;
  margin-bottom: 12px;
  font-size: 1.2em;
}

.demo-box {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.profile-card {
  display: flex;
  gap: 20px;
}

.profile-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-post {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.post-header-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.post-actions {
  display: flex;
  gap: 16px;
  padding-top: 12px;
}

.animation-grid, .color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.animation-item, .color-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.product-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}

@keyframes wave {
  0% { transform: translateX(-100%) }
  50% { transform: translateX(100%) }
  100% { transform: translateX(100%) }
}

body {
  background-color: #f5f7fa;
  margin: 0;
  padding: 20px;
}
</style> 