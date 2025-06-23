<template>
  <header class="sticky top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm transition-all">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold text-gray-900 flex items-center">
          <span class="text-blue-600 mr-1">&lt;</span>
          <span>Trilogoweb</span>
          <span class="text-blue-600">/&gt;</span>
        </router-link>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': isActive(item.path) }"
          >
            {{ item.label }}
          </router-link>
          
          <a-button 
            type="primary" 
            @click="$router.push('/contact')"
            class="nav-cta-btn"
          >
            Let's Talk
          </a-button>
        </nav>
        
        <!-- Mobile Menu Button -->
        <a-button 
          type="text"
          class="md:hidden text-gray-700"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <MenuOutlined v-if="!mobileMenuOpen" class="text-xl" />
          <CloseOutlined v-else class="text-xl" />
        </a-button>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 transform origin-top"
        :class="{ 'animate-in fade-in slide-in-from-top-5': mobileMenuOpen }"
      >
        <div class="flex flex-col space-y-4">
          <router-link 
            v-for="item in navItems" 
            :key="`mobile-${item.path}`"
            :to="item.path"
            class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': isActive(item.path) }"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
          
          <a-button 
            type="primary" 
            block
            @click="() => { $router.push('/contact'); mobileMenuOpen = false; }"
            class="nav-cta-btn mt-2"
          >
            Let's Talk
          </a-button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons-vue';

const route = useRoute();
const mobileMenuOpen = ref(false);

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};
</script>

<style scoped>
.nav-cta-btn {
  background: linear-gradient(to right, #4e73df, #6d41a1);
  border: none;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>