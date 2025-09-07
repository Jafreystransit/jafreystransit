<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon" class="btn-icon"></i>
    <span v-if="$slots.default" class="btn-text">
      <slot></slot>
    </span>
    <i v-if="loading" class="fas fa-spinner fa-spin btn-loading"></i>
  </component>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    to: {
      type: [String, Object],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const tag = computed(() => {
      if (props.to) return 'router-link'
      if (props.href) return 'a'
      return 'button'
    })

    const buttonClasses = computed(() => {
      return [
        'base-button',
        `btn-${props.variant}`,
        `btn-${props.size}`,
        {
          'btn-block': props.block,
          'btn-rounded': props.rounded,
          'btn-loading': props.loading,
          'btn-disabled': props.disabled
        }
      ]
    })

    const handleClick = (event) => {
      if (!props.disabled && !props.loading) {
        emit('click', event)
      }
    }

    return {
      tag,
      buttonClasses,
      handleClick
    }
  }
}
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: inherit;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.base-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.base-button:disabled,
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* Variants */
.btn-primary {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2980b9;
  border-color: #2980b9;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
  border-color: #95a5a6;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #7f8c8d;
  border-color: #7f8c8d;
}

.btn-outline {
  background-color: transparent;
  color: #3498db;
  border-color: #3498db;
}

.btn-outline:hover:not(:disabled) {
  background-color: #3498db;
  color: white;
}

.btn-ghost {
  background-color: transparent;
  color: #3498db;
  border-color: transparent;
}

.btn-ghost:hover:not(:disabled) {
  background-color: rgba(52, 152, 219, 0.1);
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
  border-color: #e74c3c;
}

.btn-danger:hover:not(:disabled) {
  background-color: #c0392b;
  border-color: #c0392b;
}

/* Sizes */
.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 4px;
}

.btn-medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  border-radius: 8px;
}

/* Modifiers */
.btn-block {
  width: 100%;
}

.btn-rounded {
  border-radius: 50px !important;
}

.btn-loading .btn-text {
  opacity: 0.7;
}

.btn-loading .btn-loading {
  position: absolute;
  right: 1rem;
}

.btn-icon {
  font-size: 0.9em;
}

/* Animations */
.base-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.base-button:hover::before {
  left: 100%;
}

/* Focus styles for accessibility */
.base-button:focus-visible {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}

/* Active state */
.base-button:active {
  transform: translateY(1px);
}

/* Router link active state */
.base-button.router-link-active {
  background-color: #2980b9;
  border-color: #2980b9;
}

.btn-outline.router-link-active {
  background-color: #3498db;
  color: white;
}
</style>
