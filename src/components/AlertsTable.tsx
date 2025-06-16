
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Clock, Target } from 'lucide-react';

const AlertsTable = () => {
  const alerts = [
    {
      id: 1,
      symbol: 'BTCUSDT',
      direction: 'LONG',
      probability: 87,
      price: '43,250.00',
      target: '45,100.00',
      stop: '42,000.00',
      timeframe: '1H',
      strategy: 'Breakout',
      status: 'active',
      created: '2 min ago'
    },
    {
      id: 2,
      symbol: 'ETHUSDT',
      direction: 'SHORT',
      probability: 76,
      price: '2,650.00',
      target: '2,520.00',
      stop: '2,720.00',
      timeframe: '4H',
      strategy: 'RSI Divergence',
      status: 'active',
      created: '15 min ago'
    },
    {
      id: 3,
      symbol: 'ADAUSDT',
      direction: 'LONG',
      probability: 82,
      price: '0.4850',
      target: '0.5200',
      stop: '0.4650',
      timeframe: '1H',
      strategy: 'EMA Cross',
      status: 'executed',
      created: '1 hour ago'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Activa</Badge>;
      case 'executed':
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Ejecutada</Badge>;
      default:
        return <Badge variant="secondary">Pendiente</Badge>;
    }
  };

  const getProbabilityColor = (prob: number) => {
    if (prob >= 80) return 'text-emerald-400';
    if (prob >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Card key={alert.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {alert.direction === 'LONG' ? (
                    <TrendingUp className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-400" />
                  )}
                  <span className="text-white font-semibold text-lg">{alert.symbol}</span>
                </div>
                <Badge variant="outline" className={`${alert.direction === 'LONG' ? 'text-emerald-400 border-emerald-400' : 'text-red-400 border-red-400'}`}>
                  {alert.direction}
                </Badge>
                {getStatusBadge(alert.status)}
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getProbabilityColor(alert.probability)}`}>
                  {alert.probability}%
                </div>
                <div className="text-slate-400 text-sm">Probabilidad</div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <p className="text-slate-400 text-sm">Precio Entrada</p>
                <p className="text-white font-semibold">${alert.price}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Target</p>
                <p className="text-emerald-400 font-semibold">${alert.target}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Stop Loss</p>
                <p className="text-red-400 font-semibold">${alert.stop}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Timeframe</p>
                <p className="text-white font-semibold">{alert.timeframe}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400 text-sm">{alert.created}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-slate-400" />
                  <span className="text-slate-400 text-sm">{alert.strategy}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                  Ver Gráfico
                </Button>
                {alert.status === 'active' && (
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    Ejecutar
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AlertsTable;
