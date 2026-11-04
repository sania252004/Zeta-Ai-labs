const { GoogleGenAI } = require("@google/genai");
const zetaKnowledge = require("../data/zetaKnowledge");

// Initialize Gemini SDK with API key
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Match against exact FAQ triggers using semantic keyword similarity
const findMatchingFaq = (userQuery) => {
  const query = userQuery.toLowerCase().trim().replace(/[?!.,]/g, "");

  for (const faq of zetaKnowledge.faqPairs) {
    for (const trigger of faq.triggers) {
      if (query === trigger || query.includes(trigger)) {
        return faq;
      }
    }
  }
  return null;
};

// Build strict guardrailed system prompt for Gemini LLM
const buildSystemInstruction = () => {
  const faqContext = zetaKnowledge.faqPairs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");

  return `You are the official Zeta AI Labs assistant 👋.
You represent Zeta AI Labs Private Limited, a technology company headquartered at J-14, BJB Nagar, Lewis Road, Bhubaneswar 751014, Odisha, India.

CRITICAL GUARDRAILS & FACTS (NEVER VIOLATE):
1. PRICING & TIMELINE GUARDRAIL: NEVER state specific dollar amounts, hourly rates, or delivery timelines. Pricing and timelines depend on project scope and must always be routed to a discovery session with our team.
2. HONEST AI/ML STATUS: We have a dedicated AI/ML team (7-person team, 2 completed AI/ML projects). We are upfront that this is a newer part of our practice.
3. HONEST ROBOTICS STATUS: Robotics & AI monitoring is an emerging area for us — we do not have delivered projects to show yet, but are building capabilities.
4. METRICS: Always state our confirmed track record of "350+ projects across 10+ industries" (clients in India, UAE, UK, and others).
5. TONE: Direct, not salesy. Answer the actual question first. Keep responses short and crisp (2 to 4 sentences max).
6. CONTACT: Email is contact@zetaailabs.com, phone is +91 93372 87145.
7. IF UNSURE: If you do not have a confident factual answer, say: "I don't have a confident answer for that one — let me connect you with our team instead so you get a real answer, not a guess."

CORE COMPANY FAQ CONTEXT:
${faqContext}
`;
};

const getAllServiceTabs = () => [
  { label: "🌐 Website & Web Dev", link: "/services/website-web-development" },
  { label: "⚡ React / Node.js", link: "/services/react-nodejs-engineering" },
  { label: "📱 Mobile Apps", link: "/services/mobile-application-development" },
  { label: "🏢 Enterprise ERP & CRM", link: "/services/enterprise-erp-crm" },
  { label: "🛒 Magento & E-commerce", link: "/services/magento-ecommerce-development" },
  { label: "🧠 AI, ML & Data", link: "/services/ai-machine-learning-data" },
  { label: "🤖 Robotics & Autonomous", link: "/services/robotics-autonomous-systems" },
  { label: "🔗 IoT & Blockchain", link: "/services/iot-blockchain-engineering" },
  { label: "📈 Digital Marketing", link: "/services/digital-marketing-creative" },
  { label: "⚙️ View All Services", link: "/what-we-do" }
];

// Determine default action buttons based on query intent
const getActionButtonsForIntent = (query, replyText) => {
  const q = query.toLowerCase();

  // Specific single service intents
  if (q.includes("react") || q.includes("node") || q.includes("nodejs") || q.includes("javascript")) {
    return [
      { label: "⚡ React / Node.js Engineering", link: "/services/react-nodejs-engineering" },
      { label: "🌐 Website & Web Dev", link: "/services/website-web-development" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  if (q.includes("mobile") || q.includes("app") || q.includes("android") || q.includes("ios") || q.includes("flutter")) {
    return [
      { label: "📱 Mobile App Development", link: "/services/mobile-application-development" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  if (q.includes("erp") || q.includes("crm") || q.includes("enterprise") || q.includes("sage") || q.includes("dynamics")) {
    return [
      { label: "🏢 Enterprise Apps, ERP & CRM", link: "/services/enterprise-erp-crm" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  if (q.includes("magento") || q.includes("ecommerce") || q.includes("e-commerce") || q.includes("shop") || q.includes("store")) {
    return [
      { label: "🛒 Magento & E-commerce", link: "/services/magento-ecommerce-development" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  if (q.includes("robotics") || q.includes("monitoring") || q.includes("fleet") || q.includes("digital twin")) {
    return [
      { label: "🤖 Robotics & Autonomous Systems", link: "/services/robotics-autonomous-systems" },
      { label: "🧠 AI & ML Solutions", link: "/services/ai-machine-learning-data" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  if (q.includes("ai") || q.includes("ml") || q.includes("machine learning") || q.includes("llm") || q.includes("data")) {
    return [
      { label: "🧠 AI, ML & Data Solutions", link: "/services/ai-machine-learning-data" },
      { label: "🤖 Robotics & Autonomous", link: "/services/robotics-autonomous-systems" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Discuss AI Use Case", action: "lead_capture" }
    ];
  }

  if (q.includes("iot") || q.includes("blockchain") || q.includes("sensor") || q.includes("smart contract")) {
    return [
      { label: "🔗 IoT & Blockchain Engineering", link: "/services/iot-blockchain-engineering" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  if (q.includes("marketing") || q.includes("brand") || q.includes("seo") || q.includes("creative")) {
    return [
      { label: "📈 Digital Marketing & Creative", link: "/services/digital-marketing-creative" },
      { label: "⚙️ View All Services", link: "/what-we-do" },
      { label: "💬 Talk to Someone", action: "lead_capture" }
    ];
  }

  // Broad service questions -> return all service tabs!
  if (q.includes("service") || q.includes("build") || q.includes("capability") || q.includes("offer") || q.includes("what do you do") || q.includes("what we build")) {
    return getAllServiceTabs();
  }

  if (q.includes("work") || q.includes("project") || q.includes("portfolio") || q.includes("case studies") || q.includes("client")) {
    return [
      { label: "🌟 Flagship Case Studies", link: "/success-stories" },
      { label: "📁 Full 60+ Projects List", link: "/projects" },
      { label: "💬 Start Your Project", action: "lead_capture" }
    ];
  }

  if (q.includes("start") || q.includes("hire") || q.includes("cost") || q.includes("price") || q.includes("timeline") || q.includes("contact") || q.includes("talk")) {
    return [
      { label: "💬 Talk to Someone", action: "lead_capture" },
      { label: "📝 Open Contact Form", link: "#contact" },
      { label: "📞 Call +91 93372 87145", link: "tel:+919337287145" }
    ];
  }

  if (q.includes("where") || q.includes("location") || q.includes("office") || q.includes("bhubaneswar")) {
    return [
      { label: "🏢 About Our Company", link: "/about" },
      { label: "💬 Talk to Team", action: "lead_capture" }
    ];
  }

  // Default helpful buttons
  return [
    { label: "💼 What We Build", link: "/what-we-do" },
    { label: "📁 See Our Work", link: "/projects" },
    { label: "💬 Talk to Someone", action: "lead_capture" }
  ];
};

// ======================================================
// HANDLE CHAT MESSAGE
// ======================================================
const handleChatMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const trimmedMessage = message.trim();

    // 1. Direct FAQ match check for guaranteed exact answers
    const matchedFaq = findMatchingFaq(trimmedMessage);
    if (matchedFaq) {
      return res.status(200).json({
        reply: matchedFaq.answer,
        actionButtons: matchedFaq.actionButtons,
      });
    }

    // 2. Gemini 3.6 Flash reasoning for dynamic or nuanced questions
    const systemInstruction = buildSystemInstruction();

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemInstruction}\n\nUser Question: ${trimmedMessage}\n\nAssistant Response (2-4 sentences max):`,
            },
          ],
        },
      ],
      config: {
        maxOutputTokens: 2048,
        temperature: 0.5,
      },
    });

    let reply = "";
    if (typeof response.text === "function") {
      reply = response.text();
    } else if (response.text) {
      reply = response.text;
    } else if (response.candidates?.[0]?.content?.parts?.[0]?.text) {
      reply = response.candidates[0].content.parts[0].text;
    }

    if (!reply || !reply.trim()) {
      reply =
        "I'm here to help you learn about Zeta AI Labs' services, see our delivered work, or connect you directly with our engineering team. What would you like to explore?";
    }

    const actionButtons = getActionButtonsForIntent(trimmedMessage, reply);

    return res.status(200).json({
      reply: reply.trim(),
      actionButtons,
    });
  } catch (error) {
    console.error("Gemini Chat Controller Error:", error);

    return res.status(200).json({
      reply:
        "I don't have a confident answer for that one — let me connect you with our team instead so you get a real answer, not a guess.",
      actionButtons: [
        { label: "💬 Talk to someone", action: "lead_capture" },
        { label: "📝 Open Contact Form", link: "#contact" }
      ],
    });
  }
};

// ======================================================
// HANDLE LEAD CAPTURE & CONTACT SUBMISSION
// ======================================================
const handleSendEmail = async (req, res) => {
  try {
    const { name, email, projectGoal, additionalNotes, projectDetails } = req.body;

    console.log("=== NEW ZETA AI LABS LEAD CAPTURED ===");
    console.log({
      name: name || "Anonymous",
      email: email || "Not provided",
      projectGoal: projectGoal || projectDetails || "Not specified",
      additionalNotes: additionalNotes || "None",
      timestamp: new Date().toISOString(),
    });
    console.log("=======================================");

    return res.status(200).json({
      success: true,
      message: `Thanks, ${name || "there"} — that's been sent to our team. Someone will follow up at ${email || "your email"} soon. In the meantime, feel free to keep browsing or ask me anything else.`,
    });
  } catch (error) {
    console.error("Lead Capture Error:", error);
    return res.status(500).json({
      error: "Failed to record lead.",
    });
  }
};

module.exports = {
  handleChatMessage,
  handleSendEmail,
};
