/SolutionsPage.vue
<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <section class="bg-gradient-to-r from-blue-900 to-purple-900 py-16">
      <div class="container mx-auto px-6">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Business Solutions</h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover technology solutions that solve real business problems and drive measurable results.
          </p>
        </div>
      </div>
    </section>

    <!-- Filters and Solutions -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <!-- Category Filter -->
        <div class="mb-8">
          <div class="flex flex-wrap gap-2 justify-center">
            <a-button 
              :type="selectedCategory === 'all' ? 'primary' : 'default'"
              @click="selectedCategory = 'all'"
            >
              All Solutions
            </a-button>
            <a-button 
              v-for="category in categories" 
              :key="category"
              :type="selectedCategory === category ? 'primary' : 'default'"
              @click="selectedCategory = category"
            >
              {{ category }}
            </a-button>
          </div>
        </div>

        <!-- Solutions Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard 
            v-for="solution in filteredSolutions" 
            :key="solution.id" 
            :solution="solution" 
            @click="$router.push(`/solution/${solution.id}`)" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SolutionCard from '../components/solutions/SolutionCard.vue'
import { businessSolutions, getAllCategories } from '../data/projects'

const router = useRouter()
const selectedCategory = ref('all')

const categories = computed(() => getAllCategories())

const filteredSolutions = computed(() => {
  if (selectedCategory.value === 'all') {
    return businessSolutions
  }
  return businessSolutions.filter(solution => solution.category === selectedCategory.value)
})
</script>