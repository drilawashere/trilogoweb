<template>
  <div 
    class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
    @click="$emit('click')"
  >
    <!-- Project Image -->
    <div class="relative h-48 overflow-hidden">

      <!-- Category Badge -->
      <div class="absolute top-4 right-4">
        <a-tag :color="getCategoryColor(project.category)">{{ project.category }}</a-tag>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2 line-clamp-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4 line-clamp-3">{{ project.summary }}</p>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <a-tag v-for="tag in displayTags" :key="tag" color="blue">{{ tag }}</a-tag>
        <a-tag v-if="showMoreTags" color="default">+{{ project.tags.length - maxDisplayTags }}</a-tag>
      </div>
      
      <!-- Client & Date -->
      <div class="flex justify-between items-center text-sm text-gray-500">
        <div class="flex items-center">
          <user-outlined class="mr-1" />
          <span>{{ project.client }}</span>
        </div>
        <div class="flex items-center">
          <calendar-outlined class="mr-1" />
          <span>{{ project.year }}</span>
        </div>
      </div>

      <!-- View Details Button -->
      <a-button type="primary" class="w-full mt-4" ghost>
        View Case Study
        <template #icon><right-outlined /></template>
      </a-button>
    </div>
    
    <!-- Impact Label (if featured) -->
    <div v-if="project.featured && project.impactLabel" 
         class="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1 px-4 transform -translate-y-0 rotate-0 origin-top-left">
      {{ project.impactLabel }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { UserOutlined, CalendarOutlined, RightOutlined } from '@ant-design/icons-vue';

// Props
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  maxDisplayTags: {
    type: Number,
    default: 3
  }
});

// Emits
defineEmits(['click']);

// Computed properties
const displayTags = computed(() => {
  if (props.project.tags?.length > props.maxDisplayTags) {
    return props.project.tags.slice(0, props.maxDisplayTags);
  }
  return props.project.tags || [];
});

const showMoreTags = computed(() => {
  return props.project.tags?.length > props.maxDisplayTags;
});

// Methods
const getCategoryColor = (category) => {
  const categoryColors = {
    'E-Commerce': 'green',
    'Web App': 'blue',
    'Mobile': 'purple',
    'Branding': 'orange',
    'Dashboard': 'cyan',
    'Marketing': 'magenta'
  };
  
  return categoryColors[category] || 'blue';
};
</script>

<style scoped>
/* Limit text to specific number of lines */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>