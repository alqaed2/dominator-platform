import React, { useState, useEffect } from 'react';
import { Activity, Zap, Server, Globe, Share2, Copy, Terminal, Camera, Cpu, ShieldCheck } from 'lucide-react';

/**
 * AI DOMINATOR PLATFORM v1.0 (The Iron Throne)
 * Connects to: Render Backend v15.1
 * Features: Hybrid Visuals, Viral Text, Dark Mode UI
 */

const BACKEND_URL = "https://dominatorv3.onrender.com"; // رابط الخادم الخاص بك

export default function App() {
  const [niche, setNiche] = useState("Saudi Specialty Coffee");
  const [mode, setMode] = useState("VIRAL_ATTACK");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);

  // محاكاة السجلات لإعطاء شعور "غرفة العمليات"
  const addLog = (msg) => {
    setLogs(prev => [...prev.slice(-4), `> ${msg}`]);
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResult(null);
    setProgress(10);
    setLogs([]);
    addLog("Initializing Neural Link...");

    try {
      // Simulation of steps
      setTimeout(() => { setProgress(40); addLog("Synthesizing Viral Text Strategy..."); }, 1500);
      setTimeout(() => { setProgress(70); addLog("Rendering High-Fidelity Visuals (Imagen/Flux)..."); }, 4000);

      const response = await fetch(`${BACKEND_URL}/api/tactical/execute`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, mode })
      });

      if (!response.ok) throw new Error("Backend Connection Failed");

      const data = await response.json();
      setProgress(100);
      setResult(data);
      addLog("Mission Complete. Assets Secured.");

    } catch (error) {
      addLog(`CRITICAL FAILURE: ${error.message}`);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 font-sans selection:bg-emerald-500/30">
      
      {/* --- HEADER --- */}
      <header className="border-b border-gray-800 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500/10 rounded-lg border border-emerald-500/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-500" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              AI DOMINATOR <span className="text-[10px] ml-2 px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono">PRO v1.0</span>
            </h1>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> SYSTEM ONLINE</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">LATENCY: 24ms</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* --- LEFT CONTROL PANEL --- */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* INPUT CARD */}
          <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Tactical Inputs
            </h2>

            <div className="space-y-5">
              <div>
                <label className="text-xs text-gray-500 font-mono mb-2 block">TARGET NICHE</label>
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all font-medium"
                  placeholder="e.g. Crypto, Real Estate..."
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-mono mb-2 block">STRATEGY MODE</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setMode('VIRAL_ATTACK')}
                    className={`p-3 rounded-lg border text-xs font-bold transition-all flex flex-col items-center gap-2 ${mode === 'VIRAL_ATTACK' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-gray-900 border-gray-800 text-gray-500 hover:border-gray-700'}`}
                  >
                    <Zap className="w-4 h-4" /> VIRAL
                  </button>
                  <button 
                    onClick={() => setMode('AUTHORITY_BUILDER')}
                    className={`p-3 rounded-lg border text-xs font-bold transition-all flex flex-col items-center gap-2 ${mode === 'AUTHORITY_BUILDER' ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'bg-gray-900 border-gray-800 text-gray-500 hover:border-gray-700'}`}
                  >
                    <ShieldCheck className="w-4 h-4" /> AUTHORITY
                  </button>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full mt-4 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm uppercase tracking-widest rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
              >
                {loading ? <Activity className="animate-spin w-5 h-5" /> : <Cpu className="w-5 h-5" />}
                {loading ? "EXECUTING..." : "DEPLOY WARHEAD"}
              </button>
            </div>
          </div>

          {/* LOGS TERMINAL */}
          <div className="bg-black border border-gray-800 rounded-xl p-4 font-mono text-xs h-48 overflow-y-auto">
            <div className="text-gray-500 border-b border-gray-800 pb-2 mb-2">System Logs_</div>
            <div className="flex flex-col gap-1 text-emerald-500/80">
              {logs.length === 0 && <span className="opacity-30">Waiting for command...</span>}
              {logs.map((log, i) => <div key={i}>{log}</div>)}
              {loading && <div className="animate-pulse">_</div>}
            </div>
          </div>
        </div>

        {/* --- RIGHT OUTPUT PANEL --- */}
        <div className="lg:col-span-8">
          {!result && !loading && (
             <div className="h-full border border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-gray-600 min-h-[500px]">
               <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                 <Server className="w-8 h-8 opacity-50" />
               </div>
               <p className="font-mono text-xs uppercase tracking-widest">Awaiting Tactical Data</p>
             </div>
          )}

          {loading && (
            <div className="h-full border border-gray-800 bg-[#0a0a0a] rounded-2xl flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
               <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
               <div className="w-full max-w-md px-10">
                 <div className="flex justify-between text-xs font-mono text-emerald-500 mb-2">
                   <span>PROCESSING</span>
                   <span>{progress}%</span>
                 </div>
                 <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-500 transition-all duration-300 shadow-[0_0_10px_#10b981]" style={{width: `${progress}%`}}></div>
                 </div>
               </div>
            </div>
          )}

          {result && !loading && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* METRICS ROW */}
              <div className="grid grid-cols-3 gap-4">
                 <div className="bg-[#0a0a0a] border border-gray-800 p-4 rounded-xl flex flex-col">
                   <span className="text-[10px] text-gray-500 font-mono uppercase">Virality Score</span>
                   <span className="text-2xl font-bold text-white">{result.metrics.viralityScore}%</span>
                 </div>
                 <div className="bg-[#0a0a0a] border border-gray-800 p-4 rounded-xl flex flex-col">
                   <span className="text-[10px] text-gray-500 font-mono uppercase">Reach (Est.)</span>
                   <span className="text-2xl font-bold text-blue-400">{(result.metrics.predictedReach/1000).toFixed(1)}k</span>
                 </div>
                 <div className="bg-[#0a0a0a] border border-gray-800 p-4 rounded-xl flex flex-col">
                   <span className="text-[10px] text-gray-500 font-mono uppercase">Sentiment</span>
                   <span className="text-lg font-bold text-emerald-400 truncate">{result.metrics.sentiment}</span>
                 </div>
              </div>

              {/* MAIN CONTENT CARD */}
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* IMAGE AREA */}
                <div className="relative w-full aspect-video bg-black group">
                  {result.image_base64 ? (
                    <img 
                      src={`data:image/png;base64,${result.image_base64}`} 
                      className="w-full h-full object-cover"
                      alt="Generated Content" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-red-500 font-mono text-xs">IMAGE GENERATION FAILED</div>
                  )}
                  <div className="absolute top-4 left-4">
                     <span className="bg-black/50 backdrop-blur border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                       <Camera className="w-3 h-3" /> AI GENERATED
                     </span>
                  </div>
                </div>

                {/* TEXT AREA */}
                <div className="p-8">
                   <h3 className="text-2xl font-bold text-white mb-6 leading-tight dir-rtl" style={{direction: 'rtl'}}>
                     {result.title}
                   </h3>
                   <div className="prose prose-invert prose-lg max-w-none mb-8 dir-rtl text-gray-300 whitespace-pre-line leading-relaxed" style={{direction: 'rtl'}}>
                     {result.body}
                   </div>

                   {/* HASHTAGS */}
                   <div className="flex flex-wrap gap-2 mb-6 dir-rtl" style={{direction: 'rtl'}}>
                      {result.hashtags?.map((tag, i) => (
                        <span key={i} className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                   </div>

                   {/* PROMPT BOX */}
                   <div className="bg-black/50 border border-gray-800 rounded-lg p-4 mt-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-2">
                           Generated Image Prompt
                        </span>
                        <button className="text-gray-500 hover:text-white transition-colors" title="Copy Prompt">
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 font-mono leading-relaxed line-clamp-3 hover:line-clamp-none transition-all cursor-text select-all">
                        {result.image_prompt}
                      </p>
                   </div>
                </div>

                {/* ACTIONS FOOTER */}
                <div className="bg-gray-900/30 border-t border-gray-800 p-4 flex justify-between items-center">
                   <div className="text-[10px] text-gray-600 font-mono">
                      FRAMEWORK: {result.framework}
                   </div>
                   <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors">
                        <Share2 className="w-3 h-3" /> PUBLISH
                      </button>
                   </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}