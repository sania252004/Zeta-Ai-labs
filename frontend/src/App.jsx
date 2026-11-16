import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useParams, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustAndExpertiseSection from "./components/TrustSection";
import TechStrip from "./components/TechStrip";
import About from "./components/About";
import WhyZeta from "./components/WhyZeta";
import Technologies from "./components/Technologies";
import OurProcess from "./components/OurProcess";
import Hero3D from "./components/Hero3D";
import CustomerStories from "./components/CustomerStories"; 
import SuccessStories from "./components/SuccessStories";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import OfficialContact from "./components/OfficialContact";
import Chatbot from "./components/Chatbot";
import Projects from "./components/Projects";
import StoryDetailPage from "./components/StoryDetailPage";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";

// ScrollToTop component to reset window scroll position on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#06140e] flex flex-col justify-between">
      <Navbar />
      <div className="flex-grow">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="pt-20">
          <SuccessStories />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8f5] flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="pt-16">
          <About />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const WhatWeDoPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8f5] flex flex-col justify-between">
      <div>
        <Navbar />
        <div className="pt-16">
          <Technologies />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Detailed content dictionary for the services

const serviceContentMap = {
  "website-web-development": {
    title: "Website & Web Application Development",
    subtitle: "Custom-engineered, performance-first builds, not templated output.",
    overviewIntro: "We design and build websites and web applications the way we'd want one built for us: fast, maintainable, and structured around what the business actually needs, not what a page-builder makes easy to ship.",
    overviewBody: "Most custom website work isn't actually custom, it's a theme with the logo swapped out. That approach is fast to launch and slow to live with: every real change fights the template underneath it.\n\nZeta AI Labs builds websites and web applications the other way around. Every project starts from the business objective, not a component library. What does this site need to do, who is it doing it for, and what happens after launch when the business changes and the site needs to change with it. The result is a build that's genuinely yours: no licensing lock-in to a theme vendor, no ceiling on what can be added later.\n\nThis capability covers the full range, from marketing and brand websites through to full web applications with logins, dashboards, bookings, and real-time data, built with the same engineering discipline either way.",
    included: [
      { title: "Marketing & brand websites", desc: "The front door for a business, built to convert visitors into leads or customers, not just look good in a screenshot." },
      { title: "Web application development", desc: "Logins, dashboards, booking flows, search and filtering, and anything else that makes a site behave like a product rather than a brochure." },
      { title: "Content management", desc: "WordPress and custom CMS builds, so your team can update content without needing an engineer for every text change." },
      { title: "E-commerce storefronts", desc: "Covered in depth under Magento & E-commerce Development, but frequently built alongside a broader web platform." },
      { title: "Performance & SEO foundations", desc: "Fast load times and clean markup as a baseline, not an afterthought bolted on before launch." },
      { title: "Post-launch support", desc: "You own the code and the architecture; ongoing support is available, not required." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "We audit what the site actually needs to do for the business and for the people using it before any design or code work starts." },
      { phase: "Phase 02 Architecture Design", desc: "Tech stack selection, page data structure, and API contracts where the site needs to talk to other systems documented and reviewed with your team before we build." },
      { phase: "Phase 03 Build & Iterate", desc: "Development happens in sprints with regular check-ins, so you're seeing the site take shape throughout, not just at the end." },
      { phase: "Phase 04 Deploy & Support", desc: "Production deployment, monitoring, and ongoing support. You own the code and the architecture, no vendor lock-in." }
    ],
    techStack: {
      frontend: ["React JS", "Next.js", "CoreJS", "SlickJS", "RequireJS", "UnderscoreJS"],
      backend: ["Node.js", "PHP", "Java EE", "ASP", "Apache"],
      cms: ["WordPress", "Magento"]
    },
    proof: [
      "Vasilchuki Chaihona No. 1, a culinary portfolio platform for a 20-year heritage restaurant brand, with an integrated reservation flow.",
      "DESS (Dubai English Speaking School), a modern educational platform serving prospective families, current families, and staff.",
      "Hotels in Dubai, a smart hotel search and booking platform with real-time availability.",
      "Aster Clinic, a doctor-discovery and appointment platform for a leading UAE healthcare provider.",
      "Plus 20+ websites shipped across other sectors, including healthcare (Sparsh Hospitals), education (SOA University), and e-commerce and retail brands."
    ],
    whoFor: [
      "Businesses that have outgrown a template site and need something built to actually scale with them.",
      "Teams that need a web application, not just a website, logins, dashboards, bookings, or anything with real functionality behind it.",
      "Organizations that want to own their code and architecture outright, without ongoing licensing dependency on a theme or page-builder vendor."
    ]
  },
  "react-nodejs-engineering": {
    title: "React / Node.js Engineering",
    subtitle: "Modern JavaScript architecture for products that need to scale.",
    overviewIntro: "When a website needs to become a product, real users, real data, real growth, the architecture underneath it matters more than the design on top of it. We build on React and Node.js because it's the stack that holds up as complexity grows, not just at launch.",
    overviewBody: "A lot of scalable claims don't survive contact with real usage. Sites built on page-builders or loosely structured JavaScript work fine at launch and then degrade, slower with every feature added, harder to debug, riskier to change.\n\nZeta AI Labs builds on React for the frontend and Node.js for the backend specifically because that combination is built to scale: a shared language across the stack, a component model that stays maintainable as the product grows, and an ecosystem mature enough that we're not reinventing basic infrastructure on every project.\n\nThis isn't the only stack we use. Plenty of our work runs on WordPress, PHP, or Magento where that's the right fit, but when a client needs something that behaves like a real product and needs to keep scaling after launch, React/Node is where we start.",
    included: [
      { title: "Frontend architecture", desc: "React-based interfaces built with a component structure that stays maintainable as the product grows, not a pile of one-off pages." },
      { title: "API & backend engineering", desc: "Node.js services and APIs that the frontend, mobile apps, or third-party systems can all call cleanly." },
      { title: "State & data management", desc: "Handling the parts of a product that a static site never has to: user sessions, live data, search and filtering logic that actually performs at scale." },
      { title: "Third-party integrations", desc: "Connecting to payment providers, CMS platforms, or existing backend systems (PHP, Java EE, ASP) without forcing a full rebuild of what's already working." },
      { title: "Performance engineering", desc: "The parts of \"scale\" that aren't visible until traffic grows: load handling, caching, and code that doesn't slow down as features are added." },
      { title: "Post-launch support", desc: "You own the code and the architecture; ongoing support is available, not required." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "We audit what the product actually needs to handle, user volume, data complexity, integrations, before choosing how the architecture is structured." },
      { phase: "Phase 02 Architecture Design", desc: "Component structure, API contracts, and data model are designed and documented up front, so the frontend and backend teams are building against the same plan from day one." },
      { phase: "Phase 03 Build & Iterate", desc: "Development happens in agile sprints with weekly demos, you see working functionality throughout, not just a finished product at the very end." },
      { phase: "Phase 04 Deploy & Support", desc: "Production deployment, monitoring, and ongoing support. You own the code and the architecture, no vendor lock-in." }
    ],
    techStack: {
      frontend: ["React JS", "Next.js", "CoreJS", "SlickJS", "RequireJS", "UnderscoreJS", "BasketJS"],
      backend: ["Node.js", "PHP", "Java EE", "ASP", "Apache"],
      cms: ["WordPress", "Magento"]
    },
    proof: [
      "Advanced Healthcare Resources (AHR), SlickJS, React JS, Node4, Apache Server.",
      "PetsWorld, Magento, RequireJS, React JS, PHP.",
      "Illusions Bridal, CodeIgniter, CoreJS, Node4, Apache.",
      "Angi, WordPress, Next.js, PHP, Java EE, React, CoreJS.",
      "Wildberries, ASP, UnderscoreJS, BasketJS, CoreJS, React.",
      "Cotswold Labels, WordPress, SlickJS, Node4, Apache."
    ],
    whoFor: [
      "Products that need to keep scaling after launch, not just look finished on day one.",
      "Teams replacing a page-builder or template site that's started to buckle under real usage.",
      "Businesses that need a frontend, backend, and set of integrations working together as one system, not three disconnected vendors."
    ]
  },
  "mobile-application-development": {
    title: "Mobile Application Development",
    subtitle: "Native and cross-platform apps shipped to real app stores, with real users.",
    overviewIntro: "A mobile app that never makes it past a demo isn't a mobile app, it's a prototype. We build for the app store from day one: real users, real reviews, real update cycles.",
    overviewBody: "Mobile development has a reputation for scope creep and endless one more feature cycles that never ship. We keep it simple: define what the app needs to do for its actual users, build that well, and get it live, then iterate based on how people actually use it, not how we imagined they would.",
    included: [
      { title: "Native & cross-platform builds", desc: "Apps developed for real deployment, not just internal prototypes." },
      { title: "App store deployment", desc: "Publishing and managing listings on Google Play and App Store where applicable." },
      { title: "Backend & API integration", desc: "Connecting the app to the same Node.js/PHP backends and data systems behind our web work, so mobile isn't an island." },
      { title: "Post-launch updates", desc: "App store review cycles, OS updates, and feature iteration after launch." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Defining what the app needs to do for its actual users." },
      { phase: "Phase 02 Architecture Design", desc: "Planning native or cross-platform framework and backend integration." },
      { phase: "Phase 03 Build & Iterate", desc: "Building core user journeys and iteration loops." },
      { phase: "Phase 04 Deploy & Support", desc: "App store submission and review built directly into the deploy phase." }
    ],
    techStack: {
      frontend: ["React Native", "Flutter", "Native iOS/Android"],
      backend: ["Node.js", "PHP Backend APIs"]
    },
    proof: [
      "OneCall",
      "Homefoodi User",
      "WBG Shibani",
      "MyKirana",
      "ShareBook / Infireads",
      "Newspaper"
    ],
    whoFor: [
      "Businesses that need a real, published mobile presence, not an internal-only prototype.",
      "Teams that want their mobile app connected to the same backend as their web platform, not built and maintained separately."
    ]
  },
  "enterprise-erp-crm": {
    title: "Enterprise Applications, ERP & CRM",
    subtitle: "Systems that run operations, not just dashboards that look good in a demo.",
    overviewIntro: "Enterprise software fails quietly. It looks fine in a sales demo and then falls apart against real operational load, real edge cases, real users who don't follow the happy path. We build for the second scenario.",
    overviewBody: "ERP, CRM, and field-service systems are judged on one thing: whether the people who have to use them every day actually can, under real operational pressure. We build enterprise systems the same way we build everything else, starting from the actual workflow, not a feature checklist.",
    included: [
      { title: "ERP implementation & customization", desc: "Systems that reflect how your operation actually runs, not a generic template forced onto it." },
      { title: "CRM development", desc: "Customer and pipeline tracking built around your sales process, not a rebuild of Salesforce with different branding." },
      { title: "Field-service & operations systems", desc: "Dispatch, tracking, and management tools for teams working outside a single office." },
      { title: "Microsoft Dynamics integration", desc: "For organizations standardized on the Dynamics ecosystem." },
      { title: "Government & regulatory systems", desc: "Built to specific operational rules, for example toll systems built to Indian regulatory standards." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Same four-phase process. Discovery & Scoping is especially critical here, since enterprise systems fail most often when the real workflow wasn't understood before the build started." },
      { phase: "Phase 02 Architecture Design", desc: "Structuring system data models, permissions, and robust backend constraints." },
      { phase: "Phase 03 Build & Iterate", desc: "Sprints tailored around user roles and operational workflows with extensive user testing." },
      { phase: "Phase 04 Deploy & Support", desc: "Deployment, staff onboarding pathways, and resilient backend maintenance." }
    ],
    techStack: {
      backend: ["Microsoft Dynamics", "Sage Intacct", "Custom ERP Frameworks"],
      frontend: ["Enterprise Dashboards", "Web & Mobile Operations Portals"]
    },
    proof: [
      "Sage Intacct ERP",
      "McNroe ERP",
      "TrafikSol CRM, CRMView",
      "TrafikSol DPR, DPRFirst",
      "Emerson Electric Field Service System",
      "MicroPrecision WIKA Fabrication System, built on Microsoft Dynamics",
      "Toll Management System, built to Indian regulatory rules",
      "Parking Management System",
      "Building Management System"
    ],
    whoFor: [
      "Operations teams whose current system was built for a demo, not for daily real-world use.",
      "Organizations needing systems that reflect specific regulatory or operational requirements, not a generic off-the-shelf product."
    ]
  },
  "magento-ecommerce-development": {
    title: "Magento & E-commerce Development",
    subtitle: "Storefronts engineered for conversion, not just checkout.",
    overviewIntro: "A store that technically works isn't the same as a store that sells. We build e-commerce platforms around the actual purchase path, discovery, decision, checkout, not just a product catalog with a cart bolted on.",
    overviewBody: "E-commerce is one of the few areas where the design and the engineering have to work together or the business loses money directly, a slow checkout or a confusing filter isn't just an aesthetic problem, it's lost revenue. We build Magento and custom storefronts with that in mind: conversion as an engineering requirement, not a marketing afterthought.",
    included: [
      { title: "Magento storefront development", desc: "Product catalogs, checkout flows, and admin tooling built on Magento's platform." },
      { title: "Custom e-commerce builds", desc: "For stores that need functionality outside what Magento or a standard platform supports out of the box." },
      { title: "Performance-focused checkout", desc: "The highest-stakes page on any store, engineered specifically to not lose customers at the last step." },
      { title: "Search, filtering & product discovery", desc: "The difference between a browsable catalog and a wall of products nobody can find." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Analyzing your catalog structure, purchase paths, and inventory requirements." },
      { phase: "Phase 02 Architecture Design", desc: "Same four-phase process, with particular attention in Architecture Design to checkout flow and payment integration, since that's where e-commerce projects most often go wrong." },
      { phase: "Phase 03 Build & Iterate", desc: "Developing custom modules, theme integrations, and rigorous payment and shipping gateway testing." },
      { phase: "Phase 04 Deploy & Support", desc: "Secure deployment, performance tuning, and ongoing maintenance." }
    ],
    techStack: {
      frontend: ["RequireJS", "React JS", "UnderscoreJS", "CoreJS"],
      backend: ["Magento", "PHP", "ASP", "Node.js"]
    },
    proof: [
      "PetsWorld, Magento, RequireJS, React JS, PHP.",
      "Wildberries, ASP, UnderscoreJS, BasketJS, CoreJS, React, one of the larger e-commerce builds in our portfolio.",
      "Additional e-commerce and retail brands appear in our wider website portfolio, including Overstock and Kogan."
    ],
    whoFor: [
      "Retailers whose current storefront technically works but isn't converting the traffic it gets.",
      "Businesses that need a Magento build, not a generic Shopify template."
    ]
  },
  "robotics-autonomous-systems": {
    title: "Robotics & Autonomous Systems",
    subtitle: "Dashboards, fleet-management interfaces, and monitoring infrastructure for connected, autonomous operations.",
    overviewIntro: "As industries move toward connected, autonomous operations, we're extending our applied-AI and IoT work into robotics and monitoring infrastructure. This is explicitly an emerging focus area for us, built on the same engineering discipline behind everything else we ship, but without a published track record yet.",
    overviewBody: "Managing connected or automated environments requires high-performance visualization, telemetry dashboards, and dependable real-time alerting. We bring standard software engineering discipline to emerging robotics and autonomous workflows, focusing on clean interface design, reliable sensor data handling, and robust operational tracking.",
    included: [
      { title: "AI monitoring dashboards", desc: "Real-time visibility into system or fleet status." },
      { title: "Robotics fleet-management interfaces", desc: "The software layer that lets a team manage and monitor connected robotic or automated systems." },
      { title: "Renewable-energy monitoring", desc: "Dashboards and alerting for energy infrastructure." },
      { title: "Sensor alerting", desc: "Automated notification when a connected system reports an anomaly." },
      { title: "Digital twin visualization", desc: "Software representations of physical systems for monitoring and simulation." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Same four-phase process as every engagement, for a new focus area like this, Discovery & Scoping matters even more, since we're establishing the right approach together rather than repeating a proven playbook." },
      { phase: "Phase 02 Architecture Design", desc: "Structuring data ingestion, telemetry processing flows, and secure dashboard frameworks." },
      { phase: "Phase 03 Build & Iterate", desc: "Developing custom monitoring loops, alert routing logic, and real-time visualization layouts." },
      { phase: "Phase 04 Deploy & Support", desc: "Deploying infrastructure to cloud or edge environments with continuous reliability support." }
    ],
    techStack: {
      frontend: ["React JS", "Real-time Dashboards", "Visualization Toolkits"],
      backend: ["Node.js", "Telemetry Ingestion APIs", "IoT Data Pipelines"]
    },
    proof: [
      "This is genuinely early-stage for us. Our current signal is real inbound market interest, a prospective client recently reached out to explore AI monitoring dashboard, robotics fleet management UI, renewable-energy monitoring, sensor alerts, and digital twin visualization work, but no project has shipped yet, and the underlying concept remains private and unconfirmed on the prospective client's side as well."
    ],
    whoFor: [
      "Organizations exploring AI monitoring, robotics interfaces, or digital twin work who want an engineering partner building this out deliberately, not overselling a track record that doesn't exist yet."
    ]
  },
  "ai-machine-learning-data": {
    title: "AI, Machine Learning & Data Solutions",
    subtitle: "Applied AI embedded into real products, from predictive models to intelligent automation.",
    overviewIntro: "AI that never leaves a notebook isn't a product.",
    overviewBody: "We build AI and ML work the way we build everything else, integrated into a real system, with real users, not a standalone proof-of-concept that never ships.\n\nOur applied-AI work is backed by one of the largest functional groups on our team: seven dedicated AIML developers, led by an AIML Developer & Team Leader. That's a meaningful engineering investment in this capability. We're honest, though, that our track record so far is still building. Our CEO's own words: over 12 years in technology leadership, including 2 completed AI and ML projects to date, with more in active development.",
    included: [
      { title: "Predictive modeling", desc: "Models trained on real data to support real business decisions." },
      { title: "Intelligent automation", desc: "Replacing manual, repetitive processes with systems that handle them automatically." },
      { title: "Data pipeline & infrastructure", desc: "The unglamorous but essential work of getting data into a state where a model can actually use it." },
      { title: "AI integration into existing products", desc: "Embedding AI capability into a system you already have, rather than requiring a rebuild." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Same four-phase process, with Discovery & Scoping weighted heavily toward a data audit, understanding what data actually exists and what state it's in before any model work starts." },
      { phase: "Phase 02 Architecture Design", desc: "Selecting and structuring the right modeling frameworks and data processing pipelines." },
      { phase: "Phase 03 Build & Iterate", desc: "Developing models, setting up automation loops, and validating performance against real data streams." },
      { phase: "Phase 04 Deploy & Support", desc: "Integrating models safely into production systems with continuous monitoring and scaling support." }
    ],
    techStack: {
      frontend: ["React JS", "Interactive Dashboards", "Data Visualization"],
      backend: ["Python", "Machine Learning Frameworks", "Data Pipelines & Ingestion APIs"]
    },
    proof: [
      "Our team includes 7 dedicated AIML Developers (Kalavakuri Gopika, Team Leader, Monisha Pal, B Swetha, Meghna Das, Disa Prusty, Saswati S Patra, Aparna Swain, Barsharani Das).",
      "Backed by 2 completed AI/ML projects referenced directly by our CEO, with further pipelines in active development."
    ],
    whoFor: [
      "Businesses that want AI genuinely embedded into a product, not a standalone experiment.",
      "Teams early in their AI adoption who need a partner that won't overpromise on what a first AI engagement can deliver."
    ]
  },
  "iot-blockchain-engineering": {
    title: "IoT & Blockchain Engineering",
    subtitle: "Connected-device and distributed-ledger solutions for clients pushing past conventional software.",
    overviewIntro: "Some problems genuinely need a connected device or a distributed ledger, not just another web app.",
    overviewBody: "We built out this capability specifically for clients who've outgrown conventional software approaches.\n\nIoT and blockchain are two different technologies that tend to get grouped together because both sit outside typical web/mobile development, sensor networks and connected-device systems on one side, distributed-ledger and smart-contract work on the other. We staff this capability with dedicated, named expertise rather than treating it as a side skill.",
    included: [
      { title: "IoT system development", desc: "Connected-device architecture, sensor integration, and the software layer that makes device data usable." },
      { title: "Blockchain & distributed-ledger solutions", desc: "For clients whose use case genuinely calls for decentralized, verifiable record-keeping." },
      { title: "Device-to-dashboard pipelines", desc: "Getting data from a physical device into a usable interface, reliably." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Same four-phase process as every engagement, adapted for hardware/software integration points where relevant." },
      { phase: "Phase 02 Architecture Design", desc: "Designing secure communication protocols, ledger schemas, and device data pipelines." },
      { phase: "Phase 03 Build & Iterate", desc: "Developing device firmware integrations, smart contracts, and telemetry dashboard systems." },
      { phase: "Phase 04 Deploy & Support", desc: "Deploying production-grade infrastructure with secure telemetry and node maintenance support." }
    ],
    techStack: {
      frontend: ["React JS", "Real-time Telemetry Dashboards", "Control Interfaces"],
      backend: ["IoT Protocols", "Smart Contracts", "Distributed Ledger Frameworks", "Node.js"]
    },
    proof: [
      "This capability is led by Suchit Jade, IoT and Blockchain Developer, a dedicated role on our core team."
    ],
    whoFor: [
      "Businesses with a genuine IoT or blockchain use case, not \"we should have blockchain\" without a real reason.",
      "Organizations that need software talking to physical devices or sensor networks as part of a larger system."
    ]
  },
  "digital-marketing-creative": {
    title: "Digital Marketing & Creative Services",
    subtitle: "Brand, content, and campaign execution aligned with the product, not bolted onto it.",
    overviewIntro: "Marketing that's disconnected from the product it's promoting shows.",
    overviewBody: "We keep creative and campaign work close to the engineering team, so what we're marketing and what we've built stay in sync.\n\nA lot of agencies split \"the build\" and \"the marketing\" into two disconnected teams that barely talk to each other. Because Zeta AI Labs delivers both under one roof, campaign and content work can reference the actual product accurately, not a marketing team's guess at what engineering shipped.",
    included: [
      { title: "Campaign strategy & execution", desc: "Planning and running digital marketing campaigns aligned with what the product actually does." },
      { title: "Content creation", desc: "Copy and content built around the real product, not generic marketing filler." },
      { title: "Reporting & analytics", desc: "The same \"crystal-clear reporting\" philosophy behind our engineering work, applied to marketing performance too: continuous, precise tracking of leads and results." },
      { title: "Business growth support", desc: "Helping clients take a business online and reach a wider audience, from first launch through ongoing growth." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Same four-phase discipline applied to marketing: Discovery, audience and goals." },
      { phase: "Phase 02 Strategy Design", desc: "Structuring campaigns and content frameworks aligned with the product." },
      { phase: "Phase 03 Execution & Iteration", desc: "Running campaigns and refining content based on performance loops." },
      { phase: "Phase 04 Reporting & Optimization", desc: "Ongoing reporting, precise tracking of leads and results, and continuous optimization." }
    ],
    techStack: {
      frontend: ["Landing Pages", "Digital Creative Assets", "Campaign Visuals"],
      backend: ["Analytics Trackers", "Lead Generation Pipelines", "Performance Reporting Dashboards"]
    },
    proof: [
      "This capability is offered as part of our end-to-end delivery model, alongside every build we ship, helping clients take their new platform to market rather than launching it into silence."
    ],
    whoFor: [
      "Clients who want their marketing informed by the people who actually built the product.",
      "Businesses that need ongoing campaign execution, not just a one-time launch push."
    ]
  },
  "digital-marketing-creative-services": {
    title: "Digital Marketing & Creative Services",
    subtitle: "Brand, content, and campaign execution aligned with the product, not bolted onto it.",
    overviewIntro: "Marketing that's disconnected from the product it's promoting shows.",
    overviewBody: "We keep creative and campaign work close to the engineering team, so what we're marketing and what we've built stay in sync.\n\nA lot of agencies split \"the build\" and \"the marketing\" into two disconnected teams that barely talk to each other. Because Zeta AI Labs delivers both under one roof, campaign and content work can reference the actual product accurately, not a marketing team's guess at what engineering shipped.",
    included: [
      { title: "Campaign strategy & execution", desc: "Planning and running digital marketing campaigns aligned with what the product actually does." },
      { title: "Content creation", desc: "Copy and content built around the real product, not generic marketing filler." },
      { title: "Reporting & analytics", desc: "The same \"crystal-clear reporting\" philosophy behind our engineering work, applied to marketing performance too: continuous, precise tracking of leads and results." },
      { title: "Business growth support", desc: "Helping clients take a business online and reach a wider audience, from first launch through ongoing growth." }
    ],
    howWeBuild: [
      { phase: "Phase 01 Discovery & Scoping", desc: "Same four-phase discipline applied to marketing: Discovery, audience and goals." },
      { phase: "Phase 02 Strategy Design", desc: "Structuring campaigns and content frameworks aligned with the product." },
      { phase: "Phase 03 Execution & Iteration", desc: "Running campaigns and refining content based on performance loops." },
      { phase: "Phase 04 Reporting & Optimization", desc: "Ongoing reporting, precise tracking of leads and results, and continuous optimization." }
    ],
    techStack: {
      frontend: ["Landing Pages", "Digital Creative Assets", "Campaign Visuals"],
      backend: ["Analytics Trackers", "Lead Generation Pipelines", "Performance Reporting Dashboards"]
    },
    proof: [
      "This capability is offered as part of our end-to-end delivery model, alongside every build we ship, helping clients take their new platform to market rather than launching it into silence."
    ],
    whoFor: [
      "Clients who want their marketing informed by the people who actually built the product.",
      "Businesses that need ongoing campaign execution, not just a one-time launch push."
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceContentMap[serviceId] || {
    title: "Service Details",
    subtitle: "Enterprise solutions tailored to your operational goals.",
    overviewIntro: "Enterprise-grade performance built around your exact specifications.",
    overviewBody: "Our custom solutions are built to scale with your business and deliver exceptional performance.",
    included: [{ title: "Core Implementation", desc: "End-to-end design and delivery." }],
    howWeBuild: [{ phase: "Phase 01", desc: "Discovery & execution." }],
    techStack: { frontend: ["Modern Frameworks"], backend: ["Cloud Infrastructure"] },
    proof: ["Delivered solutions for enterprise clients."],
    whoFor: ["Growing businesses looking to scale."]
  };
  const titleWords = service.title.split(" ");
  const titleLead = titleWords.slice(0, -1).join(" ");
  const titleAccent = titleWords[titleWords.length - 1];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between relative overflow-hidden text-[#10231b]">
      
      {/* 3D Dynamic Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tr from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-br from-teal-400/20 via-blue-500/25 to-indigo-500/20 rounded-full blur-[140px] animate-[pulse_10s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] bg-gradient-to-tr from-emerald-300/20 via-emerald-500/15 to-teal-400/20 rounded-full blur-[130px] animate-[pulse_12s_ease-in-out_infinite_2s]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="pt-32 px-6 lg:px-12 max-w-5xl mx-auto pb-20 space-y-16">
          
          {/* Header section */}
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-emerald-800 uppercase bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
              Zeta AI Labs Capability
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1812] mt-4 mb-3 tracking-tight">
              {titleLead} <br />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </h1>
            <p className="text-xl text-[#3b5249] font-medium">
              {service.subtitle}
            </p>
          </div>
{/* Overview Section - Clean Full-Width Section Without Container Box */}
          <div className="border-b border-slate-200 pb-12">
            <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-black text-[#0a1812] tracking-wide">
                Overview
              </h3>
              <span className="text-[10px] font-extrabold tracking-widest uppercase px-3.5 py-1 rounded-md bg-emerald-100/80 text-emerald-900 border border-emerald-200">
                Core Concept
              </span>
            </div>

            {service.overviewIntro && (
              <p className="text-[#10231b] font-bold text-lg md:text-xl mb-5 leading-relaxed tracking-tight">
                {service.overviewIntro}
              </p>
            )}

            {service.overviewBody && (
              <div className="text-[#3b5249] leading-relaxed space-y-4 whitespace-pre-line text-sm md:text-base font-normal">
                {service.overviewBody}
              </div>
            )}
          </div>

      {/* What's Included - Mixed vibrant colors (Orange, Red, Blue, Green) per card with smaller size */}
          {service.included && service.included.length > 0 && (
            <div className="border-b border-slate-200 pb-12">
              <h3 className="text-2xl font-black text-[#0a1812] tracking-wide mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.included.map((item, idx) => {
                  const themes = [
                    {
                      bg: "from-orange-50/70 via-amber-50/40 to-white",
                      border: "border-orange-300/80",
                      badgeBg: "bg-orange-200/90 text-orange-900 border-orange-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-orange-800"
                    },
                    {
                      bg: "from-rose-50/70 via-pink-50/40 to-white",
                      border: "border-rose-300/80",
                      badgeBg: "bg-rose-200/90 text-rose-900 border-rose-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-rose-800"
                    },
                    {
                      bg: "from-blue-50/70 via-indigo-50/40 to-white",
                      border: "border-blue-300/80",
                      badgeBg: "bg-blue-200/90 text-blue-900 border-blue-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-blue-800"
                    },
                    {
                      bg: "from-emerald-50/70 via-teal-50/40 to-white",
                      border: "border-emerald-300/80",
                      badgeBg: "bg-emerald-200/90 text-emerald-900 border-emerald-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-emerald-800"
                    }
                  ];
                  const theme = themes[idx % themes.length];

                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border} ${theme.shadow} transition-all duration-300 hover:translate-x-1 group flex flex-col justify-between`}
                    >
                      <div>
                        <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full inline-block mb-2 border ${theme.badgeBg} shadow-sm`}>
                          Module 0{idx + 1}
                        </span>
                        <h4 className={`text-base font-extrabold text-[#0a1812] mb-1 ${theme.hoverText} transition-colors`}>
                          {item.title}
                        </h4>
                        <p className="text-[#3b5249] text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

     {/* How We Build - Clean section layout */}
     {/* How We Build - Mixed vibrant Red, Green, Blue theme per card with smaller size */}
          {service.howWeBuild && service.howWeBuild.length > 0 && (
            <div className="border-b border-slate-200 pb-12">
              <h3 className="text-2xl font-black text-[#0a1812] tracking-wide mb-6">How We Build</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.howWeBuild.map((step, idx) => {
                  const themes = [
                    {
                      bg: "from-emerald-50/70 via-teal-50/40 to-white",
                      border: "border-emerald-300/80",
                      badgeBg: "bg-emerald-200/90 text-emerald-900 border-emerald-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-emerald-800"
                    },
                    {
                      bg: "from-blue-50/70 via-indigo-50/40 to-white",
                      border: "border-blue-300/80",
                      badgeBg: "bg-blue-200/90 text-blue-900 border-blue-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-blue-800"
                    },
                    {
                      bg: "from-rose-50/70 via-pink-50/40 to-white",
                      border: "border-rose-300/80",
                      badgeBg: "bg-rose-200/90 text-rose-900 border-rose-300",
                      shadow: "shadow-sm hover:shadow-md",
                      hoverText: "group-hover:text-rose-800"
                    }
                  ];
                  const theme = themes[idx % themes.length];

                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border} ${theme.shadow} transition-all duration-300 hover:translate-x-1 group flex flex-col justify-between`}
                    >
                      <div>
                        <span className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full inline-block mb-2 border ${theme.badgeBg} shadow-sm`}>
                          Phase {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <h4 className={`font-extrabold text-[#0a1812] text-sm md:text-base mb-1 ${theme.hoverText} transition-colors`}>
                          {step.phase.replace(/^Phase\s*\d+\s*[—–-]\s*/i, '')}
                        </h4>
                        <p className="text-[#3b5249] text-xs md:text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tech Stack - Clean layout */}
          {service.techStack && (
            <div className="border-b border-slate-200 pb-12">
              <h3 className="text-2xl font-black text-[#0a1812] tracking-wide mb-6">Tech Stack</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {service.techStack.frontend && (
                  <div className="space-y-3 p-6 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-white border-2 border-emerald-300/80 shadow-[0_15px_35px_rgba(5,150,105,0.12)]">
                    <h4 className="font-extrabold text-[#0a1812] text-lg">Frontend & Assets</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.frontend.map((tech, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-emerald-200/90 to-teal-200/90 text-emerald-950 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-300 shadow-sm hover:scale-105 transition-transform">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {service.techStack.backend && (
                  <div className="space-y-3 p-6 rounded-3xl bg-gradient-to-br from-teal-50/70 via-blue-50/40 to-white border-2 border-teal-300/80 shadow-[0_15px_35px_rgba(13,148,136,0.12)]">
                    <h4 className="font-extrabold text-[#0a1812] text-lg">Backend & Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.backend.map((tech, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-teal-200/90 to-blue-200/90 text-teal-950 px-3.5 py-1.5 rounded-full text-xs font-bold border border-teal-300 shadow-sm hover:scale-105 transition-transform">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

       {/* Proof It Works - Mixed vibrant colors (Purple, Cyan, Emerald, Amber) per card with compact size */}
          {service.proof && service.proof.length > 0 && (
            <div className="border-b border-slate-200 pb-12">
              <h3 className="text-2xl font-black text-[#0a1812] tracking-wide mb-6">Proof It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.proof.map((item, idx) => {
                  const parts = item.split(/—|-/);
                  const title = parts[0]?.trim();
                  const desc = parts.slice(1).join('—').trim();

                  const themes = [
                    {
                      bg: "from-purple-50/70 via-indigo-50/40 to-white",
                      border: "border-purple-300/80",
                      dotBg: "bg-purple-600",
                      shadow: "shadow-sm hover:shadow-md"
                    },
                    {
                      bg: "from-cyan-50/70 via-teal-50/40 to-white",
                      border: "border-cyan-300/80",
                      dotBg: "bg-cyan-600",
                      shadow: "shadow-sm hover:shadow-md"
                    },
                    {
                      bg: "from-amber-50/70 via-orange-50/40 to-white",
                      border: "border-amber-300/80",
                      dotBg: "bg-amber-600",
                      shadow: "shadow-sm hover:shadow-md"
                    },
                    {
                      bg: "from-rose-50/70 via-pink-50/40 to-white",
                      border: "border-rose-300/80",
                      dotBg: "bg-rose-600",
                      shadow: "shadow-sm hover:shadow-md"
                    }
                  ];
                  const theme = themes[idx % themes.length];
                  
                  return (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${theme.bg} border ${theme.border} ${theme.shadow} transition-all duration-300 hover:translate-x-1 flex items-start space-x-3`}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${theme.dotBg} mt-1.5 flex-shrink-0 shadow-sm`}></div>
                      <div className="text-xs md:text-sm leading-relaxed">
                        {title && <span className="font-bold text-[#0a1812] block mb-0.5">{title}</span>}
                        <span className="text-[#3b5249]">{desc || item}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* Who This Is For - Clean layout */}
          {service.whoFor && service.whoFor.length > 0 && (
            <div>
              <h3 className="text-2xl font-black text-[#0a1812] tracking-wide mb-6">Who This Is For</h3>
              <div className="space-y-4">
                {service.whoFor.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl bg-gradient-to-r from-teal-50/70 via-emerald-50/40 to-white border border-teal-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1 flex items-start space-x-4"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-600 mt-2 flex-shrink-0 shadow-sm"></div>
                    <p className="text-[#3b5249] text-sm md:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <ContactSection />
      </div>
      
      <Footer />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8f5] flex flex-col justify-between selection:bg-emerald-500 selection:text-white">
      <div>
        <Navbar />
        <Hero />
        <TrustAndExpertiseSection />
        <TechStrip />
        <About />
        <WhyZeta />
        <Technologies />
        <OurProcess />
        <Hero3D />
        <SuccessStories />
        <FAQ />
        <ContactSection />
        <Chatbot />
        
      </div>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success-stories/:slug" element={<StoryDetailPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<OfficialContact />} />
        <Route path="/privacy" element={<PrivacyPolicyModal/>}/>
      </Routes>
     <Chatbot />
    </BrowserRouter>
  );
}
