<template>
  <div class="before-after-container" ref="containerRef">
    <!-- After Image (Background) -->
    <div class="image-container">
      <img :src="afterImage" :alt="afterLabel" class="after-image" />
    </div>
    
    <!-- Before Image (Overlay) -->
    <div class="image-container before-image-container" :style="{ width: `${sliderPosition}%` }">
      <img :src="beforeImage" :alt="beforeLabel" class="before-image" />
    </div>
    
    <!-- Slider -->
    <div 
      class="slider-handle" 
      :style="{ left: `${sliderPosition}%` }"
      @mousedown="startDrag"
      @touchstart="startDrag"
    >
      <div class="slider-button">
        <left-outlined class="arrow left" />
        <right-outlined class="arrow right" />
      </div>
    </div>
    
    <!-- Labels -->
    <div class="labels">
      <div class="label before-label" :style="{ right: `${100 - sliderPosition + 5}%` }">{{ beforeLabel }}</div>
      <div class="label after-label" :style="{ left: `${sliderPosition + 5}%` }">{{ afterLabel }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  beforeImage: {
    type: String,
    required: true
  },
  afterImage: {
    type: String,
    required: true
  },
  beforeLabel: {
    type: String,
    default: 'Before'
  },
  afterLabel: {
    type: String,
    default: 'After'
  },
  initialPosition: {
    type: Number,
    default: 50
  }
});

const containerRef = ref(null);
const sliderPosition = ref(props.initialPosition);
const isDragging = ref(false);

const startDrag = (event) => {
  event.preventDefault();
  isDragging.value = true;
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('touchmove', handleDrag);
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);
};

const handleDrag = (event) => {
  if (!isDragging.value || !containerRef.value) return;
  
  const containerRect = containerRef.value.getBoundingClientRect();
  const containerWidth = containerRect.width;
  
  // Get client X (handle both mouse and touch events)
  const clientX = event.type.includes('touch')
    ? event.touches[0].clientX
    : event.clientX;
  
  // Calculate position relative to the container
  const position = clientX - containerRect.left;
  const positionPercentage = (position / containerWidth) * 100;
  
  // Clamp values between 0 and 100
  sliderPosition.value = Math.min(Math.max(positionPercentage, 0), 100);
};

const stopDrag = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('touchmove', handleDrag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchend', stopDrag);
};

// Cleanup event listeners on component unmount
onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('touchmove', handleDrag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchend', stopDrag);
});

// Initialize slider with touch support
onMounted(() => {
  // Preload images to avoid layout shifts
  const preloadImages = () => {
    const beforeImg = new Image();
    const afterImg = new Image();
    beforeImg.src = props.beforeImage;
    afterImg.src = props.afterImage;
  };
  
  preloadImages();
});
</script>

<style scoped>
.before-after-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  aspect-ratio: 16 / 9;
  user-select: none;
  touch-action: none;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.before-image-container {
  z-index: 1;
  border-right: 2px solid white;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
}

.before-image, .after-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slider-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: white;
  cursor: ew-resize;
  z-index: 10;
  transform: translateX(-50%);
}

.slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: #2563eb;
  border: 3px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  color: white;
}

.arrow {
  font-size: 14px;
}

.arrow.left {
  margin-right: -5px;
}

.arrow.right {
  margin-left: -5px;
}

.labels {
  position: absolute;
  bottom: 15px;
  width: 100%;
  z-index: 5;
}

.label {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  transform: translateY(0);
  transition: transform 0.3s;
}

.before-label {
  right: 55%;
  bottom: 0;
}

.after-label {
  left: 55%;
  bottom: 0;
}

.before-after-container:hover .label {
  transform: translateY(-10px);
}
</style>