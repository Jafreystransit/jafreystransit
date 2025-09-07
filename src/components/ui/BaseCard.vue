<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <h3 v-if="title" class="card-title">{{ title }}</h3>
      </slot>
    </div>
    
    <div v-if="$slots.default" class="card-body">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'bordered', 'shadow', 'elevated'].includes(value)
    },
    padding: {
      type: String,
      default: 'medium',
      validator: (value) => ['none', 'small', 'medium', 'large'].includes(value)
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const cardClasses = computed(() => {
      return [
        'base-card',
        `card-${props.variant}`,
        `card-padding-${props.padding}`,
        {
          'card-hoverable': props.hoverable,
          'card-clickable': props.clickable
        }
      ]
    })

    const handleClick = (event) => {
      if (props.clickable) {
        emit('click', event)
      }
    }

    return {
      cardClasses,
      handleClick
    }
  }
}
</script>

<style scoped>
.base-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

/* Variants */
.card-default {
  border: 1px solid #e1e8ed;
}

.card-bordered {
  border: 2px solid #e1e8ed;
}

.card-shadow {
  border: 1px solid #e1e8ed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-elevated {
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Padding variants */
.card-padding-none .card-header,
.card-padding-none .card-body,
.card-padding-none .card-footer {
  padding: 0;
}

.card-padding-small .card-header,
.card-padding-small .card-body,
.card-padding-small .card-footer {
  padding: 1rem;
}

.card-padding-medium .card-header,
.card-padding-medium .card-body,
.card-padding-medium .card-footer {
  padding: 1.5rem;
}

.card-padding-large .card-header,
.card-padding-large .card-body,
.card-padding-large .card-footer {
  padding: 2rem;
}

/* Card sections */
.card-header {
  border-bottom: 1px solid #e1e8ed;
  background-color: #f8f9fa;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}

.card-body {
  flex: 1;
}

.card-footer {
  border-top: 1px solid #e1e8ed;
  background-color: #f8f9fa;
}

/* Interactive states */
.card-hoverable:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-clickable {
  cursor: pointer;
}

.card-clickable:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.card-clickable:active {
  transform: translateY(0);
}

/* Focus styles for accessibility */
.card-clickable:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-padding-large .card-header,
  .card-padding-large .card-body,
  .card-padding-large .card-footer {
    padding: 1.5rem;
  }
  
  .card-padding-medium .card-header,
  .card-padding-medium .card-body,
  .card-padding-medium .card-footer {
    padding: 1rem;
  }
}

/* Special card layouts */
.base-card.horizontal {
  display: flex;
  flex-direction: row;
}

.base-card.horizontal .card-header {
  border-bottom: none;
  border-right: 1px solid #e1e8ed;
  min-width: 200px;
}

/* Card with image */
.base-card .card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #e1e8ed;
}

/* Loading state */
.base-card.loading {
  position: relative;
  overflow: hidden;
}

.base-card.loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Error state */
.base-card.error {
  border-color: #e74c3c;
  background-color: #fdf2f2;
}

.base-card.error .card-header {
  background-color: #f8d7da;
  color: #721c24;
}

/* Success state */
.base-card.success {
  border-color: #27ae60;
  background-color: #f0f9f4;
}

.base-card.success .card-header {
  background-color: #d4edda;
  color: #155724;
}
</style>
