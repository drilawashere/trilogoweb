<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="container mx-auto px-6">
      <!-- Contact Hero -->
      <section class="mb-16">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get In Touch</h1>
          <p class="text-xl text-gray-600">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>
      </section>

      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Information -->
          <div class="lg:col-span-1">
            <div class="bg-white p-8 rounded-xl shadow-sm h-full">
              <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-blue-100 p-3 rounded-full mr-4">
                    <MailOutlined class="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Email</h3>
                    <p class="text-gray-600">trilogoweb@gmail.com</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-blue-100 p-3 rounded-full mr-4">
                    <PhoneOutlined class="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Phone</h3>
                    <p class="text-gray-600">+383 49 286-116</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-blue-100 p-3 rounded-full mr-4">
                    <EnvironmentOutlined class="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Location</h3>
                    <p class="text-gray-600">Pristina, Kosovo</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h3 class="font-semibold mb-4 text-gray-900">Follow Me</h3>
                <div class="flex space-x-4">
                  <a href="#" class="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
                    <TwitterOutlined class="text-gray-700 hover:text-blue-600 text-xl" />
                  </a>
                  <a href="#" class="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
                    <LinkedinOutlined class="text-gray-700 hover:text-blue-600 text-xl" />
                  </a>
                  <a href="#" class="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
                    <GithubOutlined class="text-gray-700 hover:text-blue-600 text-xl" />
                  </a>
                  <a href="#" class="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors duration-300">
                    <InstagramOutlined class="text-gray-700 hover:text-blue-600 text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <div class="bg-white p-8 rounded-xl shadow-sm">
              <h2 class="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              <a-form
                :model="formState"
                name="contactForm"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
                layout="vertical"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <a-form-item
                    name="name"
                    label="Name"
                    :rules="[{ required: true, message: 'Please enter your name' }]"
                  >
                    <a-input v-model:value="formState.name" size="large" placeholder="Your name" />
                  </a-form-item>
                  
                  <!-- Email -->
                  <a-form-item
                    name="email"
                    label="Email"
                    :rules="[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]"
                  >
                    <a-input v-model:value="formState.email" size="large" placeholder="Your email address" />
                  </a-form-item>
                </div>
                
                <!-- Phone -->
                <a-form-item
                  name="phone"
                  label="Phone (optional)"
                >
                  <a-input v-model:value="formState.phone" size="large" placeholder="Your phone number" />
                </a-form-item>
                
                <!-- Subject -->
                <a-form-item
                  name="subject"
                  label="Subject"
                  :rules="[{ required: true, message: 'Please enter a subject' }]"
                >
                  <a-input v-model:value="formState.subject" size="large" placeholder="Subject of your message" />
                </a-form-item>
                
                <!-- Message -->
                <a-form-item
                  name="message"
                  label="Message"
                  :rules="[{ required: true, message: 'Please enter your message' }]"
                >
                  <a-textarea 
                    v-model:value="formState.message" 
                    :rows="6" 
                    placeholder="Your message"
                  />
                </a-form-item>
                
                <!-- Budget Range -->
                <a-form-item name="budget" label="Project Budget (optional)">
                  <a-slider
                    v-model:value="formState.budget"
                    :marks="budgetMarks"
                    :min="1000"
                    :max="50000"
                    :step="1000"
                  />
                </a-form-item>
                
                <!-- Services -->
                <a-form-item name="services" label="Services You're Interested In (optional)">
                  <a-checkbox-group v-model:value="formState.services">
                    <a-row>
                      <a-col :span="12">
                        <a-checkbox value="web-dev">Web Development</a-checkbox>
                      </a-col>
                      <a-col :span="12">
                        <a-checkbox value="e-commerce">E-Commerce Solutions</a-checkbox>
                      </a-col>
                      <a-col :span="12">
                        <a-checkbox value="ui-design">UI/UX Design</a-checkbox>
                      </a-col>
                      <a-col :span="12">
                        <a-checkbox value="consulting">Consulting</a-checkbox>
                      </a-col>
                    </a-row>
                  </a-checkbox-group>
                </a-form-item>
                
                <a-form-item>
                  <a-button 
                    type="primary" 
                    html-type="submit" 
                    size="large" 
                    class="w-full bg-gradient-to-r from-blue-600 to-purple-600 border-0"
                    :loading="submitting"
                  >
                    Send Message
                  </a-button>
                </a-form-item>
              </a-form>
              
              <!-- Success Message -->
              <a-alert
                v-if="submitStatus.show"
                :message="submitStatus.title"
                :description="submitStatus.message"
                :type="submitStatus.type"
                showIcon
                class="mt-4"
              />
            </div>
          </div>
        </div>
        
        <!-- FAQ Section -->
        <section class="mt-20">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <a-collapse v-model:activeKey="activeKey">
              <a-collapse-panel key="1" header="What is your typical process for a new project?">
                <p class="text-gray-700">
                  My process typically includes an initial consultation to understand your needs, followed by research and planning. 
                  I then create wireframes and designs for your approval before moving into development. 
                  After thorough testing, we launch your project. I also provide post-launch support to ensure everything runs smoothly.
                </p>
              </a-collapse-panel>
              
              <a-collapse-panel key="2" header="How long does it take to complete a project?">
                <p class="text-gray-700">
                  Project timelines can vary depending on complexity and scope. A simple portfolio website 
                  might take 2-3 weeks, while a custom e-commerce platform could take 8-12 weeks. 
                  During our initial consultation, I'll provide a more accurate timeline based on your specific requirements.
                </p>
              </a-collapse-panel>
              
              <a-collapse-panel key="3" header="What are your payment terms?">
                <p class="text-gray-700">
                  I typically require a 50% deposit before beginning work, with the remaining balance due upon project completion. 
                  For larger projects, I may suggest a payment schedule with milestones. 
                  I accept payments via bank transfer, PayPal, or credit card.
                </p>
              </a-collapse-panel>
              
              <a-collapse-panel key="4" header="Do you provide website maintenance and updates?">
                <p class="text-gray-700">
                  Yes, I offer ongoing maintenance and support packages to keep your site secure, updated, and running smoothly. 
                  These can be customized based on your needs, from basic security updates to full content management support.
                </p>
              </a-collapse-panel>
              
              <a-collapse-panel key="5" header="Can you help with content creation?">
                <p class="text-gray-700">
                  While I primarily focus on design and development, I can collaborate with content writers and photographers 
                  in my network to ensure your project has high-quality content. I can also provide guidance on content strategy 
                  to maximize the effectiveness of your website.
                </p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined
} from '@ant-design/icons-vue';

const formState = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  budget: 10000,
  services: []
});

const budgetMarks = {
  1000: '1K',
  10000: '10K',
  25000: '25K',
  50000: '50K'
};

const submitting = ref(false);
const submitStatus = reactive({
  show: false,
  title: '',
  message: '',
  type: 'success'
});

const activeKey = ref(['1']);

const onFinish = (values) => {
  submitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    console.log('Form submitted:', values);
    submitting.value = false;
    submitStatus.show = true;
    submitStatus.title = 'Message Sent!';
    submitStatus.message = 'Thank you for reaching out. I\'ll get back to you within 24-48 hours.';
    submitStatus.type = 'success';
    
    // Reset form
    Object.keys(formState).forEach(key => {
      if (key !== 'budget' && key !== 'services') {
        formState[key] = '';
      }
    });
    formState.services = [];
  }, 1500);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
  submitStatus.show = true;
  submitStatus.title = 'Error';
  submitStatus.message = 'There was a problem submitting your form. Please check the fields and try again.';
  submitStatus.type = 'error';
};
</script>

<style scoped>
/* Contact form specific styles */
:deep(.ant-slider-mark-text) {
  font-weight: bold;
  color: #666;
}

:deep(.ant-collapse-header) {
  font-weight: 600;
}
</style>