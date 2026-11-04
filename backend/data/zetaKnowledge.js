const zetaKnowledge = {
  company: {
    name: "Zeta AI Labs Private Limited",
    shortName: "Zeta AI Labs",
    tagline: "Your Engineering Partner Across Every Layer of the Digital Stack",
    description: "A technology company based in Bhubaneswar, India, building websites, mobile apps, enterprise systems, and AI-driven products — engineered end-to-end by one team, from first sketch to production support. We've delivered 350+ projects across 10+ industries.",
    headquarters: "J-14, BJB Nagar, Lewis Road, Bhubaneswar 751014, Odisha, India",
    accreditations: [
      "Government of India registered company",
      "Recognized under Startup India",
      "Recognized under Startup Odisha"
    ],
    contact: {
      email: "contact@zetaailabs.com",
      alternateEmail: "info@zetaailabs.com",
      phone: "+91 93372 87145",
      formattedPhone: "+91-9337287145"
    },
    trackRecord: {
      projectsDelivered: "350+",
      industriesServed: "10+",
      countries: ["India", "UAE", "UK", "and others"]
    },
    capabilities: [
      "Website & Web App Development",
      "React / Node.js Engineering",
      "Mobile Applications",
      "Enterprise Applications, ERP & CRM",
      "Magento & E-commerce",
      "AI, ML & Data Solutions",
      "IoT & Blockchain Engineering",
      "Digital Marketing",
      "Graphics & Brand Communication"
    ],
    aiStatus: "Dedicated AI/ML team (newer part of practice, 2 completed AI/ML projects, 7-person team).",
    roboticsStatus: "Emerging area with no delivered projects yet (actively building capabilities in AI monitoring dashboards, fleet-management interfaces, digital twin visualization)."
  },

  faqPairs: [
    {
      id: "what-does-zeta-do",
      triggers: ["what does zeta ai labs do", "what do you do", "who are you", "tell me about zeta", "about the company"],
      question: "What does Zeta AI Labs do?",
      answer: "We're a technology company based in Bhubaneswar, India, building websites, mobile apps, enterprise systems, and AI-driven products — engineered end-to-end by one team, from first sketch to production support. We've delivered 350+ projects across 10+ industries.",
      actionButtons: [
        { label: "💼 Explore Services", link: "/what-we-do" },
        { label: "📁 See Our Work", link: "/projects" },
        { label: "💬 Talk to Someone", action: "lead_capture" }
      ]
    },
    {
      id: "services-offered",
      triggers: [
        "what services do you offer",
        "what do you build",
        "what we build",
        "what we build?",
        "services",
        "capabilities",
        "what can you build",
        "our services",
        "services list",
        "what do you do"
      ],
      question: "What services do you offer?",
      answer: "Ten core capabilities: Website & Web App Development, React/Node.js Engineering, Mobile Apps, Enterprise Apps/ERP/CRM, Magento & E-commerce, AI/ML & Data Solutions, Robotics & Autonomous Systems, IoT & Blockchain, Digital Marketing, and Graphics & Brand Communication. Want details on any of these?",
      actionButtons: [
        { label: "🌐 Website & Web Dev", link: "/services/website-web-development" },
        { label: "⚡ React / Node.js", link: "/services/react-nodejs-engineering" },
        { label: "📱 Mobile Apps", link: "/services/mobile-application-development" },
        { label: "🏢 Enterprise ERP & CRM", link: "/services/enterprise-erp-crm" },
        { label: "🛒 Magento & E-commerce", link: "/services/magento-ecommerce-development" },
        { label: "🧠 AI, ML & Data", link: "/services/ai-machine-learning-data" },
        { label: "🤖 Robotics & Autonomous", link: "/services/robotics-autonomous-systems" },
        { label: "🔗 IoT & Blockchain", link: "/services/iot-blockchain-engineering" },
        { label: "📈 Digital Marketing", link: "/services/digital-marketing-creative" },
        { label: "⚙️ View All Services", link: "/what-we-do" },
        { label: "💬 Talk to Someone", action: "lead_capture" }
      ]
    },
    {
      id: "work-examples",
      triggers: ["can you show me examples of your work", "see your work", "portfolio", "case studies", "show projects", "examples of work", "previous work"],
      question: "Can you show me examples of your work?",
      answer: "Sure — we have full case studies on a few flagship projects (a restaurant platform, a hotel booking system in Dubai, a school platform, and a healthcare appointment system), plus 55+ additional projects in our full portfolio. Want the case studies or the full list?",
      actionButtons: [
        { label: "🌟 Flagship Case Studies", link: "/success-stories" },
        { label: "📁 Full 60+ Projects List", link: "/projects" }
      ]
    },
    {
      id: "location",
      triggers: ["where are you located", "where are you based", "location", "office address", "where is your office", "headquarters"],
      question: "Where are you located?",
      answer: "We're headquartered at J-14, BJB Nagar, Lewis Road, Bhubaneswar 751014, Odisha, India. We're a Government of India–registered company, recognized under Startup India and Startup Odisha.",
      actionButtons: [
        { label: "🏢 About Our Company", link: "/about" },
        { label: "💬 Talk to Team", action: "lead_capture" }
      ]
    },
    {
      id: "international-clients",
      triggers: ["do you work with international clients", "international clients", "overseas clients", "clients outside india", "dubai clients", "uk clients"],
      question: "Do you work with international clients?",
      answer: "Yes — our portfolio includes work across India, the UAE, and the UK, among others.",
      actionButtons: [
        { label: "📁 View International Work", link: "/projects" },
        { label: "💬 Start International Project", action: "lead_capture" }
      ]
    },
    {
      id: "start-project",
      triggers: ["how do i start a project", "start project", "hire you", "hire team", "how to hire", "begin project"],
      question: "How do I start a project?",
      answer: "Send us a message with a bit about what you're building, and our team will follow up to schedule a discovery session — that's where we go through scope, timeline, and budget properly before anything's committed. Want me to open the contact form?",
      actionButtons: [
        { label: "💬 Talk to Someone (Fast)", action: "lead_capture" },
        { label: "📝 Open Contact Form", link: "#contact" }
      ]
    },
    {
      id: "pricing-cost",
      triggers: ["how much does a project cost", "pricing", "cost", "rates", "how much do you charge", "budget", "price"],
      question: "How much does a project cost?",
      answer: "Pricing depends on scope, so we don't quote a number until we understand what you need. The best next step is a quick discovery conversation — want me to connect you with the team?",
      actionButtons: [
        { label: "💬 Connect with Team", action: "lead_capture" },
        { label: "📝 Submit Requirements", link: "#contact" }
      ]
    },
    {
      id: "project-timeline",
      triggers: ["how long does a project take", "timeline", "duration", "how much time", "turnaround time"],
      question: "How long does a project take?",
      answer: "It depends on scope and complexity, so I can't give a generic timeline — that's something our team will scope with you directly once they understand the project. Want to get that conversation started?",
      actionButtons: [
        { label: "💬 Start Discovery Chat", action: "lead_capture" },
        { label: "📝 Open Contact Form", link: "#contact" }
      ]
    },
    {
      id: "ai-ml-development",
      triggers: ["do you offer ai/ml development", "ai development", "machine learning", "ml models", "llm development", "generative ai", "ai solutions"],
      question: "Do you offer AI/ML development?",
      answer: "Yes — we have a dedicated AI/ML team. We're upfront that this is a newer part of our practice, so if you're exploring an AI project, it's worth a direct conversation with our team about what's realistic for your use case and timeline.",
      actionButtons: [
        { label: "🧠 AI/ML Service Details", link: "/services/ai-machine-learning-data" },
        { label: "💬 Discuss AI Use Case", action: "lead_capture" }
      ]
    },
    {
      id: "robotics-monitoring",
      triggers: ["do you do robotics or ai monitoring work", "robotics", "ai monitoring", "fleet monitoring", "digital twins"],
      question: "Do you do robotics or AI monitoring work?",
      answer: "This is an emerging area for us — we don't have delivered projects to show yet, but we're actively building capability here (AI monitoring dashboards, fleet-management interfaces, digital twin visualization). If that's what you're exploring, I'd recommend talking directly with our team so we can be upfront about where we can genuinely help.",
      actionButtons: [
        { label: "💬 Talk to Engineering Team", action: "lead_capture" }
      ]
    },
    {
      id: "existing-project-takeover",
      triggers: ["can you take over or extend an existing project", "take over project", "extend existing", "maintain existing project", "legacy system", "existing codebase"],
      question: "Can you take over or extend an existing project?",
      answer: "Yes — we regularly extend, maintain, or take over existing systems, not just build new ones from scratch. Tell us a bit about the current setup and our team can advise.",
      actionButtons: [
        { label: "💬 Tell Us About Your Setup", action: "lead_capture" },
        { label: "📝 Open Contact Form", link: "#contact" }
      ]
    },
    {
      id: "industries",
      triggers: ["what industries have you worked in", "industries", "sectors", "domains", "experience in healthcare", "experience in logistics"],
      question: "What industries have you worked in?",
      answer: "E-commerce, healthcare, education, hospitality, travel, logistics, and enterprise operations, among others — 10+ industries total.",
      actionButtons: [
        { label: "📁 View Industry Projects", link: "/projects" },
        { label: "🌟 View Case Studies", link: "/success-stories" }
      ]
    },
    {
      id: "contact-direct",
      triggers: ["how can i contact your team directly", "contact", "phone number", "email", "call", "reach team", "talk to someone"],
      question: "How can I contact your team directly?",
      answer: "Email contact@zetaailabs.com or call +91 93372 87145. Or I can open our contact form for you right now — want me to do that?",
      actionButtons: [
        { label: "💬 Talk to Someone", action: "lead_capture" },
        { label: "📝 Open Contact Form", link: "#contact" },
        { label: "📞 Call +91 93372 87145", link: "tel:+919337287145" },
        { label: "✉️ Email Us", link: "mailto:contact@zetaailabs.com" }
      ]
    }
  ]
};

module.exports = zetaKnowledge;

