// Business Solutions Data
export const businessSolutions = [
  {
    id: "order-management-solution",
    title: "Custom Order Management Systems",
    summary: "Streamline your sales process and eliminate order confusion with automated systems.",
    description: "Perfect for businesses struggling with manual order processing through social media or emails. Our custom order management system transforms chaotic sales processes into smooth, automated workflows that delight customers and boost revenue.",
    category: "Business Automation",
    featured: true,
    businessBenefits: [
      "Increase sales conversion by up to 40%",
      "Save 15+ hours per week on manual order management", 
      "Reduce customer confusion and abandoned orders",
      "Professional automated notifications across multiple channels",
      "Real-time order tracking for customers",
      "Integrated payment processing"
    ],
    idealFor: ["E-commerce startups", "Small retail businesses", "Service providers", "Social media sellers"],
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Stripe API", "WhatsApp API"],
    results: [
      { label: "Sales Increase", value: "40%" },
      { label: "Time Saved", value: "15hrs/week" },
      { label: "Customer Satisfaction", value: "95%" }
    ],
    image: "/images/order-management.jpg",
    gallery: ["/images/order-1.jpg", "/images/order-2.jpg", "/images/order-3.jpg"]
  },
  {
    id: "inventory-management-solution",
    title: "Real-Time Inventory Management",
    summary: "Never oversell again with synchronized inventory tracking across all sales channels.",
    description: "Eliminate stock discrepancies and improve revenue with intelligent inventory systems. Perfect for businesses selling across multiple platforms who struggle with stock synchronization and overselling issues.",
    category: "Inventory Control",
    featured: true,
    businessBenefits: [
      "Increase revenue by up to 28%",
      "Achieve 99.8% stock accuracy",
      "Save 75% of time spent on inventory tasks",
      "Prevent customer disappointment from stockouts",
      "Automated reorder alerts",
      "Multi-channel synchronization"
    ],
    idealFor: ["Retail stores", "Furniture businesses", "Multi-channel sellers", "Dropshipping companies"],
    technologies: ["React", "Laravel", "MySQL", "API Integrations", "Real-time WebSockets"],
    results: [
      { label: "Revenue Increase", value: "28%" },
      { label: "Stock Accuracy", value: "99.8%" },
      { label: "Time Saved", value: "75%" }
    ],
    image: "/images/inventory-management.jpg",
    gallery: ["/images/inventory-1.jpg", "/images/inventory-2.jpg", "/images/inventory-3.jpg"]
  },
  {
    id: "customer-engagement-solution",
    title: "Automated Customer Engagement Systems",
    summary: "Turn website visitors into loyal customers with intelligent engagement workflows.",
    description: "Boost customer retention and sales with personalized automated engagement systems. Perfect for businesses that struggle to follow up with leads and maintain customer relationships consistently.",
    category: "Customer Relations",
    featured: true,
    businessBenefits: [
      "Increase customer retention by 45%",
      "Automate 90% of customer follow-ups",
      "Boost repeat sales by 35%",
      "Personalized customer experiences at scale",
      "Automated loyalty programs",
      "Smart segmentation and targeting"
    ],
    idealFor: ["Service businesses", "E-commerce stores", "SaaS companies", "Local businesses"],
    technologies: ["Vue.js", "Python", "MongoDB", "Email APIs", "Analytics Tools"],
    results: [
      { label: "Retention Increase", value: "45%" },
      { label: "Automation Rate", value: "90%" },
      { label: "Repeat Sales", value: "+35%" }
    ],
    image: "/images/customer-engagement.jpg",
    gallery: ["/images/engagement-1.jpg", "/images/engagement-2.jpg", "/images/engagement-3.jpg"]
  },
  {
    id: "financial-analytics-solution",
    title: "Business Intelligence & Analytics",
    summary: "Make data-driven decisions with comprehensive business analytics and reporting.",
    description: "Transform raw business data into actionable insights. Perfect for businesses that struggle to understand their performance metrics and make informed decisions based on scattered data sources.",
    category: "Business Intelligence",
    featured: false,
    businessBenefits: [
      "Improve decision-making speed by 60%",
      "Identify new revenue opportunities",
      "Reduce operational costs by 25%",
      "Real-time performance monitoring",
      "Predictive analytics for planning",
      "Automated report generation"
    ],
    idealFor: ["Growing businesses", "Franchise operations", "Multi-location companies", "Data-driven startups"],
    technologies: ["React", "Python", "PostgreSQL", "D3.js", "Machine Learning"],
    results: [
      { label: "Decision Speed", value: "+60%" },
      { label: "Cost Reduction", value: "25%" },
      { label: "ROI Tracking", value: "Real-time" }
    ],
    image: "/images/analytics-platform.jpg",
    gallery: ["/images/analytics-1.jpg", "/images/analytics-2.jpg", "/images/analytics-3.jpg"]
  },
  {
    id: "appointment-booking-solution",
    title: "Smart Appointment & Booking System",
    summary: "Eliminate booking chaos and reduce no-shows with intelligent scheduling systems.",
    description: "Streamline appointments and bookings with automated scheduling, reminders, and customer management. Perfect for service-based businesses struggling with manual booking processes and high no-show rates.",
    category: "Scheduling Automation",
    featured: true,
    businessBenefits: [
      "Reduce no-shows by 70%",
      "Save 20+ hours per week on scheduling",
      "Increase booking conversion by 50%",
      "Automated reminder systems",
      "Online payment integration",
      "Calendar synchronization"
    ],
    idealFor: ["Healthcare providers", "Beauty salons", "Consultants", "Fitness trainers", "Legal services"],
    technologies: ["Vue.js", "Node.js", "MySQL", "Calendar APIs", "SMS/Email APIs"],
    results: [
      { label: "No-show Reduction", value: "70%" },
      { label: "Time Saved", value: "20hrs/week" },
      { label: "Booking Increase", value: "50%" }
    ],
    image: "/images/booking-system.jpg",
    gallery: ["/images/booking-1.jpg", "/images/booking-2.jpg", "/images/booking-3.jpg"]
  },
  {
    id: "workflow-automation-solution",
    title: "Custom Business Workflow Automation",
    summary: "Automate repetitive tasks and focus on growing your business instead of managing it.",
    description: "Eliminate manual, repetitive tasks with custom automation workflows. Perfect for businesses spending too much time on administrative tasks and looking to scale operations efficiently.",
    category: "Process Automation",
    featured: false,
    businessBenefits: [
      "Reduce manual work by 80%",
      "Eliminate human errors in processes",
      "Scale operations without hiring more staff",
      "Improve process consistency",
      "Free up time for strategic work",
      "Cost savings of $50,000+ annually"
    ],
    idealFor: ["Manufacturing companies", "Professional services", "E-commerce businesses", "Financial services"],
    technologies: ["Python", "Node.js", "API Integrations", "Workflow Engines", "Database Systems"],
    results: [
      { label: "Manual Work Reduction", value: "80%" },
      { label: "Error Elimination", value: "99%" },
      { label: "Annual Savings", value: "$50K+" }
    ],
    image: "/images/workflow-automation.jpg",
    gallery: ["/images/workflow-1.jpg", "/images/workflow-2.jpg", "/images/workflow-3.jpg"]
  }
];

// Helper functions
export const getFeaturedSolutions = () => {
  return businessSolutions.filter(solution => solution.featured);
};

export const getSolutionById = (id) => {
  return businessSolutions.find(solution => solution.id === id);
};

export const getSolutionsByCategory = (category) => {
  return businessSolutions.filter(solution => solution.category === category);
};

export const getAllCategories = () => {
  return [...new Set(businessSolutions.map(solution => solution.category))];
};