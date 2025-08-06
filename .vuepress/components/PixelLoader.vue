<template>
  <div class="pixel-loader-container">
    <div class="pixel-loader">
      <div class="pixel-block" v-for="i in 8" :key="i" :style="{ animationDelay: `${i * 0.1}s` }"></div>
    </div>
    <div class="loading-text" v-if="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'PixelLoader',
  props: {
    text: {
      type: String,
      default: 'LOADING...'
    }
  }
}
</script>

<style scoped>
.pixel-loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.pixel-loader {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}

.pixel-block {
  width: 8px;
  height: 8px;
  background: var(--pixel-primary);
  animation: pixelBounce 1.2s ease-in-out infinite;
}

.loading-text {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  font-size: 10px;
  color: var(--pixel-text-primary);
  text-align: center;
  animation: pixelBlink 1s ease-in-out infinite;
}

@keyframes pixelBounce {
  0%, 80%, 100% {
    transform: scale(1);
    background: var(--pixel-primary);
  }
  40% {
    transform: scale(1.5);
    background: var(--pixel-accent);
  }
}

@keyframes pixelBlink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0.3;
  }
}
</style>
