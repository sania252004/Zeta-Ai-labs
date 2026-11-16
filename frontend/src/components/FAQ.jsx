import React from "react";

const questions = [
  {
    question: "What kind of companies does Zeta AI Labs work with?",
    answer:
      "We work with growing businesses and established organizations across e-commerce, healthcare, logistics, education, hospitality, and enterprise operations, anywhere a serious engineering partner adds more value than a generic agency.",
  },
  {
    question: "Do you only build AI products, or full applications too?",
    answer:
      "Both, by design. Most of our engagements combine full-stack product engineering with applied AI, such as a recommendation engine inside an e-commerce platform, or automation inside an enterprise system, rather than AI as a standalone add-on.",
  },
  {
    question: "How do you approach data security on client projects?",
    answer:
      "Security and access control are built into architecture from the discovery phase, not retrofitted after launch, and scoped to the compliance requirements relevant to your industry.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "Discovery and scoping, architecture and design, iterative build with visible sprints, then deployment with ongoing support: the same four-stage process regardless of project size.",
  },
  {
    question: "Can you take over or extend an existing system?",
    answer:
      "Yes. A meaningful share of our work is enhancing, re-platforming, or extending systems that already exist, not only greenfield builds.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative bg-gradient-to-br from-indigo-50/80 via-violet-50/50 to-white py-20 px-6 lg:px-12 overflow-hidden text-[#0f172a] border-t border-indigo-100"
    >
      {/* 3D Animated Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-300/30 blur-[130px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-violet-300/25 blur-[120px] pointer-events-none rounded-full" />

      {/* Small/Compact Layout Width Container */}
      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block py-1.5 px-3.5 rounded-full text-indigo-700 bg-indigo-100 border border-indigo-200 text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            Need to know
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a] md:text-4xl">
            Frequently Asked <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>

        <div className="divide-y divide-indigo-200/60 border-y border-indigo-200/60 bg-white/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(99,102,241,0.05)]">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5 first:pt-0 last:pb-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-[#0f172a] [&::-webkit-details-marker]:hidden transition-colors hover:text-indigo-600">
                {question}
                <span className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-lg font-normal text-indigo-600 transition-transform duration-300 group-open:rotate-45 shrink-0 shadow-sm">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-3 text-sm leading-relaxed text-gray-600 font-medium">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;