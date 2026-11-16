import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Helper to parse markdown links, bold, italics, emails, and URLs
const parseInlineMarkdown = (text) => {
  const parts = [];
  let remaining = text;
  let key = 0;

  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

  while (remaining.length > 0) {
    const match = remaining.match(tokenRegex);
    if (!match) {
      parts.push(remaining);
      break;
    }

    const matchIndex = match.index;
    if (matchIndex > 0) {
      parts.push(remaining.substring(0, matchIndex));
    }

    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(<strong key={key++} className="font-semibold text-white">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") && token.endsWith("*")) {
      parts.push(<em key={key++} className="italic text-emerald-200">{token.slice(1, -1)}</em>);
    } else if (token.startsWith("[") && token.includes("](")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push(
          <a
            key={key++}
            href={linkMatch[2]}
            target={linkMatch[2].startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="text-emerald-400 underline hover:text-emerald-300 transition-colors font-medium"
          >
            {linkMatch[1]}
          </a>
        );
      }
    } else if (token.startsWith("http://") || token.startsWith("https://")) {
      parts.push(
        <a
          key={key++}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 underline hover:text-emerald-300 transition-colors font-medium"
        >
          {token}
        </a>
      );
    } else if (token.includes("@")) {
      parts.push(
        <a
          key={key++}
          href={`mailto:${token}`}
          className="text-emerald-400 underline hover:text-emerald-300 transition-colors font-medium"
        >
          {token}
        </a>
      );
    } else {
      parts.push(token);
    }

    remaining = remaining.substring(matchIndex + token.length);
  }

  return parts;
};

const FormattedMessage = ({ text }) => {
  if (!text) return null;

  const lines = text.split("\n");

  return (
    <div className="space-y-1.5 text-[12px] leading-relaxed break-words">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIdx} className="h-1" />;
        }

        // Section header
        if (trimmed.startsWith("### ")) {
          return (
            <h4 key={lineIdx} className="font-bold text-emerald-300 text-[12.5px] mt-2 mb-1">
              {parseInlineMarkdown(trimmed.replace(/^###\s+/, ""))}
            </h4>
          );
        }

        // Divider
        if (trimmed === "---") {
          return <hr key={lineIdx} className="border-emerald-800/40 my-2" />;
        }

        // Bullet points
        if (/^[\*\-\•]\s+/.test(trimmed)) {
          const content = trimmed.replace(/^[\*\-\•]\s+/, "");
          return (
            <div key={lineIdx} className="flex items-start space-x-1.5 pl-1 my-0.5">
              <span className="text-emerald-400 font-bold mt-0.5">•</span>
              <span className="flex-1 text-gray-200">{parseInlineMarkdown(content)}</span>
            </div>
          );
        }

        return <p key={lineIdx}>{parseInlineMarkdown(trimmed)}</p>;
      })}
    </div>
  );
};

const INITIAL_GREETING = {
  sender: "bot",
  text: "Hi, I'm the Zeta AI Labs assistant 👋\nI can help you learn about our services, see our work, or get you connected to the right person on our team. What are you looking for?",
  isWelcome: true,
  actionButtons: [
    { label: "💼 What we build?", query: "What services do you offer?" },
    { label: "📁 See our work", query: "Can you show me examples of your work?" },
    { label: "💬 Talk to someone", action: "lead_capture" }
  ]
};

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  
  // Ref to detect clicks outside the chat container and toggle button
  const containerRef = useRef(null);

  // Interactive Lead Capture Wizard State
  const [leadState, setLeadState] = useState({
    active: false,
    step: 0,
    data: {
      name: "",
      email: "",
      projectGoal: "",
      additionalNotes: ""
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping, leadState]);

  // Close chatbot on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Voice recognition handler
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      setInput(speechText);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  // Start Lead Capture Flow
  const startLeadCapture = () => {
    setLeadState({
      active: true,
      step: 1,
      data: { name: "", email: "", projectGoal: "", additionalNotes: "" }
    });

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Happy to connect you with our team. Just need a few quick details first:\n\n**1. What's your name?**",
        isFormStep: true
      }
    ]);
  };

  // Process Lead Capture Steps
  const handleLeadStepSubmit = async (userText, isSkipped = false) => {
    const currentStep = leadState.step;
    const value = (userText || "").trim();

    if (currentStep === 1) {
      if (!value) return;
      setMessages((prev) => [...prev, { sender: "user", text: value }]);
      setLeadState((prev) => ({
        ...prev,
        step: 2,
        data: { ...prev.data, name: value }
      }));
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Nice to meet you, ${value}!\n\n**2. What's the best email to reach you?**`,
          isFormStep: true
        }
      ]);
      return;
    }

    if (currentStep === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: value },
          {
            sender: "bot",
            text: "Please provide a valid email address so our engineering team can follow up with you.",
            isFormStep: true
          }
        ]);
        return;
      }

      setMessages((prev) => [...prev, { sender: "user", text: value }]);
      setLeadState((prev) => ({
        ...prev,
        step: 3,
        data: { ...prev.data, email: value }
      }));
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Got it! **3. In a sentence, what are you looking to build?**`,
          isFormStep: true
        }
      ]);
      return;
    }

    if (currentStep === 3) {
      if (!value) return;
      setMessages((prev) => [...prev, { sender: "user", text: value }]);
      setLeadState((prev) => ({
        ...prev,
        step: 4,
        data: { ...prev.data, projectGoal: value }
      }));
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Great. **4. Anything else we should know — timeline, budget range, existing systems?** (Optional)`,
          isFormStep: true,
          actionButtons: [
            { label: "⏩ Skip this step", action: "skip_notes" }
          ]
        }
      ]);
      return;
    }

    if (currentStep === 4) {
      const notes = isSkipped ? "None specified" : (value || "None");
      setMessages((prev) => [...prev, { sender: "user", text: isSkipped ? "[Skipped]" : notes }]);
      
      const finalData = {
        name: leadState.data.name,
        email: leadState.data.email,
        projectGoal: leadState.data.projectGoal,
        additionalNotes: notes
      };

      setIsTyping(true);
      setLeadState({ active: false, step: 0, data: {} });

      try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, ... {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        });

        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Thanks, **${finalData.name}** — that's been sent to our team. Someone will follow up at **${finalData.email}** soon. In the meantime, feel free to keep browsing or ask me anything else.`,
            actionButtons: [
              { label: "💼 What we build?", query: "What services do you offer?" },
              { label: "📁 See our work", query: "Can you show me examples of your work?" },
              { label: "💬 Talk to someone", action: "lead_capture" }
            ]
          }
        ]);
      } catch (err) {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Thanks, **${finalData.name}**! Your inquiry has been noted. You can also reach our team directly at contact@zetaailabs.com or +91 93372 87145.`,
            actionButtons: [
              { label: "💼 Explore Services", link: "/what-we-do" },
              { label: "📁 View Projects", link: "/projects" }
            ]
          }
        ]);
      }
    }
  };

  // Main Send Function
  const handleSend = async (textToSend) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    if (leadState.active) {
      setInput("");
      handleLeadStepSubmit(messageText);
      return;
    }

    const userMessage = messageText.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setIsTyping(false);
      setMessages((prev) => [
        ...prev, 
        { 
          sender: "bot", 
          text: data.reply,
          actionButtons: data.actionButtons || []
        }
      ]);
    } catch (error) {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev, 
        { 
          sender: "bot", 
          text: "I don't have a confident answer for that one — let me connect you with our team instead so you get a real answer, not a guess.",
          actionButtons: [
            { label: "💬 Talk to someone", action: "lead_capture" },
            { label: "📝 Open Contact Form", link: "#contact" }
          ]
        }
      ]);
    }
  };

  // Action Button Click Handler
  const handleActionButtonClick = (btn) => {
    if (btn.action === "lead_capture") {
      startLeadCapture();
      return;
    }

    if (btn.action === "skip_notes") {
      handleLeadStepSubmit("", true);
      return;
    }

    if (btn.query) {
      handleSend(btn.query);
      return;
    }

    if (btn.link) {
      if (btn.link.startsWith("#")) {
        const elem = document.getElementById(btn.link.replace("#", "")) || document.getElementById("contact");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate(`/${btn.link}`);
        }
        return;
      }

      if (btn.link.startsWith("tel:") || btn.link.startsWith("mailto:")) {
        window.location.href = btn.link;
        return;
      }

      if (btn.link.startsWith("http")) {
        window.open(btn.link, "_blank", "noopener,noreferrer");
        return;
      }

      navigate(btn.link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quickReplyTabs = [
    { label: "💼 What we build?", query: "What services do you offer?" },
    { label: "📁 See our work", query: "Can you show me examples of your work?" },
    { label: "💬 Talk to someone", action: "lead_capture" }
  ];

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Compact Chat Window Panel */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[420px] h-[530px] rounded-2xl bg-[#010803] border border-emerald-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(16,185,129,0.25)] backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300 relative">
          
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-transparent to-emerald-950/40 pointer-events-none animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,185,129,0.15)_0%,transparent_50%,rgba(16,185,129,0.12)_100%)] bg-[length:100%_60px] pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-emerald-500/20 to-transparent pointer-events-none"></div>

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between px-3.5 py-3 border-b border-emerald-900/60 bg-[#020e06]/95">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center bg-emerald-900/90 border border-emerald-400/70 px-2 py-1 rounded-lg shadow-[0_0_12px_rgba(16,185,129,0.5)]">
                <img 
                  src="/Zetaalogo.png" 
                  alt="Zeta AI Labs" 
                  className="h-5 w-auto object-contain filter brightness-125 contrast-125 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" 
                />
              </div>
              <div>
                <h3 className="text-[11px] font-bold text-white tracking-wider uppercase">
                  ZETA AI LABS
                </h3>
                <div className="flex items-center space-x-1.5 mt-0.2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <p className="text-[9.5px] text-emerald-400 font-medium tracking-wide">AI Assistant</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <button 
                onClick={() => {
                  setMessages([INITIAL_GREETING]);
                  setLeadState({ active: false, step: 0, data: {} });
                }}
                title="Reset Conversation"
                className="text-emerald-400/70 hover:text-emerald-200 transition-colors h-6 w-6 flex items-center justify-center rounded-md hover:bg-emerald-900/40 text-[10px] border border-emerald-900/40 cursor-pointer"
              >
                🔄
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors h-6 w-6 flex items-center justify-center rounded-md hover:bg-emerald-900/40 text-sm border border-emerald-900/40 cursor-pointer"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Messages Feed Area */}
          <div className="relative z-10 p-3.5 flex-1 overflow-y-auto space-y-3 flex flex-col text-xs scrollbar-thin scrollbar-thumb-emerald-900/40">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-5 h-5 rounded-md bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[9px] text-emerald-300 shrink-0 mt-1 shadow-sm font-bold">
                    AI
                  </div>
                )}
                
                <div
                  className={`max-w-[88%] px-3.5 py-2.5 rounded-xl leading-relaxed shadow-md ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-semibold rounded-br-xs shadow-[0_4px_15px_rgba(16,185,129,0.25)]"
                      : msg.isWelcome
                      ? "bg-gradient-to-br from-[#041c0e] to-[#010b05] border border-emerald-500/40 text-emerald-100 font-light rounded-bl-xs shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
                      : "bg-[#03150b]/95 border border-emerald-800/45 text-gray-200 font-light rounded-bl-xs shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md"
                  }`}
                >
                  {msg.isWelcome && (
                    <div className="flex items-center space-x-1.5 mb-1.5 pb-1.5 border-b border-emerald-500/25">
                      <span className="text-xs">👋</span>
                      <span className="text-[10px] font-bold tracking-wider text-emerald-300 uppercase">Zeta AI Labs Assistant</span>
                    </div>
                  )}
                  
                  <FormattedMessage text={msg.text} />

                  {msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-emerald-900/40 flex flex-wrap gap-1.5">
                      {msg.actionButtons.map((btn, bIdx) => (
                        <button
                          key={bIdx}
                          onClick={() => handleActionButtonClick(btn)}
                          className="text-[10.5px] font-semibold bg-emerald-950/70 hover:bg-emerald-800/80 text-emerald-300 hover:text-white border border-emerald-500/30 hover:border-emerald-400 px-2.5 py-1 rounded-lg transition-all shadow-xs hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 cursor-pointer flex items-center space-x-1"
                        >
                          <span>{btn.label}</span>
                          <span className="text-[9px] opacity-70">↗</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-md bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[9px] text-emerald-300 shrink-0 mt-1 font-bold">
                  AI
                </div>
                <div className="bg-[#03150b]/90 border border-emerald-800/35 px-3.5 py-2.5 rounded-xl rounded-bl-xs flex items-center space-x-1.5 shadow-md backdrop-blur-md">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Quick Reply Tabs Bar */}
          {!isTyping && !leadState.active && (
            <div className="relative z-10 px-2.5 py-2 border-t border-emerald-900/40 bg-[#010502]/90 grid grid-cols-2 gap-1.5">
              {quickReplyTabs.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleActionButtonClick(item)}
                  className="group flex items-center space-x-1 text-[10.5px] bg-emerald-950/50 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/40 px-2 py-1.5 rounded-lg transition-all text-left shadow-sm hover:border-emerald-400 hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] cursor-pointer"
                >
                  <span className="truncate font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
            className="relative z-10 border-t border-emerald-900/40 bg-[#010402] p-2.5 flex items-center gap-2"
          >
            <button
              type="button"
              onClick={handleVoiceInput}
              title="Voice Input"
              className={`h-8 w-8 rounded-lg border flex items-center justify-center transition-all shrink-0 text-xs cursor-pointer ${
                isListening 
                  ? "bg-red-500 text-black border-red-400 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]" 
                  : "bg-emerald-950/70 text-emerald-400 border-emerald-900/70 hover:bg-emerald-900/60 hover:border-emerald-500/50"
              }`}
            >
              🎤
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening 
                  ? "Listening..." 
                  : leadState.active 
                  ? `Enter details for step ${leadState.step}...`
                  : "Message Zeta AI Labs..."
              }
              className="flex-1 bg-[#010f06] border border-emerald-900/50 rounded-lg px-3 py-2 text-xs text-white placeholder-emerald-700/60 focus:outline-none focus:border-emerald-400 transition-colors shadow-inner"
            />
            
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 disabled:opacity-40 disabled:hover:from-emerald-500 text-black font-bold h-8 px-3 rounded-lg text-xs transition-all shadow-md flex items-center justify-center shrink-0 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m7 7l-7-7-7 7" />
              </svg>
            </button>
          </form>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-300 text-black shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-110 transition-all duration-300 focus:outline-none animate-bounce cursor-pointer"
      >
        {isOpen ? (
          <span className="text-2xl font-bold">&times;</span>
        ) : (
          <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;