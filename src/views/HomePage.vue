<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Smart Technology Solutions
            </span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Stop losing revenue to manual processes. Get custom solutions that automate your operations, 
            delight your customers, and scale your business efficiently.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a-button 
              type="primary" 
              size="large" 
              class="bg-blue-600 border-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
              @click="scrollToSolutions"
            >
              See How We Help Businesses
              <template #icon><arrow-down-outlined /></template>
            </a-button>
            <a-button 
              size="large" 
              ghost 
              class="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 h-auto"
              @click="$router.push('/contact')"
            >
              Get Your Custom Solution
              <template #icon><right-outlined /></template>
            </a-button>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <arrow-down-outlined class="text-white text-2xl" />
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Businesses Choose Our Solutions</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand the challenges of running a business. Our solutions are designed to solve real problems and deliver measurable results.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <rocket-outlined class="text-2xl text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Rapid Implementation</h3>
            <p class="text-gray-600">Get your solution up and running in weeks, not months. We focus on quick wins and immediate impact.</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <trophy-outlined class="text-2xl text-green-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Proven Results</h3>
            <p class="text-gray-600">Our clients see average revenue increases of 30%+ and save 20+ hours per week on manual tasks.</p>
          </div>
          
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <heart-outlined class="text-2xl text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p class="text-gray-600">We don't just build and leave. Get continuous support, updates, and optimization for long-term success.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Solutions Section -->
    <section id="solutions" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Business Solutions That Drive Results</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how the right technology can solve your business challenges and accelerate growth. 
            Each solution is designed to deliver immediate impact and long-term value.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <SolutionCard 
            v-for="solution in featuredSolutions" 
            :key="solution.id" 
            :solution="solution" 
            @click="$router.push(`/solution/${solution.id}`)" 
          />
        </div>
        
        <div class="text-center">
          <a-button 
            type="primary" 
            size="large" 
            @click="$router.push('/solutions')"
            class="px-8"
          >
            View All Solutions
            <template #icon><right-outlined /></template>
          </a-button>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Real Results from Real Businesses</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our solutions have transformed businesses across different industries.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <div class="text-lg font-medium text-blue-800 mb-3">Sales Increase</div>
              <p class="text-blue-700">E-commerce store increased sales by implementing our order management system</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
            <div class="text-center">
              <div class="text-4xl font-bold text-green-600 mb-2">15hrs</div>
              <div class="text-lg font-medium text-green-800 mb-3">Weekly Time Saved</div>
              <p class="text-green-700">Service business automated scheduling and reduced administrative work</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
            <div class="text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">70%</div>
              <div class="text-lg font-medium text-purple-800 mb-3">Reduced No-Shows</div>
              <p class="text-purple-700">Healthcare practice improved patient attendance with automated reminders</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p class="text-xl mb-8 text-blue-100">
            Let's discuss your challenges and create a custom solution that drives real results for your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a-button 
              size="large" 
              class="bg-white text-blue-600 border-white hover:bg-gray-100 text-lg px-8 py-6 h-auto"
              @click="$router.push('/contact')"
            >
              Get Your Free Consultation
              <template #icon><calendar-outlined /></template>
            </a-button>
            <a-button 
              size="large" 
              ghost 
              class="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 h-auto"
              @click="$router.push('/solutions')"
            >
              Explore All Solutions
              <template #icon><search-outlined /></template>
            </a-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  ArrowDownOutlined, 
  RightOutlined, 
  RocketOutlined, 
  TrophyOutlined, 
  HeartOutlined,
  CalendarOutlined,
  SearchOutlined
} from '@ant-design/icons-vue'
import SolutionCard from '../components/solutions/SolutionCard.vue'
import { getFeaturedSolutions } from '../data/projects'

const router = useRouter()

const featuredSolutions = computed(() => {
  return getFeaturedSolutions().slice(0, 6)
})

const scrollToSolutions = () => {
  document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.animated-bg {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.portfolio-btn {
  background: linear-gradient(to right, #4e73df, #6d41a1);
  border: none;
}

:deep(.ant-carousel .slick-slide) {
  text-align: center;
  height: 300px;
  line-height: 160px;
  overflow: hidden;
}

:deep(.ant-carousel .slick-dots li button) {
  background: #3b82f6;
}
</style>