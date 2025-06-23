<template>
  <div class="bg-gray-50 min-h-screen py-16">
    <div class="container mx-auto px-6">
      <!-- About Hero -->
      <section class="mb-20">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Us</h1>
          <p class="text-xl text-gray-600">
            We're a dedicated team of digital innovators and web development specialists committed to creating 
            exceptional online experiences that help businesses thrive in the digital landscape.
          </p>
        </div>
      </section>

      <!-- Our Story -->
      <section class="mb-20">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-6 text-gray-900 text-center">Our Story</h2>
          <div class="space-y-6 text-gray-700 text-lg">
            <p>
              Founded with a vision to bridge the gap between innovative technology and business success, 
              our journey began when a group of passionate developers recognized the need for digital solutions 
              that truly understand and serve business objectives.
            </p>
            <p>
              Over the years, we've grown from a small team of enthusiasts into a comprehensive digital agency. 
              Our experience spans across diverse industries, working with startups, small businesses, and 
              established enterprises to transform their digital presence and drive meaningful growth.
            </p>
            <p>
              We believe that exceptional digital experiences are born from the perfect blend of cutting-edge 
              technology, thoughtful design, and deep understanding of our clients' unique challenges. 
              This philosophy drives everything we do, from initial consultation to final delivery and beyond.
            </p>
            <p>
              Today, we're proud to be a trusted partner for businesses looking to leverage technology 
              for growth, efficiency, and enhanced customer engagement. Our success is measured by the 
              success of our clients, and we're committed to delivering solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Values -->
      <section class="mb-20">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-10 text-center text-gray-900">Our Values</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-xl shadow-sm text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">Quality First</h3>
              <p class="text-gray-600">
                We never compromise on quality. Every project receives our full attention to detail, 
                ensuring exceptional results that stand the test of time.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM9 9a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">Collaboration</h3>
              <p class="text-gray-600">
                We believe the best results come from true partnership. We work closely with our clients 
                as an extension of their team, not just as vendors.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
              <p class="text-gray-600">
                We stay at the forefront of technology and design trends, constantly evolving our 
                skills and approaches to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Process -->
      <section class="mb-20">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-10 text-center text-gray-900">Our Process</h2>
          
          <div class="relative">
            <!-- Process Timeline -->
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            <!-- Process Steps -->
            <div class="space-y-16">
              <!-- Step 1 -->
              <div class="relative z-10">
                <div class="flex items-center justify-center">
                  <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <div class="mt-4 bg-white p-6 rounded-xl shadow-sm">
                  <h3 class="text-xl font-semibold mb-2 text-blue-600">Discovery & Research</h3>
                  <p class="text-gray-700">
                    We dive deep into understanding your business, target audience, and objectives. 
                    This comprehensive research phase ensures we build solutions that truly serve your needs.
                  </p>
                </div>
              </div>
              
              <!-- Step 2 -->
              <div class="relative z-10">
                <div class="flex items-center justify-center">
                  <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <div class="mt-4 bg-white p-6 rounded-xl shadow-sm">
                  <h3 class="text-xl font-semibold mb-2 text-blue-600">Strategy & Planning</h3>
                  <p class="text-gray-700">
                    Our team collaborates to develop a comprehensive strategy that outlines the optimal 
                    approach, technology stack, and timeline for your project's success.
                  </p>
                </div>
              </div>
              
              <!-- Step 3 -->
              <div class="relative z-10">
                <div class="flex items-center justify-center">
                  <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <div class="mt-4 bg-white p-6 rounded-xl shadow-sm">
                  <h3 class="text-xl font-semibold mb-2 text-blue-600">Design & Development</h3>
                  <p class="text-gray-700">
                    Our designers and developers work in tandem to create beautiful, functional solutions. 
                    We maintain constant communication to ensure alignment with your vision.
                  </p>
                </div>
              </div>
              
              <!-- Step 4 -->
              <div class="relative z-10">
                <div class="flex items-center justify-center">
                  <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                </div>
                <div class="mt-4 bg-white p-6 rounded-xl shadow-sm">
                  <h3 class="text-xl font-semibold mb-2 text-blue-600">Testing & Quality Assurance</h3>
                  <p class="text-gray-700">
                    We rigorously test every aspect of your project across multiple devices and browsers 
                    to ensure flawless performance and user experience before launch.
                  </p>
                </div>
              </div>
              
              <!-- Step 5 -->
              <div class="relative z-10">
                <div class="flex items-center justify-center">
                  <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">5</div>
                </div>
                <div class="mt-4 bg-white p-6 rounded-xl shadow-sm">
                  <h3 class="text-xl font-semibold mb-2 text-blue-600">Launch & Ongoing Support</h3>
                  <p class="text-gray-700">
                    We handle the launch process and provide continued support to ensure your digital 
                    solution continues to perform optimally and evolve with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Our Expertise -->
      <section class="mb-20">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-10 text-center text-gray-900">Our Expertise</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Frontend -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Frontend Development</h3>
              <div class="space-y-3">
                <div v-for="(skill, index) in frontendSkills" :key="`frontend-${index}`">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium">{{ skill.name }}</span>
                    <span>{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" :style="`width: ${skill.level}%`"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Backend -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Backend Development</h3>
              <div class="space-y-3">
                <div v-for="(skill, index) in backendSkills" :key="`backend-${index}`">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium">{{ skill.name }}</span>
                    <span>{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-purple-600 h-2 rounded-full" :style="`width: ${skill.level}%`"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Design -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Design & UX</h3>
              <div class="space-y-3">
                <div v-for="(skill, index) in designSkills" :key="`design-${index}`">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium">{{ skill.name }}</span>
                    <span>{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-green-600 h-2 rounded-full" :style="`width: ${skill.level}%`"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Other -->
            <div class="bg-white p-6 rounded-xl shadow-sm">
              <h3 class="text-xl font-semibold mb-4 text-blue-600">Additional Services</h3>
              <div class="space-y-3">
                <div v-for="(skill, index) in otherSkills" :key="`other-${index}`">
                  <div class="flex justify-between mb-1">
                    <span class="font-medium">{{ skill.name }}</span>
                    <span>{{ skill.level }}%</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-orange-600 h-2 rounded-full" :style="`width: ${skill.level}%`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action -->
      <section>
        <div class="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to start your next project?</h2>
          <p class="text-lg mb-6">Let's work together to create a digital solution that drives real results for your business.</p>
          <a-button type="primary" ghost size="large" @click="$router.push('/contact')">Start a Conversation</a-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const frontendSkills = ref([
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 92 },
  { name: 'Vue.js', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 88 }
]);

const backendSkills = ref([
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Firebase', level: 85 },
  { name: 'RESTful APIs', level: 90 }
]);

const designSkills = ref([
  { name: 'UI/UX Design', level: 85 },
  { name: 'Figma', level: 80 },
  { name: 'Adobe XD', level: 75 },
  { name: 'Responsive Design', level: 95 }
]);

const otherSkills = ref([
  { name: 'Git/GitHub', level: 90 },
  { name: 'Project Management', level: 85 },
  { name: 'Testing & QA', level: 80 },
  { name: 'Performance Optimization', level: 85 }
]);
</script>

<style scoped>
/* About page specific styles */
</style>