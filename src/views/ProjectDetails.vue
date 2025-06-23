<template>
  <div class="bg-gray-50 min-h-screen pb-16">
    <!-- Project Hero -->
    <section class="relative h-[50vh] mb-8">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ project.title }}</h1>
            <p class="text-xl text-white/80 mb-6">{{ project.summary }}</p>
            <div class="flex flex-wrap gap-2">
              <a-tag v-for="tag in project.tags" :key="tag" color="blue">{{ tag }}</a-tag>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Content -->
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Project Overview -->
          <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 class="text-2xl font-semibold mb-4">Project Overview</h2>
            <p class="text-gray-700 mb-6">{{ project.description }}</p>
            
            <!-- Client Challenge -->
            <div class="mb-6">
              <h3 class="text-xl font-medium mb-3">Client Challenge</h3>
              <p class="text-gray-700">{{ project.challenge }}</p>
            </div>
            
            <!-- Solution -->
            <div class="mb-6">
              <h3 class="text-xl font-medium mb-3">My Solution</h3>
              <p class="text-gray-700">{{ project.solution }}</p>
            </div>
          </div>
          
          <!-- Before & After Comparison -->
          <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 class="text-2xl font-semibold mb-6">Before & After</h2>
            <BeforeAfterSlider 
              :before-image="project.beforeImage" 
              :after-image="project.afterImage" 
              :before-label="'Before'"
              :after-label="'After'"
            />
            <p class="text-gray-700 mt-4">{{ project.transformationDescription }}</p>
          </div>
          
          <!-- Results & Impact -->
          <div class="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 class="text-2xl font-semibold mb-4">Results & Impact</h2>
            
            <!-- Key Results -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div v-for="(result, index) in project.results" :key="index" 
                   class="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 class="font-semibold text-blue-700">{{ result.label }}</h4>
                <p class="text-2xl font-bold text-blue-900">{{ result.value }}</p>
              </div>
            </div>
            
            <!-- Impact Description -->
            <p class="text-gray-700">{{ project.impact }}</p>

            <!-- Interactive Results Chart if applicable -->
            <div v-if="project.chartData" class="mt-8">
              <h3 class="text-xl font-medium mb-4">Performance Metrics</h3>
              <InteractiveChart :chart-data="project.chartData" :chart-type="project.chartType" />
            </div>
          </div>
          
          <!-- Testimonial -->
          <div v-if="project.testimonial" class="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h2 class="text-2xl font-semibold mb-4">Client Testimonial</h2>
            <div class="border-l-4 border-blue-500 pl-4 italic">
              <p class="text-gray-700">"{{ project.testimonial.quote }}"</p>
              <p class="mt-3 font-semibold">— {{ project.testimonial.name }}, {{ project.testimonial.role }}</p>
            </div>
          </div>
        </div>
        
        <!-- Sidebar -->
        <div>
          <!-- Project Details -->
          <div class="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h3 class="text-xl font-semibold mb-4">Project Details</h3>
            <div class="space-y-3">
              <div>
                <p class="text-gray-500">Client</p>
                <p class="font-medium">{{ project.client }}</p>
              </div>
              <div>
                <p class="text-gray-500">Industry</p>
                <p class="font-medium">{{ project.industry }}</p>
              </div>
              <div>
                <p class="text-gray-500">Timeline</p>
                <p class="font-medium">{{ project.timeline }}</p>
              </div>
              <div>
                <p class="text-gray-500">Services Provided</p>
                <div class="flex flex-wrap gap-1 mt-1">
                  <a-tag v-for="service in project.services" :key="service">{{ service }}</a-tag>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Technical Stack -->
          <div class="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h3 class="text-xl font-semibold mb-4">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <a-tag v-for="tech in project.techStack" :key="tech" color="purple">{{ tech }}</a-tag>
            </div>
          </div>
          
          <!-- CTA -->
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
            <h3 class="text-xl font-semibold mb-3">Need a similar solution?</h3>
            <p class="mb-4">Let's discuss how I can help your business succeed online.</p>
            <a-button type="primary" ghost @click="$router.push('/contact')">Get In Touch</a-button>
          </div>
        </div>
      </div>

      <!-- More Projects -->
      <div class="mt-16">
        <h2 class="text-2xl font-semibold mb-6 text-center">Explore More Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard 
            v-for="relatedProject in relatedProjects" 
            :key="relatedProject.id" 
            :project="relatedProject" 
            @click="$router.push(`/project/${relatedProject.id}`)" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import BeforeAfterSlider from '../components/projects/BeforeAfterSlider.vue'
import InteractiveChart from '../components/interactive/InteractiveChart.vue'
import ProjectCard from '../components/projects/ProjectCard.vue'

const route = useRoute()
const projectId = computed(() => route.params.id)
const project = ref({})

onMounted(() => {
  // Find the project based on route param
  const foundProject = projects.find(p => p.id === projectId.value)
  
  if (foundProject) {
    project.value = foundProject
    document.title = `${foundProject.title} - Portfolio Case Study`
  } else {
    // Handle case when project is not found
    project.value = {
      title: 'Project Not Found',
      summary: 'The requested project could not be found.'
    }
  }
})

const relatedProjects = computed(() => {
  // Get 3 random projects that are not the current one
  return projects
    .filter(p => p.id !== projectId.value)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
})
</script>

<style scoped>
/* Project-specific styles */
</style>