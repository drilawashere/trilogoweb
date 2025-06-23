<template>
  <div class="chart-container" ref="chartContainer">
    <canvas ref="chartCanvas"></canvas>
    <div v-if="loading" class="chart-loading">
      <a-spin />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  },
  chartType: {
    type: String,
    default: 'line',
    validator: (value) => ['line', 'bar', 'pie', 'doughnut', 'radar'].includes(value)
  },
  chartOptions: {
    type: Object,
    default: () => ({})
  },
  height: {
    type: String,
    default: '300px'
  }
});

const chartCanvas = ref(null);
const chartContainer = ref(null);
const chartInstance = ref(null);
const loading = ref(true);

const createChart = () => {
  if (!chartCanvas.value) return;
  
  // Clear existing chart if it exists
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
  
  // Set default options based on chart type
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    }
  };
  
  if (props.chartType === 'line' || props.chartType === 'bar') {
    defaultOptions.scales = {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    };
  }
  
  // Merge default options with provided options
  const options = {
    ...defaultOptions,
    ...props.chartOptions
  };
  
  // Create new chart
  chartInstance.value = new Chart(chartCanvas.value, {
    type: props.chartType,
    data: props.chartData,
    options: options
  });
  
  loading.value = false;
};

// Initialize chart on mount
onMounted(() => {
  if (chartContainer.value) {
    chartContainer.value.style.height = props.height;
  }
  
  // Small timeout to ensure component is fully rendered
  setTimeout(() => {
    createChart();
  }, 100);
});

// Watch for changes in chart data to update chart
watch(
  () => props.chartData,
  (newData) => {
    if (chartInstance.value) {
      chartInstance.value.data = newData;
      chartInstance.value.update();
    } else {
      createChart();
    }
  },
  { deep: true }
);

// Watch for changes in chart type to recreate chart
watch(
  () => props.chartType,
  () => {
    createChart();
  }
);
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  border-radius: 8px;
  background-color: white;
}

.chart-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>