
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PortfolioOverview = () => {
  const portfolio = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: '0.245',
      value: '$10,587.50',
      percentage: 42.3,
      change: '+5.67%',
      changeType: 'positive'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      amount: '2.89',
      value: '$7,658.50',
      percentage: 30.6,
      change: '+2.34%',
      changeType: 'positive'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      amount: '8,450',
      value: '$4,097.25',
      percentage: 16.4,
      change: '-1.23%',
      changeType: 'negative'
    },
    {
      symbol: 'DOT',
      name: 'Polkadot',
      amount: '385',
      value: '$2,663.25',
      percentage: 10.7,
      change: '+8.91%',
      changeType: 'positive'
    }
  ];

  const totalValue = portfolio.reduce((sum, asset) => sum + parseFloat(asset.value.replace('$', '').replace(',', '')), 0);

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Resumen de Cartera</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-slate-400 text-sm">Valor Total</p>
              <p className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">PnL 24h</p>
              <p className="text-2xl font-bold text-emerald-400">+$234.56</p>
              <p className="text-emerald-400 text-sm">+1.87%</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">PnL Total</p>
              <p className="text-2xl font-bold text-emerald-400">+$2,847.89</p>
              <p className="text-emerald-400 text-sm">+29.34%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assets List */}
      <div className="grid gap-4">
        {portfolio.map((asset, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{asset.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{asset.name}</h3>
                    <p className="text-slate-400 text-sm">{asset.amount} {asset.symbol}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold text-lg">{asset.value}</p>
                  <div className="flex items-center space-x-1">
                    {asset.changeType === 'positive' ? (
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                    <span className={asset.changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'}>
                      {asset.change}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Porcentaje de cartera</span>
                  <span className="text-white">{asset.percentage}%</span>
                </div>
                <Progress 
                  value={asset.percentage} 
                  className="h-2"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;
