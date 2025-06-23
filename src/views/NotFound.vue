<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center relative overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center text-white">
        <!-- 404 Visual -->
        <div class="mb-8">
          <div class="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            404
          </div>
          <div class="flex justify-center mb-6">
            <div class="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <search-outlined class="text-4xl text-blue-300" />
            </div>
          </div>
        </div>
        
        <!-- Error Message -->
        <div class="mb-12">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h1>
          <p class="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            The page you're looking for seems to have taken a different path. 
            But don't worry – let's get you back on track to transform your business!
          </p>
          
          <!-- Search Suggestion -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
            <h3 class="font-semibold mb-3 text-blue-200">Looking for something specific?</h3>
            <div class="flex gap-2">
              <a-input 
                v-model:value="searchTerm"
                placeholder="Search our solutions..."
                class="flex-1"
                @keyup.enter="handleSearch"
              />
              <a-button type="primary" @click="handleSearch">
                <search-outlined />
              </a-button>
            </div>
          </div>
        </div>
        
        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Popular Solutions -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
               @click="$router.push('/solutions')">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <bulb-outlined class="text-xl text-white" />
            </div>
            <h3 class="font-semibold mb-2">Explore Solutions</h3>
            <p class="text-blue-200 text-sm">Discover how we can transform your business</p>
          </div>
          
          <!-- About -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
               @click="$router.push('/about')">
            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <user-outlined class="text-xl text-white" />
            </div>
            <h3 class="font-semibold mb-2">About Us</h3>
            <p class="text-blue-200 text-sm">Learn about our approach and expertise</p>
          </div>
          
          <!-- Contact -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
               @click="$router.push('/contact')">
            <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
              <message-outlined class="text-xl text-white" />
            </div>
            <h3 class="font-semibold mb-2">Get Help</h3>
            <p class="text-blue-200 text-sm">Contact us for personalized assistance</p>
          </div>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a-button 
            type="primary" 
            size="large"
            class="bg-white text-blue-900 border-white hover:bg-gray-100 text-lg px-8 py-6 h-auto"
            @click="$router.push('/')"
          >
            <home-outlined class="mr-2" />
            Back to Home
          </a-button>
          
          <a-button 
            size="large" 
            ghost 
            class="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 h-auto"
            @click="$router.go(-1)"
          >
            <arrow-left-outlined class="mr-2" />
            Go Back
          </a-button>
          
          <a-button 
            size="large" 
            ghost 
            class="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 h-auto"
            @click="$router.push('/solutions')"
          >
            <rocket-outlined class="mr-2" />
            View Solutions
          </a-button>
        </div>
        
        <!-- Popular Links -->
        <div class="mt-12 pt-8 border-t border-white/20">
          <h3 class="text-lg font-semibold mb-4 text-blue-200">Popular Pages</h3>
          <div class="flex flex-wrap gap-4 justify-center">
            <router-link 
              v-for="link in popularLinks" 
              :key="link.path"
              :to="link.path"
              class="text-blue-300 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg hover:bg-white/10"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>
        
        <!-- Fun Error Message -->
        <div class="mt-8 text-blue-300 text-sm">
          <p>Error Code: BUSINESS_OPPORTUNITY_NOT_FOUND</p>
          <p class="mt-1">Don't worry, we have plenty of other opportunities to grow your business! 🚀</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  SearchOutlined, 
  BulbOutlined, 
  UserOutlined, 
  MessageOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
  RocketOutlined
} from '@ant-design/icons-vue'

const router = useRouter()
const searchTerm = ref('')

const popularLinks = ref([
  { path: '/solution/order-management-solution', label: 'Order Management' },
  { path: '/solution/inventory-management-solution', label: 'Inventory Control' },
  { path: '/solution/customer-engagement-solution', label: 'Customer Engagement' },
  { path: '/solution/appointment-booking-solution', label: 'Appointment Booking' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' }
])

const handleSearch = () => {
  if (searchTerm.value.trim()) {
    // Simple search logic - you can enhance this
    const searchQuery = searchTerm.value.toLowerCase()
    
    // Check if search term matches any solution
    if (searchQuery.includes('order') || searchQuery.includes('management')) {
      router.push('/solution/order-management-solution')
    } else if (searchQuery.includes('inventory') || searchQuery.includes('stock')) {
      router.push('/solution/inventory-management-solution')
    } else if (searchQuery.includes('customer') || searchQuery.includes('engagement')) {
      router.push('/solution/customer-engagement-solution')
    } else if (searchQuery.includes('booking') || searchQuery.includes('appointment')) {
      router.push('/solution/appointment-booking-solution')
    } else if (searchQuery.includes('analytics') || searchQuery.includes('intelligence')) {
      router.push('/solution/financial-analytics-solution')
    } else if (searchQuery.includes('automation') || searchQuery.includes('workflow')) {
      router.push('/solution/workflow-automation-solution')
    } else {
      // Default to solutions page
      router.push('/solutions')
    }
  }
}
</script>

<style scoped>
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

.animate-gradient {
  background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
</style>