<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <!-- Brand Section -->
        <div class="col-span-1 md:col-span-1">
          <div class="text-2xl font-bold flex items-center mb-4">
            <span class="text-blue-400 mr-1">&lt;</span>
            <span>Trilogoweb</span>
            <span class="text-blue-400">/&gt;</span>
          </div>
          <p class="text-gray-400 mb-4">
            Creating exceptional digital experiences that help businesses grow and succeed online.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <twitter-outlined />
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <linkedin-outlined />
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <github-outlined />
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
              <instagram-outlined />
            </a>
          </div>
        </div>

        <!-- Links Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-blue-400 transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/solutions" class="text-gray-400 hover:text-blue-400 transition-colors">Solutions</router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-blue-400 transition-colors">About Me</router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-blue-400 transition-colors">Contact</router-link>
            </li>
          </ul>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">E-Commerce Solutions</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Mobile Applications</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">Business Consulting</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter Section -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
          <p class="text-gray-400 mb-4">Subscribe to my newsletter for the latest updates and insights.</p>
          <div class="flex">
            <a-input 
              placeholder="Your email" 
              class="rounded-r-none"
            />
            <a-button 
              type="primary" 
              class="rounded-l-none bg-blue-500 border-blue-500 hover:bg-blue-600"
            >
              Subscribe
            </a-button>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 mb-4 md:mb-0">
          &copy; {{ currentYear }} Trilogoweb. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <router-link to="/privacy" class="text-gray-400 hover:text-blue-400 transition-colors">
            Privacy Policy
          </router-link>
          <router-link to="/terms" class="text-gray-400 hover:text-blue-400 transition-colors">
            Terms of Service
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { 
  TwitterOutlined, 
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined
} from '@ant-design/icons-vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* Footer-specific styles */
</style>