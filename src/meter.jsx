import React, { useState, useEffect } from 'react';
import { Settings, History, User, Globe } from 'lucide-react';
export default function Component() {
  const [isRunning, setIsRunning] = useState(false);
  const [isMulti, setIsMulti] = useState(true);
  const [speed, setSpeed] = useState(0);
  const [progress, setProgress] = useState(0);
  const handleStart = () => {
    setIsRunning(true);
    setSpeed(0);
    setProgress(0);
  };
  useEffect(() => {
    if (isRunning) {
      const duration = 10000; // 10 seconds
      const interval = 100; // Update every 100ms
      const steps = duration / interval;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const newProgress = (step / steps) * 100;
        setProgress(newProgress);
        const maxSpeed = 100; // Max speed in Mbps
        const newSpeed = Math.min(maxSpeed, (newProgress / 100) * maxSpeed * (0.8 + Math.random() * 0.4));
        setSpeed(newSpeed);
        if (step >= steps) {
          clearInterval(timer);
          setIsRunning(false);
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isRunning]);
  return (
    <div className="min-h-screen bg-[#0A1229] text-white w-full">
      <header className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="text-xl font-bold">SPEEDTEST</span>
          </div>
          <div className="flex items-center space-x-8">
            <button className="hover:text-primary">Apps</button>
            <button className="hover:text-primary">Learn</button>
            <button className="hover:text-primary">Data</button>
            <button className="hover:text-primary">About</button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex flex-col items-center px-4 py-12">
        <div className="mb-8 flex space-x-8">
          <button className="flex items-center space-x-2 text-primary">
            <span>RESULTS</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-400 hover:text-primary">
            <Settings className="h-4 w-4" />
            <span>SETTINGS</span>
          </button>
        </div>
        <div className="relative mb-12">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-transparent bg-transparent text-4xl font-bold transition-all hover:text-primary disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(#0A1229, #0A1229) padding-box, linear-gradient(90deg, #00E5FF, #2979FF) border-box',
            }}
          >
            {isRunning ? (
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold">{speed.toFixed(2)}</span>
                <span className="text-sm">Mbps</span>
              </div>
            ) : (
              "GO"
            )}
            {isRunning && (
              <div className="absolute inset-0 rounded-full">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-700"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-primary"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="48"
                    cx="50"
                    cy="50"
                    style={{
                      strokeDasharray: `${2 * Math.PI * 48}`,
                      strokeDashoffset: `${2 * Math.PI * 48 * (1 - progress / 100)}`,
                      transformOrigin: '50% 50%',
                      transform: 'rotate(-90deg)',
                      transition: 'stroke-dashoffset 0.1s ease-in-out',
                    }}
                  />
                </svg>
              </div>
            )}
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="border-primary text-primary border px-4 py-2 rounded hover:bg-primary hover:text-white flex items-center">
            <User className="mr-2 h-4 w-4" />
            Create an Account
          </button>
          <button className="border-gray-700 text-gray-400 border px-4 py-2 rounded hover:bg-gray-700 hover:text-white flex items-center">
            <History className="mr-2 h-4 w-4" />
            Results History
          </button>
        </div>
      </main>
    </div>
  );
}