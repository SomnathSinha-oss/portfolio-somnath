import { useState, useEffect } from 'react';
import { Radio, Cpu, RefreshCw, Activity, Terminal, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function TelemetrySimulator() {
  const [distance, setDistance] = useState(28); // in cm
  const [simulatedPackets, setSimulatedPackets] = useState(142);
  const [isAlertActive, setIsAlertActive] = useState(false);
  const [pulseEchoTime, setPulseEchoTime] = useState(0);

  // Calculate microsecond echo time: distance = (time * 0.0343) / 2 => time = (distance * 2) / 0.0343
  useEffect(() => {
    const us = Math.round((distance * 2) / 0.0343);
    setPulseEchoTime(us);
    setIsAlertActive(distance < 15);
  }, [distance]);

  // Increment packet count periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedPackets((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl bg-cyber-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-neon-green flex items-center justify-center">
            <Radio className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm flex items-center gap-2">
              <span>ESP32 & HC-SR04 Interactive Sensor Simulator</span>
              <span className="font-mono text-[10px] text-neon-green px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                LIVE DEMO
              </span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Firmware: C++ · Hardware: ESP32 DevKit V1 · Bus: I2C (0x3C)
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <Activity className="w-3.5 h-3.5 text-neon-green" />
          <span>Telemetries: <span className="text-neon-green font-bold">{simulatedPackets}</span> pkts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left: Distance Slider & Controls (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-slate-300">Target Obstacle Distance:</span>
              <span className="text-neon-green text-sm font-bold">{distance} cm</span>
            </div>
            <input
              type="range"
              min="2"
              max="200"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full h-2 bg-cyber-800 rounded-lg appearance-none cursor-pointer accent-neon-green focus:outline-none"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>2 cm (Near / Alert)</span>
              <span>100 cm</span>
              <span>200 cm (Far)</span>
            </div>
          </div>

          {/* Quick telemetry parameters */}
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <div className="p-2.5 rounded-xl bg-cyber-900 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 block">Echo Pulse</span>
              <span className="text-xs font-mono font-bold text-cyan-400">{pulseEchoTime} µs</span>
            </div>
            <div className="p-2.5 rounded-xl bg-cyber-900 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 block">Zone Status</span>
              <span className={`text-xs font-mono font-bold ${isAlertActive ? 'text-neon-red' : 'text-neon-green'}`}>
                {isAlertActive ? '⚠️ PROXIMITY' : 'NORMAL'}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-cyber-900 border border-white/5">
              <span className="text-[10px] font-mono text-slate-400 block">Supabase Sync</span>
              <span className="text-xs font-mono font-bold text-emerald-400">200 OK</span>
            </div>
          </div>
        </div>

        {/* Right: Simulated 128x64 OLED Display (5 cols) */}
        <div className="md:col-span-5">
          <div className="rounded-xl bg-black border-2 border-slate-700 p-3 shadow-inner font-mono text-cyan-300 select-none">
            <div className="text-[10px] flex justify-between border-b border-cyan-800/60 pb-1 mb-2 text-cyan-500">
              <span>OLED SSD1306 [128x64]</span>
              <span>WIFI: CONNECTED</span>
            </div>
            <div className="text-center py-1">
              <div className="text-[11px] text-cyan-400 uppercase tracking-widest">SONAR TELEMETRY</div>
              <div className="text-2xl font-bold tracking-tight text-cyan-200 my-1">
                {distance} <span className="text-xs text-cyan-400">CM</span>
              </div>
            </div>
            {/* Visual Bar Gauge */}
            <div className="w-full bg-cyan-950/80 border border-cyan-700/60 h-3 rounded p-0.5 my-1 overflow-hidden">
              <div
                className={`h-full transition-all duration-150 ${
                  isAlertActive ? 'bg-red-500' : 'bg-cyan-400'
                }`}
                style={{ width: `${Math.min(100, (distance / 150) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-cyan-500 mt-1">
              <span>ZONE: {isAlertActive ? 'CRITICAL' : 'CLEAR'}</span>
              <span>BUZZER: {isAlertActive ? 'ACTIVE' : 'OFF'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
