import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Zap, Layers, Globe, Share2, Copy, 
  Aperture, Wand2, ChevronRight, Loader2, 
  Maximize2, Quote, Hash, Image as ImageIcon 
} from 'lucide-react';

/**
 * AI DOMINATOR - ROYAL EDITION (v2.0)
 * Design System: Nebula Glassmorphism
 * Philosophy: "Complexity made beautiful"
 */

const BACKEND_URL = "https://dominatorv3.onrender.com";

export default function App() {
  const [niche, setNiche] = useState("");
  const [mode, setMode] = useState("VIRAL_ATTACK");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  // Background Animation State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGenerate = async () => {
    if (!niche) return;
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/tactical/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, mode })
      });

      if (!response.ok) throw new Error("Connection Error");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      alert("System Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden relative">
      
      {/* --- DYNAMIC BACKGROUND ORB --- */}
      <div 
        className="fixed w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{ 
          top: mousePos.y - 400, 
          left: mousePos.x - 400,
        }}
      />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              <Aperture className="text-white w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                AI DOMINATOR
              </h1>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block">World Class System</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <NavItem label="Dashboard" active />
            <NavItem label="Analytics" />
            <NavItem label="History" />
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
              <span className="text-xs font-medium text-gray-300">System Stable</span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-6xl mx-auto p-6 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: CONTROLS */}
        <div className="lg:col-span-4 space-y-8 animate-in slide-in-from-left-4 duration-700">
          <div className="relative">
             <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400">
               Create Viral<br/>Dominance.
             </h2>
             <p className="text-gray-400 text-sm leading-relaxed">
               Deploy advanced neural networks to synthesize world-class content and cinematic visuals in seconds.
             </p>
          </div>

          <div className="p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[22px] p-6 border border-white/5 shadow-2xl">
              
              {/* Niche Input */}
              <div className="mb-6">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block ml-1">Target Niche</label>
                <div className="relative group">
                  <input 
                    type="text" 
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="e.g. Specialty Coffee, SaaS Growth..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:border-purple-500/50 focus:bg-white/10 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="mb-8">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block ml-1">Strategy Core</label>
                <div className="grid grid-cols-2 gap-3">
                  <ModeButton 
                    active={mode === 'VIRAL_ATTACK'} 
                    onClick={() => setMode('VIRAL_ATTACK')}
                    icon={<Zap className="w-4 h-4" />}
                    title="Viral Attack"
                    desc="Maximum Spread"
                    color="purple"
                  />
                  <ModeButton 
                    active={mode === 'AUTHORITY_BUILDER'} 
                    onClick={() => setMode('AUTHORITY_BUILDER')}
                    icon={<Layers className="w-4 h-4" />}
                    title="Authority"
                    desc="Deep Trust"
                    color="blue"
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={handleGenerate}
                disabled={loading || !niche}
                className="group relative w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-opacity duration-300 ${loading ? 'opacity-80' : 'opacity-100 group-hover:opacity-90'}`}></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                <div className="relative flex items-center justify-center gap-3 text-white">
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Synthesizing...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      <span>Generate Assets</span>
                    </>
                  )}
                </div>
              </button>

            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 px-4">
            <span>Powered by Gemini 1.5 & Flux</span>
            <span>v2.0.1 Stable</span>
          </div>
        </div>

        {/* RIGHT: OUTPUT STAGE */}
        <div className="lg:col-span-8 relative min-h-[600px] animate-in slide-in-from-bottom-8 duration-700 delay-100">
          
          {!result && !loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[30px] bg-white/[0.02]">
              <div className="w-24 h-24 bg-gradient-to-tr from-gray-800 to-gray-900 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                 <Globe className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Ready for Command</h3>
              <p className="text-gray-500 text-sm max-w-md text-center">
                Enter your target niche on the left to activate the Omni-Channel Content Engine.
              </p>
            </div>
          )}

          {loading && (
             <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[30px] bg-black/40 backdrop-blur-sm border border-white/5 z-20">
                <div className="relative w-24 h-24 mb-8">
                   <div className="absolute inset-0 border-t-2 border-purple-500 rounded-full animate-spin"></div>
                   <div className="absolute inset-2 border-r-2 border-blue-500 rounded-full animate-spin reverse"></div>
                   <div className="absolute inset-4 border-b-2 border-emerald-500 rounded-full animate-spin"></div>
                </div>
                <div className="text-center space-y-2">
                   <div className="text-lg font-bold text-white tracking-widest">PROCESSING DATA</div>
                   <div className="text-xs text-purple-400 font-mono">NEURAL NETWORKS ACTIVE</div>
                </div>
             </div>
          )}

          {result && !loading && (
            <div className="bg-[#0f0f0f] border border-white/10 rounded-[30px] overflow-hidden shadow-2xl ring-1 ring-white/5">
              
              {/* Image Hero Section */}
              <div className="relative w-full aspect-video group cursor-pointer overflow-hidden bg-gray-900">
                 {result.image_base64 ? (
                   <img 
                     src={`data:image/png;base64,${result.image_base64}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     alt="Generated"
                   />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">Image Generation Failed</div>
                 )}
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                 
                 <div className="absolute top-6 left-6 flex gap-2">
                    <Badge icon={<ImageIcon className="w-3 h-3" />} text="AI Generated" color="white" />
                    <Badge icon={<Maximize2 className="w-3 h-3" />} text="8K Resolution" color="purple" />
                 </div>

                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between">
                       <div>
                          <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-2">Visual Prompt</p>
                          <p className="text-white/60 text-xs font-mono line-clamp-1 group-hover:line-clamp-none transition-all duration-300 max-w-2xl bg-black/50 backdrop-blur px-3 py-2 rounded-lg border border-white/10">
                            {result.image_prompt}
                          </p>
                       </div>
                       <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform shadow-lg shadow-white/20">
                          <Share2 className="w-5 h-5" />
                       </button>
                    </div>
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10">
                 
                 <div className="flex gap-4 mb-8">
                    <StatBox label="Virality Score" value={`${result.metrics.viralityScore}%`} color="text-purple-400" />
                    <StatBox label="Est. Reach" value={`${(result.metrics.predictedReach/1000).toFixed(1)}k`} color="text-blue-400" />
                    <StatBox label="Sentiment" value={result.metrics.sentiment} color="text-emerald-400" />
                 </div>

                 <div className="relative pl-6 border-l-2 border-purple-500/50 mb-8">
                    <Quote className="absolute -left-3 -top-3 w-6 h-6 text-purple-500 bg-[#0f0f0f] p-1" />
                    <h3 className="text-3xl font-bold text-white leading-tight dir-rtl" style={{direction: 'rtl'}}>
                       {result.title}
                    </h3>
                 </div>

                 <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed mb-8 dir-rtl whitespace-pre-line font-light" style={{direction: 'rtl'}}>
                    {result.body}
                 </div>

                 <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 dir-rtl" style={{direction: 'rtl'}}>
                    {result.hashtags?.map((tag, i) => (
                      <span key={i} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 transition-colors cursor-default flex items-center gap-1">
                        <Hash className="w-3 h-3 text-purple-500 opacity-50" /> {tag.replace('#', '')}
                      </span>
                    ))}
                 </div>
              </div>

            </div>
          )}

        </div>
      </main>
    </div>
  );
}

// --- SUB COMPONENTS FOR ELEGANCE ---

function NavItem({ label, active }) {
  return (
    <button className={`text-sm font-medium transition-colors ${active ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
      {label}
    </button>
  );
}

function ModeButton({ active, onClick, icon, title, desc, color }) {
  const activeClasses = active 
    ? `bg-${color}-500/10 border-${color}-500 ring-1 ring-${color}-500/50` 
    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20';
    
  return (
    <button 
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all duration-300 text-left group ${activeClasses}`}
    >
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-colors ${active ? `bg-${color}-500 text-white shadow-lg shadow-${color}-500/30` : 'bg-white/10 text-gray-400'}`}>
        {icon}
      </div>
      <div className={`font-bold text-sm mb-1 ${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{title}</div>
      <div className="text-[10px] text-gray-500 uppercase tracking-wider">{desc}</div>
    </button>
  );
}

function Badge({ icon, text, color }) {
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur border border-white/10 text-${color} text-[10px] font-bold uppercase tracking-wide`}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/5 flex-1">
       <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{label}</div>
       <div className={`text-xl font-bold ${color}`}>{value}</div>
    </div>
  );
}
