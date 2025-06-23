<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Loading State -->
    <div v-if="!solution" class="flex items-center justify-center min-h-screen">
      <a-spin size="large" />
    </div>
    
    <!-- Solution Content -->
    <div v-else>
      <!-- Solution Hero -->
      <section class="relative h-[60vh] mb-8">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center">
          <div class="container mx-auto px-6">
            <div class="max-w-4xl">
              <!-- Breadcrumb -->
              <a-breadcrumb class="mb-6">
                <a-breadcrumb-item>
                  <router-link to="/" class="text-blue-200 hover:text-white">Home</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                  <router-link to="/solutions" class="text-blue-200 hover:text-white">Solutions</router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item class="text-white">{{ solution.title }}</a-breadcrumb-item>
              </a-breadcrumb>
              
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center mb-4">
                    <a-tag color="blue" class="mr-3">{{ solution.category }}</a-tag>
                    <a-tag v-if="solution.featured" color="gold">
                      <star-filled class="mr-1" />
                      Popular Choice
                    </a-tag>
                  </div>
                  
                  <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ solution.title }}</h1>
                  <p class="text-xl text-white/80 mb-6 leading-relaxed">{{ solution.summary }}</p>
                  
                  <div class="flex flex-wrap gap-2 mb-6">
                    <a-tag 
                      v-for="type in solution.idealFor" 
                      :key="type" 
                      color="cyan" 
                      class="text-sm"
                    >
                      Perfect for {{ type }}
                    </a-tag>
                  </div>
                  
                  <div class="flex gap-4">
                    <a-button 
                      type="primary" 
                      size="large" 
                      class="bg-white text-blue-900 border-white hover:bg-gray-100"
                      @click="$router.push('/contact')"
                    >
                      Get This Solution
                      <template #icon><right-outlined /></template>
                    </a-button>
                    <a-button 
                      size="large" 
                      ghost 
                      class="border-white text-white hover:bg-white hover:text-blue-900"
                      @click="scrollToContent"
                    >
                      Learn More
                      <template #icon><arrow-down-outlined /></template>
                    </a-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Solution Content -->
      <div id="content" class="container mx-auto px-6 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Business Challenge & Solution -->
            <div class="bg-white p-8 rounded-xl shadow-sm">
              <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <bulb-outlined class="text-yellow-500 mr-3" />
                How This Solution Transforms Your Business
              </h2>
              <p class="text-gray-700 mb-6 text-lg leading-relaxed">{{ solution.description }}</p>
              
              <!-- Problem Statement -->
              <div class="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <h3 class="font-semibold text-red-800 mb-2">Common Business Challenge:</h3>
                <p class="text-red-700">{{ getBusinessChallenge(solution.category) }}</p>
              </div>
              
              <!-- Solution Statement -->
              <div class="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 class="font-semibold text-green-800 mb-2">Our Solution:</h3>
                <p class="text-green-700">{{ getSolutionStatement(solution.category) }}</p>
              </div>
            </div>
            
            <!-- Business Benefits -->
            <div class="bg-white p-8 rounded-xl shadow-sm">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <trophy-outlined class="text-gold mr-3" />
                What You'll Achieve
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  v-for="(benefit, index) in solution.businessBenefits" 
                  :key="benefit" 
                  class="flex items-start p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors"
                >
                  <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <check-outlined class="text-white text-sm" />
                  </div>
                  <div>
                    <span class="text-gray-800 font-medium">{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Real Results -->
            <div v-if="solution.results" class="bg-white p-8 rounded-xl shadow-sm">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <bar-chart-outlined class="text-blue-500 mr-3" />
                Real Results from Similar Businesses
              </h2>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div 
                  v-for="(result, index) in solution.results" 
                  :key="index" 
                  class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200"
                >
                  <div class="text-3xl font-bold text-blue-600 mb-2">{{ result.value }}</div>
                  <div class="text-blue-800 font-medium">{{ result.label }}</div>
                </div>
              </div>
              
              <!-- Case Study CTA -->
              <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white text-center">
                <h3 class="text-xl font-semibold mb-3">Want to See Detailed Case Studies?</h3>
                <p class="mb-4 text-blue-100">Learn exactly how we achieved these results and how we can do the same for your business.</p>
                <a-button 
                  ghost 
                  size="large"
                  @click="$router.push(`/case-study/${solution.id}`)"
                >
                  View Detailed Case Studies
                  <template #icon><file-text-outlined /></template>
                </a-button>
              </div>
            </div>
            
            <!-- Technologies Used -->
            <div class="bg-white p-8 rounded-xl shadow-sm">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <code-outlined class="text-purple-500 mr-3" />
                Technologies & Approach
              </h2>
              <p class="text-gray-600 mb-4">We use modern, reliable technologies to ensure your solution is fast, secure, and scalable:</p>
              <div class="flex flex-wrap gap-2">
                <a-tag 
                  v-for="tech in solution.technologies" 
                  :key="tech" 
                  color="purple"
                  class="mb-2"
                >
                  {{ tech }}
                </a-tag>
              </div>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Quick Info -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-semibold mb-4">Solution Overview</h3>
              <div class="space-y-4">
                <div>
                  <p class="text-gray-500 text-sm mb-1">Category</p>
                  <p class="font-medium">{{ solution.category }}</p>
                </div>
                <div>
                  <p class="text-gray-500 text-sm mb-1">Best For</p>
                  <div class="space-y-1">
                    <a-tag v-for="type in solution.idealFor" :key="type" size="small">
                      {{ type }}
                    </a-tag>
                  </div>
                </div>
                <div>
                  <p class="text-gray-500 text-sm mb-1">Implementation Time</p>
                  <p class="font-medium">2-6 weeks</p>
                </div>
                <div>
                  <p class="text-gray-500 text-sm mb-1">Support Included</p>
                  <p class="font-medium">✓ 6 months free support</p>
                </div>
              </div>
            </div>
            
            <!-- Main CTA -->
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h3 class="text-xl font-semibold mb-3">Ready to Get Started?</h3>
              <p class="mb-4 text-blue-100">Let's discuss how this solution can be customized for your specific business needs.</p>
              <a-button 
                type="primary" 
                block 
                size="large"
                class="bg-white text-blue-600 border-white hover:bg-gray-100 mb-3"
                @click="$router.push('/contact')"
              >
                Get Your Custom Solution
                <template #icon><right-outlined /></template>
              </a-button>
              <a-button 
                block 
                ghost 
                class="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Schedule Free Consultation
                <template #icon><calendar-outlined /></template>
              </a-button>
            </div>
            
            <!-- Contact Info -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Have Questions?</h3>
              <div class="space-y-3 text-sm">
                <div class="flex items-center">
                  <phone-outlined class="text-gray-400 mr-3" />
                  <span>Free consultation call</span>
                </div>
                <div class="flex items-center">
                  <mail-outlined class="text-gray-400 mr-3" />
                  <span>Quick response guarantee</span>
                </div>
                <div class="flex items-center">
                  <message-outlined class="text-gray-400 mr-3" />
                  <span>WhatsApp support available</span>
                </div>
              </div>
            </div>
            
            <!-- Related Solutions -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-lg font-semibold mb-4">Related Solutions</h3>
              <div class="space-y-3">
                <div 
                  v-for="related in getRelatedSolutions()" 
                  :key="related.id"
                  class="p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors"
                  @click="$router.push(`/solution/${related.id}`)"
                >
                  <h4 class="font-medium text-sm mb-1">{{ related.title }}</h4>
                  <p class="text-xs text-gray-600">{{ related.summary.substring(0, 80) }}...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  RightOutlined, 
  ArrowDownOutlined,
  StarFilled,
  BulbOutlined,
  TrophyOutlined,
  CheckOutlined,
  BarChartOutlined,
  FileTextOutlined,
  CodeOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  MessageOutlined
} from '@ant-design/icons-vue'
import { getSolutionById, businessSolutions } from '../data/projects'

const route = useRoute()
const router = useRouter()
const solution = ref(null)
   watch(() => route.params.id, () => {
      loadSolution()
    })
onMounted(() => {
  loadSolution()
})

const loadSolution = () => {
  const id = route.params.id
  solution.value = getSolutionById(id)
  
  if (!solution.value) {
    router.push('/404')
  }
}

const scrollToContent = () => {
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' })
}


const getBusinessChallenge = (category) => {
  const challenges = {
    'Business Automation': 'Manual processes are time-consuming, error-prone, and limit your ability to scale efficiently.',
    'Inventory Control': 'Overselling, stockouts, and inventory discrepancies are costing you money and customers.',
    'Customer Relations': 'Inconsistent follow-ups and poor customer experience are hurting retention and referrals.',
    'Business Intelligence': 'Making decisions without proper data insights leads to missed opportunities and wasted resources.',
    'Scheduling Automation': 'Manual scheduling creates confusion, double-bookings, and high no-show rates.',
    'Process Automation': 'Repetitive manual tasks are consuming valuable time that could be spent growing your business.'
  }
  return challenges[category] || 'Business processes that could be optimized for better efficiency and growth.'
}

const getSolutionStatement = (category) => {
  const statements = {
    'Business Automation': 'A custom automated system that handles routine tasks, reduces errors, and scales with your business growth.',
    'Inventory Control': 'Real-time inventory tracking across all channels with automated alerts and synchronization.',
    'Customer Relations': 'Automated engagement workflows that nurture leads and maintain customer relationships consistently.',
    'Business Intelligence': 'Data-driven dashboards and analytics that provide actionable insights for better decision-making.',
    'Scheduling Automation': 'Smart booking system with automated reminders, calendar sync, and customer self-service options.',
    'Process Automation': 'Custom workflow automation that eliminates repetitive tasks and streamlines operations.'
  }
  return statements[category] || 'A tailored solution designed to address your specific business challenges.'
}
   const getRelatedSolutions = () => {
      if (!solution.value) return []
      
      const sameCategorySolutions = businessSolutions
        .filter(s => s.id !== solution.value.id && s.category === solution.value.category)
        .slice(0, 2)
      
      const differentCategorySolutions = businessSolutions
        .filter(s => s.id !== solution.value.id && s.category !== solution.value.category)
        .slice(0, 3 - sameCategorySolutions.length)
      
      return [...sameCategorySolutions, ...differentCategorySolutions]
    }
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>