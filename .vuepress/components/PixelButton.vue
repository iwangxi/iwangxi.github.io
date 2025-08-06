<template>
  <button 
    class="pixel-button" 
    :class="[variant, size, { disabled: disabled }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <span class="pixel-button-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'PixelButton',
  props: {
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'secondary', 'accent', 'warning', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style scoped>
.pixel-button {
  font-family: 'Press Start 2P', 'Courier New', monospace;
  background: var(--pixel-primary);
  color: var(--pixel-bg-primary);
  border: 3px solid var(--pixel-border);
  padding: 8px 16px;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  transition: none;
  outline: none;
  
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: var(--pixel-shadow);
    z-index: -1;
  }
  
  &:hover:not(.disabled) {
    background: var(--pixel-accent);
    transform: translate(-2px, -2px);
    
    &:before {
      transform: translate(4px, 4px);
    }
  }
  
  &:active:not(.disabled) {
    transform: translate(0, 0);
    
    &:before {
      transform: translate(2px, 2px);
    }
  }
  
  &.disabled {
    background: var(--pixel-text-muted);
    cursor: not-allowed;
    opacity: 0.6;
  }
}

/* 变体样式 */
.pixel-button.secondary {
  background: var(--pixel-secondary);
}

.pixel-button.accent {
  background: var(--pixel-accent);
}

.pixel-button.warning {
  background: var(--pixel-warning);
}

.pixel-button.danger {
  background: var(--pixel-danger);
}

/* 尺寸样式 */
.pixel-button.small {
  padding: 4px 8px;
  font-size: 8px;
}

.pixel-button.medium {
  padding: 8px 16px;
  font-size: 12px;
}

.pixel-button.large {
  padding: 12px 24px;
  font-size: 16px;
}

.pixel-button-text {
  position: relative;
  z-index: 1;
}
</style>
