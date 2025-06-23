<template>
  <div 
    class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
    @click="$emit('click')"
  >
    <!-- Solution Header -->
    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div class="text-white text-center p-6">
        <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <component :is="getCategoryIcon(solution.category)" class="text-2xl text-white" />
        </div>
        <h3 class="text-xl font-semibold mb-2">{{ solution.title }}</h3>
        <div class="text-blue-100 text-sm">{{ solution.category }}</div>
      </div>
      
      <!-- Featured Badge -->
      <div v-if="solution.featured" class="absolute top-4 right-4">
        <a-tag color="gold" class="border-0">
          <star-filled class="mr-1" />
          Popular
        </a-tag>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <p class="text-gray-600 mb-4 line-clamp-3">{{ solution.summary }}</p>
      
      <!-- Key Benefits -->
      <div class="mb-4">
        <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
          <check-circle-outlined class="text-green-500 mr-2" />
          Key Benefits:
        </h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li v-for="benefit in solution.businessBenefits.slice(0, 2)" :key="benefit" class="flex items-start">
            <span class="text-green-500 mr-2 mt-0.5">✓</span>
            <span>{{ benefit }}</span>
          </li>
        </ul>
        <div v-if="solution.businessBenefits.length > 2" class="text-xs text-gray-500 mt-1">
          +{{ solution.businessBenefits.length - 2 }} more benefits
        </div>
      </div>
      
      <!-- Results Preview -->
      <div v-if="solution.results" class="mb-4">
        <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
          <div class="text-center flex-1">
            <div class="text-lg font-bold text-blue-600">{{ solution.results[0]?.value }}</div>
            <div class="text-xs text-gray-600">{{ solution.results[0]?.label }}</div>
          </div>
          <div class="text-center flex-1 border-l border-gray-200">
            <div class="text-lg font-bold text-green-600">{{ solution.results[1]?.value }}</div>
            <div class="text-xs text-gray-600">{{ solution.results[1]?.label }}</div>
          </div>
        </div>
      </div>
      
      <!-- Ideal For -->
      <div class="mb-4">
        <h4 class="font-semibold text-gray-800 mb-2 text-sm">Perfect For:</h4>
        <div class="flex flex-wrap gap-1">
          <a-tag 
            v-for="type in solution.idealFor.slice(0, 2)" 
            :key="type" 
            color="blue" 
            class="text-xs"
          >
            {{ type }}
          </a-tag>
          <a-tag v-if="solution.idealFor.length > 2" color="default" class="text-xs">
            +{{ solution.idealFor.length - 2 }} more
          </a-tag>
        </div>
      </div>

      <!-- Learn More Button -->
      <a-button type="primary" class="w-full" ghost>
        <span>See How This Helps Your Business</span>
        <template #icon><right-outlined /></template>
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { 
  RightOutlined, 
  CheckCircleOutlined, 
  StarFilled,
  ShopOutlined,
  DatabaseOutlined,
  TeamOutlined,
  BarChartOutlined,
  CalendarOutlined,
  SettingOutlined
} from '@ant-design/icons-vue';

defineProps({
  solution: {
    type: Object,
    required: true
  }
});

defineEmits(['click']);

const getCategoryIcon = (category) => {
  const iconMap = {
    'Business Automation': ShopOutlined,
    'Inventory Control': DatabaseOutlined,
    'Customer Relations': TeamOutlined,
    'Business Intelligence': BarChartOutlined,
    'Scheduling Automation': CalendarOutlined,
    'Process Automation': SettingOutlined
  };
  
  return iconMap[category] || SettingOutlined;
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>