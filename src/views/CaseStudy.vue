<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Loading State -->
    <div v-if="!solution" class="flex items-center justify-center min-h-screen">
      <a-spin size="large" />
    </div>
    
    <!-- Case Study Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-r from-blue-900 to-purple-900 py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto text-center text-white">
            <!-- Breadcrumb -->
            <a-breadcrumb class="mb-6 justify-center">
              <a-breadcrumb-item>
                <router-link to="/" class="text-blue-200 hover:text-white">Home</router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <router-link to="/solutions" class="text-blue-200 hover:text-white">Solutions</router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <router-link :to="`/solution/${solution.id}`" class="text-blue-200 hover:text-white">
                  {{ solution.title }}
                </router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item class="text-white">Case Study</a-breadcrumb-item>
            </a-breadcrumb>
            
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
              Case Study: {{ solution.title }}
            </h1>
            <p class="text-xl text-blue-100 mb-6">
              Real results from businesses that implemented this solution
            </p>
            
            <div class="flex justify-center gap-6 text-center">
              <div v-for="result in solution.results" :key="result.label" class="bg-white/10 rounded-lg p-4">
                <div class="text-2xl font-bold">{{ result.value }}</div>
                <div class="text-blue-200 text-sm">{{ result.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Study Content -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto">
            
            <!-- Executive Summary -->
            <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <file-text-outlined class="text-blue-500 mr-3" />
                Executive Summary
              </h2>
              <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{ getCaseStudySummary(solution.category) }}
                </p>
              </div>
            </div>

            <!-- The Challenge -->
            <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <exclamation-circle-outlined class="text-red-500 mr-3" />
                The Challenge
              </h2>
              
              <div class="space-y-4">
                <div class="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 class="font-semibold text-red-800 mb-3">Business Problems:</h3>
                  <ul class="space-y-2 text-red-700">
                    <li v-for="challenge in getBusinessChallenges(solution.category)" :key="challenge" class="flex items-start">
                      <span class="text-red-500 mr-2 mt-1">•</span>
                      {{ challenge }}
                    </li>
                  </ul>
                </div>
                
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 class="font-semibold text-yellow-800 mb-3">Impact on Business:</h3>
                  <ul class="space-y-2 text-yellow-700">
                    <li v-for="impact in getBusinessImpacts(solution.category)" :key="impact" class="flex items-start">
                      <span class="text-yellow-500 mr-2 mt-1">•</span>
                      {{ impact }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- The Solution -->
            <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <bulb-outlined class="text-green-500 mr-3" />
                Our Solution
              </h2>
              
              <div class="space-y-6">
                <p class="text-lg text-gray-700 leading-relaxed">
                  {{ solution.description }}
                </p>
                
                <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 class="font-semibold text-green-800 mb-4">Key Features Implemented:</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="feature in getSolutionFeatures(solution.category)" :key="feature" class="flex items-start">
                      <check-circle-outlined class="text-green-500 mr-2 mt-1" />
                      <span class="text-green-700">{{ feature }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 class="font-semibold text-blue-800 mb-4">Technologies Used:</h3>
                  <div class="flex flex-wrap gap-2">
                    <a-tag v-for="tech in solution.technologies" :key="tech" color="blue">
                      {{ tech }}
                    </a-tag>
                  </div>
                </div>
              </div>
            </div>

            <!-- Implementation Process -->
            <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <setting-outlined class="text-purple-500 mr-3" />
                Implementation Process
              </h2>
              
              <div class="space-y-6">
                <div v-for="(phase, index) in getImplementationPhases()" :key="index" class="flex">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span class="text-purple-600 font-semibold">{{ index + 1 }}</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-800 mb-2">{{ phase.title }}</h3>
                    <p class="text-gray-600 mb-2">{{ phase.description }}</p>
                    <div class="text-sm text-purple-600">{{ phase.duration }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Results & Impact -->
            <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 class="text-2xl font-semibold mb-6 flex items-center">
                <trophy-outlined class="text-gold mr-3" />
                Results & Business Impact
              </h2>
              
              <!-- Key Metrics -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div v-for="result in solution.results" :key="result.label" 
                     class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div class="text-4xl font-bold text-blue-600 mb-2">{{ result.value }}</div>
                  <div class="text-blue-800 font-medium">{{ result.label }}</div>
                </div>
              </div>
              
              <!-- Detailed Benefits -->
              <div class="space-y-4">
                <h3 class="font-semibold text-gray-800 mb-4">Detailed Business Benefits:</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="benefit in solution.businessBenefits" :key="benefit" 
                       class="flex items-start p-4 bg-green-50 rounded-lg border border-green-100">
                    <check-circle-outlined class="text-green-500 mr-3 mt-1" />
                    <span class="text-gray-700">{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Client Testimonial -->
            <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white mb-8">
              <div class="text-center">
                <div class="text-6xl text-blue-200 mb-4">"</div>
                <blockquote class="text-xl italic mb-6">
                  {{ getClientTestimonial(solution.category) }}
                </blockquote>
                <div class="font-semibold">- Business Owner</div>
                <div class="text-blue-200 text-sm">{{ solution.idealFor[0] }}</div>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="bg-white p-8 rounded-xl shadow-sm text-center">
              <h2 class="text-2xl font-semibold mb-4">Ready to Achieve Similar Results?</h2>
              <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every business is unique, but the fundamentals of success remain the same. 
                Let's discuss how we can customize this solution for your specific needs.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a-button 
                  type="primary" 
                  size="large"
                  @click="$router.push('/contact')"
                  class="px-8"
                >
                  Get Your Custom Solution
                  <template #icon><right-outlined /></template>
                </a-button>
                <a-button 
                  size="large"
                  @click="$router.push(`/solution/${solution.id}`)"
                  class="px-8"
                >
                  Learn More About This Solution
                  <template #icon><arrow-left-outlined /></template>
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { 
  FileTextOutlined,
  ExclamationCircleOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  TrophyOutlined,
  RightOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons-vue'
import { getSolutionById } from '../data/projects'

const route = useRoute()
const router = useRouter()
const solution = ref(null)

onMounted(() => {
  const id = route.params.id
  solution.value = getSolutionById(id)
  
  if (!solution.value) {
    router.push('/404')
  }
})

const getCaseStudySummary = (category) => {
  const summaries = {
    'Business Automation': 'A growing e-commerce business struggling with manual order processing implemented our automated order management system, resulting in 40% increased sales and 15 hours saved per week.',
    'Inventory Control': 'A multi-channel retailer eliminated overselling and stockouts with our real-time inventory management system, achieving 99.8% stock accuracy and 28% revenue increase.',
    'Customer Relations': 'A service-based business automated their customer engagement workflows, improving retention by 45% and increasing repeat sales by 35%.',
    'Business Intelligence': 'A growing company implemented our analytics platform to make data-driven decisions, improving decision speed by 60% and reducing costs by 25%.',
    'Scheduling Automation': 'A healthcare practice reduced no-shows by 70% and saved 20 hours per week with our smart appointment booking system.',
    'Process Automation': 'A manufacturing company automated their workflows, reducing manual work by 80% and saving over $50,000 annually.'
  }
  return summaries[category] || 'A business successfully implemented our solution to solve critical operational challenges.'
}

const getBusinessChallenges = (category) => {
  const challenges = {
    'Business Automation': [
      'Manual order processing through multiple channels (WhatsApp, email, phone)',
      'High error rates in order entry and fulfillment',
      'Difficulty tracking order status and customer communications',
      'Time-consuming manual invoicing and payment follow-ups'
    ],
    'Inventory Control': [
      'Overselling products across multiple sales channels',
      'Stockout situations leading to lost sales',
      'Manual inventory updates causing delays and errors',
      'No real-time visibility into stock levels'
    ],
    'Customer Relations': [
      'Inconsistent follow-up with leads and customers',
      'Manual customer segmentation and targeting',
      'Difficulty maintaining customer relationships at scale',
      'No automated loyalty or retention programs'
    ],
    'Business Intelligence': [
      'Decision-making based on gut feeling rather than data',
      'Scattered data across multiple systems',
      'No real-time visibility into business performance',
      'Manual report generation taking hours each week'
    ],
    'Scheduling Automation': [
      'High no-show rates for appointments',
      'Double-bookings and scheduling conflicts',
      'Manual reminder calls taking staff time',
      'No online booking capability for customers'
    ],
    'Process Automation': [
      'Repetitive manual tasks consuming valuable time',
      'Human errors in routine processes',
      'Difficulty scaling operations without hiring more staff',
      'Inconsistent process execution'
    ]
  }
  return challenges[category] || ['Various operational inefficiencies', 'Manual processes limiting growth']
}

const getBusinessImpacts = (category) => {
  const impacts = {
    'Business Automation': [
      'Lost sales due to delayed order processing',
      'Customer frustration from order confusion',
      'Staff burnout from repetitive manual work',
      'Inability to scale operations efficiently'
    ],
    'Inventory Control': [
      'Revenue loss from overselling and stockouts',
      'Customer disappointment from unavailable products',
      'Excess inventory tying up cash flow',
      'Staff time wasted on manual inventory tasks'
    ],
    'Customer Relations': [
      'Declining customer retention rates',
      'Missed opportunities for upselling',
      'Inconsistent customer experience',
      'Lost revenue from poor follow-up'
    ],
    'Business Intelligence': [
      'Missed growth opportunities',
      'Inefficient resource allocation',
      'Reactive rather than proactive management',
      'Competitive disadvantage'
    ],
    'Scheduling Automation': [
      'Revenue loss from no-shows',
      'Staff time wasted on manual scheduling',
      'Customer frustration with booking process',
      'Missed appointment opportunities'
    ],
    'Process Automation': [
      'High operational costs',
      'Slow response to market changes',
      'Employee frustration with repetitive work',
      'Quality inconsistencies'
    ]
  }
  return impacts[category] || ['Reduced efficiency', 'Limited growth potential']
}

const getSolutionFeatures = (category) => {
  const features = {
    'Business Automation': [
      'Multi-channel order consolidation',
      'Automated order confirmation and tracking',
      'Customer notification system',
      'Integrated payment processing',
      'Real-time order status updates',
      'Automated invoicing and receipts'
    ],
    'Inventory Control': [
      'Real-time stock synchronization',
      'Multi-channel inventory management',
      'Automated reorder alerts',
      'Stock movement tracking',
      'Supplier integration',
      'Inventory forecasting'
    ],
    'Customer Relations': [
      'Automated email sequences',
      'Customer segmentation',
      'Lead scoring and nurturing',
      'Loyalty program automation',
      'Customer behavior tracking',
      'Personalized communications'
    ],
    'Business Intelligence': [
      'Real-time dashboards',
      'Custom report generation',
      'Data visualization',
      'Predictive analytics',
      'Performance tracking',
      'Automated insights'
    ],
    'Scheduling Automation': [
      'Online booking system',
      'Automated reminders (SMS/Email)',
      'Calendar synchronization',
      'No-show tracking',
      'Customer self-service portal',
      'Staff schedule management'
    ],
    'Process Automation': [
      'Workflow automation',
      'Task assignment and tracking',
      'Document generation',
      'Approval workflows',
      'Integration with existing systems',
      'Performance monitoring'
    ]
  }
  return features[category] || ['Custom solution features', 'Automated workflows']
}

const getImplementationPhases = () => {
  return [
    {
      title: 'Discovery & Planning',
      description: 'Comprehensive analysis of current processes and requirements gathering',
      duration: '1 week'
    },
    {
      title: 'Design & Development',
      description: 'Custom solution design and development based on specific business needs',
      duration: '2-4 weeks'
    },
    {
      title: 'Testing & Training',
      description: 'Thorough testing of the solution and staff training for smooth adoption',
      duration: '1 week'
    },
    {
      title: 'Deployment & Support',
      description: 'Go-live support and ongoing optimization for maximum results',
      duration: 'Ongoing'
    }
  ]
}

const getClientTestimonial = (category) => {
  const testimonials = {
    'Business Automation': 'This system completely transformed our business. We went from chaos to clarity overnight, and our sales have never been better.',
    'Inventory Control': 'Finally, we have complete control over our inventory. No more overselling, no more stockouts, just smooth operations.',
    'Customer Relations': 'Our customer retention has skyrocketed. The automated follow-ups feel personal and our customers love the experience.',
    'Business Intelligence': 'Now we make decisions based on real data, not guesswork. Our business has never been more profitable.',
    'Scheduling Automation': 'The no-show problem is basically solved. Our schedule is full and our customers love the convenience.',
    'Process Automation': 'We saved so much time on manual work that we could focus on growing the business. Best investment we ever made.'
  }
  return testimonials[category] || 'This solution completely transformed how we operate. The results speak for themselves.'
}
</script>