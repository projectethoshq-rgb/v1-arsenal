import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Search, Zap, Target, TrendingUp, Eye, Share2, BookOpen, Code, MessageCircle, Lightbulb } from 'lucide-react';
import "./App.css";

function App() {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const scenarios = {
    client: {
      title: "New Client Project",
      icon: "🎯",
      color: "bg-cyan-500",
      steps: [
        { ai: "Perplexity", icon: "🔍", action: "Research market, demographics, competitors", output: "Research doc with citations", skip: "Never skip - this is your foundation" },
        { ai: "ChatGPT", icon: "⚡", action: "Generate draft copy, content calendar, pricing framework", output: "Multiple copy variations, workflow templates", skip: "Can go direct to Claude but slower" },
        { ai: "Claude", icon: "🎯", action: "Deep strategy refinement, narrative polish, emotional resonance", output: "Polished campaign strategy, cohesive story", skip: "Never skip for client work" },
        { ai: "Grok", icon: "📈", action: "Real-time trend check, cultural relevance validation", output: "Relevance score, trending alignments", skip: "Skip if not time-sensitive" },
        { ai: "Gemini/Meta", icon: "👁️", action: "Visual analysis (Gemini) or platform optimization (Meta)", output: "Visual feedback or Meta-specific tweaks", skip: "Choose based on content type" },
        { ai: "Notion", icon: "📚", action: "Document everything throughout process", output: "Organized knowledge base", skip: "Never skip - future you will thank you" }
      ]
    },
    social: {
      title: "Quick Social Content",
      icon: "📱",
      color: "bg-blue-500",
      steps: [
        { ai: "Grok", icon: "📈", action: "Check what's trending RIGHT NOW", output: "Current trends, hot topics", skip: "Skip if evergreen content" },
        { ai: "ChatGPT", icon: "⚡", action: "Generate 5-10 quick copy variations", output: "Social copy options", skip: "Can skip if you have clear vision" },
        { ai: "Claude", icon: "🎯", action: "Polish your favorite 1-2 options", output: "Refined, strategic copy", skip: "Skip if time-crunched and ChatGPT nailed it" },
        { ai: "Meta AI", icon: "📱", action: "Platform-specific optimization", output: "Meta-optimized content", skip: "Skip if posting elsewhere" }
      ]
    },
    technical: {
      title: "Technical/Integration",
      icon: "💻",
      color: "bg-green-500",
      steps: [
        { ai: "Perplexity", icon: "🔍", action: "Research current solutions, best practices", output: "Technical documentation, options", skip: "Skip if you know the solution" },
        { ai: "DeepSeek", icon: "💻", action: "Technical implementation, code generation", output: "Working code, architecture plans", skip: "Never skip for coding tasks" },
        { ai: "Claude", icon: "🎯", action: "Documentation, explanation, optimization review", output: "Clear documentation, strategic insights", skip: "Skip if purely execution task" },
        { ai: "Notion", icon: "📚", action: "Document the solution for future reference", output: "Technical knowledge base", skip: "Never skip - you'll need this again" }
      ]
    },
    braindump: {
      title: "Brain Dump / Thinking Partner",
      icon: "💭",
      color: "bg-orange-500",
      steps: [
        { ai: "Claude", icon: "🎯", action: "Ramble session - dump everything, think out loud", output: "Organized thoughts, strategic framework", skip: "This IS the process - don't skip" },
        { ai: "Perplexity", icon: "🔍", action: "Research specific questions that came up", output: "Data to support your thinking", skip: "Skip if no research needed" },
        { ai: "Claude", icon: "🎯", action: "Synthesize research back into your framework", output: "Complete strategic plan", skip: "Don't skip - close the loop" },
        { ai: "Notion", icon: "📚", action: "Capture the breakthrough insights", output: "Saved epiphanies", skip: "Skip at your own risk" }
      ]
    },
    visual: {
      title: "Visual Campaign Development",
      icon: "👁️",
      color: "bg-pink-500",
      steps: [
        { ai: "Perplexity", icon: "🔍", action: "Research visual trends in your niche", output: "Trend report with examples", skip: "Skip if you have strong vision" },
        { ai: "Gemini", icon: "👁️", action: "Analyze competitor visuals, upload references", output: "Visual analysis, what works/doesn't", skip: "Skip if starting from scratch" },
        { ai: "Claude", icon: "🎯", action: "Develop strategic visual direction", output: "Visual strategy brief", skip: "Don't skip - strategy first" },
        { ai: "Meta AI", icon: "📱", action: "Generate visual assets", output: "Image variations", skip: "Skip if using designer" },
        { ai: "Gemini", icon: "👁️", action: "Review generated assets against strategy", output: "Feedback for iteration", skip: "Skip if assets are perfect" }
      ]
    },
    research: {
      title: "Deep Research Dive",
      icon: "🔍",
      color: "bg-indigo-500",
      steps: [
        { ai: "Perplexity", icon: "🔍", action: "Gather initial research, multiple queries", output: "Comprehensive research document", skip: "Never skip - this is the point" },
        { ai: "Claude", icon: "🎯", action: "Analyze research, identify patterns, synthesize insights", output: "Strategic insights, actionable summary", skip: "Skip if just need raw data" },
        { ai: "ChatGPT", icon: "⚡", action: "Generate different format outputs (report, presentation, etc)", output: "Formatted deliverables", skip: "Skip if Claude output is sufficient" },
        { ai: "Notion", icon: "📚", action: "Archive research for future projects", output: "Searchable research library", skip: "Don't skip - compound your knowledge" }
      ]
    }
  };

  const quickReference = {
    perplexity: { name: "Perplexity", role: "Research Assassin", best: "Market research, competitor analysis, trend data", talk: "Direct questions with specifics" },
    chatgpt: { name: "ChatGPT", role: "Fast Generalist", best: "Quick copy, variations, first drafts", talk: "Clear prompts, can handle some rambling" },
    claude: { name: "Claude", role: "Strategic Partner", best: "Deep thinking, narrative, refinement, brain dumps", talk: "Ramble freely, iterate through conversation" },
    grok: { name: "Grok", role: "Culture Scout", best: "Real-time trends, social pulse, edgy content", talk: "Casual and direct" },
    gemini: { name: "Gemini", role: "Visual Analyst", best: "Image/video analysis, multimodal tasks", talk: "Mix of text and media" },
    metaai: { name: "Meta AI", role: "Platform Specialist", best: "Meta campaigns, image generation", talk: "Direct requests" },
    deepseek: { name: "DeepSeek", role: "Technical Consultant", best: "Coding, APIs, technical architecture", talk: "Technical but can explain simply" },
    notion: { name: "Notion", role: "Command Center", best: "Organizing everything, knowledge base", talk: "Not an AI - your storage system" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full">
            <h2 className="text-2xl font-bold text-white tracking-wide">OBSIDIAN ETHOS</h2>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            🦸 AI Avengers Mission Control
          </h1>
          <p className="text-xl text-cyan-200 mb-4">
            Your Interactive Decision Flowchart - Choose Your Mission Type
          </p>
          <div className="text-sm text-cyan-300/60 italic">
            Created by Anthony Ferlito, Founder & CEO | Obsidian Ethos
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => setSelectedScenario(key)}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                selectedScenario === key 
                  ? `${scenario.color} ring-4 ring-cyan-400 shadow-2xl` 
                  : 'bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-500/20'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
              </div>
            </button>
          ))}
        </div>

        {selectedScenario && (
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-12 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className={`${scenarios[selectedScenario].color} p-3 rounded-lg text-3xl`}>
                {scenarios[selectedScenario].icon}
              </div>
              <h2 className="text-3xl font-bold text-white">
                {scenarios[selectedScenario].title} Workflow
              </h2>
            </div>

            <div className="space-y-6">
              {scenarios[selectedScenario].steps.map((step, index) => (
                <div key={index} className="bg-slate-700/50 border border-cyan-500/10 rounded-xl p-6 hover:bg-slate-700/70 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{step.icon}</div>
                        <h4 className="text-xl font-bold text-white">{step.ai}</h4>
                      </div>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="text-cyan-400 font-semibold">Action:</span> {step.action}</p>
                        <p><span className="text-emerald-400 font-semibold">Output:</span> {step.output}</p>
                        <p><span className="text-yellow-400 font-semibold">Skip if:</span> {step.skip}</p>
                      </div>
                    </div>
                  </div>
                  {index < scenarios[selectedScenario].steps.length - 1 && (
                    <div className="flex justify-center mt-4">
                      <div className="text-cyan-400 text-2xl">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-2xl mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            💡 Quick Reference: Know Your Avengers
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(quickReference).map(([key, ai]) => (
              <div key={key} className="bg-slate-700/50 border border-cyan-500/10 rounded-lg p-4 hover:bg-slate-700/70 hover:border-cyan-500/30 transition-all">
                <h4 className="text-lg font-bold text-cyan-300 mb-2">{ai.name}</h4>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-white font-semibold">Role:</span> {ai.role}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <span className="text-white font-semibold">Best for:</span> {ai.best}
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">Talk to it:</span> {ai.talk}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 shadow-2xl mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">🎯 Pro Tips from Obsidian Ethos</h3>
          <ul className="space-y-2 text-white/90">
            <li>• <strong>Speed vs Quality:</strong> Quick tasks = 2-3 AIs, Client work = Full pipeline</li>
            <li>• <strong>Always document in Notion:</strong> Your future self will thank you</li>
            <li>• <strong>Brain dump mode:</strong> Start with Claude for thinking, then get tactical</li>
            <li>• <strong>Layer your outputs:</strong> Each AI adds distinct value - don't skip steps on important work</li>
            <li>• <strong>Trust the process:</strong> The ramble-and-refine approach works - lean into it</li>
          </ul>
        </div>

        <div className="text-center py-6 border-t border-cyan-500/20">
          <div className="text-cyan-300/80 mb-2">
            <strong>OBSIDIAN ETHOS</strong>
          </div>
          <div className="text-sm text-gray-400">
            Created by Anthony Ferlito, Founder & CEO
          </div>
          <div className="text-xs text-gray-500 mt-2">
            AI-Enhanced Business Consulting | Strategic Marketing Systems
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
