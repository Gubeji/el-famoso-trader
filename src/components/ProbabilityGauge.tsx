
import { useState, useEffect } from 'react';

const ProbabilityGauge = () => {
  const [probability, setProbability] = useState(73);
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [direction, setDirection] = useState('LONG');

  useEffect(() => {
    // Simulate real-time probability updates
    const interval = setInterval(() => {
      setProbability(prev => {
        const change = (Math.random() - 0.5) * 10;
        return Math.max(0, Math.min(100, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColorByProbability = (prob: number) => {
    if (prob >= 80) return 'text-emerald-400';
    if (prob >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getGaugeColor = (prob: number) => {
    if (prob >= 80) return '#10b981';
    if (prob >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const circumference = 2 * Math.PI * 90;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (probability / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Probability Gauge */}
      <div className="relative">
        <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="rgb(51, 65, 85)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke={getGaugeColor(probability)}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{
              filter: `drop-shadow(0 0 10px ${getGaugeColor(probability)}30)`
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`text-4xl font-bold ${getColorByProbability(probability)}`}>
            {probability.toFixed(0)}%
          </span>
          <span className="text-slate-400 text-sm mt-1">Probabilidad</span>
        </div>
      </div>

      {/* Signal Info */}
      <div className="bg-slate-700/50 rounded-lg p-6 w-full max-w-md">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-slate-400 text-sm">Símbolo</p>
            <p className="text-white font-semibold">{symbol}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Dirección</p>
            <p className={`font-semibold ${direction === 'LONG' ? 'text-emerald-400' : 'text-red-400'}`}>
              {direction}
            </p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Timeframe</p>
            <p className="text-white font-semibold">1H</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm">Estrategia</p>
            <p className="text-white font-semibold">Scalping</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-600">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-sm">Tamaño sugerido</span>
            <span className="text-emerald-400 font-semibold">5.2% cartera</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Apalancamiento</span>
            <span className="text-yellow-400 font-semibold">7x</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbabilityGauge;
