<template>
  <div>
    <span>{{ displayValue }}</span>{{ suffix }}
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';

const props = defineProps({
  endValue: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  easing: {
    type: String,
    default: 'easeOutExpo',
    validator: (value) => [
      'linear', 
      'easeInQuad', 
      'easeOutQuad', 
      'easeInOutQuad', 
      'easeInCubic', 
      'easeOutCubic', 
      'easeInOutCubic', 
      'easeOutExpo'
    ].includes(value)
  },
  decimalPlaces: {
    type: Number,
    default: 0
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  separator: {
    type: String,
    default: ','
  },
  autoplay: {
    type: Boolean,
    default: true
  }
});

const currentValue = ref(0);
const displayValue = computed(() => {
  const value = Number(currentValue.value.toFixed(props.decimalPlaces));
  return props.prefix + formatNumber(value);
});

const formatNumber = (value) => {
  const parts = value.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, props.separator);
  return parts.join('.');
};

const easingFunctions = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (--t) * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
};

const animateValue = () => {
  currentValue.value = 0;
  const startTime = performance.now();
  
  const animate = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / props.duration, 1);
    
    // Apply easing function
    const easingFunction = easingFunctions[props.easing];
    const easedProgress = easingFunction(progress);
    
    currentValue.value = easedProgress * props.endValue;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      currentValue.value = props.endValue;
    }
  };
  
  requestAnimationFrame(animate);
};

// Start animation when component is mounted
onMounted(() => {
  if (props.autoplay) {
    // Delay animation slightly for better user experience
    setTimeout(animateValue, 200);
  }
});

// Watch for changes in end value to restart animation
watch(() => props.endValue, () => {
  animateValue();
});

// Expose methods to parent component
defineExpose({
  play: animateValue,
  setValue: (val) => {
    currentValue.value = val;
  }
});
</script>

<style scoped>
/* You can add custom styles here */
</style>