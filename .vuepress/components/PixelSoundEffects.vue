<template>
  <div class="pixel-sound-effects">
    <!-- 音效控制按钮 -->
    <button 
      class="sound-toggle" 
      @click="toggleSound"
      :class="{ active: soundEnabled }"
      title="切换音效"
    >
      🔊
    </button>
  </div>
</template>

<script>
export default {
  name: 'PixelSoundEffects',
  data() {
    return {
      soundEnabled: false,
      audioContext: null,
      sounds: {}
    }
  },
  mounted() {
    this.initAudio();
    this.addEventListeners();
  },
  methods: {
    initAudio() {
      try {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.createSounds();
      } catch (e) {
        console.log('Web Audio API not supported');
      }
    },
    
    createSounds() {
      // 创建像素游戏风格的音效
      this.sounds = {
        click: this.createBeep(800, 0.1),
        hover: this.createBeep(600, 0.05),
        success: this.createBeep(1000, 0.2),
        error: this.createBeep(300, 0.3)
      };
    },
    
    createBeep(frequency, duration) {
      return () => {
        if (!this.soundEnabled || !this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'square'; // 像素游戏典型的方波音效
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
      };
    },
    
    toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      if (this.soundEnabled) {
        this.sounds.success();
      }
    },
    
    addEventListeners() {
      // 为按钮添加音效
      document.addEventListener('click', (e) => {
        if (e.target.matches('button, .pixel-btn, .pixel-button')) {
          this.sounds.click();
        }
      });
      
      // 为链接添加hover音效
      document.addEventListener('mouseover', (e) => {
        if (e.target.matches('a, button, .pixel-btn, .pixel-button')) {
          this.sounds.hover();
        }
      });
    }
  }
}
</script>

<style scoped>
.pixel-sound-effects {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.sound-toggle {
  background: var(--pixel-bg-secondary);
  border: 2px solid var(--pixel-primary);
  color: var(--pixel-text-primary);
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: none;
  
  &:hover {
    background: var(--pixel-primary);
    color: var(--pixel-bg-primary);
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 0 var(--pixel-shadow);
  }
  
  &.active {
    background: var(--pixel-accent);
    color: var(--pixel-bg-primary);
  }
}
</style>
